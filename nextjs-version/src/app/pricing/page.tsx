"use client"

import { PageLayout } from '@/components/page-layout'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Sparkles, Zap, Globe, Info, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { useState } from 'react'

// ─── Data ────────────────────────────────────────────────────────────────────

const plans = [
  { id: 'gratis', name: 'Gratis', monthlyPrice: 0, yearlyPrice: 0, workspaces: 1, credits: 10, creditsLabel: '10 AI-tegoed eenmalig', cta: 'Gratis starten', note: 'Geen creditcard' },
  { id: 'starter', name: 'Starter', monthlyPrice: 6.95, yearlyPrice: 5.56, workspaces: 1, credits: 50, creditsLabel: '50 / maand', cta: 'Starter kiezen' },
  { id: 'growth', name: 'Growth', monthlyPrice: 14.95, yearlyPrice: 11.96, workspaces: 3, credits: 150, creditsLabel: '150 / maand', cta: 'Growth kiezen', popular: true },
  { id: 'pro', name: 'Pro', monthlyPrice: 29.95, yearlyPrice: 23.96, workspaces: 10, credits: 400, creditsLabel: '400 / maand', cta: 'Pro kiezen' },
  { id: 'business', name: 'Business', monthlyPrice: 59.95, yearlyPrice: 47.96, workspaces: 25, credits: 1000, creditsLabel: '1.000 / maand', cta: 'Business kiezen' },
  { id: 'agency', name: 'Agency', monthlyPrice: 99.95, yearlyPrice: 79.96, workspaces: 50, credits: 2000, creditsLabel: '2.000 / maand', cta: 'Agency kiezen' },
]

const features = [
  { label: 'AI merkgenerator', plans: ['gratis', 'starter', 'growth', 'pro', 'business', 'agency'] },
  { label: 'Logo (SVG, PNG, PDF)', plans: ['gratis', 'starter', 'growth', 'pro', 'business', 'agency'] },
  { label: 'Website op .biz.nl', plans: ['gratis', 'starter', 'growth', 'pro', 'business', 'agency'] },
  { label: 'Social media templates', plans: ['starter', 'growth', 'pro', 'business', 'agency'] },
  { label: 'Blog & AI-teksten', plans: ['growth', 'pro', 'business', 'agency'] },
  { label: 'Batch social posts (10x)', plans: ['growth', 'pro', 'business', 'agency'] },
  { label: 'Huisstijlhandboek PDF', plans: ['growth', 'pro', 'business', 'agency'] },
  { label: 'Printables & flyers', plans: ['growth', 'pro', 'business', 'agency'] },
  { label: 'Online winkel', plans: ['pro', 'business', 'agency'] },
  { label: 'Concurrentieanalyse', plans: ['pro', 'business', 'agency'] },
  { label: 'Eigen domein koppelen', plans: ['pro', 'business', 'agency'] },
  { label: 'Prioriteit support', plans: ['pro', 'business', 'agency'] },
  { label: 'White-label opties', plans: ['agency'] },
]

const creditActions = [
  { action: 'Mijn merk laten maken', credits: 20, icon: '🎨', desc: 'Logo, kleuren, tekst — alles in één keer' },
  { action: 'Nieuw logo proberen', credits: 8, icon: '✦', desc: 'Een andere stijl uitproberen' },
  { action: 'Mijn website online zetten', credits: 5, icon: '🌐', desc: 'Of updaten na een wijziging' },
  { action: 'Blogpost laten schrijven', credits: 5, icon: '✍️', desc: 'AI schrijft een volledig artikel' },
  { action: 'Social media bericht', credits: 2, icon: '📱', desc: 'Voor Instagram, LinkedIn of Facebook' },
  { action: 'Flyer of visitekaartje', credits: 6, icon: '🖨️', desc: 'Printklaar bestand downloaden' },
]

