"use client"

import { Building2, Clock, Star, Users } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { DotPattern } from '@/components/dot-pattern'

const stats = [
  {
    icon: Building2,
    value: '2.400+',
    label: 'Nederlandse bedrijven',
    description: 'bouwen hun merk met biz.nl'
  },
  {
    icon: Clock,
    value: '< 5 min',
    label: 'Gemiddelde tijd',
    description: 'van idee naar volledig merk'
  },
  {
    icon: Star,
    value: '4.8',
    label: 'Gemiddelde score',
    description: 'op basis van 800+ reviews'
  },
  {
    icon: Users,
    value: '98%',
    label: 'Tevreden klanten',
    description: 'zou biz.nl aanbevelen'
  }
]

export function StatsSection() {
  return (
    <section className="py-12 sm:py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
      <DotPattern className="opacity-50" size="md" fadeStyle="circle" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center bg-background/70 backdrop-blur-sm border-border/60 py-0">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <stat.icon className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground">
                  {stat.value}
                </h3>
                <p className="font-semibold text-sm text-foreground mt-1">{stat.label}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
