import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background from './components/Background';

import LoadingScreen from './components/LoadingScreen';
import { AnimatePresence } from 'framer-motion';

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate initial loading (or replace with real asset loading logic)
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <AnimatePresence>
                {isLoading && <LoadingScreen />}
            </AnimatePresence>

            {!isLoading && (
                <div className="flex bg-gray-50 dark:bg-[#0a0a0a] min-h-screen">
                    <Navbar />

                    <div className="flex-1 md:ml-[300px] transition-all duration-300 relative">
                        <Background />
                        <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 md:py-12 flex flex-col gap-24 font-sans max-w-5xl ">
                            <section id="about" className="scroll-mt-32">
                                <Hero />
                            </section>

                            <section id="resume" className="scroll-mt-32">
                                <Resume />
                            </section>

                            <section id="portfolio" className="scroll-mt-32">
                                <Portfolio />
                            </section>

                            <section id="contact" className="scroll-mt-32">
                                <Contact />
                            </section>
                        </main>

                        <Footer />
                    </div>
                </div>
            )}
        </>
    );
}

export default App;
