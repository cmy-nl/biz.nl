"use client"

import { ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const blogs = [
  {
    id: 1,
    category: 'Branding',
    title: 'Waarom een sterk merk essentieel is voor elke zzp\'er',
    description: 'Een professionele uitstraling wekt vertrouwen en helpt je hogere tarieven te vragen. Lees hoe je jouw merk naar het volgende niveau brengt.',
    readTime: '4 min'
  },
  {
    id: 2,
    category: 'Tips',
    title: '5 veelgemaakte branding fouten door startende ondernemers',
    description: 'Van een onduidelijk logo tot inconsistente huisstijl — deze fouten kosten je klanten. En zo vermijd je ze eenvoudig.',
    readTime: '6 min'
  },
  {
    id: 3,
    category: 'Inspiratie',
    title: 'Hoe Nederlandse bedrijven met AI hun merk hebben getransformeerd',
    description: 'Echte verhalen van ondernemers die binnen één dag een compleet merkpakket hadden en direct klanten wonnen.',
    readTime: '5 min'
  },
]

const categoryColors: Record<string, string> = {
  'Branding': 'bg-blue-500/10 text-blue-700 dark:text-blue-400',
  'Tips': 'bg-amber-500/10 text-amber-700 dark:text-amber-400',
  'Inspiratie': 'bg-purple-500/10 text-purple-700 dark:text-purple-400',
}

export function BlogSection() {
  return (
    <section id="blog" className="py-24 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge variant="outline" className="mb-4">Kennisbank</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Leer meer over merkopbouw
          </h2>
          <p className="text-lg text-muted-foreground">
            Praktische tips en inspiratie voor Nederlandse ondernemers die hun merk willen versterken.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {blogs.map(blog => (
            <Card key={blog.id} className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer group">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/10 via-primary/5 to-transparent flex items-center justify-center border-b">
                  <div className="text-4xl font-black text-primary/20">biz</div>
                </div>
                <div className="space-y-3 p-6">
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[blog.category]}`}>
                      {blog.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{blog.readTime} lezen</span>
                  </div>
                  <h3 className="text-base font-semibold leading-snug group-hover:text-primary transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{blog.description}</p>
                  <div className="flex items-center gap-1.5 text-sm text-primary font-medium pt-1">
                    Lees artikel
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
