'use client';

import { useRef, useState, type SubmitEvent } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { school } from '@/lib/school';

export function ContactForm({
  directSubmission,
}: {
  directSubmission: boolean;
}) {
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'draft'>(
    'idle',
  );
  const [error, setError] = useState('');
  const [copyStatus, setCopyStatus] = useState('');
  const requestId = useRef<string | null>(null);
  const locked = useRef(false);
  const success = useRef<HTMLHeadingElement>(null);
  const body = `Name: ${values.name.trim()}\nEmail: ${values.email.trim()}\nPhone: ${values.phone.trim() || 'Not provided'}\n\n${values.message.trim()}`;
  const emailHref = `mailto:${school.email}?subject=${encodeURIComponent('Apex contact enquiry')}&body=${encodeURIComponent(body)}`;

  function update(field: keyof typeof values, value: string) {
    setValues((previous) => ({ ...previous, [field]: value }));
    requestId.current = null;
    setError('');
    setCopyStatus('');
    setStatus('idle');
  }

  async function submit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    if (locked.current || website) return;
    if (!values.name.trim() || !values.message.trim() || !consent) {
      setError(
        'Please enter your name and message, and agree to be contacted.',
      );
      return;
    }
    setError('');
    if (!directSubmission) {
      setStatus('draft');
      window.location.href = emailHref;
      return;
    }
    locked.current = true;
    setStatus('sending');
    try {
      requestId.current ??= crypto.randomUUID();
      const response = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...values,
          kind: 'contact',
          year: '',
          timing: '',
          consent,
          website,
          requestId: requestId.current,
        }),
        signal: AbortSignal.timeout(15000),
      });
      const result = await response.json();
      if (
        !response.ok ||
        !result ||
        typeof result !== 'object' ||
        !('accepted' in result) ||
        result.accepted !== true
      )
        throw new Error('Delivery failed');
      setStatus('sent');
      requestAnimationFrame(() => success.current?.focus());
    } catch {
      setStatus('idle');
      setError(
        'Your message could not be sent. Please try again, open it in your email app below or call the school.',
      );
    } finally {
      locked.current = false;
    }
  }

  async function copyMessage() {
    try {
      await navigator.clipboard.writeText(
        `To: ${school.email}\nSubject: Apex contact enquiry\n\n${body}`,
      );
      setCopyStatus('Message copied. Paste it into an email to the school.');
    } catch {
      setCopyStatus(
        'Could not copy automatically. You can select and copy your message from the form.',
      );
    }
  }

  return (
    <div className="contact-form-panel">
      {status === 'sent' ? (
        <div className="contact-success">
          <h2 ref={success} tabIndex={-1}>
            Thank you for getting in touch.
          </h2>
          <p>Your message has been sent to the school.</p>
        </div>
      ) : (
        <form
          onSubmit={submit}
          aria-labelledby="contact-form-heading"
          aria-busy={status === 'sending'}
        >
          <h2 id="contact-form-heading">Your message</h2>
          <p className="contact-form-note">
            {directSubmission
              ? 'Send your enquiry to the school team.'
              : 'This form opens your email app with your message ready to send.'}
          </p>
          <fieldset disabled={status === 'sending'}>
            <legend className="sr-only">
              Your contact details and message
            </legend>
            <div className="contact-fields">
              <label htmlFor="contact-name">
                Name
                <input
                  id="contact-name"
                  name="name"
                  autoComplete="name"
                  required
                  maxLength={100}
                  value={values.name}
                  onChange={(event) => update('name', event.target.value)}
                />
              </label>
              <label htmlFor="contact-email">
                Email
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  maxLength={150}
                  value={values.email}
                  onChange={(event) => update('email', event.target.value)}
                />
              </label>
              <label className="contact-full" htmlFor="contact-phone">
                Phone <span>(optional)</span>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  maxLength={30}
                  value={values.phone}
                  onChange={(event) => update('phone', event.target.value)}
                />
              </label>
              <label className="contact-full" htmlFor="contact-message">
                Message
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  maxLength={800}
                  value={values.message}
                  onChange={(event) => update('message', event.target.value)}
                />
              </label>
            </div>
            <label className="enquiry-trap" aria-hidden="true">
              Leave this blank
              <input
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={website}
                onChange={(event) => setWebsite(event.target.value)}
              />
            </label>
            <label className="enquiry-consent">
              <input
                type="checkbox"
                required
                checked={consent}
                onChange={(event) => setConsent(event.target.checked)}
              />
              <span>I agree to be contacted by Apex about my enquiry.</span>
            </label>
            {error && (
              <p className="enquiry-error" role="alert">
                {error}
              </p>
            )}
            <button className="apex-cta" type="submit">
              {status === 'sending'
                ? 'Sending…'
                : directSubmission
                  ? 'Send message'
                  : 'Open email app'}
              <ArrowUpRight size={18} aria-hidden="true" />
            </button>
          </fieldset>
          {(status === 'draft' || error) && (
            <div className="contact-fallback">
              {status === 'draft' && (
                <output>
                  Your message is ready. Send it from your email app to complete
                  your enquiry.
                </output>
              )}
              <a className="contact-text-link" href={emailHref}>
                Open email app
              </a>
              <button
                className="contact-text-link"
                type="button"
                onClick={copyMessage}
              >
                Copy message
              </button>
              <output>{copyStatus}</output>
            </div>
          )}
        </form>
      )}
    </div>
  );
}
