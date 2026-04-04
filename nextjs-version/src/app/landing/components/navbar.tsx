"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Sparkles, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle
} from '@/components/ui/sheet'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { ModeToggle } from '@/components/mode-toggle'

const productLinks = [
  { name: 'AI Merkgenerator', href: '/features#merkgenerator', desc: 'Logo, kleuren en typografie in minuten' },
  { name: 'Website Builder', href: '/features#website', desc: 'Professionele website op biz.nl domein' },
  { name: 'Social Media', href: '/features#social', desc: 'Templates en AI-posts voor elk kanaal' },
  { name: 'Print & Huisstijl', href: '/features#print', desc: 'Visitekaartjes, flyers en meer' },
  { name: 'SEO & Analytics', href: '/features#seo', desc: 'Gevonden worden in Google' },
  { name: 'Blog & Content', href: '/features#blog', desc: 'AI-teksten voor je website en socials' },
]

const solutionLinks = [
  { name: 'Voor zzp\'ers', href: '/#features', desc: 'Één merk, professioneel uitstralen' },
  { name: 'Voor bureaus', href: '/agencies', desc: 'Beheer merken van meerdere klanten' },
  { name: 'Affiliates & Partners', href: '/affiliates', desc: 'Verdien aan elk merk dat je verwijst' },
]

const mainNav = [
  { name: 'Functies', href: '/features', hasDropdown: true, dropdown: productLinks },
  { name: 'Oplossingen', href: '/agencies', hasDropdown: true, dropdown: solutionLinks },
  { name: 'Prijzen', href: '/pricing' },
  { name: 'Over ons', href: '/about' },
  { name: 'Blog', href: '/blog' },
]

const smoothScrollTo = (targetId: string) => {
  const element = document.querySelector(targetId)
  if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function LandingNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setOpenDropdown(null)
  }, [pathname])

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      scrolled ? 'border-b bg-background/95 backdrop-blur-xl shadow-sm' : 'bg-background/80 backdrop-blur-md'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 cursor-pointer group shrink-0">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground group-hover:scale-105 transition-transform">
            <span className="text-background font-black text-sm tracking-tighter">biz</span>
          </div>
          <span className="font-bold text-lg tracking-tight">.nl</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {mainNav.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => item.hasDropdown && setOpenDropdown(item.name)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              {item.hasDropdown ? (
                <>
                  <button className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-md transition-colors cursor-pointer ${
                    pathname?.startsWith(item.href) ? 'text-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                  }`}>
                    {item.name}
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                  </button>
                  {openDropdown === item.name && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-64 z-50">
                      <div className="rounded-xl border bg-background shadow-lg p-2">
                        {item.dropdown?.map((link) => (
                          <Link
                            key={link.name}
                            href={link.href}
                            className="flex flex-col rounded-lg px-3 py-2.5 hover:bg-accent transition-colors"
                          >
                            <span className="text-sm font-medium">{link.name}</span>
                            <span className="text-xs text-muted-foreground">{link.desc}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    pathname === item.href ? 'text-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                  }`}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-2 shrink-0">
          <ModeToggle variant="ghost" />
          <Button variant="ghost" size="sm" className="cursor-pointer" asChild>
            <Link href="/pricing">Inloggen</Link>
          </Button>
          <Button size="sm" className="cursor-pointer gap-2" asChild>
            <Link href="/pricing">
              <Sparkles className="h-3.5 w-3.5" />
              Gratis starten
            </Link>
          </Button>
        </div>

        {/* Mobile menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="cursor-pointer">
              <Menu className="h-5 w-5" />
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
                <div className="flex items-center gap-1">
                  <ModeToggle variant="ghost" />
                  <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-8 w-8 cursor-pointer">
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </SheetHeader>

            <nav className="flex-1 overflow-y-auto p-4 space-y-1">
              {mainNav.map((item) => (
                item.hasDropdown ? (
                  <Collapsible
                    key={item.name}
                    open={mobileOpen === item.name}
                    onOpenChange={(o) => setMobileOpen(o ? item.name : null)}
                  >
                    <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium rounded-lg hover:bg-accent cursor-pointer">
                      {item.name}
                      <ChevronDown className={`h-4 w-4 transition-transform ${mobileOpen === item.name ? 'rotate-180' : ''}`} />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pl-4 space-y-1 mt-1">
                      {item.dropdown?.map((link) => (
                        <Link
                          key={link.name}
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className="flex flex-col px-4 py-2 rounded-lg hover:bg-accent text-sm"
                        >
                          <span className="font-medium">{link.name}</span>
                          <span className="text-xs text-muted-foreground">{link.desc}</span>
                        </Link>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center px-4 py-3 text-sm font-medium rounded-lg hover:bg-accent"
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </nav>

            <div className="border-t p-5 space-y-3">
              <Button variant="outline" size="lg" className="w-full cursor-pointer" asChild>
                <Link href="/pricing">Inloggen</Link>
              </Button>
              <Button size="lg" className="w-full cursor-pointer gap-2" asChild>
                <Link href="/pricing">
                  <Sparkles className="h-4 w-4" />
                  Gratis starten
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
