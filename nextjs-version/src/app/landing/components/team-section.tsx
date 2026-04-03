"use client"

import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Briefcase, ShoppingBag, Coffee, Wrench, Camera, Users } from 'lucide-react'

const personas = [
  {
    icon: Briefcase,
    type: 'ZZP\'er & Freelancer',
    example: '"Als zelfstandig adviseur wil ik professioneel overkomen bij grote bedrijven."',
    result: 'Strak logo + LinkedIn-banner + digitaal visitekaartje in 10 minuten.'
  },
  {
    icon: ShoppingBag,
    type: 'Webshop eigenaar',
    example: '"Ik verkoop online maar mijn merk ziet er amateuristisch uit."',
    result: 'Volledige huisstijl + websitedesign + productfoto-templates.'
  },
  {
    icon: Coffee,
    type: 'Horeca & Retail',
    example: '"Mijn café heeft nog geen herkenbaar merk of sociale media aanwezigheid."',
    result: 'Logopakket + menukaart-stijl + Instagram templates klaar om te posten.'
  },
  {
    icon: Wrench,
    type: 'Ambacht & Techniek',
    example: '"Als loodgieter wil ik mijn bedrijfswagen en werkkleding voorzien van mijn logo."',
    result: 'Print-ready logo + autosticker-formaat + werkkleding print bestanden.'
  },
  {
    icon: Camera,
    type: 'Creatieven & Bureaus',
    example: '"Ik heb snel een merkpakket nodig voor een nieuw concept of klant."',
    result: 'Snelle AI-generatie + volledige export + aanpasbaar in eigen tools.'
  },
  {
    icon: Users,
    type: 'Startups & Scale-ups',
    example: '"We pitchen volgende week en hebben nog geen consistente huisstijl."',
    result: 'Investor-ready presentatiestijl + volledige merkdocumentatie.'
  }
]

export function TeamSection() {
  return (
    <section id="team" className="py-24 sm:py-32 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge variant="outline" className="mb-4">Voor elke ondernemer</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Herken jij jezelf hierin?
          </h2>
          <p className="text-lg text-muted-foreground">
            Of je nu een startende zzp'er bent of een groeiend bureau — biz.nl past bij jou.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {personas.map((persona, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                    <persona.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-sm">{persona.type}</h3>
                </div>
                <blockquote className="text-sm text-muted-foreground italic mb-4 leading-relaxed">
                  {persona.example}
                </blockquote>
                <div className="border-t pt-4">
                  <p className="text-xs font-medium text-foreground/70 mb-1">Biz.nl maakt:</p>
                  <p className="text-sm text-foreground leading-relaxed">{persona.result}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
