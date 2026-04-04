"use client"

import { PageLayout } from '@/components/page-layout'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Sparkles, Zap, Globe, Info, ArrowRight, ChevronDown, ChevronUp, Check } from 'lucide-react'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { useState } from 'react'

// ── Plans ─────────────────────────────────────────────────────────────────────

const plans = [
  {
    id: 'starter', name: 'Starter', monthlyPrice: 6.95, yearlyPrice: 5.56,
    workspaces: 1, credits: 50, creditsLabel: '50 AI-tegoed / maand',
    tagline: 'Eén mooi merk, direct online.',
    cta: 'Starter kiezen',
  },
  {
    id: 'growth', name: 'Growth', monthlyPrice: 14.95, yearlyPrice: 11.96,
    workspaces: 3, credits: 150, creditsLabel: '150 AI-tegoed / maand',
    tagline: 'Regelmatig actief, meerdere merken.',
    cta: 'Growth kiezen', popular: true,
  },
  {
    id: 'pro', name: 'Pro', monthlyPrice: 29.95, yearlyPrice: 23.96,
    workspaces: 10, credits: 400, creditsLabel: '400 AI-tegoed / maand',
    tagline: 'Serieus groeien met je merk.',
    cta: 'Pro kiezen',
  },
  {
    id: 'business', name: 'Business', monthlyPrice: 59.95, yearlyPrice: 47.96,
    workspaces: 25, credits: 1000, creditsLabel: '1.000 AI-tegoed / maand',
    tagline: 'Meerdere klanten of vestigingen.',
    cta: 'Business kiezen',
  },
  {
    id: 'agency', name: 'Agency', monthlyPrice: 99.95, yearlyPrice: 79.96,
    workspaces: 50, credits: 2000, creditsLabel: '2.000 AI-tegoed / maand',
    tagline: 'Schaal zonder grenzen.',
    cta: 'Agency kiezen',
  },
]

// ── Features per plan in plain Dutch ─────────────────────────────────────────

const featureRows = [
  {
    label: 'Je eigen logo',
    desc: 'Een professioneel logo in alle formaten — voor je website, sociale media en drukwerk.',
    plans: ['starter', 'growth', 'pro', 'business', 'agency'],
  },
  {
    label: 'Website op jouw naam',
    desc: 'Direct online met een eigen adres, zoals jan-bakker.biz.nl.',
    plans: ['starter', 'growth', 'pro', 'business', 'agency'],
  },
  {
    label: 'Social media afbeeldingen',
    desc: 'Kant-en-klare plaatjes voor Instagram, LinkedIn en Facebook — in jouw stijl.',
    plans: ['starter', 'growth', 'pro', 'business', 'agency'],
  },
  {
    label: 'Blogposts laten schrijven',
    desc: 'AI schrijft volledige artikelen voor je website. Goed voor Google én voor klanten.',
    plans: ['growth', 'pro', 'business', 'agency'],
  },
  {
    label: '10 social posts tegelijk',
    desc: 'Laat de AI in één keer 10 berichten maken. Handig voor een maand vooruit plannen.',
    plans: ['growth', 'pro', 'business', 'agency'],
  },
  {
    label: 'Merkboek (PDF)',
    desc: 'Een mooi document met al je huisstijlregels — handig als je met een drukker of ontwerper werkt.',
    plans: ['growth', 'pro', 'business', 'agency'],
  },
  {
    label: 'Flyers en visitekaartjes',
    desc: 'Print-klare bestanden die je direct naar de drukker kunt sturen.',
    plans: ['growth', 'pro', 'business', 'agency'],
  },
  {
    label: 'Online winkel',
    desc: 'Verkoop producten direct via je website.',
    plans: ['pro', 'business', 'agency'],
  },
  {
    label: 'Concurrentie bekijken',
    desc: 'Laat AI een overzicht maken van hoe jij je onderscheidt van vergelijkbare bedrijven.',
    plans: ['pro', 'business', 'agency'],
  },
  {
    label: 'Eigen .nl domein koppelen',
    desc: 'Gebruik je eigen domeinnaam (bijv. janbakker.nl) in plaats van jouw.biz.nl.',
    plans: ['pro', 'business', 'agency'],
  },
  {
    label: 'Voorrang bij klantenservice',
    desc: 'Vragen worden als eerste beantwoord.',
    plans: ['pro', 'business', 'agency'],
  },
  {
    label: 'White-label (eigen huisstijl)',
    desc: 'Het platform draait onder jouw eigen merknaam — ideaal voor bureaus.',
    plans: ['agency'],
  },
]

