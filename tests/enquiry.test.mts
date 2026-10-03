import test from 'node:test';
import assert from 'node:assert/strict';
import { parseEnquiry, deliverEnquiry } from '../lib/enquiry.ts';

const valid = {
  kind: 'visit',
  name: 'Parent Example',
  email: 'parent@example.test',
  phone: '',
  year: 'Class 3',
  timing: '',
  message: '',
  consent: true,
  website: '',
  requestId: '30bba740-8af3-4bb3-93ce-738860269507',
};

await test('validates required details, contact consent, limits and the spam trap', () => {
  assert.equal(parseEnquiry(valid)?.name, valid.name);
  for (const invalid of [
    null,
    [],
    {},
    { ...valid, name: '  ' },
    { ...valid, email: 'invalid' },
    { ...valid, email: 'p@example.test\nBcc: other@example.test' },
    { ...valid, consent: false },
    { ...valid, website: 'spam' },
    { ...valid, message: 'x'.repeat(801) },
    { ...valid, kind: 'unknown' },
    { ...valid, requestId: 'invalid' },
  ]) {
    assert.equal(parseEnquiry(invalid), null);
  }
});

await test('sends only to the configured school inbox and preserves the retry key', async () => {
  const enquiry = parseEnquiry(valid)!;
  let calls = 0;
  const fakeFetch: typeof fetch = async (url, options) => {
    calls++;
    assert.equal(url, 'https://api.resend.com/emails');
    assert.ok(typeof options?.body === 'string');
    const payload = JSON.parse(options.body);
    assert.deepEqual(payload.to, ['school@example.test']);
    assert.equal(payload.reply_to, valid.email);
    assert.equal(
      new Headers(options?.headers).get('Idempotency-Key'),
      `enquiry-${valid.requestId}`,
    );
    assert.equal(payload.html, undefined);
    return Response.json({ id: 'test-receipt' });
  };
  const config = {
    apiKey: 'test-key',
    from: 'sender@example.test',
    to: 'school@example.test',
  };
  assert.equal(
    await deliverEnquiry(enquiry, config, fakeFetch),
    'test-receipt',
  );
  assert.equal(calls, 1);
  await assert.rejects(deliverEnquiry(enquiry, {}, fakeFetch));
  assert.equal(calls, 1);
});

await test('never treats a provider failure or malformed receipt as success', async () => {
  const enquiry = parseEnquiry(valid)!;
  const config = {
    apiKey: 'test-key',
    from: 'sender@example.test',
    to: 'school@example.test',
  };
  for (const response of [
    new Response('Failed', { status: 500 }),
    Response.json({}),
  ]) {
    await assert.rejects(deliverEnquiry(enquiry, config, async () => response));
  }
  await assert.rejects(
    deliverEnquiry(enquiry, config, async () => {
      throw new Error('Network failed');
    }),
  );
});

await test('contact enquiries require a message but not a class or visit timing', () => {
  const contact = {
    ...valid,
    kind: 'contact',
    year: '',
    timing: '',
    message: '  Please tell me about school transport.  ',
  };
  assert.equal(
    parseEnquiry(contact)?.message,
    'Please tell me about school transport.',
  );
  assert.equal(parseEnquiry({ ...contact, message: '  ' }), null);
  assert.equal(parseEnquiry({ ...contact, consent: false }), null);
  assert.equal(parseEnquiry({ ...contact, message: 'x'.repeat(801) }), null);
  assert.equal(parseEnquiry({ ...valid, year: '' }), null);
  assert.equal(parseEnquiry({ ...valid, kind: 'apply', year: '' }), null);
});

await test('contact emails use general enquiry wording and retain the actual message', async () => {
  const enquiry = parseEnquiry({
    ...valid,
    kind: 'contact',
    year: '',
    message: 'A question about transport.',
  })!;
  const receipt = await deliverEnquiry(
    enquiry,
    {
      apiKey: 'test-key',
      from: 'sender@example.test',
      to: 'school@example.test',
    },
    async (_url, options) => {
      assert.ok(typeof options?.body === 'string');
      const payload = JSON.parse(options.body);
      assert.equal(payload.subject, 'Apex contact enquiry');
      assert.match(payload.text, /Name: Parent Example/);
      assert.match(payload.text, /A question about transport\./);
      assert.doesNotMatch(
        payload.text,
        /Class \/ year group|Preferred start|Parent \/ guardian/,
      );
      assert.equal(payload.reply_to, valid.email);
      assert.deepEqual(payload.to, ['school@example.test']);
      return Response.json({ id: 'contact-receipt' });
    },
  );
  assert.equal(receipt, 'contact-receipt');
});
