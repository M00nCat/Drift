import { Link } from 'react-router-dom';

function Regulations() {
  return (
      <div className="min-h-screen bg-black text-white p-8">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-yellow-400">Regulamin Wydarzenia</h1>
            <Link
                to="/"
                className="bg-yellow-400 text-black px-6 py-2 rounded hover:bg-yellow-300 transition-colors"
            >
              Powrót
            </Link>
          </div>
          <div className="bg-gray-900 p-8 rounded-lg space-y-6">

            <section>
              <h2 className="text-2xl font-bold mb-2">1. Organizator</h2>
              <p>Zawody organizuje <strong>Organizacja Wydarzeń DRIFT.LINE</strong> we współpracy z zarządcą obiektu oraz sponsorami:</p>
              <ul className="list-disc list-inside ml-4">
                <li><strong>TireMaster</strong> – Producent opon</li>
                <li><strong>HKS Polska</strong> – Firma tuningująca samochody.</li>
                <li><strong>Allegro </strong> – Platforma e-commerce</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-2">2. Uczestnictwo</h2>
              <p>Udział może wziąć każdy uczestnik, który spełnia wymagania określone w regulaminie i posiada odpowiednie uprawnienia, w zależności od charakteru wydarzenia.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-2">3. Wymagania techniczne</h2>
              <ul className="list-disc list-inside ml-4">
                <li>Wymagane odpowiednie wyposażenie zgodne z rodzajem wydarzenia</li>
                <li>Sprawny technicznie pojazd lub sprzęt (jeśli dotyczy)</li>
                <li>Obowiązkowy kask, gaśnica i pasy bezpieczeństwa (lub inne wymagania zależne od wydarzenia)</li>
                <li>Zalecane: dodatkowe akcesoria zapewniające bezpieczeństwo (np. kubełkowe fotele, klatka bezpieczeństwa, wyłącznik prądu)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-2">4. Przebieg wydarzenia</h2>
              <p>Rywalizacja oceniana jest przez sędziów (jeśli dotyczy) na podstawie określonych kryteriów, takich jak styl, technika, płynność czy linia przejazdu. Format uzależniony od charakterystyki wydarzenia.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-2">5. Bezpieczeństwo</h2>
              <p>Zakaz uczestnictwa pod wpływem alkoholu lub środków odurzających. Organizator zastrzega sobie prawo do usunięcia uczestnika w razie złamania zasad.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-2">6. Nagrody</h2>
              <p>Dla najlepszych przewidziane są nagrody rzeczowe i puchary. Możliwe wyróżnienia specjalne, takie jak „Styl Dnia”, „Debiutant”, „Publiczność wybiera” itp.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-2">7. Postanowienia końcowe</h2>
              <p>Organizator zastrzega sobie prawo do zmian w programie wydarzenia. Udział oznacza akceptację niniejszego regulaminu.</p>
            </section>

          </div>
        </div>
      </div>
  );
}

export default Regulations;
