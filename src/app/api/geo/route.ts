import { NextResponse } from 'next/server'
import { headers } from 'next/headers'

export async function GET() {
  const headersList = await headers()
  
  const city = headersList.get('x-vercel-ip-city')
  const region = headersList.get('x-vercel-ip-country-subdivision')
  const country = headersList.get('x-vercel-ip-country')

  return NextResponse.json({ city, region, country })
}
