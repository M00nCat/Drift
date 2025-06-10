import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function EventCarousel() {
  const events = [
    {
      id: 1,
      img: "323.jpg",
      title: "Slide Masters – Tor Poznań",
      date: "28.05.2025r.",
      description: "Profesjonalna nawierzchnia, szerokie zakręty i miejsce na pełen gaz! Driftowe zmagania w duchu fair play z podziałem na klasy – od amatora po PRO. Idealne wydarzenie, by wejść krok dalej w świat driftu."
    },
    {
      id: 2,
      img: "speedhunter.jpg",
      title: "Street Drift Night – Tor Łódź",
      date: "01.06.2025r.",
      description: "Łódzki tor zamienia się w arenę wieczornego driftu! Klimatyczne oświetlenie, dym, muzyka i luźna atmosfera – to idealne wydarzenie dla początkujących i średniozaawansowanych drifterów."
    },
    {
      id: 3,
      img: "silvia.jpg",
      title: "Drift Attack – Tor Kielce",
      date: "15.06.2025r.",
      description: "Górzysta nitka toru w Kielcach to wyzwanie dla każdego fana driftu! Szybkie łuki, zmienne nachylenie i adrenalina na każdym zakręcie. Wydarzenie dla tych, którzy lubią jeździć agresywnie – bokiem i z charakterem."
    },
    {
      id: 4,
      img: "skyline.jpg",
      title: "Drift Training Day – Tor Poznań",
      date: "28.06.2025r.",
      description: "Luźne jazdy, dużo czasu na torze i wsparcie doświadczonych instruktorów — Drift Training Day to wydarzenie stworzone z myślą o doskonaleniu techniki. Bez presji, bez klasyfikacji, za to z maksymalną frajdą z jazdy bokiem!"
    },
    {
      id: 5,
      img: "mazda.jpg",
      title: "Amator Cup – Tor Jastrząb",
      date: "07.07.2025r.",
      description: "100% czystej pasji i emocji. Tor Jastrząb gwarantuje techniczne zakręty i świetne warunki do jazdy w parach. Puchary, nagrody i masa motywacji do dalszego rozwoju!"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth < 768);
      }
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      showNext();
    }, 6500);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const showPrevious = () => {
    setCurrentIndex((current) => (current === 0 ? events.length - 1 : current - 1));
  };

  const showNext = () => {
    setCurrentIndex((current) => (current === events.length - 1 ? 0 : current + 1));
  };

  const visibleEvents = isMobile
      ? [events[currentIndex]]
      : [events[currentIndex], events[(currentIndex + 1) % events.length]];

  return (
      <div className="container mx-auto px-4 py-12">
        <div className="relative">

          {/* STRZAŁKI NA PC */}
          {!isMobile && (
              <>
                <motion.button
                    onClick={showPrevious}
                    className="absolute top-1/2 -translate-y-1/2 bg-yellow-400 text-black p-4 rounded-full hover:bg-yellow-300 z-10 left-0 w-12 h-12 p-4 flex items-center justify-center"
                >
                  <motion.span initial={{ scale: 1 }} whileHover={{ scale: 1.2 }} transition={{ duration: 0.15 }}>
                    ←
                  </motion.span>
                </motion.button>

                <motion.button
                    onClick={showNext}
                    className="absolute top-1/2 -translate-y-1/2 bg-yellow-400 text-black p-4 rounded-full hover:bg-yellow-300 z-10 right-0 w-12 h-12 p-4 flex items-center justify-center"
                >
                  <motion.span initial={{ scale: 1 }} whileHover={{ scale: 1.2 }} transition={{ duration: 0.15 }}>
                    →
                  </motion.span>
                </motion.button>
              </>
          )}

          {/* SLIDES */}
          <div className="flex justify-center w-full gap-8 overflow-hidden">
            <AnimatePresence mode="popLayout">
              {visibleEvents.map((event) => (
                  <motion.div
                      key={event.id}
                      layout
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.5, ease: 'easeInOut' }}
                      className={isMobile ? "w-full max-w-md" : "w-1/2 max-w-md"}
                  >
                    <div className="bg-gray-800 h-48 flex items-center justify-center overflow-hidden mb-4">
                      <motion.img
                          src={event.img}
                          alt={event.title}
                          initial={{ scale: 1 }}
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                          className="object-cover w-full h-full"

                      />
                    </div>
                    <div className="bg-yellow-400 p-6 text-black rounded-lg shadow-lg min-h-[220px]">
                      <h3 className="font-bold text-xl mb-2">{event.title}</h3>
                      <p className="text-sm mb-2">{event.date}</p>
                      <p className="text-sm">{event.description}</p>
                    </div>
                  </motion.div>
              ))}
            </AnimatePresence>
          </div>

              {/* PAGINATOR DLA MOBILE (kropki + strzałki po bokach) */}
          {isMobile && (
            <div className="flex justify-center items-center mt-4 space-x-4">
          {/* LEFT ARROW */}
          <button
              onClick={showPrevious}
              aria-label="Previous slide"
              className="p-2 bg-yellow-400 rounded-full hover:bg-yellow-300 flex items-center justify-center text-black"
              style={{ minWidth: 36, minHeight: 36 }}
          >
            ←
          </button>

          {/* KROPKI */}
          <div className="flex space-x-2">
            {events.map((_, idx) => (
                <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-4 h-4 rounded-full transition-colors duration-300 ${
                        currentIndex === idx ? 'bg-yellow-400' : 'bg-gray-400'
                    }`}
                    aria-label={`Slide ${idx + 1}`}
                />
            ))}
          </div>

          {/* RIGHT ARROW */}
          <button
              onClick={showNext}
              aria-label="Next slide"
              className="p-2 bg-yellow-400 rounded-full text-black hover:bg-yellow-300 flex items-center justify-center"
              style={{ minWidth: 36, minHeight: 36 }}
          >
            →
          </button>
        </div>
        )}


      </div>
      </div>
  );
}

export default EventCarousel;