// ── Quiz ──────────────────────────────────────────────────────────────────────

type Answer = { value: string; label: string }

const quizQuestions = [
  {
    id: 'situation',
    question: 'Wat is jouw situatie?',
    subtitle: 'Kies wat het beste bij jou past.',
    options: [
      { value: 'starter', label: 'Ik begin net', desc: 'Eerste bedrijf of zzp', icon: '🌱' },
      { value: 'established', label: 'Ik run al een bedrijf', desc: 'En wil professioneler uitstralen', icon: '🏪' },
      { value: 'multiple', label: 'Ik heb meerdere activiteiten', desc: 'Of werk voor meerdere klanten', icon: '🏗️' },
      { value: 'agency', label: 'Wij zijn een bureau', desc: 'En beheren merken voor klanten', icon: '🏢' },
    ],
  },
  {
    id: 'goal',
    question: 'Wat wil je het liefst bereiken?',
    subtitle: 'Je kunt maar één antwoord kiezen — kies wat nu het belangrijkst is.',
    options: [
      { value: 'look_pro', label: 'Professioneel overkomen', desc: 'Bij klanten, op LinkedIn, met visitekaartjes', icon: '✨' },
      { value: 'online', label: 'Beter vindbaar zijn online', desc: 'In Google en op sociale media', icon: '🔍' },
      { value: 'content', label: 'Regelmatig iets plaatsen', desc: 'Berichten, blogs, nieuwsbrieven', icon: '📝' },
      { value: 'scale', label: 'Groeien of opschalen', desc: 'Meer klanten, meer merken, meer output', icon: '📈' },
    ],
  },
  {
    id: 'frequency',
    question: 'Hoe vaak wil je het platform gebruiken?',
    subtitle: 'Eerlijk antwoorden helpt ons het juiste plan te adviseren.',
    options: [
      { value: 'once', label: 'Eenmalig instellen', desc: 'Merk bouwen en daarna weinig aanpassen', icon: '🎯' },
      { value: 'monthly', label: 'Een paar keer per maand', desc: 'Af en toe een post of aanpassing', icon: '📅' },
      { value: 'weekly', label: 'Wekelijks', desc: 'Regelmatig content maken en bijhouden', icon: '⚡' },
      { value: 'daily', label: 'Bijna dagelijks', desc: 'Ik ben intensief bezig met mijn merk', icon: '🚀' },
    ],
  },
]

type RecommendResult = {
  planId: string
  reason: string
  highlight: string[]
}

