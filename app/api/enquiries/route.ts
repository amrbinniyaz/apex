import {
  deliverEnquiry,
  deliveryConfigured,
  parseEnquiry,
} from '@/lib/enquiry';

const MAX_BYTES = 8192;
const json = (data: object, status: number) =>
  Response.json(data, {
    status,
    headers: {
      'Cache-Control': 'no-store',
      'X-Content-Type-Options': 'nosniff',
    },
  });

export async function POST(request: Request) {
  if (request.headers.get('origin') !== new URL(request.url).origin) {
    return json(
      { error: 'Please submit your enquiry from this website.' },
      403,
    );
  }
  if (
    !request.headers
      .get('content-type')
      ?.toLowerCase()
      .startsWith('application/json')
  ) {
    return json({ error: 'Please submit a valid enquiry.' }, 415);
  }
  const reader = request.body?.getReader();
  if (!reader) return json({ error: 'Please complete your enquiry.' }, 400);
  let body = '';
  let bytes = 0;
  const decoder = new TextDecoder();
  try {
    while (true) {
      const chunk = await reader.read();
      if (chunk.done) break;
      bytes += chunk.value.byteLength;
      if (bytes > MAX_BYTES) {
        await reader.cancel();
        return json(
          { error: 'Your enquiry is too long. Please shorten it.' },
          413,
        );
      }
      body += decoder.decode(chunk.value, { stream: true });
    }
    body += decoder.decode();
  } catch {
    return json(
      { error: 'Your enquiry could not be read. Please try again.' },
      400,
    );
  } finally {
    reader.releaseLock();
  }
  let input: unknown;
  try {
    input = JSON.parse(body);
  } catch {
    return json({ error: 'Please submit a valid enquiry.' }, 400);
  }
  const enquiry = parseEnquiry(input);
  if (!enquiry)
    return json(
      { error: 'Please check your details and agree to be contacted.' },
      400,
    );
  const config = {
    apiKey: process.env.RESEND_API_KEY,
    from: process.env.ENQUIRY_FROM_EMAIL,
    to: process.env.ENQUIRY_TO_EMAIL,
  };
  if (!deliveryConfigured(config)) {
    return json(
      {
        error:
          'Online sending is not available yet. Please use the email option below or call the school.',
      },
      503,
    );
  }
  try {
    await deliverEnquiry(enquiry, config);
    return json({ accepted: true }, 200);
  } catch {
    return json(
      {
        error:
          'We could not confirm sending. Please retry or use the email option below.',
      },
      502,
    );
  }
}
