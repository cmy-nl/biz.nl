import { PageLayout } from '@/components/page-layout'
import { Badge } from '@/components/ui/badge'

const cookieTypes = [
  {
    name: 'Noodzakelijke cookies',
    required: true,
    description: 'Deze cookies zijn essentieel voor de werking van het platform. Zonder deze cookies werkt biz.nl niet correct.',
    examples: [
      { name: 'session_id', purpose: 'Jouw inlogsessie bijhouden', duration: 'Sessie' },
      { name: 'csrf_token', purpose: 'Beveiligen van formulieren', duration: 'Sessie' },
      { name: 'consent', purpose: 'Jouw cookievoorkeur opslaan', duration: '1 jaar' },
    ],
  },
  {
    name: 'Functionele cookies',
    required: false,
    description: 'Deze cookies onthouden jouw voorkeuren zodat je de volgende keer niet alles opnieuw hoeft in te stellen.',
    examples: [
      { name: 'theme', purpose: 'Licht of donker thema onthouden', duration: '1 jaar' },
      { name: 'lang', purpose: 'Taalvoorkeur opslaan', duration: '1 jaar' },
    ],
  },
  {
    name: 'Analytische cookies',
    required: false,
    description: 'Deze cookies helpen ons begrijpen hoe bezoekers het platform gebruiken, zodat wij het kunnen verbeteren. Alle data is geanonimiseerd.',
    examples: [
      { name: '_ga', purpose: 'Gebruiksstatistieken (Google Analytics)', duration: '2 jaar' },
      { name: '_ga_*', purpose: 'Sessiestatistieken', duration: '2 jaar' },
    ],
  },
  {
    name: 'Marketing cookies',
    required: false,
    description: 'Deze cookies worden gebruikt om advertenties relevanter te maken. Wij plaatsen zelf geen marketing cookies — dit kan wel via geïntegreerde diensten.',
    examples: [
      { name: 'n.v.t.', purpose: 'Momenteel geen marketing cookies actief', duration: '—' },
    ],
  },
]

export default function CookiesPage() {
  return (
    <PageLayout>
      <section className="py-16 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <Badge variant="outline" className="mb-4">Juridisch</Badge>
          <h1 className="text-4xl font-extrabold tracking-tight mb-4">Cookiebeleid</h1>
          <p className="text-muted-foreground">Laatst bijgewerkt: april 2026</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="space-y-10">

            <div>
              <h2 className="text-xl font-bold mb-3">Wat zijn cookies?</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Cookies zijn kleine tekstbestanden die worden opgeslagen op jouw apparaat wanneer je een website bezoekt. Ze helpen websites om jouw voorkeuren te onthouden, de dienst te verbeteren en statistieken bij te houden. Biz.nl maakt gebruik van cookies voor de werking van het platform en om jouw ervaring te verbeteren.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">Welke cookies gebruiken wij?</h2>
              <div className="space-y-6">
                {cookieTypes.map((type, i) => (
                  <div key={i} className="rounded-2xl border bg-card p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">{type.name}</h3>
                      <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${type.required ? 'bg-green-500/10 text-green-700 dark:text-green-400' : 'bg-muted text-muted-foreground'}`}>
                        {type.required ? 'Altijd actief' : 'Optioneel'}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{type.description}</p>
                    <div className="rounded-xl overflow-hidden border">
                      <table className="w-full text-xs">
                        <thead>
                          <tr className="bg-muted/50">
                            <th className="text-left px-3 py-2 font-medium text-muted-foreground">Cookie</th>
                            <th className="text-left px-3 py-2 font-medium text-muted-foreground">Doel</th>
                            <th className="text-left px-3 py-2 font-medium text-muted-foreground">Duur</th>
                          </tr>
                        </thead>
                        <tbody>
                          {type.examples.map((ex, j) => (
                            <tr key={j} className="border-t">
                              <td className="px-3 py-2 font-mono text-foreground">{ex.name}</td>
                              <td className="px-3 py-2 text-muted-foreground">{ex.purpose}</td>
                              <td className="px-3 py-2 text-muted-foreground">{ex.duration}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">Jouw keuzes</h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                Bij je eerste bezoek aan biz.nl vragen wij toestemming voor niet-noodzakelijke cookies. Je kunt jouw voorkeur altijd aanpassen via de cookie-instellingen onderaan de pagina.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Je kunt ook via jouw browser cookies uitschakelen of verwijderen. Houd er rekening mee dat het uitschakelen van noodzakelijke cookies de werking van het platform kan beïnvloeden. Meer informatie over het beheren van cookies vind je op <a href="https://www.cookieinfo.nl" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">cookieinfo.nl</a>.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">Cookies van derden</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Biz.nl maakt gebruik van diensten van derden die mogelijk hun eigen cookies plaatsen. Wij hebben geen directe controle over deze cookies. De betreffende partijen hebben hun eigen privacybeleid en cookiebeleid. Wij werken alleen samen met partijen die de AVG naleven.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">Contact</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Vragen over ons cookiebeleid? Neem contact op via <a href="mailto:privacy@biz.nl" className="text-primary hover:underline">privacy@biz.nl</a>.
              </p>
            </div>

          </div>
        </div>
      </section>
    </PageLayout>
  )
}
