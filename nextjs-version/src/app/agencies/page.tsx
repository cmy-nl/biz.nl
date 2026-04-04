import { PageLayout } from '@/components/page-layout'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Layers, Zap, Euro, Users, ArrowRight, Check, Sparkles } from 'lucide-react'

const benefits = [
  {
    icon: Layers,
    title: 'Meerdere merken, één dashboard',
    description: 'Beheer al je klantmerken vanuit één overzicht. Per klant een eigen workspace met eigen login, huisstijl en bestanden. Geen gedeelde accounts, geen chaos.',
  },
  {
    icon: Zap,
    title: 'Van briefing naar merk in minuten',
    description: 'Stop met weken wachten op ontwerpers. Klant geeft briefing, jij voert in, AI levert binnen 5 minuten een compleet merkpakket. Jij doet de finishing touch.',
  },
  {
    icon: Euro,
    title: 'Verhoog je marge per klant',
    description: 'Bied merkbouw aan als dienst bovenop je bestaande pakket. Jij factureert je klant, wij leveren het platform. De marge is volledig van jou.',
  },
  {
    icon: Users,
    title: 'White-label opties beschikbaar',
    description: 'Voor grote bureaus bieden we white-label mogelijkheden: het platform onder jouw eigen merknaam, met jouw logo en kleuren. Neem contact op voor maatwerk.',
  },
]

const plans = [
  { name: 'Pro', price: '€29,95', workspaces: 10, credits: '400 AI-tegoed/maand', ideal: 'Bureaus t/m 10 klanten' },
  { name: 'Business', price: '€59,95', workspaces: 25, credits: '1.000 AI-tegoed/maand', ideal: 'Middelgrote bureaus', popular: true },
  { name: 'Agency', price: '€99,95', workspaces: 50, credits: '2.000 AI-tegoed/maand', ideal: "Bureau's op schaal" },
]

const useCases = [
  { title: 'Onboarding nieuwe klanten', description: 'Nieuwe klant aangenomen? Bouw het merk in de eerste meeting al samen. Direct resultaat, direct enthousiasme.' },
  { title: 'Rebranding opdrachten', description: 'Klant wil een nieuw merk? Gebruik biz.nl voor snelle concepten en iteraties. Lever 3x zoveel varianten in dezelfde tijd.' },
  { title: 'Social media management', description: 'Beheer je de social kanalen van klanten? Genereer posts, templates en strategie direct vanuit het merk.' },
  { title: 'Kleine klanten winstgevend', description: 'Klanten met een klein budget worden eindelijk winstgevend als de productietijd wegvalt. Geen uurwerk, wel resultaat.' },
]

export default function AgenciesPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-primary/5" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <Badge variant="outline" className="mb-6">Voor bureaus & agencies</Badge>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6 leading-tight">
              Lever meer merken,{' '}
              <span className="text-primary">in minder tijd</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              Biz.nl is gebouwd voor bureaus die meerdere klantmerken beheren. Sneller leveren, hogere marges, meer tevreden klanten — zonder extra personeel.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="cursor-pointer gap-2" asChild>
                <Link href="/pricing">
                  <Sparkles className="h-4 w-4" />
                  Start met een Agency plan
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="cursor-pointer" asChild>
                <Link href="/contact">Vraag een demo aan</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Waarom bureaus kiezen voor biz.nl</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {benefits.map((b, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <b.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{b.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{b.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Hoe bureaus biz.nl gebruiken</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Elk bureau is anders, maar de voordelen zijn hetzelfde: meer output, minder tijd.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((uc, i) => (
              <div key={i} className="rounded-2xl border bg-card p-6">
                <div className="text-3xl font-black text-primary/15 mb-3 leading-none">0{i + 1}</div>
                <h3 className="font-semibold mb-2 text-sm">{uc.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{uc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Plannen voor bureaus</h2>
            <p className="text-muted-foreground">Kies het plan dat past bij jouw klantenaantal. Alle functies altijd inbegrepen.</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {plans.map((plan, i) => (
              <div key={i} className={`rounded-2xl border p-6 ${plan.popular ? 'border-primary/50 bg-card shadow-xl ring-1 ring-primary/20' : 'bg-card'}`}>
                {plan.popular && <Badge className="mb-3 text-xs">Populair bij bureaus</Badge>}
                <h3 className="font-bold text-xl mb-1">{plan.name}</h3>
                <p className="text-xs text-muted-foreground mb-4">{plan.ideal}</p>
                <p className="text-3xl font-extrabold mb-1">{plan.price}</p>
                <p className="text-xs text-muted-foreground mb-6">/maand excl. BTW</p>
                <ul className="space-y-2 mb-6">
                  {[
                    `${plan.workspaces} klant-workspaces`,
                    plan.credits,
                    'Volledig platform',
                    'Gratis .biz.nl domeinen',
                  ].map((f, fi) => (
                    <li key={fi} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary shrink-0" strokeWidth={2.5} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button variant={plan.popular ? 'default' : 'outline'} size="sm" className="w-full cursor-pointer" asChild>
                  <Link href="/pricing">{plan.name} kiezen</Link>
                </Button>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6">
            Meer dan 50 workspaces nodig?{' '}
            <Link href="/contact" className="text-primary hover:underline">Neem contact op</Link> voor een maatwerkaanbod.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Klaar om meer te leveren?</h2>
          <p className="text-background/70 mb-8 max-w-xl mx-auto">Start vandaag met een Agency plan en zie hoe snel je meerdere klantmerken kunt bouwen.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" variant="secondary" className="cursor-pointer gap-2" asChild>
              <Link href="/pricing">
                Agency plan bekijken
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="cursor-pointer border-background/30 text-background hover:bg-background/10" asChild>
              <Link href="/contact">Demo aanvragen</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
