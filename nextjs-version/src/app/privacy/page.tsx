import { PageLayout } from '@/components/page-layout'
import { Badge } from '@/components/ui/badge'

export default function PrivacyPage() {
  return (
    <PageLayout>
      <section className="py-16 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <Badge variant="outline" className="mb-4">Juridisch</Badge>
          <h1 className="text-4xl font-extrabold tracking-tight mb-4">Privacybeleid</h1>
          <p className="text-muted-foreground">Laatst bijgewerkt: april 2026</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-10">

            <div>
              <h2 className="text-xl font-bold mb-3">1. Wie zijn wij?</h2>
              <p className="text-muted-foreground leading-relaxed">
                Biz.nl is een dienst van CMY.NL B.V., gevestigd te Barendrecht, Nederland. Wij zijn verantwoordelijk voor de verwerking van jouw persoonsgegevens zoals beschreven in dit privacybeleid. Heb je vragen? Neem contact op via <a href="mailto:privacy@biz.nl" className="text-primary hover:underline">privacy@biz.nl</a>.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">2. Welke gegevens verzamelen wij?</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">Wij verzamelen de volgende persoonsgegevens wanneer je gebruik maakt van biz.nl:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-2"><span className="text-primary shrink-0">—</span> Naam en e-mailadres (bij registratie)</li>
                <li className="flex gap-2"><span className="text-primary shrink-0">—</span> Factuurgegevens zoals bedrijfsnaam, adres en BTW-nummer</li>
                <li className="flex gap-2"><span className="text-primary shrink-0">—</span> Betalingsgegevens (verwerkt via onze betaalprovider, wij slaan geen kaartgegevens op)</li>
                <li className="flex gap-2"><span className="text-primary shrink-0">—</span> Inhoud die je aanmaakt op het platform (merknamen, teksten, afbeeldingen)</li>
                <li className="flex gap-2"><span className="text-primary shrink-0">—</span> Gebruiksgegevens zoals inlogmomenten, uitgevoerde AI-acties en creditverbruik</li>
                <li className="flex gap-2"><span className="text-primary shrink-0">—</span> Technische gegevens zoals IP-adres, browsertype en apparaatinformatie</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">3. Waarvoor gebruiken wij jouw gegevens?</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">Wij verwerken jouw gegevens voor de volgende doeleinden:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-2"><span className="text-primary shrink-0">—</span> Het leveren en verbeteren van onze dienst</li>
                <li className="flex gap-2"><span className="text-primary shrink-0">—</span> Facturering en betalingsverwerking</li>
                <li className="flex gap-2"><span className="text-primary shrink-0">—</span> Klantenservice en ondersteuning</li>
                <li className="flex gap-2"><span className="text-primary shrink-0">—</span> Het sturen van transactionele e-mails (facturen, wachtwoordherstel)</li>
                <li className="flex gap-2"><span className="text-primary shrink-0">—</span> Nieuwsbrief en marketing (alleen met jouw toestemming)</li>
                <li className="flex gap-2"><span className="text-primary shrink-0">—</span> Het voldoen aan wettelijke verplichtingen</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">4. Grondslag voor verwerking</h2>
              <p className="text-muted-foreground leading-relaxed">
                Wij verwerken jouw persoonsgegevens op basis van de uitvoering van de overeenkomst die wij met jou hebben (je abonnement op biz.nl), jouw toestemming (voor marketing en cookies), onze gerechtvaardigde belangen (verbetering van de dienst, fraudepreventie) en wettelijke verplichtingen (belastingwetgeving, bewaarplicht).
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">5. Hoe lang bewaren wij jouw gegevens?</h2>
              <p className="text-muted-foreground leading-relaxed">
                Wij bewaren jouw persoonsgegevens niet langer dan noodzakelijk. Accountgegevens bewaren wij zolang je een actief account hebt, plus 12 maanden daarna. Factuurgegevens bewaren wij 7 jaar conform de fiscale bewaarplicht. Na verwijdering van je account worden al je merkbestanden en inhoud binnen 30 dagen permanent verwijderd.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">6. Delen wij jouw gegevens?</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Wij verkopen jouw gegevens nooit aan derden. Wij delen gegevens alleen met:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-2"><span className="text-primary shrink-0">—</span> Betaalproviders (voor de verwerking van betalingen)</li>
                <li className="flex gap-2"><span className="text-primary shrink-0">—</span> Hostingproviders (voor de opslag van data, binnen de EU)</li>
                <li className="flex gap-2"><span className="text-primary shrink-0">—</span> AI-dienstverleners (voor het genereren van merkinhoud)</li>
                <li className="flex gap-2"><span className="text-primary shrink-0">—</span> Overheidsinstanties (alleen indien wettelijk verplicht)</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Al onze verwerkers zijn contractueel verplicht jouw gegevens te beschermen conform de AVG.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">7. Jouw rechten</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">Op grond van de AVG heb je de volgende rechten:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-2"><span className="text-primary shrink-0">—</span> <strong className="text-foreground">Inzage:</strong> je kunt opvragen welke gegevens wij van je hebben</li>
                <li className="flex gap-2"><span className="text-primary shrink-0">—</span> <strong className="text-foreground">Correctie:</strong> je kunt onjuiste gegevens laten aanpassen</li>
                <li className="flex gap-2"><span className="text-primary shrink-0">—</span> <strong className="text-foreground">Verwijdering:</strong> je kunt verzoeken om verwijdering van jouw gegevens</li>
                <li className="flex gap-2"><span className="text-primary shrink-0">—</span> <strong className="text-foreground">Bezwaar:</strong> je kunt bezwaar maken tegen verwerking op basis van gerechtvaardigde belangen</li>
                <li className="flex gap-2"><span className="text-primary shrink-0">—</span> <strong className="text-foreground">Overdraagbaarheid:</strong> je kunt een export van jouw gegevens opvragen</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Stuur je verzoek naar <a href="mailto:privacy@biz.nl" className="text-primary hover:underline">privacy@biz.nl</a>. Wij reageren binnen 30 dagen. Je hebt ook het recht een klacht in te dienen bij de Autoriteit Persoonsgegevens.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">8. Beveiliging</h2>
              <p className="text-muted-foreground leading-relaxed">
                Wij nemen passende technische en organisatorische maatregelen om jouw gegevens te beschermen tegen verlies, misbruik en ongeautoriseerde toegang. Alle communicatie is versleuteld via HTTPS. Wachtwoorden worden nooit leesbaar opgeslagen.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">9. Wijzigingen</h2>
              <p className="text-muted-foreground leading-relaxed">
                Wij kunnen dit privacybeleid van tijd tot tijd aanpassen. Bij belangrijke wijzigingen informeren wij je per e-mail. De meest actuele versie vind je altijd op deze pagina.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">10. Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                CMY.NL B.V.<br />
                Barendrecht, Nederland<br />
                <a href="mailto:privacy@biz.nl" className="text-primary hover:underline">privacy@biz.nl</a>
              </p>
            </div>

          </div>
        </div>
      </section>
    </PageLayout>
  )
}
