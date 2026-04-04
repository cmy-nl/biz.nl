import { PageLayout } from '@/components/page-layout'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Sparkles, Globe, Share2, Printer, BarChart2, FileText, ArrowRight, Check } from 'lucide-react'

const features = [
  {
    id: 'merkgenerator',
    icon: Sparkles,
    tag: 'De kern',
    title: 'AI Merkgenerator',
    subtitle: 'Van idee naar compleet merk in 5 minuten',
    description: 'Vertel ons wie je bent en wat je doet. Onze AI bouwt direct een complete merkidentiteit: een uniek logo, een doordacht kleurenpalet, passende typografie en een pakkende tagline — alles op maat voor jouw bedrijf en doelgroep.',
    bullets: [
      'Logo in meerdere formaten (SVG, PNG, PDF)',
      'Kleurenpalet met primaire en secundaire kleuren',
      'Typografie-advies passend bij jouw merk',
      'Pakkende tagline gegenereerd door AI',
      'Volledige merkidentiteit in één run',
    ],
  },
  {
    id: 'website',
    icon: Globe,
    tag: 'Online aanwezigheid',
    title: 'Website op jouw.biz.nl',
    subtitle: 'Direct live. Direct professioneel.',
    description: 'Geen technische kennis nodig. Zodra jouw merk klaar is, bouwt de AI direct een volledige website in jouw huisstijl. Je krijgt een gratis jouw-naam.biz.nl domein — of koppel je eigen .nl adres. De site is mobiel, snel en vindbaar in Google.',
    bullets: [
      'Gratis jouw-naam.biz.nl domein bij elk plan',
      'Eigen domeinnaam koppelen (Pro+)',
      'Mobiel geoptimaliseerd en razendsnel',
      'SSL-certificaat inbegrepen',
      "Automatisch gegenereerde pagina's in jouw stijl",
    ],
  },
  {
    id: 'social',
    icon: Share2,
    tag: 'Social media',
    title: 'Social Media Assets',
    subtitle: 'Consistent op elk platform',
    description: 'Jouw merk moet overal hetzelfde aanvoelen — van Instagram tot LinkedIn. Biz.nl genereert kant-en-klare templates voor elk kanaal, schrijft AI-posts in jouw tone of voice en plant ze in. Nooit meer nadenken over wat je moet posten.',
    bullets: [
      'Templates voor Instagram, LinkedIn, Facebook',
      'AI schrijft posts in jouw stijl',
      '10 posts tegelijk genereren (batch)',
      'Profielfoto en omslagfoto in huisstijl',
      'Social media strategie op maat',
    ],
  },
  {
    id: 'print',
    icon: Printer,
    tag: 'Drukwerk',
    title: 'Print & Huisstijl',
    subtitle: 'Van scherm naar drukwerk',
    description: 'Een sterk merk leeft niet alleen online. Biz.nl maakt print-ready bestanden voor al je drukwerk: visitekaartjes, flyers, briefpapier en factuursjablonen — automatisch in jouw huisstijl, direct te downloaden en te bestellen bij een drukker.',
    bullets: [
      'Visitekaartje voor- en achterkant',
      'Flyer in A5 en A4 formaat',
      'Briefpapier en factuursjabloon',
      "Print-ready PDF's (CMYK, snijkant)",
      'Huisstijlhandboek als downloadbaar PDF',
    ],
  },
  {
    id: 'seo',
    icon: BarChart2,
    tag: 'Gevonden worden',
    title: 'SEO & Analytics',
    subtitle: 'Automatisch vindbaar in Google',
    description: 'Wat heb je aan een mooi merk als niemand je vindt? Biz.nl optimaliseert elke pagina automatisch voor Google: meta-titels, beschrijvingen, zoekwoorden en technische SEO. Maandelijks krijg je een rapport van hoe jouw merk het doet.',
    bullets: [
      'AI-SEO per pagina (meta, keywords)',
      'Maandelijkse SEO health check',
      'Google-vriendelijke URL-structuur',
      'Sitemap en robots.txt automatisch',
      'Maandelijks analytics rapport',
    ],
  },
  {
    id: 'blog',
    icon: FileText,
    tag: 'Content',
    title: 'Blog & Content',
    subtitle: 'Altijd iets te zeggen',
    description: 'Regelmatig bloggen helpt je gevonden worden én laat zien dat je expert bent. Biz.nl schrijft volledige blogartikelen, social posts en e-mailnieuwsbrieven in jouw tone of voice — jij keurt goed, wij schrijven.',
    bullets: [
      'Volledige blogartikelen (AI-geschreven)',
      'SEO-geoptimaliseerde teksten',
      'Afbeeldingen bij elk artikel (AI)',
      'Social posts vanuit blogcontent',
      'Eigen tone of voice per merk',
    ],
  },
]

