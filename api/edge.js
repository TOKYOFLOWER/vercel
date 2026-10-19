// Edge Function
export const config = { runtime: 'edge' };

export default function handler(request) {
  const h = request.headers;
  return Response.json({
    runtime: 'edge',
    country: h.get('x-vercel-ip-country') || 'unknown',
    region: h.get('x-vercel-ip-country-region') || 'unknown',
    city: decodeURIComponent(h.get('x-vercel-ip-city') || 'unknown'),
    userAgent: h.get('user-agent'),
  });
}
