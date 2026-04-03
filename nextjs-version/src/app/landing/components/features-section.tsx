"use client"

import { Sparkles, Globe, Palette, FileImage, Share2, Printer, ArrowRight, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const mainFeatures = [
  {
    icon: Sparkles,
    title: 'AI merkgenerator',
    description: 'Beschrijf jouw bedrijf en onze AI maakt een volledig merkpakket op maat.'
  },
  {
    icon: Globe,
    title: 'Website inbegrepen',
    description: 'Direct een professionele website op jouw eigen .biz.nl domein.'
  },
  {
    icon: Palette,
    title: 'Logo & huisstijl',
    description: 'Uniek logo, kleurenpalet en typografie die bij jouw merk passen.'
  },
  {
    icon: Share2,
    title: 'Social media assets',
    description: 'Kant-en-klare afbeeldingen voor Instagram, LinkedIn, Facebook en meer.'
  }
]

const steps = [
  {
    number: '01',
    title: 'Beschrijf jouw bedrijf',
    description: 'Vertel ons wie je bent, wat je doet en voor wie. Hoe meer details, hoe beter het resultaat.'
  },
  {
    number: '02',
    title: 'AI bouwt jouw merk',
    description: 'Onze AI genereert binnen enkele minuten jouw complete merkidentiteit op basis van jouw input.'
  },
  {
    number: '03',
    title: 'Pas aan en download',
    description: 'Verfijn kleuren, fonts en stijl tot het perfect is. Download alles of publiceer direct online.'
  }
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-20">
          <Badge variant="outline" className="mb-4">Hoe het werkt</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Van idee naar professioneel merk in drie stappen
          </h2>
          <p className="text-lg text-muted-foreground">
            Geen designkennis nodig. Geen dure bureaus. Gewoon jouw verhaal vertellen en wij doen de rest.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 mb-24">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="absolute top-8 left-full w-full h-px bg-border hidden lg:block -translate-y-px z-0" style={{width: 'calc(100% - 2rem)', left: 'calc(50% + 2rem)'}} />
              )}
              <div className="relative bg-card border rounded-2xl p-8 hover:shadow-md transition-shadow">
                <div className="text-5xl font-black text-primary/10 mb-4 leading-none">{step.number}</div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* What's included */}
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <Badge variant="outline" className="mb-4">Alles inbegrepen</Badge>
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl mb-4">
                Alles wat jouw bedrijf nodig heeft om professioneel over te komen
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Geen losse tools meer. Geen gedoe met meerdere abonnementen.
                Biz.nl geeft je alles in één pakket — van logo tot websitehosting.
              </p>
            </div>

            <ul className="grid gap-4 sm:grid-cols-2">
              {mainFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 p-4 rounded-xl border bg-card hover:shadow-sm transition-shadow">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">{feature.title}</h4>
                    <p className="text-muted-foreground text-xs mt-0.5 leading-relaxed">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="cursor-pointer gap-2">
                <Sparkles className="h-4 w-4" />
                Gratis beginnen
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="cursor-pointer">
                Alle functies bekijken
              </Button>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl" />
            <div className="relative rounded-3xl border bg-card/50 backdrop-blur-sm p-8 space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-xl bg-foreground flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-background" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Jouw merkpakket bevat:</p>
                  <p className="text-xs text-muted-foreground">Alles klaar om te gebruiken</p>
                </div>
              </div>

              {[
                { icon: Palette, label: 'Professioneel logo (SVG, PNG, PDF)', done: true },
                { icon: Globe, label: 'Website op jouw.biz.nl domein', done: true },
                { icon: FileImage, label: 'Huisstijlhandboek', done: true },
                { icon: Share2, label: 'Social media templates (10+)', done: true },
                { icon: Printer, label: 'Visitekaartje ontwerp', done: true },
                { icon: FileImage, label: 'Briefpapier & factuursjabloon', done: true },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 py-2.5 border-b border-border/50 last:border-0">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-green-500/10">
                    <Check className="h-3.5 w-3.5 text-green-600 dark:text-green-400" strokeWidth={2.5} />
                  </div>
                  <item.icon className="h-4 w-4 text-muted-foreground shrink-0" />
                  <span className="text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
