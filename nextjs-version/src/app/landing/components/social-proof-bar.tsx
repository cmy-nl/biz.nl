"use client"

import { Star } from 'lucide-react'

const sectors = [
  'Koffiebar', 'Fotograaf', 'Personal trainer', 'Webshop', 'Kapper',
  'Installatiebedrijf', 'Coach', 'Restaurant', 'Makelaar', 'Therapeut',
  'Ontwerper', 'Aannemer', 'Bakkerij', 'Advocaat', 'Tuinier',
]

export function SocialProofBar() {
  return (
    <section className="border-y bg-muted/30 py-5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 shrink-0">
            <div className="flex items-center gap-0.5">
              {[1,2,3,4,5].map(i => (
                <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <div className="text-sm">
              <span className="font-semibold">4.8/5</span>
              <span className="text-muted-foreground"> · 2.400+ Nederlandse merken gebouwd</span>
            </div>
          </div>
          <div className="relative overflow-hidden flex-1 max-w-xl">
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-muted/30 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-muted/30 to-transparent z-10 pointer-events-none" />
            <div className="flex animate-logo-scroll gap-3">
              {[...sectors, ...sectors].map((sector, i) => (
                <span key={i} className="shrink-0 rounded-full border bg-background px-3 py-1 text-xs text-muted-foreground whitespace-nowrap">
                  {sector}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
