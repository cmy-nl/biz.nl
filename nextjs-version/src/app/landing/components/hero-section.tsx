"use client"

import { useState, useRef, useEffect } from 'react'
import { ArrowRight, Sparkles, Zap, Globe, Mic, MicOff, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { DotPattern } from '@/components/dot-pattern'

const getPromptExamples = (city: string) => {
  const inLoc = city ? `in ${city}` : 'in Nederland'
  return [
    `Ik ben een freelance grafisch ontwerper ${inLoc}, gespecialiseerd in branding voor startups. Ik wil een modern, minimalistisch merk dat creativiteit en professionaliteit uitstraalt.`,
    `Wij zijn een duurzame koffiebar ${inLoc} die biologische koffie serveert aan bewuste millennials. Onze sfeer is warm, groen en authentiek — zoals een tweede thuis.`,
    `Ik run een online kledingwinkel voor Nederlandse vrouwen van 30-50 jaar. Tijdloze mode, eerlijk geproduceerd. Het merk moet vertrouwen, kwaliteit en vrouwelijkheid uitademen.`,
    `Ons installatiebedrijf ${inLoc} doet elektra en airco voor particulieren en MKB. We zijn betrouwbaar, vakkundig en no-nonsense — een sterk merk dat vertrouwen wekt.`,
    `Ik ben een zelfstandige personal trainer ${inLoc} voor drukke professionals van 30-45 jaar. Energiek, resultaatgericht en toegankelijk — ik wil dat mijn merk dat direct uitstraalt.`,
  ]
}

const getExampleChips = (city: string) => {
  const inLoc = city ? `in ${city}` : 'in Nederland'
  return [
    { label: 'Freelancer', prompt: `Ik ben een freelance [vak] ${inLoc}, gericht op [doelgroep]. Mijn stijl is professioneel maar persoonlijk, en ik wil een merk dat direct vertrouwen wekt bij potentiële klanten.` },
    { label: 'Webshop', prompt: `Ik heb een online winkel die [product] verkoopt aan Nederlandse consumenten. Het merk moet betrouwbaar, modern en herkenbaar zijn, met een focus op kwaliteit en klantvriendelijkheid.` },
    { label: 'Restaurant', prompt: `Ons restaurant ${inLoc} serveert [keuken] aan een lokaal publiek van 25-55 jaar. De sfeer is [sfeer] en we willen een merk dat gasten al voor de eerste hap het juiste gevoel geeft.` },
    { label: 'Salon', prompt: `Ik heb een kapsalon / beautysalon ${inLoc} voor [doelgroep]. Het merk moet [stijl] uitstralen en me onderscheiden van de concurrentie in mijn buurt.` },
    { label: 'Coach', prompt: `Ik ben een zelfstandige coach / therapeut ${inLoc} die [doelgroep] helpt met [onderwerp]. Mijn aanpak is [aanpak] en ik wil een merk dat mijn ideale klant direct aanspreekt.` },
  ]
}

export function HeroSection() {
  const [prompt, setPrompt] = useState('')
  const [placeholderIndex, setPlaceholderIndex] = useState(0)
  const [isListening, setIsListening] = useState(false)
  const [speechSupported, setSpeechSupported] = useState(false)
  const [isTranscribing, setIsTranscribing] = useState(false)
  const [userCity, setUserCity] = useState('')
  const recognitionRef = useRef<any>(null)

  useEffect(() => {
    const supported = 'webkitSpeechRecognition' in window || 'SpeechRecognition' in window
    setSpeechSupported(supported)
  }, [])

  useEffect(() => {
    fetch('/api/geo')
      .then(r => r.json())
      .then(data => {
        if (data.location) setUserCity(data.location)
      })
      .catch(() => {})
  }, [])

  const promptExamples = getPromptExamples(userCity)
  const exampleChips = getExampleChips(userCity)

  const toggleSpeech = () => {
    if (!speechSupported) return

    if (isListening) {
      recognitionRef.current?.stop()
      setIsListening(false)
      setIsTranscribing(false)
      return
    }

    const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition
    const recognition = new SpeechRecognition()
    recognition.lang = 'nl-NL'
    recognition.continuous = true
    recognition.interimResults = true

    recognition.onstart = () => {
      setIsListening(true)
      setIsTranscribing(true)
    }

    recognition.onresult = (event: any) => {
      let transcript = ''
      for (let i = 0; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript
      }
      setPrompt(transcript)
    }

    recognition.onerror = () => {
      setIsListening(false)
      setIsTranscribing(false)
    }

    recognition.onend = () => {
      setIsListening(false)
      setIsTranscribing(false)
    }

    recognitionRef.current = recognition
    recognition.start()
  }

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

          {/* Prompt Box */}
          <div className="mx-auto max-w-2xl mb-8">
            <div className={`relative rounded-2xl border-2 bg-background/80 backdrop-blur-sm shadow-2xl shadow-primary/5 transition-colors duration-200 ${isListening ? 'border-primary shadow-primary/20' : 'border-border focus-within:border-primary'}`}>
              <div className="flex items-start gap-3 p-4">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Sparkles className="h-4 w-4 text-primary" />
                </div>
                <textarea
                  value={prompt}
                  onChange={e => setPrompt(e.target.value)}
                  placeholder={promptExamples[placeholderIndex]}
                  rows={4}
                  className="flex-1 resize-none bg-transparent text-sm leading-relaxed placeholder:text-muted-foreground/50 focus:outline-none"
                  onFocus={() => setPlaceholderIndex(Math.floor(Math.random() * promptExamples.length))}
                />
              </div>
              <div className="flex items-center justify-between px-4 pb-4 pt-0 gap-3">
                <div className="flex items-center gap-2">
                  {speechSupported && (
                    <button
                      onClick={toggleSpeech}
                      title={isListening ? 'Stop opnemen' : 'Inspreken'}
                      className={`flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-medium transition-all cursor-pointer border ${
                        isListening
                          ? 'bg-primary text-primary-foreground border-primary animate-pulse'
                          : 'border-border text-muted-foreground hover:text-foreground hover:border-foreground/40'
                      }`}
                    >
                      {isTranscribing ? (
                        <Loader2 className="h-3.5 w-3.5 animate-spin" />
                      ) : isListening ? (
                        <MicOff className="h-3.5 w-3.5" />
                      ) : (
                        <Mic className="h-3.5 w-3.5" />
                      )}
                      {isListening ? 'Stop' : 'Inspreken'}
                    </button>
                  )}
                  <p className="text-xs text-muted-foreground hidden sm:block">
                    {isListening ? '🎙️ Aan het luisteren...' : 'Typ of spreek jouw verhaal in'}
                  </p>
                </div>
                <Button size="sm" className="cursor-pointer gap-2 rounded-xl shrink-0" disabled={!prompt.trim()}>
                  <Sparkles className="h-3.5 w-3.5" />
                  Maak mijn merk
                  <ArrowRight className="h-3.5 w-3.5" />
                </Button>
              </div>
            </div>

            {/* Example chips */}
            <div className="mt-3 flex flex-wrap gap-2 justify-center">
              {exampleChips.map(example => (
                <button
                  key={example.label}
                  onClick={() => setPrompt(example.prompt)}
                  className="rounded-full border bg-background/60 px-3 py-1 text-xs text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors cursor-pointer"
                >
                  {example.label}
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
