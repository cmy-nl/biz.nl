"use client"

import { LandingNavbar } from '@/app/landing/components/navbar'
import { LandingFooter } from '@/app/landing/components/footer'

export function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <LandingNavbar />
      <main className="flex-1">
        {children}
      </main>
      <LandingFooter />
    </div>
  )
}
