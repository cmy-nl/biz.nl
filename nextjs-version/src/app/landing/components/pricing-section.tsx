"use client"

import { Check, Sparkles, Globe, Zap, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { useState } from 'react'

const plans = [
  {
    name: 'Gratis',
    tagline: 'Uitproberen zonder risico',
    monthlyPrice: 0,
    yearlyPrice: 0,
    workspaces: 1,
    credits: 10,
    features: [
      '10 startcredits (eenmalig)',
      '1 merkruimte (workspace)',
      'Gratis jouw-naam.biz.nl domein',
      'AI merkgenerator (basis)',
      'Logo genereren',
      'Website publiceren',
    ],
    cta: 'Gratis starten',
    popular: false,
    note: 'Geen creditcard nodig'
  },
  {
    name: 'Starter',
    tagline: "Voor zzp'ers en startende ondernemers",
    monthlyPrice: 6.95,
    yearlyPrice: 5.56,
    workspaces: 1,
    credits: 50,
    features: [
      '50 credits per maand',
      '1 merkruimte (workspace)',
      'Gratis jouw-naam.biz.nl domein',
      'AI merkgenerator (volledig)',
      'Logo + website + socials',
      'Visitekaartje ontwerp',
      'SEO per pagina',
      'E-mail support',
    ],
    cta: 'Starter kiezen',
    popular: false,
    note: null
  },
  {
    name: 'Growth',
    tagline: 'Voor groeiende bedrijven met meerdere merken',
    monthlyPrice: 14.95,
    yearlyPrice: 11.96,
    workspaces: 3,
    credits: 150,
    features: [
      '150 credits per maand',
      'Tot 3 merkruimtes',
      'Gratis jouw-naam.biz.nl domeinen',
      'Alles van Starter, plus:',
      'Blog met AI-teksten + afbeeldingen',
      'Social media strategie + posts',
      'Batch social posts (10x tegelijk)',
      'Huisstijlhandboek (PDF)',
      'Printables & flyers',
    ],
    cta: 'Growth kiezen',
    popular: true,
    badge: 'Meest gekozen',
    note: null
  },
  {
    name: 'Pro',
    tagline: 'Voor bureaus en ambitieuze merken',
    monthlyPrice: 29.95,
    yearlyPrice: 23.96,
    workspaces: 10,
    credits: 400,
    features: [
      '400 credits per maand',
      'Tot 10 merkruimtes',
      'Gratis jouw-naam.biz.nl domeinen',
      'Alles van Growth, plus:',
      'Online winkel + productbeschrijvingen',
      'Concurrentieanalyse',
      'AI pitchdeck opzet',
      "Juridische pagina's (AVG)",
      'Prioriteit support',
    ],
    cta: 'Pro kiezen',
    popular: false,
    note: null
  },
]

const topUpPacks = [
  { name: 'Boost Pack', credits: 50, price: 9.50, perCredit: '€0,19' },
  { name: 'Value Pack', credits: 150, price: 27.50, perCredit: '€0,18' },
  { name: 'Power Pack', credits: 500, price: 89.95, perCredit: '€0,18' },
  { name: 'Studio Pack', credits: 1500, price: 249.95, perCredit: '€0,17' },
]

const creditActions = [
  { action: 'Volledig merkpakket (AI)', credits: 20 },
  { action: 'Logo genereren', credits: 8 },
  { action: 'Website publiceren', credits: 5 },
  { action: 'Blog artikel schrijven', credits: 5 },
  { action: 'Social media post', credits: 2 },
  { action: 'SEO optimalisatie per pagina', credits: 2 },
  { action: 'Printable maken (flyer etc.)', credits: 6 },
  { action: 'Concurrentieanalyse', credits: 8 },
]

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false)
  const [showCredits, setShowCredits] = useState(false)

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
            Kies een plan met maandelijkse credits. Extra credits nodig? Koop ze los bij — ze vervallen nooit.
            Elk plan inclusief gratis <strong className="text-foreground">jouw-naam.biz.nl</strong> domein.
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
              ✓ Je bespaart 20% met jaarlijkse betaling
            </p>
          )}
        </div>

        {/* Plans */}
        <div className="mx-auto max-w-6xl grid sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col rounded-2xl border p-6 ${
                plan.popular
                  ? 'border-primary/50 bg-card shadow-xl shadow-primary/5 ring-1 ring-primary/20'
                  : 'bg-card hover:shadow-md transition-shadow'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="px-3 py-0.5 text-xs font-semibold gap-1">
                    <Sparkles className="h-3 w-3" />
                    {plan.badge}
                  </Badge>
                </div>
              )}

              <div className="mb-4">
                <h3 className="text-lg font-bold mb-0.5">{plan.name}</h3>
                <p className="text-xs text-muted-foreground leading-snug">{plan.tagline}</p>
              </div>

              <div className="mb-4">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold">
                    {plan.monthlyPrice === 0 ? 'Gratis' : `€${(isYearly ? plan.yearlyPrice : plan.monthlyPrice).toFixed(2).replace('.', ',')}`}
                  </span>
                  {plan.monthlyPrice > 0 && <span className="text-muted-foreground text-xs">/maand</span>}
                </div>
                {isYearly && plan.monthlyPrice > 0 && (
                  <p className="text-xs text-muted-foreground mt-0.5">Jaarlijks gefactureerd</p>
                )}
                <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
                  <Zap className="h-3 w-3 text-primary shrink-0" />
                  <span>{plan.credits === 10 ? '10 startcredits' : `${plan.credits} credits/maand`}</span>
                </div>
                <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
                  <Globe className="h-3 w-3 shrink-0" />
                  <span>{plan.workspaces === 1 ? '1 workspace' : `${plan.workspaces} workspaces`}</span>
                </div>
              </div>

              <Button
                className="w-full cursor-pointer mb-5 text-sm"
                variant={plan.popular ? 'default' : 'outline'}
                size="sm"
              >
                {plan.cta}
              </Button>

              <ul className="space-y-2 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className={`flex items-start gap-2 text-xs ${feature.includes('Alles van') ? 'font-semibold text-primary mt-1' : 'text-muted-foreground'}`}>
                    {feature.includes('Alles van') ? (
                      <Plus className="h-3.5 w-3.5 shrink-0 mt-0.5 text-primary" />
                    ) : (
                      <Check className="h-3.5 w-3.5 shrink-0 mt-0.5 text-muted-foreground" strokeWidth={2.5} />
                    )}
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {plan.note && (
                <p className="text-xs text-muted-foreground mt-4 text-center">{plan.note}</p>
              )}
            </div>
          ))}
        </div>

        {/* Credit top-ups */}
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl border bg-card p-8">
            <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
              <div>
                <h3 className="text-lg font-bold">Extra credits nodig?</h3>
                <p className="text-sm text-muted-foreground">Koop credits los bij — ze vervallen nooit en zijn altijd beschikbaar.</p>
              </div>
              <button
                onClick={() => setShowCredits(!showCredits)}
                className="text-sm text-primary hover:underline cursor-pointer"
              >
                {showCredits ? 'Verberg' : 'Wat kost een actie?'}
              </button>
            </div>

            {showCredits && (
              <div className="mb-6 rounded-xl border bg-muted/30 p-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Creditverbruik per actie</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {creditActions.map((item, i) => (
                    <div key={i} className="flex items-center justify-between gap-2 text-xs bg-background rounded-lg px-3 py-2">
                      <span className="text-muted-foreground">{item.action}</span>
                      <span className="font-semibold shrink-0 text-primary">{item.credits} credits</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {topUpPacks.map((pack, i) => (
                <div key={i} className="rounded-xl border bg-background p-4 hover:shadow-sm hover:border-primary/40 transition-all cursor-pointer">
                  <p className="font-semibold text-sm mb-1">{pack.name}</p>
                  <p className="text-2xl font-extrabold mb-0.5">{pack.credits}</p>
                  <p className="text-xs text-muted-foreground mb-3">credits · {pack.perCredit}/cr</p>
                  <p className="font-bold text-primary">€{pack.price.toFixed(2).replace('.', ',')}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-4 text-center">
              Top-up credits vervallen nooit en worden automatisch gebruikt wanneer je maandelijkse credits op zijn.
            </p>
          </div>
        </div>

        {/* Footer note */}
        <div className="mt-8 text-center space-y-1">
          <p className="text-sm text-muted-foreground">Alle prijzen exclusief 21% BTW. Maandelijks opzegbaar.</p>
          <p className="text-sm text-muted-foreground">
            Vragen?{' '}
            <a href="#contact" className="text-primary hover:underline font-medium cursor-pointer">Neem contact op</a>
          </p>
        </div>
      </div>
    </section>
  )
}
