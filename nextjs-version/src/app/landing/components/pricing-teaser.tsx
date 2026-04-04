"use client"

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, Sparkles, Check } from 'lucide-react'

export function PricingTeaser() {
  return (
    <section id="pricing" className="py-24 sm:py-32 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-5">Betaalbaar voor iedereen</Badge>
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">
              Vanaf{' '}
              <span className="text-primary">€6,95 per maand</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-xl mx-auto">
              Minder dan een gemiddelde lunch. En je hebt er een compleet professioneel merk voor terug.
            </p>
          </div>

          {/* Simple two-option cards */}
          <div className="grid sm:grid-cols-2 gap-5 mb-10">
            {/* Start */}
            <div className="rounded-2xl border bg-card p-7">
              <p className="text-sm font-medium text-muted-foreground mb-1">Perfect voor starters</p>
              <p className="text-3xl font-extrabold mb-1">€6,95 <span className="text-base font-normal text-muted-foreground">/maand</span></p>
              <p className="text-sm text-muted-foreground mb-6">1 merk · 50 AI-acties per maand</p>
              <ul className="space-y-2.5 mb-7">
                {['Professioneel logo', 'Website op jouw naam', 'Social media afbeeldingen', 'Gratis .biz.nl domein'].map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary shrink-0" strokeWidth={2.5} />
                    {f}
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full cursor-pointer" asChild>
                <Link href="/pricing">Starter kiezen</Link>
              </Button>
            </div>

            {/* Most popular */}
            <div className="rounded-2xl border-2 border-primary bg-card p-7 relative shadow-lg shadow-primary/10">
              <Badge className="absolute -top-3 left-6 text-xs gap-1">
                <Sparkles className="h-3 w-3" />
                Meest gekozen
              </Badge>
              <p className="text-sm font-medium text-muted-foreground mb-1">Voor actieve ondernemers</p>
              <p className="text-3xl font-extrabold mb-1">€14,95 <span className="text-base font-normal text-muted-foreground">/maand</span></p>
              <p className="text-sm text-muted-foreground mb-6">Tot 3 merken · 150 AI-acties per maand</p>
              <ul className="space-y-2.5 mb-7">
                {['Alles van Starter', 'Blogposts laten schrijven', 'Flyers en visitekaartjes', 'Merkboek als PDF', '10 social posts tegelijk'].map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary shrink-0" strokeWidth={2.5} />
                    {f}
                  </li>
                ))}
              </ul>
              <Button className="w-full cursor-pointer gap-2" asChild>
                <Link href="/pricing">
                  Growth kiezen
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Link to full pricing */}
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              Groter bureau of meerdere klanten?{' '}
              <Link href="/pricing" className="text-primary hover:underline font-medium">
                Bekijk alle plannen →
              </Link>
            </p>
            <p className="text-xs text-muted-foreground">
              Alle plannen inclusief gratis .biz.nl domein · 14 dagen geld-terug-garantie · Geen verborgen kosten
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
