"use client"

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Vertel ons over jouw bedrijf',
    description: 'Typ of spreek in wat je doet, voor wie, en welk gevoel je wilt uitstralen. Geen technische kennis nodig — gewoon jouw verhaal.',
    visual: (
      <div className="rounded-xl border bg-background p-4 shadow-sm">
        <div className="flex gap-2 mb-3">
          <div className="h-2 w-2 rounded-full bg-red-400/60" />
          <div className="h-2 w-2 rounded-full bg-yellow-400/60" />
          <div className="h-2 w-2 rounded-full bg-green-400/60" />
        </div>
        <div className="rounded-lg border bg-muted/30 p-3 text-xs text-muted-foreground leading-relaxed">
          &ldquo;Ik ben een freelance fotograaf in Utrecht, gespecialiseerd in familiefoto&apos;s. Mijn stijl is warm en eerlijk — geen nep poses, wel echte momenten. Ik wil een merk dat direct vertrouwen geeft aan jonge gezinnen.&rdquo;
        </div>
        <div className="mt-3 flex justify-end">
          <div className="rounded-lg bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground flex items-center gap-1.5">
            <Sparkles className="h-3 w-3" />
            Maak mijn merk
          </div>
        </div>
      </div>
    ),
  },
  {
    number: '02',
    title: 'AI bouwt jouw merk in minuten',
    description: 'Terwijl jij koffie drinkt, maakt onze AI een compleet merkpakket: logo, kleuren, typografie, website en social media templates — allemaal in jouw stijl.',
    visual: (
      <div className="grid grid-cols-2 gap-2">
        <div className="rounded-xl border bg-background p-3 shadow-sm">
          <p className="text-[10px] text-muted-foreground uppercase tracking-wide mb-2">Logo</p>
          <div className="aspect-square rounded-lg bg-primary/10 flex items-center justify-center">
            <div className="h-8 w-8 rounded-md bg-primary/40 flex items-center justify-center">
              <span className="text-xs font-black text-primary-foreground">JF</span>
            </div>
          </div>
        </div>
        <div className="rounded-xl border bg-background p-3 shadow-sm">
          <p className="text-[10px] text-muted-foreground uppercase tracking-wide mb-2">Kleuren</p>
          <div className="flex gap-1.5 mt-2">
            <div className="h-8 w-8 rounded-md bg-amber-700/70" />
            <div className="h-8 w-8 rounded-md bg-amber-100" />
            <div className="h-8 w-8 rounded-md bg-stone-800" />
          </div>
        </div>
        <div className="col-span-2 rounded-xl border bg-background p-3 shadow-sm">
          <p className="text-[10px] text-muted-foreground uppercase tracking-wide mb-2">Website klaar</p>
          <div className="h-2 w-3/4 rounded bg-foreground/20 mb-1" />
          <div className="h-1.5 w-full rounded bg-muted/50 mb-1" />
          <div className="h-1.5 w-2/3 rounded bg-muted/50 mb-2" />
          <div className="h-5 w-16 rounded-md bg-primary/40" />
        </div>
      </div>
    ),
  },
  {
    number: '03',
    title: 'Klaar. Direct live.',
    description: 'Jouw merk is live op jouw eigen .biz.nl adres. Download alle bestanden, pas kleuren aan, voeg pagina\'s toe. Alles blijft van jou.',
    visual: (
      <div className="rounded-xl border bg-background p-4 shadow-sm space-y-3">
        {[
          { label: 'Logo pakket', size: 'SVG, PNG, PDF', status: 'Klaar' },
          { label: 'Website online', size: 'jan-fotografie.biz.nl', status: 'Live' },
          { label: 'Social templates', size: '12 bestanden', status: 'Klaar' },
          { label: 'Huisstijlgids', size: 'PDF download', status: 'Klaar' },
        ].map((item, i) => (
          <div key={i} className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium">{item.label}</p>
              <p className="text-[10px] text-muted-foreground">{item.size}</p>
            </div>
            <span className="text-[10px] font-semibold text-green-600 dark:text-green-400 bg-green-500/10 px-2 py-0.5 rounded-full">{item.status}</span>
          </div>
        ))}
      </div>
    ),
  },
]

export function HowItWorksSection() {
  return (
    <section id="features" className="py-24 sm:py-32 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-5">Zo werkt het</Badge>
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">
            Van idee naar merk in drie stappen
          </h2>
          <p className="text-xl text-muted-foreground max-w-xl mx-auto">
            Geen designkennis nodig. Geen weken wachten. Gewoon jouw verhaal vertellen en wij doen de rest.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-14">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col">
              <div className="mb-5">
                {step.visual}
              </div>
              <div className="text-4xl font-black text-primary/15 leading-none mb-3">{step.number}</div>
              <h3 className="text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="cursor-pointer gap-2" asChild>
            <Link href="/pricing">
              <Sparkles className="h-4 w-4" />
              Probeer het zelf — gratis
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <p className="text-sm text-muted-foreground mt-3">Geen creditcard nodig · Klaar in 5 minuten</p>
        </div>
      </div>
    </section>
  )
}
