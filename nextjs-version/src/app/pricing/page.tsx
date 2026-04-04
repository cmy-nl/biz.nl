"use client"

import { PageLayout } from '@/components/page-layout'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Check, Sparkles, Zap, Globe, Info } from 'lucide-react'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { useState } from 'react'

const plans = [
  { name: 'Gratis', monthlyPrice: 0, yearlyPrice: 0, workspaces: 1, credits: 10, creditsLabel: '10 AI-tegoed (eenmalig)', cta: 'Gratis starten', popular: false, note: 'Geen creditcard nodig' },
  { name: 'Starter', monthlyPrice: 6.95, yearlyPrice: 5.56, workspaces: 1, credits: 50, creditsLabel: '50 AI-tegoed / maand', cta: 'Starter kiezen', popular: false },
  { name: 'Growth', monthlyPrice: 14.95, yearlyPrice: 11.96, workspaces: 3, credits: 150, creditsLabel: '150 AI-tegoed / maand', cta: 'Growth kiezen', popular: true, badge: 'Meest gekozen' },
  { name: 'Pro', monthlyPrice: 29.95, yearlyPrice: 23.96, workspaces: 10, credits: 400, creditsLabel: '400 AI-tegoed / maand', cta: 'Pro kiezen', popular: false },
  { name: 'Business', monthlyPrice: 59.95, yearlyPrice: 47.96, workspaces: 25, credits: 1000, creditsLabel: '1.000 AI-tegoed / maand', cta: 'Business kiezen', popular: false },
  { name: 'Agency', monthlyPrice: 99.95, yearlyPrice: 79.96, workspaces: 50, credits: 2000, creditsLabel: '2.000 AI-tegoed / maand', cta: 'Agency kiezen', popular: false },
]

const allFeatures = [
  'AI merkgenerator (logo, kleuren, typografie, tagline)',
  'Website op jouw-naam.biz.nl domein',
  'Social media templates voor alle kanalen',
  'Blog met AI-teksten en afbeeldingen',
  'Visitekaartje en printables',
  'SEO-optimalisatie per pagina',
  'Huisstijlhandboek als PDF',
  'Maandelijkse brand health check',
  'Maandelijks analytics rapport',
  'E-mail support',
]

const topUpPacks = [
  { name: 'Boost', credits: 50, price: 9.50 },
  { name: 'Value', credits: 150, price: 27.50 },
  { name: 'Power', credits: 500, price: 89.95 },
  { name: 'Studio', credits: 1500, price: 249.95 },
]

const creditExamples = [
  { action: 'Volledig merkpakket aanmaken', credits: 20 },
  { action: 'Logo genereren', credits: 8 },
  { action: 'Website publiceren', credits: 5 },
  { action: 'Blog artikel schrijven', credits: 5 },
  { action: 'Social media post', credits: 2 },
  { action: 'Flyer of printable', credits: 6 },
  { action: 'SEO per pagina', credits: 2 },
  { action: 'Concurrentieanalyse', credits: 8 },
]

