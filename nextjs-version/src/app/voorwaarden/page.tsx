import { PageLayout } from '@/components/page-layout'
import { Badge } from '@/components/ui/badge'

export default function VoorwaardenPage() {
  return (
    <PageLayout>
      <section className="py-16 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <Badge variant="outline" className="mb-4">Juridisch</Badge>
          <h1 className="text-4xl font-extrabold tracking-tight mb-4">Algemene Voorwaarden</h1>
          <p className="text-muted-foreground">Versie 1.0 — Laatst bijgewerkt: april 2026</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="space-y-10">

            <div>
              <h2 className="text-xl font-bold mb-3">Artikel 1 — Definities</h2>
              <ul className="space-y-2 text-muted-foreground text-sm leading-relaxed">
                <li><strong className="text-foreground">Biz.nl:</strong> de dienst aangeboden door CMY.NL B.V., gevestigd te Barendrecht, Nederland, ingeschreven bij de Kamer van Koophandel.</li>
                <li><strong className="text-foreground">Gebruiker:</strong> iedere natuurlijke of rechtspersoon die een account aanmaakt en gebruik maakt van biz.nl.</li>
                <li><strong className="text-foreground">Platform:</strong> de software, website en alle gerelateerde diensten van biz.nl.</li>
                <li><strong className="text-foreground">Workspace:</strong> een afgebakende omgeving op het platform gekoppeld aan één merkidentiteit.</li>
                <li><strong className="text-foreground">AI-tegoed:</strong> de eenheid die binnen het platform wordt gebruikt voor het uitvoeren van AI-acties.</li>
                <li><strong className="text-foreground">Overeenkomst:</strong> de overeenkomst tussen biz.nl en de gebruiker, gevormd door aanvaarding van deze voorwaarden en het gekozen abonnement.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">Artikel 2 — Toepasselijkheid</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, diensten en overeenkomsten van biz.nl. Door een account aan te maken of gebruik te maken van het platform, aanvaardt de gebruiker deze voorwaarden. Afwijkingen zijn alleen geldig indien schriftelijk overeengekomen.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">Artikel 3 — Abonnementen en betaling</h2>
              <ul className="space-y-2 text-muted-foreground text-sm leading-relaxed">
                <li>3.1 Biz.nl biedt abonnementen aan op maand- en jaarbasis. De actuele prijzen staan vermeld op biz.nl/pricing.</li>
                <li>3.2 Betaling vindt vooraf plaats via de beschikbare betaalmethoden. Facturering geschiedt automatisch aan het begin van elke betaalperiode.</li>
                <li>3.3 Alle prijzen zijn exclusief 21% btw, tenzij anders vermeld.</li>
                <li>3.4 Bij niet-tijdige betaling behoudt biz.nl zich het recht voor de toegang tot het platform te blokkeren totdat de betaling is voldaan.</li>
                <li>3.5 Maandelijkse AI-tegoed vervalt aan het einde van elke betaalperiode en wordt niet overgedragen. Aangeschafte top-up credits vervallen niet.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">Artikel 4 — Opzegging en annulering</h2>
              <ul className="space-y-2 text-muted-foreground text-sm leading-relaxed">
                <li>4.1 De gebruiker kan het abonnement op elk moment opzeggen via de accountinstellingen. De dienst blijft beschikbaar tot het einde van de lopende betaalperiode.</li>
                <li>4.2 Bij opzegging worden geen reeds betaalde bedragen gerestitueerd, tenzij sprake is van een gegronde klacht.</li>
                <li>4.3 Biz.nl biedt een 14-daagse geld-terug-garantie voor nieuwe abonnees. Verzoeken dienen te worden ingediend via privacy@biz.nl.</li>
                <li>4.4 Biz.nl kan een account beëindigen bij overtreding van deze voorwaarden, zonder restitutie van betaalde bedragen.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">Artikel 5 — Gebruik van het platform</h2>
              <ul className="space-y-2 text-muted-foreground text-sm leading-relaxed">
                <li>5.1 De gebruiker is verantwoordelijk voor alle activiteiten die plaatsvinden onder zijn account.</li>
                <li>5.2 Het is niet toegestaan het platform te gebruiken voor illegale doeleinden, het verspreiden van misleidende informatie, inbreuk op intellectuele eigendomsrechten van derden, of het omzeilen van technische beperkingen.</li>
                <li>5.3 De gebruiker dient de workspace-limieten van het gekozen abonnement te respecteren.</li>
                <li>5.4 Biz.nl behoudt zich het recht voor accounts te blokkeren of te verwijderen bij misbruik.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">Artikel 6 — Intellectueel eigendom</h2>
              <ul className="space-y-2 text-muted-foreground text-sm leading-relaxed">
                <li>6.1 Alle door de gebruiker via het platform gegenereerde merkinhoud (logo&apos;s, teksten, afbeeldingen) is eigendom van de gebruiker, mits de gebruiker beschikt over een actief betaald abonnement op het moment van creatie.</li>
                <li>6.2 Biz.nl behoudt het recht de gegenereerde inhoud te gebruiken voor het verbeteren van het platform, tenzij de gebruiker hier bezwaar tegen maakt via privacy@biz.nl.</li>
                <li>6.3 De software, het platform en alle onderliggende technologie van biz.nl zijn en blijven eigendom van CMY.NL B.V.</li>
                <li>6.4 Gebruikers verlenen biz.nl een niet-exclusief recht om door hen ingevoerde merkgegevens te verwerken voor het leveren van de dienst.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">Artikel 7 — Beschikbaarheid en onderhoud</h2>
              <ul className="space-y-2 text-muted-foreground text-sm leading-relaxed">
                <li>7.1 Biz.nl streeft naar een beschikbaarheid van 99,5% op jaarbasis, maar geeft hierop geen absolute garantie.</li>
                <li>7.2 Gepland onderhoud wordt zo mogelijk van tevoren aangekondigd. Biz.nl is niet aansprakelijk voor schade als gevolg van tijdelijke onbeschikbaarheid.</li>
                <li>7.3 Biz.nl behoudt zich het recht voor het platform of onderdelen daarvan te wijzigen, te verbeteren of te beëindigen, met een opzegtermijn van minimaal 30 dagen bij structurele wijzigingen.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">Artikel 8 — Aansprakelijkheid</h2>
              <ul className="space-y-2 text-muted-foreground text-sm leading-relaxed">
                <li>8.1 De aansprakelijkheid van biz.nl is beperkt tot het bedrag dat de gebruiker in de drie maanden voorafgaand aan de schade heeft betaald.</li>
                <li>8.2 Biz.nl is niet aansprakelijk voor indirecte schade, gevolgschade, gederfde winst of verlies van gegevens.</li>
                <li>8.3 De gebruiker is zelf verantwoordelijk voor het controleren en goedkeuren van door AI gegenereerde inhoud voordat deze wordt gepubliceerd of gebruikt.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">Artikel 9 — Toepasselijk recht en geschillen</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Op deze overeenkomst is Nederlands recht van toepassing. Geschillen worden bij voorkeur in onderling overleg opgelost. Indien dit niet lukt, is de bevoegde rechter in het arrondissement Rotterdam exclusief bevoegd.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">Artikel 10 — Contact</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                CMY.NL B.V. — Barendrecht, Nederland<br />
                <a href="mailto:hallo@biz.nl" className="text-primary hover:underline">hallo@biz.nl</a>
              </p>
            </div>

          </div>
        </div>
      </section>
    </PageLayout>
  )
}
