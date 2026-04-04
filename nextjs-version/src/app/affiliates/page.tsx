import { PageLayout } from '@/components/page-layout'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Euro, Users, TrendingUp, Link2, Gift, BarChart2, Check, ArrowRight } from 'lucide-react'

const howItWorks = [
  { step: '01', title: 'Meld je aan', description: 'Registreer je gratis als biz.nl affiliate via het partnerportaal. Geen kosten, geen minimale omzet.' },
  { step: '02', title: 'Deel jouw link', description: 'Je krijgt een unieke referral-link. Deel hem via social media, je website, nieuwsbrief of persoonlijk advies.' },
  { step: '03', title: 'Klant doet aankoop', description: 'Wanneer iemand via jouw link een betaald plan afneemt, wordt dat automatisch aan jouw account gekoppeld.' },
  { step: '04', title: 'Jij verdient', description: 'Je ontvangt maandelijks je commissie per bank — zolang de klant actief blijft.' },
]

const tiers = [
  { name: 'Starter Affiliate', referrals: '1-9 actieve klanten', commission: '20%', recurring: 'Ja, maandelijks', payout: 'Per bank, maandelijks', features: ['Unieke referral-link', 'Dashboard met statistieken', 'Marketing materialen'] },
  { name: 'Pro Affiliate', referrals: '10-49 actieve klanten', commission: '25%', recurring: 'Ja, maandelijks', payout: 'Per bank, maandelijks', features: ['Alles van Starter', 'Prioriteit support', 'Co-marketing mogelijkheden'], popular: true },
  { name: 'Partner', referrals: '50+ actieve klanten', commission: 'Maatwerk', recurring: 'Ja, maandelijks', payout: 'Maatwerk afspraken', features: ['Alles van Pro Affiliate', 'Dedicated accountmanager', 'Exclusieve kortingscodes', 'White-label opties'] },
]

const whoIsItFor = [
  { icon: Users, title: 'Content creators & bloggers', description: 'Schrijf je over ondernemen, marketing of branding? Jouw lezers zijn potentiële biz.nl klanten.' },
  { icon: TrendingUp, title: 'Marketingbureaus & consultants', description: 'Adviseer je klanten over hun merk? Verdien ook als ze dat merk bouwen met biz.nl.' },
  { icon: Link2, title: 'Webdesigners & developers', description: 'Verwijs klanten die geen volledig maatwerk project nodig hebben maar wel een professioneel merk willen.' },
  { icon: Gift, title: 'Community managers', description: 'Beheer je een ondernemersgroep, Facebook groep of Discord? Jouw leden zijn je doelgroep.' },
]

export default function AffiliatesPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-primary/5" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <Badge variant="outline" className="mb-6">Affiliate programma</Badge>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6 max-w-3xl mx-auto">
            Verdien aan elk merk dat jij helpt bouwen
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Verwijs ondernemers naar biz.nl en verdien tot <strong className="text-foreground">25% terugkerende commissie</strong> — elke maand opnieuw, zolang de klant actief blijft.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
            <Button size="lg" className="cursor-pointer gap-2" asChild>
              <Link href="#">
                <Euro className="h-4 w-4" />
                Word affiliate — gratis aanmelden
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="cursor-pointer" asChild>
              <Link href="#hoe-werkt-het">Meer informatie</Link>
            </Button>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto">
            {[
              { value: '20-25%', label: 'Commissie per verkoop' },
              { value: 'Maandelijks', label: 'Terugkerend inkomen' },
              { value: '0 kosten', label: 'Gratis deelnemen' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl font-extrabold text-primary">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="hoe-werkt-het" className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4">Hoe werkt het?</h2>
            <p className="text-muted-foreground">In vier stappen van aanmelding naar maandelijks inkomen.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, i) => (
              <div key={i} className="relative">
                {i < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-full w-full h-px border-t border-dashed border-border z-0" style={{ width: 'calc(100% - 3rem)', left: 'calc(50% + 1.5rem)' }} />
                )}
                <div className="relative bg-card rounded-2xl border p-6">
                  <div className="text-4xl font-black text-primary/15 mb-3 leading-none">{step.step}</div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who is it for */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Voor wie is dit programma?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Je hoeft geen grote influencer te zijn. Als jij mensen kent die een merk nodig hebben, past dit bij jou.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whoIsItFor.map((item, i) => (
              <div key={i} className="rounded-2xl border bg-card p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 mb-4">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold mb-2 text-sm">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Commissie per tier</h2>
            <p className="text-muted-foreground">Hoe meer klanten je verwijst, hoe meer je verdient.</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {tiers.map((tier, i) => (
              <div key={i} className={`rounded-2xl border p-6 ${tier.popular ? 'border-primary/50 bg-card shadow-xl ring-1 ring-primary/20' : 'bg-card'}`}>
                {tier.popular && <Badge className="mb-3 text-xs">Meest gekozen</Badge>}
                <h3 className="font-bold text-lg mb-1">{tier.name}</h3>
                <p className="text-xs text-muted-foreground mb-4">{tier.referrals}</p>
                <div className="text-3xl font-extrabold text-primary mb-1">{tier.commission}</div>
                <p className="text-xs text-muted-foreground mb-6">commissie per verkoop</p>
                <ul className="space-y-2 mb-6">
                  {tier.features.map((f, fi) => (
                    <li key={fi} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary shrink-0" strokeWidth={2.5} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button variant={tier.popular ? 'default' : 'outline'} size="sm" className="w-full cursor-pointer" asChild>
                  <Link href="#">Aanmelden</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-4 text-center">
          <BarChart2 className="h-10 w-10 text-background/60 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Klaar om te verdienen?</h2>
          <p className="text-background/70 mb-8 max-w-xl mx-auto">Meld je gratis aan en begin vandaag nog met verwijzen. Geen minimale omzet, geen verplichtingen.</p>
          <Button size="lg" variant="secondary" className="cursor-pointer gap-2" asChild>
            <Link href="#">
              Word affiliate — het is gratis
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </PageLayout>
  )
}
