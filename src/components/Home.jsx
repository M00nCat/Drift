import { useState } from 'react';
import { Link } from 'react-router-dom';
import SignupForm from './SignupForm';
import EventCarousel from './EventCarousel';

function Home() {
    const [showSignupForm, setShowSignupForm] = useState(false);

    return (
        <div className="bg-black text-white min-h-screen">
            {/* Nagłówek */}
            <header className="fixed top-0 w-full bg-black/90 backdrop-blur-sm py-4 px-6 flex items-center justify-between z-50">
                <div className="w-20 h-20 bg-black-700 flex items-center justify-center">
                    <img src="/logo2.png" alt="Logo"  />
                </div>
                <h1 className="text-xl font-bold"><span className="text-yellow-400">DRIFT.LINE</span> | DRIFT COMPETITION</h1>
                <Link to="/regulations" className="text-yellow-400"><strong><p className="text-xl">Regulamin</p></strong></Link>
            </header>

            {/* Sekcja główna */}
            <div className="h-screen flex flex-col items-center justify-center text-center pt-20 relative bg-[url('/background.jpg')] bg-cover bg-center bg-no-repeat">
                <div className="relative z-10 bg-black/30 backdrop-blur-sm py-4 px-6 w-full">
                <h2 className="text-4xl font-bold z-10">Feel the Drift</h2>
                    <p className="text-lg text-yellow-400 z-10"><b>Poczuj emocje i adrenalinę!</b></p>
                    <button
                        onClick={() => document.getElementById("events").scrollIntoView({behavior: "smooth"})}
                        className="mt-6 bg-yellow-400 text-black px-6 py-3 rounded-md z-10"
                    >
                        Zapisz się
                    </button>
                </div>
            </div>

            {/* Sekcja o wydarzeniu */}
            <div id = "events" className="container mx-auto px-6 py-24 flex flex-col md:flex-row gap-8">
                <div className="w-full aspect-square rounded-lg flex items-center justify-center text-3xl">
                    <img src="/glowne.jpg" alt="glowne wydarzenie" className="w-full h-full object-cover rounded-lg" />
                </div>
                <div className="bg-yellow-400 p-8 text-black rounded-lg relative">
                    <h2 className="text-3xl font-bold mb-4">Najbliższe wydarzenie:</h2>
                    <p className="text-lg">
                        <p><strong>Drift Amator Day – 22 czerwca 2025, Tor Grand-Speed (Łódź)</strong></p>
                        Weź udział w wyjątkowym wydarzeniu dla pasjonatów jazdy bokiem!
                        Drift Amator Day to idealna okazja, by spróbować swoich sił na torze, poznać innych fanów driftu i poczuć klimat zawodów – bez presji i na luzie.
                        Własne RWD, kask i dobre nastawienie – więcej nie trzeba.
                        <br></br>
                        Zapisy trwają!
                    </p>
                    <button
                        onClick={() => setShowSignupForm(true)}
                        className="
    bg-black text-yellow-400 px-6 py-3 rounded-md hover:bg-gray-800 transition
    mt-2
    sm:mt-4
    md:absolute md:bottom-4 md:left-1/2 md:transform md:-translate-x-1/2
  "                    >
                        Formularz zapisu
                    </button>
                </div>
            </div>

            {/* Karuzela z wydarzeniami */}
            <EventCarousel />

            {/* Stopka */}
            <footer className="bg-black py-12 px-6 mt-24">
                <div className="container mx-auto flex flex-col md:flex-row justify-between gap-8">
                    <div>
                        <h3 className="text-2xl font-bold mb-6">Kontakt</h3>
                        <p className="text-lg mb-2">Tel: +48 123 456 789</p>
                        <p className="text-lg">Email: info@drift_line.pl</p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-6">Sponsorzy</h3>
                        <div className="flex gap-6">
                            <img src="/allegro.png" alt="allegro" className="w-24"/>
                            <img src="/HKS.png" alt="HKS" className="w-24"/>
                            <img src="/Tire.png" alt="T" className="w-24"/>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Formularz rejestracyjny */}
            {showSignupForm && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center overflow-auto p-4 z-50">
                    <div className="bg-neutral-100 text-white p-6 rounded-md relative w-full max-w-xl">
                        <button
                            onClick={() => setShowSignupForm(false)}
                            className="absolute top-2 right-2 text-gray-600"
                        >
                            ✕
                        </button>
                        <SignupForm />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Home;