const topUpPacks = [
  { name: 'Boost', credits: 50, price: 9.50 },
  { name: 'Value', credits: 150, price: 27.50 },
  { name: 'Power', credits: 500, price: 89.95 },
  { name: 'Studio', credits: 1500, price: 249.95 },
]

const faqs = [
  { q: 'Wat is AI-tegoed?', a: 'AI-tegoed is je maandelijks budget voor AI-acties — zoals een logo genereren, een blogpost schrijven of je website publiceren. Vergelijk het met beltegoed op je telefoon.' },
  { q: 'Kan ik opzeggen wanneer ik wil?', a: 'Ja, maandelijks opzegbaar. Je behoudt toegang tot het einde van je betaalperiode. Geen boetes, geen gedoe.' },
  { q: 'Wat als mijn AI-tegoed op is?', a: 'Je kunt los extra AI-tegoed bijkopen via een top-up pack. Dit vervalt nooit en wordt automatisch gebruikt als je maandelijks tegoed op is.' },
  { q: 'Krijg ik echt het volledige platform bij elk plan?', a: 'Ja. Elk betaald plan geeft toegang tot alle functies. Het enige verschil is hoeveel AI-tegoed je per maand krijgt en hoeveel merken (workspaces) je kunt beheren.' },
  { q: 'Zijn er opstartkosten of verborgen kosten?', a: 'Nee. De prijs die je ziet is alles wat je betaalt, exclusief BTW. Geen verborgen kosten, geen setup fees.' },
  { q: 'Kan ik mijn eigen domeinnaam gebruiken?', a: 'Bij het Pro-plan en hoger kun je je eigen .nl domein koppelen. Alle plannen bevatten een gratis jouw-naam.biz.nl domein.' },
]

// ─── Quiz component ───────────────────────────────────────────────────────────

const quizQuestions = [
  {
    id: 'brands',
    question: 'Hoeveel merken wil je beheren?',
    options: [
      { label: '1 merk', value: 1, icon: '👤' },
      { label: '2-3 merken', value: 3, icon: '👥' },
      { label: '4-10 merken', value: 10, icon: '🏢' },
      { label: '11+ merken', value: 50, icon: '🏗️' },
    ],
  },
  {
    id: 'usage',
    question: 'Hoe actief gebruik je het platform?',
    options: [
      { label: 'Af en toe', value: 'light', icon: '🌱', desc: '~20 tegoed/maand' },
      { label: 'Regelmatig', value: 'medium', icon: '⚡', desc: '~80 tegoed/maand' },
      { label: 'Intensief', value: 'heavy', icon: '🚀', desc: '~200 tegoed/maand' },
      { label: 'Professioneel', value: 'pro', icon: '💼', desc: '400+ tegoed/maand' },
    ],
  },
  {
    id: 'role',
    question: 'Wat omschrijft jou het beste?',
    options: [
      { label: 'ZZP\'er / starter', value: 'zzp', icon: '🧑‍💻' },
      { label: 'MKB ondernemer', value: 'mkb', icon: '🏪' },
      { label: 'Marketeer / designer', value: 'marketer', icon: '🎨' },
      { label: 'Bureau / agency', value: 'agency', icon: '🏢' },
    ],
  },
]

function getRecommendation(answers: Record<string, string | number>) {
  const brands = Number(answers.brands || 1)
  const usage = answers.usage as string
  if (brands > 10 || usage === 'pro') return 'agency'
  if (brands > 3 || usage === 'heavy') return 'pro'
  if (brands > 1 || usage === 'medium') return 'growth'
  if (usage === 'light') return 'starter'
  return 'starter'
}

