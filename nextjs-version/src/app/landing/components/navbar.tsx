"use client"

import { useState, useEffect } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle
} from '@/components/ui/sheet'
import { ModeToggle } from '@/components/mode-toggle'

const navigationItems = [
  { name: 'Hoe het werkt', href: '#features' },
  { name: 'Prijzen', href: '#pricing' },
  { name: 'Voorbeelden', href: '#testimonials' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
]

const smoothScrollTo = (targetId: string) => {
  if (targetId.startsWith('#')) {
    const element = document.querySelector(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
}

export function LandingNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      scrolled
        ? 'border-b bg-background/95 backdrop-blur-xl shadow-sm'
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        {/* Logo */}
        <a href="#hero" onClick={e => { e.preventDefault(); smoothScrollTo('#hero') }} className="flex items-center gap-2 cursor-pointer group">
          <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-foreground">
            <span className="text-background font-black text-sm tracking-tighter">biz</span>
          </div>
          <span className="font-bold text-lg tracking-tight">.nl</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navigationItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={e => { e.preventDefault(); smoothScrollTo(item.href) }}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent cursor-pointer"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-2">
          <ModeToggle variant="ghost" />
          <Button variant="ghost" size="sm" onClick={() => smoothScrollTo('#pricing')} className="cursor-pointer">
            Inloggen
          </Button>
          <Button size="sm" className="cursor-pointer gap-2" onClick={() => smoothScrollTo('#hero')}>
            <Sparkles className="h-3.5 w-3.5" />
            Gratis starten
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="cursor-pointer">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menu openen</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:w-[380px] p-0 gap-0 [&>button]:hidden flex flex-col">
            <SheetHeader className="p-5 border-b">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-foreground">
                    <span className="text-background font-black text-xs">biz</span>
                  </div>
                  <SheetTitle className="font-bold">.nl</SheetTitle>
                </div>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-8 w-8 cursor-pointer">
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </SheetHeader>

            <nav className="flex-1 p-5 space-y-1">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center px-4 py-3 text-base font-medium rounded-lg transition-colors hover:bg-accent cursor-pointer"
                  onClick={e => {
                    setIsOpen(false)
                    e.preventDefault()
                    setTimeout(() => smoothScrollTo(item.href), 150)
                  }}
                >
                  {item.name}
                </a>
              ))}
            </nav>

            <div className="border-t p-5 space-y-3">
              <Button variant="outline" size="lg" className="w-full cursor-pointer">
                Inloggen
              </Button>
              <Button size="lg" className="w-full cursor-pointer gap-2">
                <Sparkles className="h-4 w-4" />
                Gratis starten
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
