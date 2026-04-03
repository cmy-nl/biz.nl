"use client"

import { useState } from 'react'
import { ArrowRight, Sparkles, Zap, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { DotPattern } from '@/components/dot-pattern'

const promptExamples = [
  'Een duurzame koffiebar in Amsterdam voor millennials...',
  'Een creatief marketingbureau in Utrecht...',
  'Een online kledingwinkel voor Nederlandse vrouwen...',
  'Een technisch installatiebedrijf in Rotterdam...',
  'Een biologische bakkerij in Groningen...',
]

export function HeroSection() {
  const [prompt, setPrompt] = useState('')
  const [placeholderIndex, setPlaceholderIndex] = useState(0)

  return (
    <section id="hero" className="relative overflow-hidden pt-16 pb-24 sm:pt-24 sm:pb-32">
      {/* Background */}
      <div className="absolute inset-0">
        <DotPattern className="opacity-40" size="md" fadeStyle="ellipse" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/8 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="mx-auto max-w-4xl text-center">

          {/* Announcement badge */}
          <div className="mb-8 flex justify-center">
            <Badge variant="outline" className="px-4 py-1.5 gap-2 text-sm">
              <Zap className="w-3.5 h-3.5 fill-current text-primary" />
              Jouw merk in minuten klaar
              <ArrowRight className="w-3.5 h-3.5" />
            </Badge>
          </div>

          {/* Headline */}
          <h1 className="mb-6 text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl leading-[1.1]">
            Jouw bedrijf verdient
            <span className="relative mx-3 inline-block">
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                een sterk merk
              </span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 8.5C60 3 120 2 150 3.5C180 5 240 9 298 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-primary/40"/>
              </svg>
            </span>
          </h1>

          {/* Subheading */}
          <p className="mx-auto mb-12 max-w-2xl text-lg text-muted-foreground sm:text-xl leading-relaxed">
            Beschrijf jouw bedrijf en wij maken binnen enkele minuten een compleet merkpakket.
            Logo, website, social media en visitekaartjes — alles in jouw stijl. Inclusief een gratis <strong className="text-foreground">jouw-naam.biz.nl</strong> domein.
          </p>

          {/* Prompt Box — the hero CTA */}
          <div className="mx-auto max-w-2xl mb-8">
            <div className="relative rounded-2xl border-2 border-border bg-background/80 backdrop-blur-sm shadow-2xl shadow-primary/5 focus-within:border-primary transition-colors duration-200">
              <div className="flex items-start gap-3 p-4">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Sparkles className="h-4 w-4 text-primary" />
                </div>
                <textarea
                  value={prompt}
                  onChange={e => setPrompt(e.target.value)}
                  placeholder={promptExamples[placeholderIndex]}
                  rows={3}
                  className="flex-1 resize-none bg-transparent text-sm leading-relaxed placeholder:text-muted-foreground/60 focus:outline-none"
                  onFocus={() => setPlaceholderIndex(Math.floor(Math.random() * promptExamples.length))}
                />
              </div>
              <div className="flex items-center justify-between px-4 pb-4 pt-0">
                <p className="text-xs text-muted-foreground">
                  Beschrijf jouw bedrijf, doelgroep en stijl
                </p>
                <Button size="sm" className="cursor-pointer gap-2 rounded-xl" disabled={!prompt.trim()}>
                  <Sparkles className="h-3.5 w-3.5" />
                  Maak mijn merk
                  <ArrowRight className="h-3.5 w-3.5" />
                </Button>
              </div>
            </div>

            {/* Example chips */}
            <div className="mt-3 flex flex-wrap gap-2 justify-center">
              {['Koffiebar', 'Webshop', 'Freelancer', 'Restaurant', 'Salon'].map(example => (
                <button
                  key={example}
                  onClick={() => setPrompt(`Een ${example.toLowerCase()} in Nederland voor...`)}
                  className="rounded-full border bg-background/60 px-3 py-1 text-xs text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors cursor-pointer"
                >
                  {example}
                </button>
              ))}
            </div>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              Geen creditcard nodig
            </div>
            <div className="flex items-center gap-1.5">
              <Globe className="h-3.5 w-3.5" />
              Gratis .biz.nl domein
            </div>
            <div className="flex items-center gap-1.5">
              <Zap className="h-3.5 w-3.5 text-primary" />
              Klaar in 5 minuten
            </div>
          </div>
        </div>

        {/* Visual showcase */}
        <div className="mx-auto mt-20 max-w-5xl">
          <div className="relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-primary/20 blur-3xl rounded-full" />
            <div className="relative rounded-2xl border bg-card/60 backdrop-blur-sm shadow-2xl overflow-hidden">
              {/* Mock brand output preview */}
              <div className="grid grid-cols-3 divide-x divide-border">
                <div className="p-6 space-y-3">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Logo</p>
                  <div className="aspect-square rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/10 flex items-center justify-center">
                    <div className="text-center">
                      <div className="h-10 w-10 rounded-lg bg-foreground mx-auto mb-2 flex items-center justify-center">
                        <span className="text-background font-black text-sm">JB</span>
                      </div>
                      <p className="text-xs font-semibold">Jouw Bedrijf</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Website</p>
                  <div className="aspect-square rounded-xl bg-muted/50 border overflow-hidden relative">
                    <div className="absolute top-0 left-0 right-0 h-6 bg-muted flex items-center px-2 gap-1">
                      <div className="h-1.5 w-1.5 rounded-full bg-red-400" />
                      <div className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
                      <div className="h-1.5 w-1.5 rounded-full bg-green-400" />
                      <div className="flex-1 ml-2 h-3 rounded bg-background/80 text-[6px] flex items-center px-1.5 text-muted-foreground">jouw-naam.biz.nl</div>
                    </div>
                    <div className="absolute inset-0 top-6 bg-gradient-to-b from-primary/5 to-transparent p-2 pt-3">
                      <div className="h-3 w-3/4 rounded bg-foreground/20 mb-1.5" />
                      <div className="h-1.5 w-full rounded bg-foreground/10 mb-1" />
                      <div className="h-1.5 w-5/6 rounded bg-foreground/10 mb-3" />
                      <div className="h-4 w-20 rounded-lg bg-primary/60" />
                    </div>
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Socials</p>
                  <div className="aspect-square rounded-xl bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-pink-500/10 p-3 space-y-2">
                    <div className="rounded-lg bg-background/60 p-2">
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <div className="h-4 w-4 rounded-full bg-foreground/30" />
                        <div className="h-1.5 w-12 rounded bg-foreground/20" />
                      </div>
                      <div className="aspect-video rounded bg-primary/20" />
                    </div>
                    <div className="rounded-lg bg-background/60 p-2">
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <div className="h-4 w-4 rounded-full bg-foreground/30" />
                        <div className="h-1.5 w-16 rounded bg-foreground/20" />
                      </div>
                      <div className="h-1.5 w-full rounded bg-foreground/10" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-t bg-muted/30 px-6 py-3 flex items-center justify-between">
                <p className="text-xs text-muted-foreground">✨ Volledig merkpakket gegenereerd in 3 minuten</p>
                <Badge variant="secondary" className="text-xs">Echt voorbeeld</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
