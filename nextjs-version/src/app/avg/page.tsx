import { PageLayout } from '@/components/page-layout'
import { Badge } from '@/components/ui/badge'
import { Shield, FileText, Mail, AlertCircle } from 'lucide-react'
import Link from 'next/link'

const rights = [
  { title: 'Recht op inzage', description: 'Je hebt het recht om te weten welke persoonsgegevens wij van jou verwerken en waarom. Je kunt een volledig overzicht opvragen via privacy@biz.nl.' },
  { title: 'Recht op correctie', description: 'Zijn jouw gegevens onjuist of onvolledig? Je kunt ons vragen deze te corrigeren. Veel gegevens kun je zelf aanpassen via jouw accountinstellingen.' },
  { title: 'Recht op verwijdering', description: 'Je kunt ons vragen jouw persoonsgegevens te verwijderen. Wij doen dit zo snel mogelijk, tenzij wij wettelijk verplicht zijn de gegevens langer te bewaren.' },
  { title: 'Recht op beperking', description: 'Je kunt ons vragen de verwerking van jouw gegevens tijdelijk te beperken, bijvoorbeeld wanneer je de juistheid van de gegevens betwist.' },
  { title: 'Recht op overdraagbaarheid', description: 'Je hebt het recht jouw gegevens in een leesbaar formaat te ontvangen zodat je ze kunt overdragen aan een andere dienstverlener.' },
  { title: 'Recht van bezwaar', description: 'Je kunt bezwaar maken tegen de verwerking van jouw gegevens op basis van gerechtvaardigde belangen, waaronder direct marketing.' },
  { title: 'Recht op intrekking toestemming', description: 'Heb je toestemming gegeven voor bepaalde verwerking? Dan kun je deze toestemming altijd intrekken. Dit heeft geen terugwerkende kracht.' },
]

const processors = [
  { category: 'Betalingen', examples: 'Stripe, Mollie', purpose: 'Verwerken van abonnementsbetalingen en facturen' },
  { category: 'Hosting & infrastructuur', examples: 'Vercel, AWS EU', purpose: 'Opslag van platform en gebruikersdata (binnen EU)' },
  { category: 'AI-diensten', examples: 'Anthropic, OpenAI', purpose: 'Genereren van merkinhoud op basis van gebruikersinput' },
  { category: 'E-mail', examples: 'Transactionele e-maildienst', purpose: 'Versturen van facturen, wachtwoordherstel en notificaties' },
  { category: 'Analytics', examples: 'Google Analytics (geanonimiseerd)', purpose: 'Inzicht in platformgebruik voor verbetering van de dienst' },
]

