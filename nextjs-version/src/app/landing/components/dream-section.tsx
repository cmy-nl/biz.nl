"use client"

import { Badge } from '@/components/ui/badge'

const transformations = [
  {
    before: 'Een website die ik zelf in elkaar heb geknutseld',
    after: 'Een professionele site die klanten direct vertrouwen',
    emoji: '🌐',
  },
  {
    before: 'Een logo dat ik gratis heb gedownload',
    after: 'Een uniek logo dat echt bij mij past',
    emoji: '✦',
  },
  {
    before: 'Willekeurige posts op Instagram zonder strategie',
    after: 'Consistente content in mijn eigen stijl',
    emoji: '📱',
  },
  {
    before: 'Visitekaartjes die ik me voor schaam',
    after: 'Drukwerk dat indruk maakt bij de eerste ontmoeting',
    emoji: '🖨️',
  },
]

const stories = [
  {
    name: 'Marieke',
    job: 'Personal trainer, Rotterdam',
    quote: 'Ik was bang dat klanten me niet serieus zouden nemen. Na biz.nl belden ze zelf.',
    result: 'Van 3 naar 12 klanten in 2 maanden',
    initials: 'MB',
  },
  {
    name: 'Daan',
    job: 'Loodgieter, Utrecht',
    quote: 'Ik had geen idee wat branding was. Nu heeft iedereen mijn logo op het busje en bellen ze me.',
    result: 'Direct herkend in zijn buurt',
    initials: 'DH',
  },
  {
    name: 'Sarah',
    job: 'Huidtherapeut, Amsterdam',
    quote: 'Mijn concurrenten betaalden duizenden euro\'s aan bureaus. Ik had hetzelfde resultaat in 20 minuten.',
    result: 'Complete huisstijl voor €14,95/maand',
    initials: 'SV',
  },
]

export function DreamSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Transformation headline */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <Badge variant="outline" className="mb-5">Het verschil</Badge>
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-6 leading-tight">
            Jouw bedrijf verdient beter
            <span className="text-primary"> dan een amateursuitstraling</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Klanten kiezen op gevoel. Een professioneel merk wekt vertrouwen — nog voordat je één woord hebt gezegd. Biz.nl geeft je dat merk, vandaag nog.
          </p>
        </div>

        {/* Before/After grid */}
        <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto mb-24">
          {transformations.map((t, i) => (
            <div key={i} className="rounded-2xl border bg-card overflow-hidden">
              <div className="px-5 py-4 bg-muted/30 border-b">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="text-base">{t.emoji}</span>
                  <span className="line-through">{t.before}</span>
                </div>
              </div>
              <div className="px-5 py-4">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <span className="text-primary text-base">✓</span>
                  {t.after}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Real stories */}
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-wider font-medium">Wat het oplevert voor echte ondernemers</p>
          <div className="grid lg:grid-cols-3 gap-6">
            {stories.map((s, i) => (
              <div key={i} className="rounded-2xl border bg-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-11 w-11 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary shrink-0">
                    {s.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{s.name}</p>
                    <p className="text-xs text-muted-foreground">{s.job}</p>
                  </div>
                </div>
                <blockquote className="text-sm leading-relaxed text-muted-foreground mb-4">
                  &ldquo;{s.quote}&rdquo;
                </blockquote>
                <div className="rounded-lg bg-primary/5 border border-primary/10 px-3 py-2">
                  <p className="text-xs font-semibold text-primary">{s.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
