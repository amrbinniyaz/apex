'use client';

import { useEffect, useRef, useState, type FormEvent } from 'react';
import { ArrowLeft, ArrowRight, Check, Copy, Mail } from 'lucide-react';

export function EnquiryForm({ kind }: { kind: 'visit' | 'apply' }) {
  const visiting = kind === 'visit';
  const [values, setValues] = useState({ name: '', email: '', phone: '', year: '', timing: '', message: '' });
  const [step, setStep] = useState(1);
  const review = step === 3;
  const [copyStatus, setCopyStatus] = useState('');
  const heading = useRef<HTMLHeadingElement>(null);
  const nameField = useRef<HTMLInputElement>(null);
  const didMount = useRef(false);
  useEffect(() => {
    if (didMount.current) heading.current?.focus();
    didMount.current = true;
  }, [step]);
  const update = (key: keyof typeof values, value: string) => { setValues(previous => ({ ...previous, [key]: value })); setCopyStatus(''); };
  const subject = visiting ? 'School visit enquiry — Apex International School' : 'Admissions enquiry — Apex International School';
  const rows = [
    ['Parent / guardian', values.name], ['Email', values.email], ['Phone', values.phone || 'Not provided'],
    ['Class / year group of interest', values.year],
    [visiting ? 'Preferred visit timing' : 'Preferred start', values.timing || 'Please advise'],
    ['Message', values.message || 'I would love to learn more.'],
  ];
  const message = `Hello Apex team,\n\n${visiting ? 'I would like to arrange a visit to Apex International School.' : 'I would like to enquire about admission to Apex International School.'}\n\n${rows.map(([label, value]) => `${label}: ${value}`).join('\n')}\n\nThank you,\n${values.name}`;
  const emailHref = `mailto:info@apexinternationalschool.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setStep(current => Math.min(3, current + 1)); };

  return <div className="enquiry-paper">
    <ol className="enquiry-progress enquiry-progress-three" aria-label={`Step ${step} of 3`}>
      {['Your details', 'Your plans', 'Review'].map((label, index) => <li key={label} className={step === index + 1 ? 'current' : step > index + 1 ? 'complete' : ''} aria-current={step === index + 1 ? 'step' : undefined}><b>{step > index + 1 ? <Check size={13} /> : `0${index + 1}`}</b><span>{label}</span></li>)}
    </ol>
    {review ? <div className="enquiry-review">
      <p className="ad-hand">Your enquiry</p>
      <h2 ref={heading} tabIndex={-1}>Review your details.</h2>
      <p>Check your details, then open the prepared message in your email app to send it to our school.</p>
      <dl>{rows.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
      <a className="ad-button apex-cta" href={emailHref}>Open email app <Mail size={19} /></a>
      <div className="enquiry-review-actions"><button type="button" onClick={() => setStep(1)}><ArrowLeft size={17} /> Edit details</button><button type="button" onClick={async () => {
        try { await navigator.clipboard.writeText(message); setCopyStatus('Message copied. Paste it into an email to info@apexinternationalschool.org.'); }
        catch { setCopyStatus('Copy is unavailable here. You can select your details above or use Open email app.'); }
      }}><Copy size={16} /> Copy message</button></div>
      <p className="form-note" role="status">{copyStatus || 'Nothing has been sent yet. Your enquiry is sent when you send the email.'}</p>
    </div> : <form key={step} onSubmit={submit}>
      <p className="ad-hand">{visiting ? 'Visit enquiry' : 'Admissions enquiry'}</p>
      <h2 ref={heading} tabIndex={-1}>{step === 1 ? 'First, a little about you.' : visiting ? 'Make the visit yours.' : 'Tell us about your plans.'}</h2>
      <p className="enquiry-intro">{step === 1 ? 'How can the school get in touch with you?' : visiting ? 'Share what you would like to explore, and a time that works for your family.' : 'Let us know the class you’re considering and what you’d like to ask.'}</p>
      <p className="required-note">Fields marked * are required.</p>
      <div className="enquiry-fields">
        {step === 1 ? <>
        <label className="field-wide">Parent / guardian name *<input ref={nameField} name="name" autoComplete="name" required pattern=".*\S.*" maxLength={100} value={values.name} onChange={e => update('name', e.target.value)} placeholder="Your full name" /></label>
        <label>Email address *<input name="email" type="email" autoComplete="email" required maxLength={150} value={values.email} onChange={e => update('email', e.target.value)} placeholder="you@example.com" /></label>
        <label>Phone <small>(optional)</small><input name="phone" type="tel" autoComplete="tel" maxLength={30} value={values.phone} onChange={e => update('phone', e.target.value)} placeholder="With country code" /></label>
        </> : <>
        <label>Class / year group *<input name="year" required pattern=".*\S.*" maxLength={60} value={values.year} onChange={e => update('year', e.target.value)} placeholder="e.g. Class 3, or not sure yet" /></label>
        <label>{visiting ? 'When would you like to visit?' : 'When would you like to start?'}<input name="timing" maxLength={80} value={values.timing} onChange={e => update('timing', e.target.value)} placeholder={visiting ? 'e.g. A morning next month' : 'e.g. Next academic year'} /></label>
        <label className="field-wide">Anything you’d like us to know? <small>(optional)</small><textarea name="message" rows={3} maxLength={800} value={values.message} onChange={e => update('message', e.target.value)} placeholder={visiting ? 'What would you like to explore or ask about?' : 'Tell us what you’re looking for, or ask us a question.'} /></label>
        </>}
      </div>
      <button className="ad-button apex-cta" type="submit">{step === 1 ? 'Continue to your plans' : 'Review my enquiry'} <ArrowRight size={20} /></button>
      {step === 2 && <div className="enquiry-review-actions"><button type="button" onClick={() => setStep(1)}><ArrowLeft size={17} /> Back to your details</button></div>}
      <p className="form-note">This prepares an email to the school. {visiting ? 'Your visit date will need to be confirmed.' : 'This is an enquiry, not a completed application.'}</p>
    </form>}
  </div>;
}
