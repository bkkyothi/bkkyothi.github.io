import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background from './components/Background';
import ThemeToggle from './components/ThemeToggle';

function App() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
            <Background />
            <Navbar />
            <main>
                <Hero />
                <Resume />
                <Portfolio />
                <Contact />
            </main>
            <Footer />
            <ThemeToggle />
        </div>
    );
}

export default App;
