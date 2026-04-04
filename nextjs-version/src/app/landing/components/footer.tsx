"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Linkedin, Instagram, Heart } from 'lucide-react'

const newsletterSchema = z.object({
  email: z.string().email({ message: "Voer een geldig e-mailadres in." }),
})

const footerLinks = {
  product: [
    { name: 'Functies', href: '/features' },
    { name: 'Prijzen', href: '/pricing' },
    { name: 'Voor bureaus', href: '/agencies' },
    { name: 'Affiliate programma', href: '/affiliates' },
  ],
  company: [
    { name: 'Over ons', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
    { name: 'FAQ', href: '/#faq' },
  ],
  support: [
    { name: 'Helpcentrum', href: '/contact' },
    { name: 'Contact', href: '/contact' },
    { name: 'Status', href: '#' },
    { name: 'Affiliates', href: '/affiliates' },
  ],
  legal: [
    { name: 'Privacybeleid', href: '/privacy' },
    { name: 'Algemene voorwaarden', href: '/voorwaarden' },
    { name: 'Cookiebeleid', href: '/cookies' },
    { name: 'AVG', href: '/avg' },
  ],
}

const socialLinks = [
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'Instagram', href: '#', icon: Instagram },
]

export function LandingFooter() {
  const form = useForm<z.infer<typeof newsletterSchema>>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: { email: "" },
  })

  function onSubmit(values: z.infer<typeof newsletterSchema>) {
    console.log(values)
    form.reset()
  }

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Newsletter */}
        <div className="mb-16 rounded-2xl border bg-muted/30 p-8">
          <div className="mx-auto max-w-xl text-center">
            <h3 className="text-xl font-bold mb-2">Blijf op de hoogte</h3>
            <p className="text-muted-foreground text-sm mb-6">
              Ontvang tips over branding, updates en exclusieve aanbiedingen voor Nederlandse ondernemers.
            </p>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-2 max-w-sm mx-auto">
                <FormField control={form.control} name="email" render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormControl>
                      <Input type="email" placeholder="jouw@e-mail.nl" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <Button type="submit" className="cursor-pointer shrink-0">Aanmelden</Button>
              </form>
            </Form>
          </div>
        </div>

        {/* Links */}
        <div className="grid gap-8 grid-cols-2 lg:grid-cols-6">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground">
                <span className="text-background font-black text-sm">biz</span>
              </div>
              <span className="font-bold text-lg">.nl</span>
            </div>
            <p className="text-sm text-muted-foreground mb-5 max-w-xs leading-relaxed">
              Professionele merkidentiteit voor Nederlandse ondernemers. Van logo tot website, alles in één platform.
            </p>
            <div className="flex gap-2">
              {socialLinks.map(social => (
                <Button key={social.name} variant="outline" size="icon" className="h-8 w-8 cursor-pointer" asChild>
                  <a href={social.href} aria-label={social.name} target="_blank" rel="noopener noreferrer">
                    <social.icon className="h-3.5 w-3.5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Bedrijf</h4>
            <ul className="space-y-3">
              {footerLinks.company.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Juridisch</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <span>Gemaakt met</span>
            <Heart className="h-3.5 w-3.5 text-red-500 fill-current" />
            <span>in Nederland · © {new Date().getFullYear()} biz.nl</span>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href="/privacy" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="/voorwaarden" className="hover:text-foreground transition-colors">Voorwaarden</a>
            <a href="/cookies" className="hover:text-foreground transition-colors">Cookies</a>
            <a href="/avg" className="hover:text-foreground transition-colors">AVG</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
