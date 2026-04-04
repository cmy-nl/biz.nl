"use client"
import { LandingNavbar } from './components/navbar'
import { HeroSection } from './components/hero-section'
import { SocialProofBar } from './components/social-proof-bar'
import { DreamSection } from './components/dream-section'
import { HowItWorksSection } from './components/how-it-works-section'
import { FeaturesSection } from './components/features-section'
import { TestimonialsSection } from './components/testimonials-section'
import { PricingTeaser } from './components/pricing-teaser'
import { FaqSection } from './components/faq-section'
import { FinalCTASection } from './components/final-cta-section'
import { LandingFooter } from './components/footer'

export function LandingPageContent() {
  return (
    <div className="min-h-screen bg-background">
      <LandingNavbar />
      <main>
        <HeroSection />
        <SocialProofBar />
        <DreamSection />
        <HowItWorksSection />
        <FeaturesSection />
        <TestimonialsSection />
        <PricingTeaser />
        <FaqSection />
        <FinalCTASection />
      </main>
      <LandingFooter />
    </div>
  )
}
