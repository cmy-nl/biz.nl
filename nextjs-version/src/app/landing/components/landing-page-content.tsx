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
        {/* 1. Hero — sell the dream, prompt box */}
        <HeroSection />
        {/* 2. Social proof — who already did it */}
        <SocialProofBar />
        {/* 3. Dream — paint the picture of success */}
        <DreamSection />
        {/* 4. How it works — 3 steps, simple */}
        <HowItWorksSection />
        {/* 5. Features — proof it really works */}
        <FeaturesSection />
        {/* 6. Testimonials — people like you */}
        <TestimonialsSection />
        {/* 7. Pricing teaser — vanaf €6,95, no full table */}
        <PricingTeaser />
        {/* 8. FAQ — remove last objections */}
        <FaqSection />
        {/* 9. Final CTA — one last push */}
        <FinalCTASection />
      </main>
      <LandingFooter />
    </div>
  )
}
