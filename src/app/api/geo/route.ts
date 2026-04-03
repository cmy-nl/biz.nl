import { NextResponse } from 'next/server'
import { headers } from 'next/headers'

export async function GET() {
  const headersList = await headers()

  // Vercel injects these automatically based on visitor IP
  const city = headersList.get('x-vercel-ip-city')
  const region = headersList.get('x-vercel-ip-country-subdivision')
  const country = headersList.get('x-vercel-ip-country')

  // Debug: return all geo headers so we can see what Vercel provides
  const allHeaders: Record<string, string> = {}
  headersList.forEach((value, key) => {
    if (key.startsWith('x-vercel-ip')) {
      allHeaders[key] = value
    }
  })

  // Best available location: city > region > country
  const location = city
    ? decodeURIComponent(city)
    : region
      ? decodeURIComponent(region)
      : country || null

  return NextResponse.json({
    location,
    city: city ? decodeURIComponent(city) : null,
    region: region ? decodeURIComponent(region) : null,
    country,
    debug: allHeaders,
  })
}
