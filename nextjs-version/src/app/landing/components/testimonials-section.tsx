"use client"

import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Star } from 'lucide-react'

type Testimonial = {
  name: string
  role: string
  company: string
  quote: string
  initials: string
  stars: number
}

const testimonials: Testimonial[] = [
  {
    name: 'Marieke van den Berg',
    role: 'Eigenaar',
    company: 'Studio Marieke',
    initials: 'MB',
    stars: 5,
    quote: 'Binnen 10 minuten had ik een compleet merkpakket dat er echt professioneel uitziet. Mijn klanten denken dat ik duizenden euro\'s heb besteed aan een bureau!'
  },
  {
    name: 'Daan Hoekstra',
    role: 'ZZP\'er',
    company: 'Hoekstra IT',
    initials: 'DH',
    stars: 5,
    quote: 'Als technicus ben ik niet zo creatief. Biz.nl heeft precies begrepen wat ik bedoelde en een strak logo gemaakt dat perfect bij mijn doelgroep past.'
  },
  {
    name: 'Sarah de Wit',
    role: 'Oprichter',
    company: 'De Groene Winkel',
    initials: 'SW',
    stars: 5,
    quote: 'Het .biz.nl domein dat erbij zit is geweldig. Mijn webshop is er direct op live gegaan en alles klopt qua huisstijl. Aanrader voor elke ondernemer!'
  },
  {
    name: 'Pieter Janssen',
    role: 'Directeur',
    company: 'Janssen Installatie',
    initials: 'PJ',
    stars: 5,
    quote: 'We hadden al jaren een verouderd logo. In één middag hebben we ons complete merk vernieuwd. Het resultaat verraste ons enorm positief.'
  },
  {
    name: 'Lisa Bakker',
    role: 'Creatief directeur',
    company: 'Bakker & Co',
    initials: 'LB',
    stars: 5,
    quote: 'Als designbureau was ik sceptisch. Maar de kwaliteit van de AI-gegenereerde assets is indrukwekkend. We gebruiken het nu zelf voor snelle concepten.'
  },
  {
    name: 'Tom van der Linden',
    role: 'Marketeer',
    company: 'Linden Media',
    initials: 'TL',
    stars: 4,
    quote: 'De social media templates hebben ons zoveel tijd bespaard. Consistent branding over alle kanalen zonder er een grafisch ontwerper bij te betrekken.'
  },
  {
    name: 'Emma Vermeer',
    role: 'Ondernemer',
    company: 'Vermeer Coaching',
    initials: 'EV',
    stars: 5,
    quote: 'Ik ben coach, geen designer. Biz.nl geeft me het vertrouwen om professioneel te verschijnen bij grote bedrijven. De investering verdien ik elke maand terug.'
  },
  {
    name: 'Rik Smit',
    role: 'Founder',
    company: 'Smit Concepts',
    initials: 'RS',
    stars: 5,
    quote: 'Van de drie plannen die we hebben geprobeerd was het Zakelijk plan voor ons de perfecte keuze. Uitstekende prijs-kwaliteitverhouding.'
  },
  {
    name: 'Noor Visser',
    role: 'Kapper',
    company: 'Salon Noor',
    initials: 'NV',
    stars: 5,
    quote: 'Mijn salon heeft nu een website, Instagram-stijl en visitekaartjes die allemaal bij elkaar passen. Klanten vragen me altijd wie mijn designer is!'
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge variant="outline" className="mb-4">Ervaringen</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Wat Nederlandse ondernemers zeggen
          </h2>
          <p className="text-lg text-muted-foreground">
            Van zzp&apos;er tot groeiend bureau — zij bouwen hun merk met biz.nl.
          </p>
        </div>

        <div className="columns-1 gap-5 md:columns-2 md:gap-6 lg:columns-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="mb-5 break-inside-avoid shadow-none border hover:shadow-sm transition-shadow">
              <CardContent className="p-5">
                <div className="flex items-start gap-3 mb-3">
                  <Avatar className="h-10 w-10 shrink-0">
                    <AvatarFallback className="text-sm font-semibold bg-primary/10 text-primary">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role} · {testimonial.company}</p>
                  </div>
                </div>

                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: testimonial.stars }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <blockquote>
                  <p className="text-sm leading-relaxed text-muted-foreground">&ldquo;{testimonial.quote}&rdquo;</p>
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
