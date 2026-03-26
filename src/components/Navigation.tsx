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
      <nav className={`mx-auto transition-all duration-300 relative ${
        scrolled 
          ? 'max-w-5xl bg-white/90 backdrop-blur-md shadow-lg rounded-full border border-white/20 px-2' 
          : 'max-w-7xl bg-white/10 backdrop-blur-md shadow-lg rounded-full border border-white/10 px-4'
      }`}>
        <div className={`flex justify-between transition-all duration-300 ${scrolled ? 'h-16' : 'h-20'}`}>
          <div className="flex items-center pl-4">
            <a href="/" className="flex-shrink-0 flex items-center h-full py-2">
              <svg className="h-10 sm:h-12 w-auto" viewBox="0 0 400 120" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="nav-boltGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#e9d5ff" />
                    <stop offset="50%" stopColor="#c084fc" />
                    <stop offset="100%" stopColor="#7e22ce" />
                  </linearGradient>
                  <filter id="nav-glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Nova */}
                <text x="0" y="85" fontFamily="Inter, sans-serif" fontWeight="600" fontSize="72" letterSpacing="-1" fill={scrolled ? '#111827' : '#ffffff'} style={{ transition: 'fill 0.3s' }}>
                  Nova
                </text>

                {/* Stylized V + Lightning Bolt */}
                <g transform="translate(180, 15)" filter="url(#nav-glow)">
                  <path
                    d="M 25 0 L 45 60 L 55 35 L 75 35 L 45 95 L 25 30 L 10 30 Z"
                    fill="url(#nav-boltGrad)"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                  />
                  {/* Lightning accent extending up */}
                  <path
                    d="M 55 35 L 75 0 L 65 25 Z"
                    fill="#e9d5ff"
                  />
                </g>

                {/* olt */}
                <text x="260" y="85" fontFamily="Inter, sans-serif" fontWeight="600" fontSize="72" letterSpacing="-1" fill={scrolled ? '#111827' : '#ffffff'} style={{ transition: 'fill 0.3s' }}>
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

        {/* Mobile menu dropdown */}
        <div 
          className={`md:hidden absolute top-full left-0 w-full mt-2 transition-all duration-300 ease-in-out origin-top ${
            isOpen ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-95 invisible'
          }`}
        >
          <div className={`p-4 space-y-3 rounded-[2rem] shadow-2xl border ${
            scrolled 
              ? 'bg-white/95 backdrop-blur-xl border-gray-200' 
              : 'bg-gray-900/95 backdrop-blur-xl border-gray-700'
          }`}>
            <a
              href="#benefits"
              className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${
                scrolled 
                  ? 'text-gray-700 hover:bg-purple-50 hover:text-[#6B46C1]' 
                  : 'text-gray-300 hover:bg-white/10 hover:text-white'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Benefits
            </a>
            <a
              href="#grant"
              className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${
                scrolled 
                  ? 'text-gray-700 hover:bg-purple-50 hover:text-[#6B46C1]' 
                  : 'text-gray-300 hover:bg-white/10 hover:text-white'
              }`}
              onClick={() => setIsOpen(false)}
            >
              £7.5k Grant
            </a>
            <a
              href="#product"
              className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${
                scrolled 
                  ? 'text-gray-700 hover:bg-purple-50 hover:text-[#6B46C1]' 
                  : 'text-gray-300 hover:bg-white/10 hover:text-white'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Technology
            </a>
            <div className="pt-2 pb-1">
                <a
                  href="#quote"
                  className="block w-full text-center px-4 py-4 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-[#6B46C1] to-[#805AD5] shadow-md hover:shadow-lg transition-all active:scale-[0.98]"
                  onClick={() => setIsOpen(false)}
                >
                  Get Quote
                </a>
              </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
