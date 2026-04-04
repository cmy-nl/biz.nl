"use client"

import { PageLayout } from '@/components/page-layout'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, MessageCircle, Phone, Clock } from 'lucide-react'
import { useState } from 'react'

const contactOptions = [
  { icon: MessageCircle, title: 'Live chat', description: 'Direct antwoord van ons team. Bereikbaar op werkdagen van 9:00 tot 17:00.', action: 'Chat starten', href: '#' },
  { icon: Mail, title: 'E-mail', description: 'We beantwoorden je e-mail binnen één werkdag.', action: 'hallo@biz.nl', href: 'mailto:hallo@biz.nl' },
  { icon: Phone, title: 'Terugbellen', description: 'Laat je nummer achter en we bellen je zo snel mogelijk terug.', action: 'Terugbelverzoek', href: '#' },
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-16 sm:py-20 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-4">Contact</Badge>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">Wij helpen je graag</h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Heb je een vraag, wil je een demo of heb je hulp nodig met je merk? Ons Nederlandse team staat voor je klaar.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">

            {/* Contact options */}
            <div className="space-y-4">
              {contactOptions.map((opt, i) => (
                <div key={i} className="rounded-2xl border bg-card p-5 hover:shadow-sm transition-shadow">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 mb-3">
                    <opt.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1">{opt.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{opt.description}</p>
                  <a href={opt.href} className="text-sm text-primary hover:underline font-medium cursor-pointer">{opt.action}</a>
                </div>
              ))}

              <div className="rounded-2xl border bg-muted/30 p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted mb-3">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                </div>
                <h3 className="font-semibold mb-1 text-sm">Openingstijden</h3>
                <div className="text-xs text-muted-foreground space-y-1">
                  <p>Maandag t/m vrijdag: 9:00 – 17:00</p>
                  <p>Zaterdag: Gesloten</p>
                  <p>Zondag: Gesloten</p>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl border bg-card p-6 sm:p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="text-4xl mb-4">✓</div>
                    <h3 className="text-xl font-bold mb-2">Bericht ontvangen!</h3>
                    <p className="text-muted-foreground">We nemen binnen één werkdag contact met je op.</p>
                  </div>
                ) : (
                  <>
                    <h2 className="text-xl font-bold mb-6">Stuur ons een bericht</h2>
                    <form onSubmit={e => { e.preventDefault(); setSubmitted(true) }} className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium mb-1.5 block">Voornaam</label>
                          <Input placeholder="Jan" required />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-1.5 block">Achternaam</label>
                          <Input placeholder="de Vries" required />
                        </div>
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1.5 block">E-mailadres</label>
                        <Input type="email" placeholder="jan@bedrijf.nl" required />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1.5 block">Onderwerp</label>
                        <Input placeholder="Vraag over mijn abonnement..." required />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1.5 block">Bericht</label>
                        <Textarea placeholder="Hoe kunnen we je helpen?" rows={5} className="resize-none" required />
                      </div>
                      <Button type="submit" className="w-full cursor-pointer">Bericht versturen</Button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
