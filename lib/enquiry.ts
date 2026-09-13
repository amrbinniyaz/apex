export type Enquiry = {
  kind: 'visit' | 'apply';
  name: string;
  email: string;
  phone: string;
  year: string;
  timing: string;
  message: string;
  consent: true;
  requestId: string;
};

type DeliveryConfig = { apiKey?: string; from?: string; to?: string };
const limits = {
  name: 100,
  email: 150,
  phone: 30,
  year: 60,
  timing: 80,
  message: 800,
};

export function parseEnquiry(input: unknown): Enquiry | null {
  if (!input || typeof input !== 'object' || Array.isArray(input)) return null;
  const value = input as Record<string, unknown>;
  if (value.kind !== 'visit' && value.kind !== 'apply') return null;
  if (
    value.consent !== true ||
    (value.website !== undefined && value.website !== '')
  )
    return null;
  if (
    typeof value.requestId !== 'string' ||
    !/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
      value.requestId,
    )
  )
    return null;
  for (const [key, max] of Object.entries(limits)) {
    if (
      typeof value[key] !== 'string' ||
      value[key].length > max ||
      Array.from(value[key]).some((character) => {
        const code = character.charCodeAt(0);
        return code < 32 && ![9, 10, 13].includes(code);
      })
    )
      return null;
  }
  const fields = Object.fromEntries(
    Object.keys(limits).map((key) => [key, (value[key] as string).trim()]),
  ) as Pick<Enquiry, keyof typeof limits>;
  if (
    !fields.name ||
    !fields.year ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)
  )
    return null;
  return {
    ...fields,
    kind: value.kind,
    consent: true,
    requestId: value.requestId,
  };
}

export function deliveryConfigured(config: DeliveryConfig) {
  return Boolean(config.apiKey && config.from && config.to);
}

export async function deliverEnquiry(
  enquiry: Enquiry,
  config: DeliveryConfig,
  send: typeof fetch = fetch,
) {
  if (!deliveryConfigured(config))
    throw new Error('Delivery is not configured');
  const result = await send('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${config.apiKey}`,
      'Content-Type': 'application/json',
      'Idempotency-Key': `enquiry-${enquiry.requestId}`,
    },
    body: JSON.stringify({
      from: config.from,
      to: [config.to],
      reply_to: enquiry.email,
      subject:
        enquiry.kind === 'visit'
          ? 'Apex school visit enquiry'
          : 'Apex admissions enquiry',
      text: [
        `Parent / guardian: ${enquiry.name}`,
        `Email: ${enquiry.email}`,
        `Phone: ${enquiry.phone || 'Not provided'}`,
        `Class / year group: ${enquiry.year}`,
        `Preferred ${enquiry.kind === 'visit' ? 'visit timing' : 'start'}: ${enquiry.timing || 'Please advise'}`,
        `Message: ${enquiry.message || 'I would like to learn more.'}`,
        'The parent / guardian agreed to be contacted about this enquiry.',
      ].join('\n\n'),
    }),
    signal: AbortSignal.timeout(10000),
  });
  if (!result.ok) throw new Error('Email provider did not accept the enquiry');
  const receipt: unknown = await result.json();
  if (
    !receipt ||
    typeof receipt !== 'object' ||
    !('id' in receipt) ||
    typeof receipt.id !== 'string' ||
    !receipt.id
  )
    throw new Error('Email provider returned no receipt');
  return receipt.id;
}