function PlanQuiz({ onRecommend }: { onRecommend: (id: string) => void }) {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string | number>>({})
  const [done, setDone] = useState(false)

  const q = quizQuestions[step]

  const handleAnswer = (value: string | number) => {
    const newAnswers = { ...answers, [q.id]: value }
    setAnswers(newAnswers)
    if (step < quizQuestions.length - 1) {
      setStep(step + 1)
    } else {
      setDone(true)
      const rec = getRecommendation(newAnswers)
      onRecommend(rec)
    }
  }

  if (done) return null

  return (
    <div className="rounded-2xl border bg-card p-6 sm:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">{step + 1}</div>
        <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
          <div className="h-full bg-primary rounded-full transition-all duration-500" style={{ width: `${((step + 1) / quizQuestions.length) * 100}%` }} />
        </div>
        <span className="text-xs text-muted-foreground">{step + 1}/{quizQuestions.length}</span>
      </div>
      <h3 className="text-lg font-bold mb-5">{q.question}</h3>
      <div className="grid grid-cols-2 gap-3">
        {q.options.map((opt) => (
          <button
            key={String(opt.value)}
            onClick={() => handleAnswer(opt.value)}
            className="flex flex-col items-start gap-1 rounded-xl border bg-background p-4 text-left hover:border-primary hover:bg-primary/5 transition-all cursor-pointer group"
          >
            <span className="text-2xl">{opt.icon}</span>
            <span className="font-medium text-sm">{opt.label}</span>
            {'desc' in opt && <span className="text-xs text-muted-foreground">{opt.desc}</span>}
          </button>
        ))}
      </div>
    </div>
  )
}

// ─── Usage calculator ─────────────────────────────────────────────────────────

function UsageCalculator() {
  const [counts, setCounts] = useState<Record<string, number>>({})
  const total = creditActions.reduce((sum, a) => sum + (counts[a.action] || 0) * a.credits, 0)

  const recommended = total === 0 ? null
    : total <= 50 ? plans[1]
    : total <= 150 ? plans[2]
    : total <= 400 ? plans[3]
    : total <= 1000 ? plans[4]
    : plans[5]

  return (
    <div className="rounded-2xl border bg-card overflow-hidden">
      <div className="p-6 border-b bg-muted/30">
        <h3 className="font-bold text-lg mb-1">Hoe actief wil je zijn?</h3>
        <p className="text-sm text-muted-foreground">Geef aan wat je per maand wilt doen. Wij rekenen uit welk plan het beste past.</p>
      </div>
      <div className="p-6 space-y-4">
        {creditActions.map((action) => (
          <div key={action.action} className="flex items-center gap-4">
            <span className="text-lg w-6 shrink-0">{action.icon}</span>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-baseline mb-1">
                <span className="text-sm font-medium truncate">{action.action}</span>
                <span className="text-xs text-muted-foreground shrink-0 ml-2">{action.credits} tegoed/keer</span>
              </div>
              <input
                type="range"
                min={0}
                max={20}
                step={1}
                value={counts[action.action] || 0}
                onChange={e => setCounts(p => ({ ...p, [action.action]: Number(e.target.value) }))}
                className="w-full h-1.5 rounded-full accent-primary cursor-pointer"
              />
            </div>
            <span className="text-sm font-semibold w-6 text-right shrink-0">{counts[action.action] || 0}×</span>
          </div>
        ))}
      </div>

      {/* Result */}
      <div className={`p-6 border-t transition-all ${total > 0 ? 'bg-primary/5' : 'bg-muted/20'}`}>
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-muted-foreground">Geschat maandverbruik</span>
          <span className="text-2xl font-extrabold text-primary">{total} tegoed</span>
        </div>
        {recommended ? (
          <div className="rounded-xl border border-primary/30 bg-background p-4 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs text-muted-foreground mb-0.5">Aanbevolen plan</p>
              <p className="font-bold text-lg">{recommended.name}</p>
              <p className="text-sm text-muted-foreground">{recommended.creditsLabel} · €{recommended.monthlyPrice.toFixed(2).replace('.', ',')}/maand</p>
            </div>
            <Button size="sm" className="cursor-pointer shrink-0 gap-1.5" asChild>
              <Link href="#">
                Kiezen
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </Button>
          </div>
        ) : (
          <p className="text-sm text-muted-foreground text-center">Stel de schuivers in om jouw ideale plan te berekenen.</p>
        )}
      </div>
    </div>
  )
}

