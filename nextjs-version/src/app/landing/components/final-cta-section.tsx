"use client"

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Sparkles, ArrowRight } from 'lucide-react'

const avatarInitials = ['MB', 'DH', 'SV', 'PJ', 'LB', 'TL']

export function FinalCTASection() {
  return (
    <section className="py-24 bg-foreground text-background overflow-hidden relative">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-primary blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        {/* Social proof avatars */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="flex -space-x-2">
            {avatarInitials.map((init, i) => (
              <div key={i} className="h-9 w-9 rounded-full bg-white/20 border-2 border-foreground flex items-center justify-center text-[10px] font-bold text-background/80">
                {init}
              </div>
            ))}
          </div>
          <p className="text-sm text-background/60 ml-1">2.400+ ondernemers gingen je voor</p>
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 max-w-3xl mx-auto leading-tight">
          Jouw merk begint vandaag
        </h2>

        <p className="text-xl text-background/60 max-w-xl mx-auto mb-10 leading-relaxed">
          Elke dag dat je wacht is een dag dat klanten langs je heen lopen. Zet die stap nu — je merk staat over vijf minuten online.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button size="lg" variant="secondary" className="cursor-pointer gap-2 px-8 text-base font-semibold" asChild>
            <Link href="/pricing">
              <Sparkles className="h-5 w-5" />
              Begin gratis vandaag
            </Link>
          </Button>
          <Button size="lg" className="cursor-pointer px-8 text-base bg-white/10 text-white border border-white/30 hover:bg-white/20" asChild>
            <Link href="/pricing">
              Bekijk plannen
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-background/40">
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400 inline-block" />
            Geen creditcard nodig
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-background/20 inline-block" />
            14 dagen geld-terug-garantie
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-background/20 inline-block" />
            Gratis .biz.nl domein
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-background/20 inline-block" />
            Op elk moment opzegbaar
          </span>
        </div>
      </div>
    </section>
  )
}
