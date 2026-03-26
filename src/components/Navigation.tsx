import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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
            <a href="/" className="flex-shrink-0 flex items-center h-full py-2">
              <svg className="h-full w-auto" viewBox="0 0 512 102" xmlns="http://www.w3.org/2000/svg">
                <defs> 
                  <filter id="nav-glow" x="-50%" y="-50%" width="200%" height="200%"> 
                    <feGaussianBlur stdDeviation="2" result="blur"> 
                      <animate attributeName="stdDeviation" 
                               values="1.8;2.6;1.8" 
                               dur="2.2s" 
                               repeatCount="indefinite"/> 
                    </feGaussianBlur> 
                    <feMerge> 
                      <feMergeNode in="blur"/> 
                      <feMergeNode in="SourceGraphic"/> 
                    </feMerge> 
                  </filter> 
                  <linearGradient id="nav-boltGrad" x1="0%" y1="0%" x2="0%" y2="100%"> 
                    <stop offset="0%" stopColor="#f3d1ff"/> 
                    <stop offset="45%" stopColor="#c266ff"/> 
                    <stop offset="100%" stopColor="#6a00ff"/> 
                  </linearGradient> 
                </defs> 
                <text x="0" y="72" fontFamily="Inter, sans-serif" fontWeight="500" fontSize="62" letterSpacing="-1" fill={scrolled ? '#111827' : '#ffffff'} style={{ transition: 'fill 0.3s' }}> 
                  Nova 
                </text> 
                <g transform="translate(198,4)" filter="url(#nav-glow)"> 
                  <animateTransform attributeName="transform" 
                                    type="scale" 
                                    values="1;1.04;1" 
                                    dur="2.2s" 
                                    repeatCount="indefinite" 
                                    additive="sum"/> 
                  <path d="M38 0 L68 0 L50 40 L74 40 L30 98 L42 62 L20 62 Z" fill="url(#nav-boltGrad)"/> 
                  <path d="M46 6 L60 6 L50 34 L64 34 L38 84 L46 58 L34 58 Z" fill="#ffffff"/> 
                </g> 
                <text x="284" y="72" fontFamily="Inter, sans-serif" fontWeight="500" fontSize="62" letterSpacing="-1" fill={scrolled ? '#111827' : '#ffffff'} style={{ transition: 'fill 0.3s' }}> 
                  olt 
                </text> 
              </svg>
            </a>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-1 pr-2">
            <a href="#benefits" className={`px-4 py-2 rounded-full text-sm font-medium transition-all hover:bg-purple-500/10 ${scrolled ? 'text-gray-600 hover:text-[#6B46C1]' : 'text-gray-300 hover:text-white'}`}>Benefits</a>
            <a href="#grant" className={`px-4 py-2 rounded-full text-sm font-medium transition-all hover:bg-purple-500/10 ${scrolled ? 'text-gray-600 hover:text-[#6B46C1]' : 'text-gray-300 hover:text-white'}`}>£7.5k Grant</a>
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
              £7.5k Grant
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
