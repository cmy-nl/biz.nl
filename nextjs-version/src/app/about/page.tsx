import { PageLayout } from '@/components/page-layout'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Sparkles, Heart, Shield, Zap, Globe } from 'lucide-react'

const values = [
  { icon: Sparkles, title: 'AI op jouw maat', description: 'We geloven dat AI een hulpmiddel is, geen vervanging. Onze technologie begrijpt de Nederlandse markt en maakt merken die echt bij jou passen — geen generieke sjablonen.' },
  { icon: Heart, title: 'Gemaakt voor Nederland', description: 'Nederlandstalige support, Nederlandse betaalmethoden, NL-hosting en prijzen die passen bij het Nederlandse MKB. We zijn er voor de ondernemer op de hoek én de snelgroeiende startup.' },
  { icon: Shield, title: 'Jouw data, jouw merk', description: 'Alles wat je maakt is van jou. We slaan niets op zonder toestemming, werken conform de AVG en geven je altijd volledige exportrechten op je eigen merkbestanden.' },
  { icon: Zap, title: 'Snel en betrouwbaar', description: 'Geen wachttijden, geen gedoe. Jouw website en merk zijn direct live. We bouwen op robuuste infrastructuur zodat jouw merk 24/7 bereikbaar is.' },
]

const stats = [
  { value: '2.400+', label: 'Nederlandse merken gebouwd' },
  { value: '< 5 min', label: 'Gemiddelde bouwtijd' },
  { value: '4.8/5', label: 'Klanttevredenheid' },
  { value: '98%', label: 'Zou ons aanbevelen' },
]

export default function AboutPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <Badge variant="outline" className="mb-6">Over biz.nl</Badge>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6 leading-tight">
              Elk Nederlands bedrijf verdient een{' '}
              <span className="text-primary">professioneel merk</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              We begonnen biz.nl omdat we zagen hoe moeilijk het was voor kleine ondernemers om professioneel over te komen. Een goed logo kostte duizenden euro&apos;s. Een website nog meer. Terwijl grote bedrijven er moeiteloos uitzagen.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Dat moest anders. Met biz.nl bouw je in minuten een compleet merkpakket — voor een prijs die past bij een startende zzp&apos;er én een groeiend bureau.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl font-extrabold text-foreground mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Waarom biz.nl?</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Nederland telt meer dan 1,5 miljoen zzp&apos;ers en kleine bedrijven. De meesten hebben een geweldig product of dienst — maar een merk dat daar niet bij past. Een vaag logo, een verouderde website, inconsistente social media. Niet omdat ze het niet willen, maar omdat het te duur, te ingewikkeld of te tijdrovend was.
                </p>
                <p>
                  Wij hebben biz.nl gebouwd om dat te veranderen. Door AI in te zetten voor het creatieve werk, kunnen we in minuten leveren wat een bureau weken zou kosten. Jij vertelt jouw verhaal, wij bouwen jouw merk.
                </p>
                <p>
                  Het resultaat: een professioneel logo, een werkende website op jouw eigen biz.nl domein, social media templates, printables en meer — allemaal consistent in jouw stijl.
                </p>
              </div>
            </div>
            <div className="rounded-2xl border bg-muted/20 p-8">
              <svg viewBox="0 0 400 320" className="w-full" fill="none">
                <rect width="400" height="320" rx="16" fill="currentColor" className="text-muted/20" />
                <rect x="40" y="40" width="140" height="100" rx="10" fill="currentColor" className="text-primary/15" />
                <circle cx="110" cy="80" r="22" fill="currentColor" className="text-primary/30" />
                <rect x="60" y="112" width="100" height="8" rx="3" fill="currentColor" className="text-muted/40" />
                <rect x="220" y="40" width="140" height="100" rx="10" fill="currentColor" className="text-muted/20" />
                <rect x="232" y="60" width="116" height="50" rx="6" fill="currentColor" className="text-muted/30" />
                <rect x="232" y="118" width="80" height="8" rx="3" fill="currentColor" className="text-muted/40" />
                <rect x="40" y="160" width="320" height="120" rx="10" fill="currentColor" className="text-muted/15" />
                <rect x="56" y="178" width="200" height="10" rx="4" fill="currentColor" className="text-foreground/20" />
                <rect x="56" y="196" width="280" height="8" rx="3" fill="currentColor" className="text-muted/30" />
                <rect x="56" y="210" width="240" height="8" rx="3" fill="currentColor" className="text-muted/30" />
                <rect x="56" y="224" width="260" height="8" rx="3" fill="currentColor" className="text-muted/30" />
                <rect x="56" y="248" width="100" height="22" rx="6" fill="currentColor" className="text-primary/30" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Waar we voor staan</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Onze waarden zijn niet voor de bühne — ze zitten in elk onderdeel van het platform.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="rounded-2xl border bg-card p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 mb-4">
                  <v.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <Globe className="h-10 w-10 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6">Onze missie</h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            &ldquo;Elk Nederlands bedrijf — groot of klein — verdient een merk waarmee het trots naar buiten treedt. Wij maken dat toegankelijk voor iedereen.&rdquo;
          </p>
          <Button size="lg" className="cursor-pointer gap-2" asChild>
            <Link href="/pricing">
              <Sparkles className="h-4 w-4" />
              Begin gratis vandaag
            </Link>
          </Button>
        </div>
      </section>
    </PageLayout>
  )
}