function FeatureVisual({ id }: { id: string }) {
  if (id === 'merkgenerator') return (
    <svg viewBox="0 0 400 280" className="w-full h-full" fill="none">
      <rect width="400" height="280" rx="16" fill="currentColor" className="text-muted/20" />
      <rect x="30" y="30" width="340" height="50" rx="10" fill="currentColor" className="text-muted/30" />
      <rect x="50" y="44" width="90" height="14" rx="4" fill="currentColor" className="text-muted/60" />
      <rect x="160" y="44" width="140" height="14" rx="4" fill="currentColor" className="text-primary/50" />
      <rect x="30" y="100" width="160" height="150" rx="12" fill="currentColor" className="text-primary/10" />
      <circle cx="110" cy="160" r="40" fill="currentColor" className="text-primary/25" />
      <rect x="75" y="195" width="70" height="12" rx="4" fill="currentColor" className="text-muted/50" />
      <rect x="80" y="213" width="60" height="8" rx="3" fill="currentColor" className="text-muted/30" />
      <rect x="210" y="100" width="160" height="68" rx="12" fill="currentColor" className="text-muted/20" />
      <circle cx="232" cy="122" r="10" fill="currentColor" className="text-primary/50" />
      <circle cx="257" cy="122" r="10" fill="currentColor" className="text-blue-500/50" />
      <circle cx="282" cy="122" r="10" fill="currentColor" className="text-amber-500/50" />
      <circle cx="307" cy="122" r="10" fill="currentColor" className="text-green-500/50" />
      <rect x="222" y="145" width="130" height="8" rx="3" fill="currentColor" className="text-muted/40" />
      <rect x="210" y="182" width="160" height="68" rx="12" fill="currentColor" className="text-muted/20" />
      <rect x="222" y="196" width="90" height="10" rx="3" fill="currentColor" className="text-muted/50" />
      <rect x="222" y="212" width="130" height="8" rx="3" fill="currentColor" className="text-muted/30" />
      <rect x="222" y="226" width="100" height="8" rx="3" fill="currentColor" className="text-muted/30" />
    </svg>
  )
  if (id === 'website') return (
    <svg viewBox="0 0 400 280" className="w-full h-full" fill="none">
      <rect width="400" height="280" rx="16" fill="currentColor" className="text-muted/20" />
      <rect x="30" y="20" width="340" height="240" rx="12" fill="currentColor" className="text-background/70" stroke="currentColor" strokeWidth="1" className2="text-border" />
      <rect x="30" y="20" width="340" height="32" rx="12" fill="currentColor" className="text-muted/40" />
      <circle cx="52" cy="36" r="5" fill="#f87171" opacity="0.6" />
      <circle cx="68" cy="36" r="5" fill="#fbbf24" opacity="0.6" />
      <circle cx="84" cy="36" r="5" fill="#4ade80" opacity="0.6" />
      <rect x="120" y="28" width="160" height="16" rx="8" fill="currentColor" className="text-muted/30" />
      <rect x="50" y="68" width="300" height="55" rx="8" fill="currentColor" className="text-primary/10" />
      <rect x="65" y="80" width="130" height="14" rx="4" fill="currentColor" className="text-foreground/30" />
      <rect x="65" y="100" width="90" height="10" rx="3" fill="currentColor" className="text-muted/40" />
      <rect x="230" y="76" width="70" height="26" rx="6" fill="currentColor" className="text-primary/40" />
      <rect x="50" y="138" width="90" height="90" rx="8" fill="currentColor" className="text-muted/20" />
      <rect x="60" y="148" width="70" height="45" rx="4" fill="currentColor" className="text-muted/30" />
      <rect x="60" y="198" width="55" height="8" rx="3" fill="currentColor" className="text-muted/40" />
      <rect x="155" y="138" width="90" height="90" rx="8" fill="currentColor" className="text-muted/20" />
      <rect x="165" y="148" width="70" height="45" rx="4" fill="currentColor" className="text-primary/20" />
      <rect x="165" y="198" width="55" height="8" rx="3" fill="currentColor" className="text-muted/40" />
      <rect x="260" y="138" width="90" height="90" rx="8" fill="currentColor" className="text-muted/20" />
      <rect x="270" y="148" width="70" height="45" rx="4" fill="currentColor" className="text-muted/30" />
      <rect x="270" y="198" width="55" height="8" rx="3" fill="currentColor" className="text-muted/40" />
    </svg>
  )
  if (id === 'social') return (
    <svg viewBox="0 0 400 280" className="w-full h-full" fill="none">
      <rect width="400" height="280" rx="16" fill="currentColor" className="text-muted/20" />
      <rect x="30" y="20" width="160" height="240" rx="20" fill="currentColor" className="text-background/60" stroke="currentColor" strokeWidth="1" />
      <rect x="44" y="48" width="132" height="100" rx="8" fill="currentColor" className="text-primary/20" />
      <circle cx="110" cy="88" r="28" fill="currentColor" className="text-primary/30" />
      <rect x="52" y="160" width="45" height="8" rx="3" fill="currentColor" className="text-muted/50" />
      <rect x="52" y="174" width="120" height="6" rx="3" fill="currentColor" className="text-muted/30" />
      <rect x="52" y="184" width="95" height="6" rx="3" fill="currentColor" className="text-muted/30" />
      <rect x="52" y="204" width="35" height="22" rx="5" fill="currentColor" className="text-pink-500/30" />
      <rect x="93" y="204" width="35" height="22" rx="5" fill="currentColor" className="text-blue-500/30" />
      <rect x="210" y="20" width="160" height="118" rx="12" fill="currentColor" className="text-background/60" stroke="currentColor" strokeWidth="1" />
      <rect x="222" y="34" width="136" height="65" rx="6" fill="currentColor" className="text-blue-500/20" />
      <rect x="222" y="108" width="65" height="8" rx="3" fill="currentColor" className="text-muted/50" />
      <rect x="222" y="120" width="120" height="6" rx="3" fill="currentColor" className="text-muted/30" />
      <rect x="210" y="152" width="160" height="108" rx="12" fill="currentColor" className="text-background/60" stroke="currentColor" strokeWidth="1" />
      <rect x="222" y="166" width="136" height="60" rx="6" fill="currentColor" className="text-amber-500/20" />
      <rect x="222" y="234" width="65" height="8" rx="3" fill="currentColor" className="text-muted/50" />
      <rect x="222" y="246" width="95" height="6" rx="3" fill="currentColor" className="text-muted/30" />
    </svg>
  )
  if (id === 'print') return (
    <svg viewBox="0 0 400 280" className="w-full h-full" fill="none">
      <rect width="400" height="280" rx="16" fill="currentColor" className="text-muted/20" />
      <rect x="50" y="30" width="130" height="82" rx="8" fill="currentColor" className="text-background/80" stroke="currentColor" strokeWidth="1" />
      <rect x="62" y="42" width="65" height="35" rx="4" fill="currentColor" className="text-primary/20" />
      <rect x="62" y="84" width="45" height="7" rx="2" fill="currentColor" className="text-muted/50" />
      <rect x="62" y="95" width="100" height="5" rx="2" fill="currentColor" className="text-muted/30" />
      <rect x="220" y="30" width="130" height="82" rx="8" fill="currentColor" className="text-primary/10" stroke="currentColor" strokeWidth="1" />
      <circle cx="285" cy="60" r="18" fill="currentColor" className="text-primary/30" />
      <rect x="240" y="84" width="90" height="7" rx="2" fill="currentColor" className="text-muted/50" />
      <rect x="240" y="95" width="70" height="5" rx="2" fill="currentColor" className="text-muted/30" />
      <rect x="30" y="135" width="340" height="120" rx="12" fill="currentColor" className="text-background/80" stroke="currentColor" strokeWidth="1" />
      <rect x="30" y="135" width="340" height="30" rx="12" fill="currentColor" className="text-primary/10" />
      <circle cx="62" cy="150" r="9" fill="currentColor" className="text-primary/30" />
      <rect x="80" y="146" width="65" height="8" rx="3" fill="currentColor" className="text-muted/50" />
      <rect x="50" y="182" width="220" height="7" rx="2" fill="currentColor" className="text-muted/30" />
      <rect x="50" y="195" width="250" height="7" rx="2" fill="currentColor" className="text-muted/30" />
      <rect x="50" y="208" width="190" height="7" rx="2" fill="currentColor" className="text-muted/30" />
      <rect x="50" y="228" width="90" height="18" rx="4" fill="currentColor" className="text-primary/30" />
      <rect x="305" y="175" width="55" height="65" rx="4" fill="currentColor" className="text-muted/20" />
    </svg>
  )
  if (id === 'seo') return (
    <svg viewBox="0 0 400 280" className="w-full h-full" fill="none">
      <rect width="400" height="280" rx="16" fill="currentColor" className="text-muted/20" />
      <rect x="30" y="30" width="340" height="220" rx="12" fill="currentColor" className="text-background/60" />
      <rect x="50" y="50" width="90" height="8" rx="3" fill="currentColor" className="text-muted/50" />
      <rect x="50" y="72" width="300" height="120" rx="8" fill="currentColor" className="text-muted/10" />
      <line x1="70" y1="170" x2="70" y2="90" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <line x1="70" y1="170" x2="330" y2="170" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <polyline points="90,150 130,128 175,108 220,118 265,88 310,76" stroke="currentColor" className="text-primary" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="90" cy="150" r="4" fill="currentColor" className="text-primary" />
      <circle cx="130" cy="128" r="4" fill="currentColor" className="text-primary" />
      <circle cx="175" cy="108" r="4" fill="currentColor" className="text-primary" />
      <circle cx="220" cy="118" r="4" fill="currentColor" className="text-primary" />
      <circle cx="265" cy="88" r="4" fill="currentColor" className="text-primary" />
      <circle cx="310" cy="76" r="4" fill="currentColor" className="text-primary" />
      <rect x="50" y="208" width="70" height="22" rx="6" fill="currentColor" className="text-primary/20" />
      <rect x="130" y="208" width="90" height="22" rx="6" fill="currentColor" className="text-muted/20" />
      <rect x="230" y="208" width="75" height="22" rx="6" fill="currentColor" className="text-muted/20" />
    </svg>
  )
  return (
    <svg viewBox="0 0 400 280" className="w-full h-full" fill="none">
      <rect width="400" height="280" rx="16" fill="currentColor" className="text-muted/20" />
      <rect x="30" y="20" width="340" height="240" rx="12" fill="currentColor" className="text-background/60" />
      <rect x="50" y="40" width="300" height="80" rx="8" fill="currentColor" className="text-primary/10" />
      <rect x="65" y="54" width="150" height="14" rx="4" fill="currentColor" className="text-foreground/30" />
      <rect x="65" y="74" width="270" height="8" rx="3" fill="currentColor" className="text-muted/30" />
      <rect x="65" y="87" width="210" height="8" rx="3" fill="currentColor" className="text-muted/30" />
      <rect x="50" y="134" width="270" height="8" rx="3" fill="currentColor" className="text-muted/25" />
      <rect x="50" y="148" width="230" height="8" rx="3" fill="currentColor" className="text-muted/25" />
      <rect x="50" y="162" width="250" height="8" rx="3" fill="currentColor" className="text-muted/25" />
      <rect x="50" y="182" width="270" height="8" rx="3" fill="currentColor" className="text-muted/20" />
      <rect x="50" y="196" width="200" height="8" rx="3" fill="currentColor" className="text-muted/20" />
      <rect x="50" y="228" width="90" height="22" rx="6" fill="currentColor" className="text-primary/30" />
      <rect x="150" y="228" width="90" height="22" rx="6" fill="currentColor" className="text-muted/20" />
    </svg>
  )
}

