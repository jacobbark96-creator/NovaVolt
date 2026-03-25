import Navigation from './components/Navigation';
import Hero from './components/Hero';
import BusDetails from './components/BusDetails';
import Benefits from './components/Benefits';
import ProductShowcase from './components/ProductShowcase';
import QuoteForm from './components/QuoteForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Navigation />
      <main className="flex-grow">
        <Hero />
        <BusDetails />
        <Benefits />
        <ProductShowcase />
        <QuoteForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
