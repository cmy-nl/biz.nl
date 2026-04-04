"use client"

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Sparkles, Globe, Share2, Printer, ArrowRight } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'Jouw logo in vijf minuten',
    description: 'Geen designkennis, geen bureau, geen weken wachten. Vertel wat je doet — AI maakt een uniek logo dat bij jou past. Inclusief alle formaten voor print en digitaal.',
    tag: 'Logo & merkidentiteit',
  },
  {
    icon: Globe,
    title: 'Direct online met jouw eigen adres',
    description: 'Elke klant googelt je. Met biz.nl heb je direct een professionele website op een eigen adres — zonder technische kennis. Jij schrijft, wij publiceren.',
    tag: 'Website & domein',
  },
  {
    icon: Share2,
    title: 'Nooit meer nadenken over social media',
    description: 'AI schrijft berichten in jouw stijl, maakt afbeeldingen in jouw kleuren en plant alles in. Jij hoeft alleen nog maar op &ldquo;plaatsen&rdquo; te klikken.',
    tag: 'Social media',
  },
  {
    icon: Printer,
    title: 'Visitekaartjes die indruk maken',
    description: 'Print-klare bestanden voor visitekaartjes, flyers en briefpapier — direct te downloaden en te bestellen bij de drukker. Alles automatisch in jouw huisstijl.',
    tag: 'Print & drukwerk',
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-5">Alles inbegrepen</Badge>
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">
            Eén platform. Alles wat je nodig hebt.
          </h2>
          <p className="text-xl text-muted-foreground max-w-xl mx-auto">
            Geen losse tools meer. Geen gedoe met meerdere abonnementen. Biz.nl geeft je alles in één pakket.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto mb-12">
          {features.map((feature, i) => (
            <div key={i} className="rounded-2xl border bg-card p-7 hover:shadow-md transition-shadow group">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <Badge variant="outline" className="text-xs">{feature.tag}</Badge>
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: feature.description }} />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" className="cursor-pointer gap-2" asChild>
            <Link href="/features">
              Alle functies bekijken
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
