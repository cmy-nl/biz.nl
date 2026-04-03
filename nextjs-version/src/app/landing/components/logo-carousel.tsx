"use client"

export function LogoCarousel() {
  const sectors = [
    'Horeca', 'Retail', 'ZZP', 'Bouw', 'IT & Tech', 'Zorg',
    'Creatief', 'Financieel', 'Onderwijs', 'Marketing', 'Juridisch', 'Logistiek'
  ]

  return (
    <section className="pb-12 sm:pb-16 pt-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-medium text-muted-foreground mb-8">
            Gebruikt door ondernemers in alle sectoren
          </p>

          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            <div className="overflow-hidden">
              <div className="flex animate-logo-scroll space-x-4">
                {[...sectors, ...sectors].map((sector, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 flex items-center justify-center h-10 px-6 rounded-full border bg-card text-sm font-medium text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors whitespace-nowrap"
                  >
                    {sector}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