export default function AvgPage() {
  return (
    <PageLayout>
      <section className="py-16 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <Badge variant="outline" className="mb-4">Juridisch</Badge>
          <h1 className="text-4xl font-extrabold tracking-tight mb-4">AVG & Gegevensbescherming</h1>
          <p className="text-muted-foreground">Hoe biz.nl omgaat met de Algemene Verordening Gegevensbescherming (AVG / GDPR)</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="space-y-12">

            {/* Intro */}
            <div className="rounded-2xl border bg-primary/5 p-6 flex gap-4">
              <Shield className="h-6 w-6 text-primary shrink-0 mt-0.5" />
              <div>
                <h2 className="font-semibold mb-2">Onze AVG-belofte</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Biz.nl is volledig AVG-compliant. Wij verwerken alleen gegevens die noodzakelijk zijn voor onze dienstverlening, bewaren niets langer dan nodig, en geven jou altijd volledige controle over jouw eigen data. Jouw gegevens worden nooit verkocht aan derden.
                </p>
              </div>
            </div>

            {/* Rights */}
            <div>
              <h2 className="text-xl font-bold mb-6">Jouw rechten onder de AVG</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {rights.map((right, i) => (
                  <div key={i} className="rounded-xl border bg-card p-4">
                    <h3 className="font-semibold text-sm mb-2">{right.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{right.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-xl border bg-amber-500/5 border-amber-500/20 p-4 flex gap-3">
                <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-amber-700 dark:text-amber-300 mb-1">Een verzoek indienen</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Stuur een e-mail naar <a href="mailto:privacy@biz.nl" className="text-primary hover:underline">privacy@biz.nl</a> met jouw naam, e-mailadres en een duidelijke omschrijving van jouw verzoek. Wij reageren binnen 30 dagen. Voor complexe verzoeken kan deze termijn worden verlengd tot 90 dagen — wij informeren je hierover.
                  </p>
                </div>
              </div>
            </div>

            {/* Processors */}
            <div>
              <h2 className="text-xl font-bold mb-3">Onze verwerkers</h2>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Wij werken samen met de volgende categorieën verwerkers. Met elke verwerker hebben wij een verwerkersovereenkomst afgesloten conform artikel 28 AVG.
              </p>
              <div className="rounded-2xl border overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="text-left px-4 py-3 font-medium text-muted-foreground">Categorie</th>
                      <th className="text-left px-4 py-3 font-medium text-muted-foreground hidden sm:table-cell">Voorbeelden</th>
                      <th className="text-left px-4 py-3 font-medium text-muted-foreground">Doel</th>
                    </tr>
                  </thead>
                  <tbody>
                    {processors.map((p, i) => (
                      <tr key={i} className="border-t">
                        <td className="px-4 py-3 font-medium text-sm">{p.category}</td>
                        <td className="px-4 py-3 text-muted-foreground text-xs hidden sm:table-cell">{p.examples}</td>
                        <td className="px-4 py-3 text-muted-foreground text-xs">{p.purpose}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-muted-foreground mt-3">Alle verwerkers zijn gevestigd in de EU of beschikken over passende waarborgen voor gegevensoverdracht buiten de EU (Standard Contractual Clauses).</p>
            </div>

            {/* Data retention */}
            <div>
              <h2 className="text-xl font-bold mb-3">Bewaartermijnen</h2>
              <div className="space-y-3">
                {[
                  { type: 'Accountgegevens', period: 'Duur van het account + 12 maanden na opzegging' },
                  { type: 'Merkbestanden en inhoud', period: 'Verwijderd binnen 30 dagen na accountverwijdering' },
                  { type: 'Facturen en betalingsgegevens', period: '7 jaar (wettelijke fiscale bewaarplicht)' },
                  { type: 'Logbestanden', period: 'Maximaal 90 dagen' },
                  { type: 'Analytische data', period: 'Maximaal 26 maanden (geanonimiseerd)' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 text-sm py-2 border-b last:border-0">
                    <span className="font-medium w-48 shrink-0">{item.type}</span>
                    <span className="text-muted-foreground">{item.period}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FG / AP */}
            <div>
              <h2 className="text-xl font-bold mb-3">Toezichthouder</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                De Autoriteit Persoonsgegevens (AP) is de Nederlandse toezichthouder op het gebied van privacy en gegevensbescherming. Als je een klacht hebt over de manier waarop wij jouw gegevens verwerken en wij er samen niet uitkomen, heb je het recht een klacht in te dienen bij de AP via <a href="https://www.autoriteitpersoonsgegevens.nl" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">autoriteitpersoonsgegevens.nl</a>.
              </p>
            </div>

            {/* Contact */}
            <div className="rounded-2xl border bg-card p-6">
              <div className="flex gap-3 items-start mb-4">
                <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h2 className="font-semibold mb-1">Contact voor privacyvragen</h2>
                  <p className="text-sm text-muted-foreground">Voor alle vragen over jouw privacy en gegevensbescherming:</p>
                </div>
              </div>
              <div className="pl-8 space-y-1 text-sm text-muted-foreground">
                <p>CMY.NL B.V., Barendrecht, Nederland</p>
                <p><a href="mailto:privacy@biz.nl" className="text-primary hover:underline">privacy@biz.nl</a></p>
                <p className="mt-3"><Link href="/privacy" className="text-primary hover:underline">Lees het volledige privacybeleid →</Link></p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </PageLayout>
  )
}
