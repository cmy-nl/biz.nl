"use client"

import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { CardDecorator } from '@/components/ui/card-decorator'
import { Sparkles, Shield, Rocket, Heart } from 'lucide-react'

const values = [
  {
    icon: Sparkles,
    title: 'AI op jouw maat',
    description: 'Onze technologie begrijpt de Nederlandse markt en maakt merken die echt bij jou passen.'
  },
  {
    icon: Shield,
    title: 'Betrouwbaar & veilig',
    description: 'Jouw data blijft van jou. We werken conform de AVG en slaan niets op zonder toestemming.'
  },
  {
    icon: Rocket,
    title: 'Direct online',
    description: 'Geen wachttijden. Jouw website en merk zijn direct live zodra je klaar bent.'
  },
  {
    icon: Heart,
    title: 'Gemaakt voor Nederland',
    description: 'Nederlandstalige support, Nederlandse betaalmethoden en NL-hosting inbegrepen.'
  }
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-4xl text-center mb-16">
          <Badge variant="outline" className="mb-4">Over biz.nl</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
            Professioneel uitstralen hoeft niet duur te zijn
          </h2>
          <p className="text-lg text-muted-foreground">
            Wij geloven dat elk Nederlands bedrijf — groot of klein — een sterk merk verdient.
            Daarom hebben we een platform gebouwd dat het voor iedereen toegankelijk maakt.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {values.map((value, index) => (
            <Card key={index} className="group shadow-xs py-2 hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center">
                  <CardDecorator>
                    <value.icon className="h-6 w-6" aria-hidden />
                  </CardDecorator>
                  <h3 className="mt-6 font-semibold text-balance">{value.title}</h3>
                  <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{value.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
