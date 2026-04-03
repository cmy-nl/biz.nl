"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Mail, MessageCircle, Phone } from 'lucide-react'

const contactFormSchema = z.object({
  firstName: z.string().min(2, { message: "Voornaam moet minimaal 2 tekens bevatten." }),
  lastName: z.string().min(2, { message: "Achternaam moet minimaal 2 tekens bevatten." }),
  email: z.string().email({ message: "Voer een geldig e-mailadres in." }),
  subject: z.string().min(5, { message: "Onderwerp moet minimaal 5 tekens bevatten." }),
  message: z.string().min(10, { message: "Bericht moet minimaal 10 tekens bevatten." }),
})

export function ContactSection() {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { firstName: "", lastName: "", email: "", subject: "", message: "" },
  })

  function onSubmit(values: z.infer<typeof contactFormSchema>) {
    console.log(values)
    form.reset()
  }

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge variant="outline" className="mb-4">Contact</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Wij helpen je graag verder
          </h2>
          <p className="text-lg text-muted-foreground">
            Heb je vragen of wil je meer weten over biz.nl? Ons Nederlandse team staat voor je klaar.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-4 order-2 lg:order-1">
            <Card className="hover:shadow-sm transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-base">
                  <MessageCircle className="h-4 w-4 text-primary" />
                  Live chat
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Maandag t/m vrijdag bereikbaar van 9:00 tot 17:00 via live chat.
                </p>
                <Button variant="outline" size="sm" className="cursor-pointer">Chat starten</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-sm transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-base">
                  <Mail className="h-4 w-4 text-primary" />
                  E-mail
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  We beantwoorden je e-mail binnen 1 werkdag.
                </p>
                <Button variant="outline" size="sm" className="cursor-pointer" asChild>
                  <a href="mailto:hallo@biz.nl">hallo@biz.nl</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-sm transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-base">
                  <Phone className="h-4 w-4 text-primary" />
                  Telefoon
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Telefonisch bereikbaar op werkdagen van 9:00 tot 17:00.
                </p>
                <Button variant="outline" size="sm" className="cursor-pointer">Terugbelverzoek</Button>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2 order-1 lg:order-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Stuur ons een bericht
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <FormField control={form.control} name="firstName" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Voornaam</FormLabel>
                          <FormControl><Input placeholder="Jan" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="lastName" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Achternaam</FormLabel>
                          <FormControl><Input placeholder="de Vries" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                    </div>
                    <FormField control={form.control} name="email" render={({ field }) => (
                      <FormItem>
                        <FormLabel>E-mailadres</FormLabel>
                        <FormControl><Input type="email" placeholder="jan@bedrijf.nl" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="subject" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Onderwerp</FormLabel>
                        <FormControl><Input placeholder="Vraag over mijn abonnement..." {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="message" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Bericht</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Hoe kunnen we je helpen?" rows={6} className="min-h-32 resize-none" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <Button type="submit" className="w-full cursor-pointer">Bericht versturen</Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