const faqs = [
  { q: 'Wat is AI-tegoed?', a: 'AI-tegoed is het budget dat je gebruikt voor AI-acties op het platform — zoals een logo genereren, een blogpost schrijven of je website publiceren. Vergelijk het met beltegoed op je telefoon. Elk plan geeft je een vast bedrag per maand.' },
  { q: 'Wat als mijn tegoed op is?', a: 'Je kunt eenvoudig extra AI-tegoed bijkopen via een top-up pack. Dit tegoed vervalt nooit en wordt automatisch gebruikt als je maandelijkse tegoed op is.' },
  { q: 'Kan ik opzeggen wanneer ik wil?', a: 'Ja, je kunt op elk moment opzeggen zonder extra kosten. Bij maandelijkse plannen loop je door tot het einde van de betaalperiode.' },
  { q: 'Is het volledige platform altijd beschikbaar?', a: 'Ja. Elk betaald plan geeft toegang tot alle functies. Het enige verschil is hoeveel AI-tegoed je per maand krijgt en hoeveel merken (workspaces) je kunt beheren.' },
  { q: 'Kan ik mijn eigen domeinnaam gebruiken?', a: 'Bij het Pro-plan en hoger kun je je eigen .nl domeinnaam koppelen. Bij alle plannen krijg je standaard een gratis jouw-naam.biz.nl domein.' },
]

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false)
  const [showCredits, setShowCredits] = useState(false)

  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="outline" className="mb-6">Transparante prijzen</Badge>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">
            Alle functies. Altijd.
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-3">
            Elk betaald plan geeft toegang tot het volledige platform. Het enige verschil is hoeveel <strong className="text-foreground">AI-tegoed</strong> je per maand krijgt en hoeveel merken je beheert.
          </p>
          <button onClick={() => setShowCredits(!showCredits)} className="text-sm text-primary hover:underline cursor-pointer flex items-center gap-1 mx-auto">
            <Info className="h-3.5 w-3.5" />
            Wat is AI-tegoed?
          </button>
          {showCredits && (
            <div className="mt-4 rounded-xl border bg-card p-4 max-w-2xl mx-auto text-left">
              <p className="text-sm text-muted-foreground mb-3">AI-tegoed is het budget voor AI-acties op het platform. Vergelijk het met beltegoed.</p>
              <div className="grid grid-cols-2 gap-2">
                {creditExamples.map((ex, i) => (
                  <div key={i} className="flex justify-between text-xs bg-muted/50 rounded-lg px-3 py-2">
                    <span className="text-muted-foreground">{ex.action}</span>
                    <span className="font-semibold text-foreground shrink-0 ml-2">{ex.credits} tegoed</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Toggle */}
      <div className="flex flex-col items-center gap-2 mb-10">
        <ToggleGroup type="single" value={isYearly ? 'yearly' : 'monthly'} onValueChange={(v) => { if (v) setIsYearly(v === 'yearly') }} className="bg-background border rounded-full p-1">
          <ToggleGroupItem value="monthly" className="data-[state=on]:bg-foreground data-[state=on]:text-background px-6 rounded-full text-sm cursor-pointer">Per maand</ToggleGroupItem>
          <ToggleGroupItem value="yearly" className="data-[state=on]:bg-foreground data-[state=on]:text-background px-6 rounded-full text-sm cursor-pointer">Per jaar</ToggleGroupItem>
        </ToggleGroup>
        {isYearly && <p className="text-sm text-green-600 dark:text-green-400 font-medium">✓ 20% korting op jaarlijkse betaling</p>}
      </div>

      {/* Plans */}
      <section className="pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-12">
            {plans.map((plan, i) => (
              <div key={i} className={`relative flex flex-col rounded-2xl border p-5 ${plan.popular ? 'border-primary/50 bg-card shadow-xl ring-1 ring-primary/20' : 'bg-card hover:shadow-md transition-shadow'}`}>
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="px-3 py-0.5 text-xs gap-1"><Sparkles className="h-3 w-3" />{plan.badge}</Badge>
                  </div>
                )}
                <h3 className="font-bold text-base mb-0.5">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-2xl font-extrabold">
                    {plan.monthlyPrice === 0 ? 'Gratis' : `€${(isYearly ? plan.yearlyPrice : plan.monthlyPrice).toFixed(2).replace('.', ',')}`}
                  </span>
                  {plan.monthlyPrice > 0 && <span className="text-xs text-muted-foreground">/maand</span>}
                </div>
                <div className="flex items-center gap-1.5 text-xs mb-1">
                  <Zap className="h-3 w-3 text-primary shrink-0" />
                  <span className="font-medium">{plan.creditsLabel}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-4">
                  <Globe className="h-3 w-3 shrink-0" />
                  <span>{plan.workspaces === 1 ? '1 workspace' : `${plan.workspaces} workspaces`}</span>
                </div>
                <Button variant={plan.popular ? 'default' : 'outline'} size="sm" className="w-full cursor-pointer text-xs mt-auto" asChild>
                  <Link href="#">{plan.cta}</Link>
                </Button>
                {plan.note && <p className="text-xs text-muted-foreground text-center mt-2">{plan.note}</p>}
              </div>
            ))}
          </div>

          {/* All features */}
          <div className="max-w-2xl mx-auto rounded-2xl border bg-card p-6 mb-10">
            <p className="text-sm font-semibold text-center mb-4">Elk betaald plan geeft toegang tot:</p>
            <div className="grid sm:grid-cols-2 gap-2">
              {allFeatures.map((f, i) => (
                <div key={i} className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="text-muted-foreground">{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Top-ups */}
          <div className="max-w-3xl mx-auto">
            <p className="text-center font-semibold mb-1">Extra AI-tegoed nodig?</p>
            <p className="text-center text-sm text-muted-foreground mb-5">Vervalt nooit. Automatisch gebruikt als je maandelijkse tegoed op is.</p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {topUpPacks.map((p, i) => (
                <div key={i} className="rounded-xl border bg-card p-4 hover:shadow-sm hover:border-primary/40 transition-all cursor-pointer text-center">
                  <p className="text-xs text-muted-foreground mb-1">{p.name}</p>
                  <p className="text-xl font-extrabold">{p.credits.toLocaleString('nl-NL')}</p>
                  <p className="text-xs text-muted-foreground mb-2">AI-tegoed</p>
                  <p className="font-bold text-primary text-sm">€{p.price.toFixed(2).replace('.', ',')}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8">Alle prijzen exclusief 21% BTW · Maandelijks opzegbaar · Gratis .biz.nl domein bij elk plan</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl font-bold text-center mb-10">Veelgestelde vragen over prijzen</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-xl border bg-card p-5">
                <p className="font-semibold text-sm mb-2">{faq.q}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
