import { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <div className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'top-4 sm:top-6' : 'top-4 sm:top-6'}`}>
      <nav className={`mx-auto transition-all duration-300 ${
        scrolled 
          ? 'max-w-5xl bg-white/90 backdrop-blur-md shadow-lg rounded-full border border-white/20 px-2' 
          : 'max-w-7xl bg-white/10 backdrop-blur-md shadow-lg rounded-full border border-white/10 px-4'
      }`}>
        <div className={`flex justify-between transition-all duration-300 ${scrolled ? 'h-16' : 'h-20'}`}>
          <div className="flex items-center pl-4">
            <a href="/" className="flex-shrink-0 flex items-center gap-2 group">
              <div className={`p-1.5 rounded-lg transition-colors ${scrolled ? 'bg-purple-100' : 'bg-white/10'}`}>
                <Zap className={`w-5 h-5 transition-colors ${scrolled ? 'text-[#6B46C1]' : 'text-white'}`} />
              </div>
              <span className={`text-2xl font-bold tracking-tight transition-colors ${scrolled ? 'text-[#6B46C1]' : 'text-white'}`}>
                NovaVolt
              </span>
            </a>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-1 pr-2">
            <a href="#benefits" className={`px-4 py-2 rounded-full text-sm font-medium transition-all hover:bg-purple-500/10 ${scrolled ? 'text-gray-600 hover:text-[#6B46C1]' : 'text-gray-300 hover:text-white'}`}>Benefits</a>
            <a href="#grant" className={`px-4 py-2 rounded-full text-sm font-medium transition-all hover:bg-purple-500/10 ${scrolled ? 'text-gray-600 hover:text-[#6B46C1]' : 'text-gray-300 hover:text-white'}`}>£7k Grant</a>
            <a href="#product" className={`px-4 py-2 rounded-full text-sm font-medium transition-all hover:bg-purple-500/10 ${scrolled ? 'text-gray-600 hover:text-[#6B46C1]' : 'text-gray-300 hover:text-white'}`}>Technology</a>
            <div className="pl-2">
              <a 
                href="#quote" 
                className="inline-flex items-center justify-center bg-gradient-to-r from-[#6B46C1] to-[#805AD5] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all hover:-translate-y-0.5"
              >
                Get Quote
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden pr-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-full focus:outline-none transition-colors ${
                scrolled 
                  ? 'text-gray-600 hover:bg-gray-100' 
                  : 'text-gray-300 hover:bg-white/10'
              }`}
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className={`px-4 pt-2 pb-6 space-y-2 mt-2 rounded-2xl ${scrolled ? 'bg-transparent' : 'bg-gray-900/90 backdrop-blur-md'}`}>
            <a
              href="#benefits"
              className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${scrolled ? 'text-gray-700 hover:bg-purple-50 hover:text-[#6B46C1]' : 'text-gray-300 hover:bg-white/10 hover:text-white'}`}
              onClick={() => setIsOpen(false)}
            >
              Benefits
            </a>
            <a
              href="#grant"
              className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${scrolled ? 'text-gray-700 hover:bg-purple-50 hover:text-[#6B46C1]' : 'text-gray-300 hover:bg-white/10 hover:text-white'}`}
              onClick={() => setIsOpen(false)}
            >
              £7k Grant
            </a>
            <a
              href="#product"
              className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${scrolled ? 'text-gray-700 hover:bg-purple-50 hover:text-[#6B46C1]' : 'text-gray-300 hover:bg-white/10 hover:text-white'}`}
              onClick={() => setIsOpen(false)}
            >
              Technology
            </a>
            <a
              href="#quote"
              className="block w-full text-center mt-4 px-4 py-3 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-[#6B46C1] to-[#805AD5] shadow-md"
              onClick={() => setIsOpen(false)}
            >
              Get Quote
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
