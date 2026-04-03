"use client"

import { Check, Sparkles, Globe, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { useState } from 'react'

const plans = [
  {
    name: 'Starter',
    tagline: 'Voor ondernemers die net beginnen',
    monthlyPrice: 9,
    yearlyPrice: 7,
    domain: 'jouw-naam.biz.nl',
    features: [
      'AI merkgenerator (3 pogingen/maand)',
      'Professioneel logo (PNG & SVG)',
      'Gratis jouw-naam.biz.nl domein',
      '1-pagina website',
      '5 social media templates',
      'Visitekaartje ontwerp',
      'E-mail support',
    ],
    cta: 'Beginnen',
    popular: false
  },
  {
    name: 'Zakelijk',
    tagline: 'Voor groeiende bedrijven en zzp\'ers',
    monthlyPrice: 19,
    yearlyPrice: 15,
    domain: 'jouw-naam.biz.nl',
    features: [
      'AI merkgenerator (onbeperkt)',
      'Volledig logo pakket (alle formaten)',
      'Gratis jouw-naam.biz.nl domein',
      'Volledige website (tot 10 pagina\'s)',
      'Huisstijlhandboek (PDF)',
      '25+ social media templates',
      'Visitekaartje & briefpapier',
      'Factuursjabloon',
      'Prioriteit support',
    ],
    cta: 'Nu starten',
    popular: true,
    badge: 'Meest gekozen'
  },
  {
    name: 'Professioneel',
    tagline: 'Voor bureaus en ambitieuze merken',
    monthlyPrice: 39,
    yearlyPrice: 31,
    domain: 'jouw-naam.biz.nl',
    features: [
      'Alles van Zakelijk, plus:',
      'Meerdere merkvarianten',
      'Aangepast kleurenpalet',
      'Webshop mogelijkheid',
      'Google Analytics koppeling',
      'Eigen domeinnaam koppelen',
      '50+ print-ready templates',
      'Telefonische support',
      'Maandelijkse merkcheck',
    ],
    cta: 'Professioneel starten',
    popular: false
  }
]

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <section id="pricing" className="py-24 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-12">
          <Badge variant="outline" className="mb-4">Transparante prijzen</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Betaalbaar voor elk bedrijf
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Geen verborgen kosten. Geen verrassingen. Elk plan inclusief een gratis <strong className="text-foreground">jouw-naam.biz.nl</strong> domein.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-3 mb-2">
            <ToggleGroup
              type="single"
              value={isYearly ? "yearly" : "monthly"}
              onValueChange={(value) => { if (value) setIsYearly(value === "yearly") }}
              className="bg-background border rounded-full p-1"
            >
              <ToggleGroupItem
                value="monthly"
                className="data-[state=on]:bg-foreground data-[state=on]:text-background px-6 rounded-full text-sm cursor-pointer transition-all"
              >
                Per maand
              </ToggleGroupItem>
              <ToggleGroupItem
                value="yearly"
                className="data-[state=on]:bg-foreground data-[state=on]:text-background px-6 rounded-full text-sm cursor-pointer transition-all"
              >
                Per jaar
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
          {isYearly && (
            <p className="text-sm text-green-600 dark:text-green-400 font-medium">
              ✓ Je bespaart tot 20% met jaarlijkse betaling
            </p>
          )}
        </div>

        {/* Plans */}
        <div className="mx-auto max-w-5xl grid lg:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col rounded-2xl border p-8 ${
                plan.popular
                  ? 'border-primary/50 bg-card shadow-xl shadow-primary/5 ring-1 ring-primary/20'
                  : 'bg-card hover:shadow-md transition-shadow'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="px-4 py-1 text-xs font-semibold gap-1.5">
                    <Sparkles className="h-3 w-3" />
                    {plan.badge}
                  </Badge>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.tagline}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold">
                    €{isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-muted-foreground text-sm">/maand</span>
                </div>
                {isYearly && (
                  <p className="text-xs text-muted-foreground mt-1">Jaarlijks gefactureerd</p>
                )}
                <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                  <Globe className="h-3.5 w-3.5 shrink-0" />
                  <span className="font-mono text-xs">{plan.domain}</span>
                  <Badge variant="secondary" className="text-xs px-1.5 py-0">gratis</Badge>
                </div>
              </div>

              <Button
                className={`w-full cursor-pointer mb-8 ${plan.popular ? '' : ''}`}
                variant={plan.popular ? 'default' : 'outline'}
                size="lg"
              >
                {plan.cta}
              </Button>

              <ul className="space-y-3 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className={`flex items-start gap-3 text-sm ${i === 0 && feature.includes('Alles') ? 'font-medium text-foreground' : ''}`}>
                    {i === 0 && feature.includes('Alles') ? (
                      <Zap className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    ) : (
                      <Check className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" strokeWidth={2.5} />
                    )}
                    <span className={i === 0 && feature.includes('Alles') ? 'text-primary font-semibold' : 'text-muted-foreground'}>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-12 text-center space-y-2">
          <p className="text-sm text-muted-foreground">
            Alle prijzen zijn exclusief BTW. Annuleer op elk moment.
          </p>
          <p className="text-sm text-muted-foreground">
            Vragen over het juiste plan?{' '}
            <a href="#contact" className="text-primary hover:underline font-medium cursor-pointer">
              Neem contact op
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
