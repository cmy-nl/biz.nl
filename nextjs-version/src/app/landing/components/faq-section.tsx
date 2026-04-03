"use client"

import { CircleHelp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'

const faqItems = [
  {
    value: 'item-1',
    question: 'Wat is inbegrepen bij het gratis .biz.nl domein?',
    answer: 'Bij elk betaald plan ontvang je een gratis subdomein op jouw-naam.biz.nl. Je kunt je eigen domeinnaam (bijv. jouwnaam.nl) ook koppelen bij het Professioneel-plan. Het domein is inclusief SSL-certificaat en hosting.'
  },
  {
    value: 'item-2',
    question: 'Hoe werkt de AI merkgenerator precies?',
    answer: 'Je beschrijft jouw bedrijf: wat je doet, voor wie, en welke sfeer je wilt uitstralen. Onze AI analyseert dit en genereert een complete merkidentiteit: logo, kleurenpalet, typografie, website en social media templates. Alles is daarna volledig aanpasbaar.'
  },
  {
    value: 'item-3',
    question: 'Kan ik mijn logo en bestanden downloaden?',
    answer: 'Ja, alle bestanden zijn van jou. Je downloadt je logo in SVG, PNG en PDF-formaat. Alle social media templates zijn exporteerbaar. Bij het Professioneel-plan ontvang je ook print-ready bestanden voor drukwerk.'
  },
  {
    value: 'item-4',
    question: 'Wat als ik niet tevreden ben met het resultaat?',
    answer: 'Je kunt zo vaak als je wilt opnieuw genereren totdat je tevreden bent. Lukt het niet naar wens? Dan helpt ons support-team je persoonlijk verder. We bieden ook een 14-daagse niet-goed-geld-terug-garantie.'
  },
  {
    value: 'item-5',
    question: 'Is er een gratis proefperiode?',
    answer: 'We bieden geen gratis plan, maar wel een 14-daagse geld-terug-garantie op alle betaalde plannen. Zo kun je het zonder risico uitproberen. Geen creditcard nodig om te starten.'
  },
  {
    value: 'item-6',
    question: 'Kan ik op elk moment opzeggen?',
    answer: 'Ja, je kunt op elk moment opzeggen zonder extra kosten. Bij maandelijkse plannen loop je door tot het einde van de betaalperiode. Je behoudt altijd toegang tot alle bestanden die je al hebt gegenereerd en gedownload.'
  },
  {
    value: 'item-7',
    question: 'Kan ik meerdere merken beheren?',
    answer: 'Bij het Professioneel-plan kun je meerdere merkvarianten aanmaken, ideaal voor bureaus of ondernemers met meerdere bedrijven. Neem contact op als je een maatwerkoplossing nodig hebt.'
  },
  {
    value: 'item-8',
    question: 'Zijn de prijzen exclusief of inclusief BTW?',
    answer: 'Alle getoonde prijzen zijn exclusief 21% BTW. Als ondernemer kun je de BTW in de meeste gevallen terugvragen. Op de factuur staat de BTW altijd duidelijk vermeld.'
  }
]

export function FaqSection() {
  return (
    <section id="faq" className="py-24 sm:py-32 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge variant="outline" className="mb-4">Veelgestelde vragen</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Alles wat je wilt weten
          </h2>
          <p className="text-lg text-muted-foreground">
            Staat jouw vraag er niet bij? Ons team helpt je graag verder.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqItems.map(item => (
              <AccordionItem key={item.value} value={item.value} className="rounded-xl border bg-card overflow-hidden">
                <AccordionTrigger className="cursor-pointer items-center gap-4 px-5 py-4 hover:no-underline hover:bg-muted/30 data-[state=open]:border-b transition-colors">
                  <div className="flex items-center gap-4 text-left">
                    <div className="bg-primary/10 text-primary flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
                      <CircleHelp className="h-4 w-4" />
                    </div>
                    <span className="font-medium text-sm sm:text-base">{item.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-5 pb-4 pt-3">
                  <p className="text-muted-foreground text-sm leading-relaxed pl-12">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Nog vragen? We helpen je graag.</p>
            <Button className="cursor-pointer" asChild>
              <a href="#contact">Neem contact op</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
