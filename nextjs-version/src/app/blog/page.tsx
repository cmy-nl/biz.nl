import { PageLayout } from '@/components/page-layout'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const categories = ['Alle artikelen', 'Branding', 'Marketing', 'Inspiratie', 'Tips & Tricks', 'Nieuws']

const posts = [
  {
    slug: 'waarom-sterk-merk-essentieel',
    category: 'Branding',
    title: "Waarom een sterk merk essentieel is voor elke zzp'er",
    excerpt: 'Een professionele uitstraling wekt vertrouwen en helpt je hogere tarieven te vragen. We leggen uit hoe jouw merk het verschil maakt.',
    readTime: '4 min',
    featured: true,
  },
  {
    slug: 'ai-merk-bouwen-2025',
    category: 'Inspiratie',
    title: 'Hoe Nederlandse ondernemers met AI hun merk transformeerden',
    excerpt: 'Echte verhalen van ondernemers die binnen één dag een compleet merkpakket hadden en direct nieuwe klanten wonnen.',
    readTime: '6 min',
    featured: true,
  },
  {
    slug: 'branding-fouten-starters',
    category: 'Tips & Tricks',
    title: '5 veelgemaakte branding fouten door startende ondernemers',
    excerpt: 'Van een onduidelijk logo tot inconsistente huisstijl — deze fouten kosten je klanten. Zo vermijd je ze eenvoudig.',
    readTime: '5 min',
    featured: false,
  },
  {
    slug: 'social-media-consistentie',
    category: 'Marketing',
    title: 'Zo zorg je voor een consistente uitstraling op social media',
    excerpt: 'Consistentie is de sleutel tot herkenning. Leer hoe je jouw merk op elk platform hetzelfde laat voelen zonder er uren aan te besteden.',
    readTime: '4 min',
    featured: false,
  },
  {
    slug: 'logo-ontwerp-tips',
    category: 'Branding',
    title: 'Wat maakt een goed logo? De 5 kenmerken van een sterk merkteken',
    excerpt: 'Simpel, uniek, tijdloos, toepasbaar en passend. We leggen uit waarom elk van deze eigenschappen telt voor jouw logo.',
    readTime: '5 min',
    featured: false,
  },
  {
    slug: 'seo-voor-kleine-bedrijven',
    category: 'Marketing',
    title: 'SEO voor kleine bedrijven: zo word je gevonden zonder groot budget',
    excerpt: 'Je hoeft geen groot marketingbudget te hebben om goed gevonden te worden in Google. Deze basics geven je een vliegende start.',
    readTime: '7 min',
    featured: false,
  },
]

const categoryColors: Record<string, string> = {
  Branding: 'bg-blue-500/10 text-blue-700 dark:text-blue-400',
  Marketing: 'bg-amber-500/10 text-amber-700 dark:text-amber-400',
  Inspiratie: 'bg-purple-500/10 text-purple-700 dark:text-purple-400',
  'Tips & Tricks': 'bg-green-500/10 text-green-700 dark:text-green-400',
  Nieuws: 'bg-red-500/10 text-red-700 dark:text-red-400',
}

export default function BlogPage() {
  const featured = posts.filter(p => p.featured)
  const rest = posts.filter(p => !p.featured)

  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-16 sm:py-20 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="outline" className="mb-4">Kennisbank</Badge>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">
            Leer meer over merkopbouw
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl">
            Praktische tips, inspirerende verhalen en slimme strategieën voor Nederlandse ondernemers die hun merk willen versterken.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-6 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat, i) => (
              <button key={i} className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors cursor-pointer border ${i === 0 ? 'bg-foreground text-background border-foreground' : 'border-border text-muted-foreground hover:text-foreground hover:border-foreground/40'}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured posts */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 mb-12">
            {featured.map((post, i) => (
              <article key={i} className="rounded-2xl border bg-card overflow-hidden group cursor-pointer hover:shadow-md transition-shadow">
                <div className="aspect-[16/8] bg-gradient-to-br from-primary/10 via-primary/5 to-transparent flex items-center justify-center border-b">
                  <div className="text-6xl font-black text-primary/10">biz</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[post.category]}`}>{post.category}</span>
                    <span className="text-xs text-muted-foreground">{post.readTime} lezen</span>
                  </div>
                  <h2 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors leading-snug">{post.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-1.5 text-sm text-primary font-medium">
                    Lees artikel
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* All posts */}
          <h2 className="text-xl font-bold mb-6">Alle artikelen</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post, i) => (
              <article key={i} className="rounded-2xl border bg-card overflow-hidden group cursor-pointer hover:shadow-sm transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-muted/50 to-muted/20 flex items-center justify-center border-b">
                  <div className="text-3xl font-black text-muted-foreground/20">biz</div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${categoryColors[post.category]}`}>{post.category}</span>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>
                  <h3 className="text-sm font-bold mb-2 group-hover:text-primary transition-colors leading-snug">{post.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{post.excerpt}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button variant="outline" className="cursor-pointer">Meer artikelen laden</Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center max-w-xl">
          <h2 className="text-2xl font-bold mb-3">Blijf op de hoogte</h2>
          <p className="text-muted-foreground mb-6 text-sm">Ontvang elke twee weken de beste tips over merkopbouw, marketing en ondernemen in jouw mailbox.</p>
          <div className="flex gap-2 max-w-sm mx-auto">
            <input type="email" placeholder="jouw@email.nl" className="flex-1 rounded-xl border bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" />
            <Button className="cursor-pointer shrink-0">Aanmelden</Button>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