// ─── Main page ────────────────────────────────────────────────────────────────

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false)
  const [recommendedId, setRecommendedId] = useState<string | null>(null)
  const [showComparison, setShowComparison] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [showQuiz, setShowQuiz] = useState(false)

  const yearlySaving = (p: typeof plans[0]) =>
    Math.round((p.monthlyPrice - p.yearlyPrice) * 12)

  return (
    <PageLayout>

      {/* ── Hero ── */}
      <section className="pt-20 pb-12 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <Badge variant="outline" className="mb-5">Transparante prijzen</Badge>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">
            Simpel geprijsd.<br />Altijd alles inbegrepen.
          </h1>
          <p className="text-lg text-muted-foreground mb-6 max-w-xl mx-auto">
            Elk betaald plan geeft toegang tot het volledige platform. Kies op basis van hoeveel <strong className="text-foreground">AI-tegoed</strong> je per maand nodig hebt en hoeveel merken je beheert.
          </p>

          {/* Billing toggle */}
          <div className="flex flex-col items-center gap-2 mb-2">
            <ToggleGroup
              type="single"
              value={isYearly ? 'yearly' : 'monthly'}
              onValueChange={v => { if (v) setIsYearly(v === 'yearly') }}
              className="bg-background border rounded-full p-1"
            >
              <ToggleGroupItem value="monthly" className="data-[state=on]:bg-foreground data-[state=on]:text-background px-6 rounded-full text-sm cursor-pointer">Per maand</ToggleGroupItem>
              <ToggleGroupItem value="yearly" className="data-[state=on]:bg-foreground data-[state=on]:text-background px-6 rounded-full text-sm cursor-pointer">Per jaar</ToggleGroupItem>
            </ToggleGroup>
            {isYearly
              ? <p className="text-sm text-green-600 dark:text-green-400 font-medium">✓ Tot 20% korting — je betaalt voor 10 maanden, krijgt 12</p>
              : <p className="text-sm text-muted-foreground">Schakel naar jaarlijks en bespaar tot 20%</p>}
          </div>
        </div>
      </section>

      {/* ── Plan cards ── */}
      <section className="pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          {/* 3+3 grid — free gets its own small card */}
          <div className="max-w-5xl mx-auto">

            {/* Free — slim banner */}
            <div className="rounded-2xl border bg-muted/30 p-4 mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div>
                  <span className="font-bold">Gratis</span>
                  <span className="text-muted-foreground text-sm ml-2">— Uitproberen zonder risico</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Zap className="h-3 w-3 text-primary" />
                  10 AI-tegoed eenmalig · 1 workspace
                </div>
              </div>
              <Button variant="outline" size="sm" className="cursor-pointer shrink-0" asChild>
                <Link href="#">Gratis starten — geen creditcard</Link>
              </Button>
            </div>

            {/* Paid plans — 2 rows of 2 on mobile, 1 row of 5 on lg */}
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
              {plans.slice(1).map((plan) => {
                const isRec = recommendedId === plan.id
                const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice
                const saving = yearlySaving(plan)

                return (
                  <div
                    key={plan.id}
                    className={`relative flex flex-col rounded-2xl border p-5 transition-all ${
                      plan.popular
                        ? 'border-primary/60 bg-card shadow-lg shadow-primary/10 ring-1 ring-primary/20'
                        : isRec
                        ? 'border-green-500/50 bg-green-500/5 ring-1 ring-green-500/20'
                        : 'bg-card hover:shadow-md'
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <Badge className="px-2.5 py-0.5 text-xs gap-1 whitespace-nowrap"><Sparkles className="h-3 w-3" />Meest gekozen</Badge>
                      </div>
                    )}
                    {isRec && !plan.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <Badge variant="outline" className="px-2.5 py-0.5 text-xs border-green-500 text-green-700 dark:text-green-400 whitespace-nowrap bg-background">Aanbevolen</Badge>
                      </div>
                    )}

                    <p className="font-bold text-sm mb-3">{plan.name}</p>

                    <div className="mb-3">
                      <div className="flex items-baseline gap-0.5">
                        <span className="text-2xl font-extrabold">€{price.toFixed(2).replace('.', ',')}</span>
                        <span className="text-xs text-muted-foreground">/mo</span>
                      </div>
                      {isYearly && saving > 0 && (
                        <p className="text-xs text-green-600 dark:text-green-400 font-medium mt-0.5">€{saving} bespaard/jaar</p>
                      )}
                    </div>

                    <div className="space-y-1.5 mb-4 flex-1">
                      <div className="flex items-center gap-1.5 text-xs">
                        <Zap className="h-3 w-3 text-primary shrink-0" />
                        <span className="font-medium">{plan.creditsLabel}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Globe className="h-3 w-3 shrink-0" />
                        <span>{plan.workspaces === 1 ? '1 workspace' : `${plan.workspaces} workspaces`}</span>
                      </div>
                    </div>

                    <Button
                      size="sm"
                      variant={plan.popular || isRec ? 'default' : 'outline'}
                      className="w-full cursor-pointer text-xs"
                      asChild
                    >
                      <Link href="#">{plan.cta}</Link>
                    </Button>
                  </div>
                )
              })}
            </div>
          </div>

          {/* All features included note */}
          <p className="text-center text-sm text-muted-foreground mt-5">
            Alle functies altijd inbegrepen ·{' '}
            <button onClick={() => setShowComparison(!showComparison)} className="text-primary hover:underline cursor-pointer">
              {showComparison ? 'Verberg' : 'Bekijk'} volledige vergelijking
            </button>
          </p>
        </div>
      </section>

      {/* ── Feature comparison table ── */}
      {showComparison && (
        <section className="py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="rounded-2xl border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b bg-muted/40">
                      <th className="text-left px-4 py-3 font-medium text-muted-foreground w-48">Functie</th>
                      {plans.slice(1).map(p => (
                        <th key={p.id} className={`px-3 py-3 text-center font-semibold text-xs ${p.popular ? 'text-primary' : ''}`}>{p.name}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {features.map((feat, i) => (
                      <tr key={i} className="border-b last:border-0 hover:bg-muted/20">
                        <td className="px-4 py-2.5 text-muted-foreground text-xs">{feat.label}</td>
                        {plans.slice(1).map(p => (
                          <td key={p.id} className="px-3 py-2.5 text-center">
                            {feat.plans.includes(p.id)
                              ? <span className="text-primary font-bold">✓</span>
                              : <span className="text-muted-foreground/30 text-lg">·</span>}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Quiz + Calculator ── */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold mb-2">Niet zeker welk plan jij nodig hebt?</h2>
              <p className="text-muted-foreground text-sm">Geen probleem — beantwoord een paar vragen of stel in wat je wilt doen. Wij adviseren het beste plan.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {/* Quiz */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">🎯 Welk plan past bij mij?</h3>
                  {!showQuiz && (
                    <Button variant="outline" size="sm" className="cursor-pointer" onClick={() => setShowQuiz(true)}>Start quiz</Button>
                  )}
                </div>
                {showQuiz ? (
                  <PlanQuiz onRecommend={(id) => { setRecommendedId(id); setShowQuiz(false) }} />
                ) : recommendedId ? (
                  <div className="rounded-2xl border bg-card p-6">
                    <p className="text-sm text-muted-foreground mb-2">Op basis van jouw antwoorden raden wij aan:</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-2xl font-extrabold">{plans.find(p => p.id === recommendedId)?.name}</p>
                        <p className="text-sm text-muted-foreground">{plans.find(p => p.id === recommendedId)?.creditsLabel} · €{plans.find(p => p.id === recommendedId)?.monthlyPrice.toFixed(2).replace('.', ',')}/maand</p>
                      </div>
                      <Button className="cursor-pointer gap-1.5" asChild>
                        <Link href="#">
                          Kiezen
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </Button>
                    </div>
                    <button onClick={() => { setRecommendedId(null); setShowQuiz(true) }} className="text-xs text-muted-foreground hover:text-foreground mt-3 cursor-pointer">Opnieuw doen</button>
                  </div>
                ) : (
                  <div className="rounded-2xl border bg-card p-8 flex flex-col items-center justify-center text-center min-h-48">
                    <p className="text-4xl mb-3">🤔</p>
                    <p className="text-sm text-muted-foreground">Beantwoord 3 korte vragen en wij adviseren het beste plan voor jou.</p>
                  </div>
                )}
              </div>

              {/* Calculator */}
              <div>
                <h3 className="font-semibold mb-4">🧮 Wat wil je per maand doen?</h3>
                <UsageCalculator />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Top-up packs ── */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Extra AI-tegoed bijkopen</h2>
            <p className="text-sm text-muted-foreground">Vervalt nooit · Automatisch gebruikt als je maandelijkse tegoed op is · Altijd beschikbaar</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {topUpPacks.map((pack, i) => {
              const perCredit = (pack.price / pack.credits).toFixed(2)
              return (
                <div key={i} className="rounded-2xl border bg-card p-5 hover:shadow-md hover:border-primary/40 transition-all cursor-pointer group text-center">
                  <p className="text-xs font-medium text-muted-foreground mb-1">{pack.name} Pack</p>
                  <p className="text-3xl font-extrabold mb-0.5">{pack.credits.toLocaleString('nl-NL')}</p>
                  <p className="text-xs text-muted-foreground mb-3">AI-tegoed · €{perCredit.replace('.', ',')}/stuk</p>
                  <p className="text-lg font-bold text-primary">€{pack.price.toFixed(2).replace('.', ',')}</p>
                  <p className="text-xs text-muted-foreground mt-1 group-hover:text-primary transition-colors">Eenmalig</p>
                </div>
              )
            })}
          </div>
          <p className="text-center text-xs text-muted-foreground mt-5">
            <Info className="h-3.5 w-3.5 inline mr-1" />
            Top-up credits zijn goedkoper per stuk dan overage — maar upgraden naar een hoger plan is altijd voordeliger bij structureel meer gebruik.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
          <h2 className="text-2xl font-bold text-center mb-8">Veelgestelde vragen</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-xl border bg-card overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left cursor-pointer hover:bg-muted/30 transition-colors"
                >
                  <span className="font-medium text-sm pr-4">{faq.q}</span>
                  {openFaq === i ? <ChevronUp className="h-4 w-4 shrink-0 text-muted-foreground" /> : <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground" />}
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed border-t pt-4">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-3">Klaar om te starten?</h2>
          <p className="text-background/60 mb-8 max-w-md mx-auto">Begin gratis, geen creditcard nodig. Upgrade wanneer je er klaar voor bent.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" variant="secondary" className="cursor-pointer gap-2" asChild>
              <Link href="#"><Sparkles className="h-4 w-4" />Gratis beginnen</Link>
            </Button>
            <Button size="lg" className="cursor-pointer bg-white/10 text-white border border-white/30 hover:bg-white/20" asChild>
              <Link href="/contact">Vraag een demo aan</Link>
            </Button>
          </div>
          <p className="text-background/40 text-xs mt-5">Alle prijzen exclusief 21% BTW · Maandelijks opzegbaar · Gratis .biz.nl domein</p>
        </div>
      </section>

    </PageLayout>
  )
}