export default function FeaturesPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <Badge variant="outline" className="mb-6">Alle functies</Badge>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6 max-w-3xl mx-auto">
            Alles wat je nodig hebt voor een{' '}
            <span className="text-primary">compleet online merk</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Biz.nl is geen losse tool — het is een compleet platform. Van je eerste logo tot maandelijkse blogposts en social media. Één abonnement, het volledige pakket.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" className="cursor-pointer gap-2" asChild>
              <Link href="/pricing">
                <Sparkles className="h-4 w-4" />
                Gratis starten
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="cursor-pointer" asChild>
              <Link href="/pricing">Prijzen bekijken</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Feature blocks */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-28">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              id={feature.id}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center`}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <Badge variant="outline" className="mb-4 gap-2">
                  <feature.icon className="h-3.5 w-3.5" />
                  {feature.tag}
                </Badge>
                <h2 className="text-3xl font-bold tracking-tight mb-2">{feature.title}</h2>
                <p className="text-lg text-primary font-medium mb-4">{feature.subtitle}</p>
                <p className="text-muted-foreground leading-relaxed mb-6">{feature.description}</p>
                <ul className="space-y-2.5 mb-8">
                  {feature.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm">
                      <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" strokeWidth={2.5} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" size="sm" className="cursor-pointer gap-2" asChild>
                  <Link href="/pricing">
                    Probeer gratis
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </Button>
              </div>
              <div className={`rounded-2xl border bg-muted/20 overflow-hidden p-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`} style={{aspectRatio: '4/3'}}>
                <FeatureVisual id={feature.id} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-foreground text-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Social proof bar */}
            <div className="flex flex-wrap items-center justify-center gap-6 mb-12 text-sm text-background/50">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {["JB","MV","DH","SR"].map((i) => (
                    <div key={i} className="h-7 w-7 rounded-full bg-background/20 border-2 border-foreground flex items-center justify-center text-[9px] font-bold text-background/80">{i}</div>
                  ))}
                </div>
                <span>2.400+ Nederlandse ondernemers gingen je voor</span>
              </div>
              <div className="hidden sm:flex items-center gap-1.5">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} className="h-4 w-4 fill-amber-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                ))}
                <span className="ml-1">4.8/5 gemiddelde beoordeling</span>
              </div>
            </div>

            {/* Main CTA */}
            <div className="text-center">
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
                Jouw merk staat over{" "}
                <span className="relative inline-block">
                  5 minuten
                  <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" fill="none">
                    <path d="M2 6C40 2 100 1 198 4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-background/30"/>
                  </svg>
                </span>
                {" "}online
              </h2>
              <p className="text-background/60 text-lg max-w-xl mx-auto mb-10">
                Beschrijf jouw bedrijf, wij bouwen het merk. Logo, website, social media en meer — direct klaar om te gebruiken.
              </p>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                <Button size="lg" variant="secondary" className="cursor-pointer gap-2 px-8 text-base font-semibold" asChild>
                  <Link href="/pricing">
                    <Sparkles className="h-5 w-5" />
                    Gratis beginnen
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="cursor-pointer px-8 text-base border-white/40 text-white hover:bg-white/10" asChild>
                  <Link href="/pricing">Prijzen bekijken</Link>
                </Button>
              </div>

              {/* Trust signals */}
              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-background/40">
                <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-green-400 inline-block"/>Geen creditcard nodig</span>
                <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-background/30 inline-block"/>14 dagen geld-terug-garantie</span>
                <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-background/30 inline-block"/>Gratis .biz.nl domein</span>
                <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-background/30 inline-block"/>Op elk moment opzegbaar</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