function getRecommendation(answers: Record<string, string>): RecommendResult {
  const { situation, goal, frequency } = answers

  // Agency
  if (situation === 'agency' || (situation === 'multiple' && frequency === 'daily')) {
    return {
      planId: 'agency',
      reason: 'Je beheert merken voor meerdere klanten en werkt intensief. Het Agency-plan geeft je 50 merkruimtes, 2.000 AI-tegoed per maand en de optie om het platform onder jouw eigen naam te draaien.',
      highlight: ['50 merkruimtes', 'White-label mogelijk', '2.000 AI-tegoed'],
    }
  }

  // Business
  if (situation === 'multiple' || (frequency === 'daily' && goal === 'scale')) {
    return {
      planId: 'business',
      reason: 'Je hebt meerdere activiteiten of beheert klantmerken. Met 25 merkruimtes en 1.000 AI-tegoed per maand heb je ruimte om te groeien zonder je zorgen te maken over limieten.',
      highlight: ['25 merkruimtes', '1.000 AI-tegoed', 'Online winkel inbegrepen'],
    }
  }

  // Pro
  if (goal === 'scale' || frequency === 'daily' || (frequency === 'weekly' && goal === 'content')) {
    return {
      planId: 'pro',
      reason: 'Je wilt serieus groeien en gebruikt het platform regelmatig. Pro geeft je 400 AI-tegoed per maand, een eigen .nl domein koppelen en een online winkel — alles wat je nodig hebt voor de volgende stap.',
      highlight: ['Eigen .nl domein', 'Online winkel', '400 AI-tegoed'],
    }
  }

  // Growth
  if (frequency === 'weekly' || goal === 'content' || goal === 'online') {
    return {
      planId: 'growth',
      reason: 'Je wilt regelmatig actief zijn met je merk — berichten plaatsen, blogs schrijven en goed vindbaar zijn. Growth geeft je precies genoeg ruimte voor dat ritme, inclusief blogposts en 10 social posts tegelijk.',
      highlight: ['Blogposts schrijven', '10 posts tegelijk', '150 AI-tegoed'],
    }
  }

  // Starter
  return {
    planId: 'starter',
    reason: 'Je wilt starten met een professioneel merk zonder te veel gedoe. Starter geeft je een mooi logo, een werkende website en alles wat je nodig hebt om direct goed over te komen.',
    highlight: ['Logo & website', 'Social media afbeeldingen', '50 AI-tegoed'],
  }
}

