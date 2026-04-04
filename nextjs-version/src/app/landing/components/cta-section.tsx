"use client"

import { ArrowRight, Sparkles, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

export function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-foreground text-background dark:bg-card dark:text-foreground dark:border-t">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center space-y-8">

          <div className="flex flex-col items-center gap-4">
            <Badge variant="outline" className="border-background/30 text-background/80 dark:border-border dark:text-muted-foreground gap-2">
              <Sparkles className="h-3 w-3" />
              Klaar om te beginnen?
            </Badge>

            <div className="flex items-center gap-4 text-sm text-background/60 dark:text-muted-foreground">
              <span>2.400+ Nederlandse bedrijven</span>
              <Separator orientation="vertical" className="h-4 bg-background/20" />
              <span>Gemiddeld 4.8 sterren</span>
              <Separator orientation="vertical" className="h-4 bg-background/20" />
              <span>14 dagen garantie</span>
            </div>
          </div>

          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-balance">
            Zet vandaag nog jouw merk op de kaart
          </h2>

          <p className="text-lg text-background/70 dark:text-muted-foreground max-w-xl mx-auto">
            Beschrijf jouw bedrijf en wij bouwen jouw complete merkidentiteit — inclusief website op een gratis <strong className="text-background dark:text-foreground">jouw-naam.biz.nl</strong> domein.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="cursor-pointer gap-2 px-8 text-base">
              <Sparkles className="h-4 w-4" />
              Gratis merk maken
              <ArrowRight className="h-4 w-4" />
            </Button>
<Button size="lg" variant="outline" className="cursor-pointer px-8 text-base border-white/40 text-white hover:bg-white/10">              <Globe className="h-4 w-4 mr-2" />
              Bekijk voorbeelden
            </Button>
          </div>

          <p className="text-sm text-background/50 dark:text-muted-foreground">
            Geen creditcard nodig · Annuleer wanneer je wil · Nederlandse support
          </p>
        </div>
      </div>
    </section>
  )
}
