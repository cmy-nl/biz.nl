import { NextResponse } from 'next/server'
import { headers } from 'next/headers'

// Dutch province codes to full names
const nlRegions: Record<string, string> = {
  DR: 'Drenthe',
  FL: 'Flevoland',
  FR: 'Friesland',
  GE: 'Gelderland',
  GR: 'Groningen',
  LI: 'Limburg',
  NB: 'Noord-Brabant',
  NH: 'Noord-Holland',
  OV: 'Overijssel',
  UT: 'Utrecht',
  ZE: 'Zeeland',
  ZH: 'Zuid-Holland',
}

export async function GET() {
  const headersList = await headers()

  const rawCity = headersList.get('x-vercel-ip-city')
  const rawRegion = headersList.get('x-vercel-ip-country-subdivision')
  const country = headersList.get('x-vercel-ip-country')

  const city = rawCity ? decodeURIComponent(rawCity) : null

  // Region codes come as "NL-ZH" or just "ZH"
  let region: string | null = null
  if (rawRegion) {
    const code = decodeURIComponent(rawRegion).replace(/^[A-Z]+-/, '')
    region = nlRegions[code] ?? null
  }

  // Priority: city > region name > country > null
  const location = city ?? region ?? country ?? null

  return NextResponse.json({ location, city, region, country })
}