function PlanQuiz({ onDone }: { onDone: (result: RecommendResult, answers: Record<string, string>) => void }) {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})

  const q = quizQuestions[step]

  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers, [q.id]: value }
    setAnswers(newAnswers)
    if (step < quizQuestions.length - 1) {
      setStep(step + 1)
    } else {
      onDone(getRecommendation(newAnswers), newAnswers)
    }
  }

  return (
    <div className="rounded-2xl border bg-card overflow-hidden">
      {/* Progress */}
      <div className="px-6 pt-6 pb-4 border-b bg-muted/20">
        <div className="flex items-center gap-3 mb-3">
          {quizQuestions.map((_, i) => (
            <div key={i} className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${i <= step ? 'bg-primary' : 'bg-muted'}`} />
          ))}
        </div>
        <p className="text-xs text-muted-foreground">Vraag {step + 1} van {quizQuestions.length}</p>
      </div>

      {/* Question */}
      <div className="p-6">
        <h3 className="text-lg font-bold mb-1">{q.question}</h3>
        <p className="text-sm text-muted-foreground mb-5">{q.subtitle}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {q.options.map((opt) => (
            <button
              key={opt.value}
              onClick={() => handleAnswer(opt.value)}
              className="flex items-start gap-3 rounded-xl border bg-background p-4 text-left hover:border-primary hover:bg-primary/5 transition-all cursor-pointer group"
            >
              <span className="text-2xl shrink-0 mt-0.5">{opt.icon}</span>
              <div>
                <p className="font-semibold text-sm group-hover:text-primary transition-colors">{opt.label}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{opt.desc}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

function RecommendedPlan({
  result,
  isYearly,
  onReset,
}: {
  result: RecommendResult
  isYearly: boolean
  onReset: () => void
}) {
  const plan = plans.find(p => p.id === result.planId)!
  const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice
  const planFeatures = featureRows.filter(f => f.plans.includes(plan.id))

  return (
    <div className="space-y-5">
      {/* Recommendation card */}
      <div className="rounded-2xl border-2 border-primary bg-primary/5 overflow-hidden">
        <div className="bg-primary px-6 py-3 flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-primary-foreground" />
          <p className="text-sm font-semibold text-primary-foreground">Ons advies voor jou</p>
        </div>
        <div className="p-6">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <h3 className="text-2xl font-extrabold">{plan.name}</h3>
              <p className="text-muted-foreground text-sm">{plan.tagline}</p>
            </div>
            <div className="text-right shrink-0">
              <p className="text-2xl font-extrabold">€{price.toFixed(2).replace('.', ',')}</p>
              <p className="text-xs text-muted-foreground">/maand</p>
            </div>
          </div>

          {/* Why this plan */}
          <div className="rounded-xl bg-background border p-4 mb-5">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Waarom dit plan?</p>
            <p className="text-sm leading-relaxed">{result.reason}</p>
          </div>

          {/* Highlights */}
          <div className="flex flex-wrap gap-2 mb-5">
            {result.highlight.map((h, i) => (
              <span key={i} className="flex items-center gap-1.5 text-xs font-medium bg-primary/10 text-primary rounded-full px-3 py-1">
                <Check className="h-3 w-3" strokeWidth={2.5} />
                {h}
              </span>
            ))}
          </div>

          <div className="flex gap-3">
            <Button className="cursor-pointer flex-1 gap-2" asChild>
              <Link href="#">
                {plan.cta}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" className="cursor-pointer" asChild>
              <Link href="#">Probeer gratis</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* What's included — plain Dutch */}
      <div className="rounded-2xl border bg-card overflow-hidden">
        <div className="px-5 py-4 border-b bg-muted/20">
          <p className="font-semibold text-sm">Wat zit er in het {plan.name}-plan?</p>
        </div>
        <div className="divide-y">
          {planFeatures.map((feat, i) => (
            <div key={i} className="flex gap-3 px-5 py-3">
              <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" strokeWidth={2.5} />
              <div>
                <p className="text-sm font-medium">{feat.label}</p>
                <p className="text-xs text-muted-foreground">{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Other plans teaser */}
      <div className="rounded-xl border bg-muted/20 p-4 flex items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">Wil je toch alle plannen vergelijken?</p>
        <button onClick={onReset} className="text-sm text-primary hover:underline cursor-pointer shrink-0">Bekijk alle plannen</button>
      </div>
    </div>
  )
}

// ── All plans comparison (shown after quiz, or on demand) ─────────────────────

function AllPlans({ isYearly, recommendedId }: { isYearly: boolean; recommendedId: string | null }) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        {plans.map(plan => {
          const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice
          const isRec = recommendedId === plan.id
          return (
            <div key={plan.id} className={`relative rounded-2xl border p-5 flex flex-col ${plan.popular ? 'border-primary/60 shadow-lg ring-1 ring-primary/20 bg-card' : isRec ? 'border-green-500/50 ring-1 ring-green-500/20 bg-green-500/5' : 'bg-card'}`}>
              {plan.popular && <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs px-2 whitespace-nowrap"><Sparkles className="h-3 w-3 mr-1" />Populair</Badge>}
              {isRec && !plan.popular && <Badge variant="outline" className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs px-2 whitespace-nowrap border-green-500 text-green-700 dark:text-green-400 bg-background">Aanbevolen</Badge>}
              <p className="font-bold text-sm mb-1">{plan.name}</p>
              <p className="text-xs text-muted-foreground mb-3 leading-snug">{plan.tagline}</p>
              <div className="mb-3">
                <span className="text-xl font-extrabold">€{price.toFixed(2).replace('.', ',')}</span>
                <span className="text-xs text-muted-foreground">/mo</span>
              </div>
              <div className="text-xs text-muted-foreground space-y-1 mb-4 flex-1">
                <div className="flex items-center gap-1"><Zap className="h-3 w-3 text-primary" />{plan.creditsLabel}</div>
                <div className="flex items-center gap-1"><Globe className="h-3 w-3" />{plan.workspaces} {plan.workspaces === 1 ? 'merk' : 'merken'}</div>
              </div>
              <Button variant={plan.popular || isRec ? 'default' : 'outline'} size="sm" className="w-full cursor-pointer text-xs" asChild>
                <Link href="#">{plan.cta}</Link>
              </Button>
            </div>
          )
        })}
      </div>

      {/* Feature table */}
      <div className="rounded-2xl border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b bg-muted/40">
                <th className="text-left px-4 py-3 font-medium text-muted-foreground">Wat zit erin?</th>
                {plans.map(p => <th key={p.id} className={`px-3 py-3 text-center font-semibold ${p.popular ? 'text-primary' : ''}`}>{p.name}</th>)}
              </tr>
            </thead>
            <tbody>
              {featureRows.map((feat, i) => (
                <tr key={i} className="border-b last:border-0 hover:bg-muted/20">
                  <td className="px-4 py-2.5">
                    <p className="font-medium text-foreground">{feat.label}</p>
                    <p className="text-muted-foreground mt-0.5">{feat.desc}</p>
                  </td>
                  {plans.map(p => (
                    <td key={p.id} className="px-3 py-2.5 text-center">
                      {feat.plans.includes(p.id)
                        ? <span className="text-primary font-bold text-sm">✓</span>
                        : <span className="text-muted-foreground/25 text-base">·</span>}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

// ── Top-up packs ──────────────────────────────────────────────────────────────

const topUpPacks = [
  { name: 'Boost', credits: 50, price: 9.50 },
  { name: 'Value', credits: 150, price: 27.50 },
  { name: 'Power', credits: 500, price: 89.95 },
  { name: 'Studio', credits: 1500, price: 249.95 },
]

// ── FAQ ───────────────────────────────────────────────────────────────────────

const faqs = [
  { q: 'Wat is AI-tegoed?', a: 'AI-tegoed is je maandelijks budget voor dingen die de AI voor je doet — zoals een logo maken, een blogpost schrijven of een social media bericht genereren. Vergelijk het met beltegoed op een telefoon: bij elke actie gaat er een beetje tegoed af.' },
  { q: 'Kan ik opzeggen wanneer ik wil?', a: 'Ja, maandelijks opzegbaar. Je behoudt toegang tot het einde van de betaalperiode, zonder boetes.' },
  { q: 'Wat als mijn tegoed op is?', a: 'Dan kun je gewoon extra tegoed bijkopen. Dat tegoed vervalt nooit en wordt automatisch gebruikt als je maandelijkse tegoed op is.' },
  { q: 'Krijg ik het volledige platform bij elk plan?', a: 'Ja. Elk betaald plan geeft toegang tot alle functies die horen bij dat plan. Het enige verschil zit in hoeveel je per maand kunt doen en hoeveel merken je beheert.' },
  { q: 'Zijn er opstartkosten of verborgen kosten?', a: 'Nee. De prijs die je ziet is alles. Geen setup-fees, geen verborgen kosten. Exclusief BTW.' },
  { q: 'Kan ik mijn eigen .nl domeinnaam gebruiken?', a: 'Bij Pro en hoger kun je je eigen domeinnaam koppelen. Elk plan bevat standaard een gratis jouw-naam.biz.nl adres.' },
]

// ── Page ──────────────────────────────────────────────────────────────────────

type QuizState = 'quiz' | 'result' | 'all'

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false)
  const [quizState, setQuizState] = useState<QuizState>('quiz')
  const [result, setResult] = useState<RecommendResult | null>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleQuizDone = (res: RecommendResult) => {
    setResult(res)
    setQuizState('result')
  }

  return (
    <PageLayout>

      {/* ── Hero ── */}
      <section className="pt-20 pb-10 text-center border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
          <Badge variant="outline" className="mb-5">Transparante prijzen</Badge>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">
            Welk plan past bij jou?
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Beantwoord drie korte vragen. Wij adviseren het beste plan — en leggen precies uit waarom.
          </p>
          <div className="flex flex-col items-center gap-2">
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
              : <p className="text-sm text-muted-foreground">Kies jaarlijks en bespaar tot 20%</p>
            }
          </div>
        </div>
      </section>

      {/* ── Quiz / Result / All plans ── */}
      <section className="py-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

          {/* Gratis banner */}
          <div className="rounded-2xl border bg-muted/30 p-4 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="font-semibold">Gratis beginnen</span>
              <span className="text-muted-foreground text-sm ml-2">— Probeer het platform zonder risico</span>
            </div>
            <Button variant="outline" size="sm" className="cursor-pointer shrink-0" asChild>
              <Link href="#">Start gratis — geen creditcard</Link>
            </Button>
          </div>

          {quizState === 'quiz' && (
            <PlanQuiz onDone={handleQuizDone} />
          )}

          {quizState === 'result' && result && (
            <RecommendedPlan
              result={result}
              isYearly={isYearly}
              onReset={() => setQuizState('all')}
            />
          )}

          {quizState === 'all' && (
            <div>
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-bold text-lg">Alle plannen</h2>
                <button onClick={() => setQuizState('quiz')} className="text-sm text-primary hover:underline cursor-pointer">Quiz opnieuw doen</button>
              </div>
              <AllPlans isYearly={isYearly} recommendedId={result?.planId ?? null} />
            </div>
          )}

          {quizState !== 'all' && (
            <div className="text-center mt-6">
              <button onClick={() => setQuizState('all')} className="text-sm text-muted-foreground hover:text-foreground cursor-pointer underline underline-offset-4">
                Toch alle plannen vergelijken
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── Top-up packs ── */}
      <section className="py-14 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Extra tegoed bijkopen</h2>
            <p className="text-sm text-muted-foreground">Vervalt nooit · Wordt automatisch gebruikt als je maandelijks tegoed op is</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {topUpPacks.map((pack, i) => (
              <div key={i} className="rounded-2xl border bg-card p-5 hover:shadow-md hover:border-primary/40 transition-all cursor-pointer text-center">
                <p className="text-xs text-muted-foreground mb-1">{pack.name}</p>
                <p className="text-3xl font-extrabold">{pack.credits.toLocaleString('nl-NL')}</p>
                <p className="text-xs text-muted-foreground mb-3">AI-tegoed</p>
                <p className="text-lg font-bold text-primary">€{pack.price.toFixed(2).replace('.', ',')}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-muted-foreground mt-4">
            <Info className="h-3.5 w-3.5 inline mr-1" />
            Een hoger maandplan is altijd voordeliger dan regelmatig bijkopen.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
          <h2 className="text-2xl font-bold text-center mb-8">Veelgestelde vragen</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-xl border bg-card overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between px-5 py-4 text-left cursor-pointer hover:bg-muted/30 transition-colors">
                  <span className="font-medium text-sm pr-4">{faq.q}</span>
                  {openFaq === i ? <ChevronUp className="h-4 w-4 shrink-0 text-muted-foreground" /> : <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground" />}
                </button>
                {openFaq === i && <div className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed border-t pt-4">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-3">Klaar om te starten?</h2>
          <p className="text-background/60 mb-8 max-w-md mx-auto">Begin gratis. Upgrade wanneer je er klaar voor bent.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" variant="secondary" className="cursor-pointer gap-2" asChild>
              <Link href="#"><Sparkles className="h-4 w-4" />Gratis beginnen</Link>
            </Button>
            <Button size="lg" className="cursor-pointer bg-white/10 text-white border border-white/30 hover:bg-white/20" asChild>
              <Link href="/contact">Demo aanvragen</Link>
            </Button>
          </div>
          <p className="text-background/40 text-xs mt-5">Alle prijzen exclusief 21% BTW · Maandelijks opzegbaar · Gratis .biz.nl domein</p>
        </div>
      </section>

    </PageLayout>
  )
}
