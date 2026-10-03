import test from 'node:test';
import assert from 'node:assert/strict';
import { runInNewContext } from 'node:vm';
import { introBootstrap } from '../lib/intro-bootstrap.ts';

function visit({
  storage = new Map<string, string>(),
  pathname = '/',
  hash = '',
  reducedMotion = false,
  navigationType = 'navigate',
  storageBlocked = false,
} = {}) {
  const attributes = new Map<string, string>();
  const timers: { callback: () => void; delay: number }[] = [];
  const events: string[] = [];
  const listeners = new Map<string, () => void>();
  const window = {
    location: { pathname, hash },
    localStorage: {
      getItem(key: string) {
        if (storageBlocked) throw new Error('Storage unavailable');
        return storage.get(key) ?? null;
      },
      setItem(key: string, value: string) {
        storage.set(key, value);
      },
    },
    matchMedia: () => ({ matches: reducedMotion }),
    performance: { getEntriesByType: () => [{ type: navigationType }] },
    setTimeout: (callback: () => void, delay: number) =>
      timers.push({ callback, delay }),
    dispatchEvent: (event: Event) => events.push(event.type),
    addEventListener: (type: string, callback: () => void) =>
      listeners.set(type, callback),
  };
  runInNewContext(introBootstrap, {
    window,
    document: {
      documentElement: {
        setAttribute: (key: string, value: string) =>
          attributes.set(key, value),
        removeAttribute: (key: string) => attributes.delete(key),
      },
    },
    Event,
  });
  return {
    listeners,
    active: () => attributes.get('data-apex-intro') === 'active',
    storage,
    timers,
    events,
  };
}

await test('first visit enables the intro synchronously, before React or page content', () => {
  const first = visit();
  assert.equal(first.active(), true);
  assert.equal(first.storage.get('apex-intro-seen'), '1');
  assert.equal(visit({ storage: first.storage }).active(), false);
});

await test('return visits, deep links, reduced motion and history restores skip the intro', () => {
  for (const options of [
    { storage: new Map([['apex-intro-seen', '1']]) },
    { hash: '#our-school' },
    { reducedMotion: true },
    { navigationType: 'back_forward' },
    { storageBlocked: true },
  ]) {
    const result = visit(options);
    assert.equal(result.active(), false);
    assert.equal(result.timers.length, 0);
  }
});

await test('content pages do not consume the first homepage intro', () => {
  const content = visit({ pathname: '/contact-us' });
  assert.equal(content.active(), false);
  assert.equal(content.storage.size, 0);
  assert.equal(visit({ storage: content.storage }).active(), true);
});

await test('a failed or delayed client bundle cannot leave the intro covering the page', () => {
  const result = visit();
  assert.equal(result.timers.length, 1);
  assert.equal(result.timers[0].delay, 4500);
  result.timers[0].callback();
  assert.equal(result.active(), false);
  assert.deepEqual(result.events, ['apex:intro-end']);
});

await test('leaving mid-intro clears the overlay before a back-forward cache restore', () => {
  const result = visit();
  result.listeners.get('pagehide')?.();
  assert.equal(result.active(), false);
  assert.deepEqual(result.events, ['apex:intro-end']);
});
