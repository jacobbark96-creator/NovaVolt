import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pb-8 pt-12 sm:pt-16 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-6 sm:space-y-8">
            <a href="/" className="flex items-center group h-12 w-auto">
              <svg className="h-full w-auto" viewBox="0 0 512 102" xmlns="http://www.w3.org/2000/svg">
                <defs> 
                  <filter id="footer-glow" x="-50%" y="-50%" width="200%" height="200%"> 
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
                  <linearGradient id="footer-boltGrad" x1="0%" y1="0%" x2="0%" y2="100%"> 
                    <stop offset="0%" stopColor="#f3d1ff"/> 
                    <stop offset="45%" stopColor="#c266ff"/> 
                    <stop offset="100%" stopColor="#6a00ff"/> 
                  </linearGradient> 
                </defs> 
                <text x="0" y="72" fontFamily="Inter, sans-serif" fontWeight="500" fontSize="62" letterSpacing="-1" fill="#ffffff"> 
                  Nova 
                </text> 
                <g transform="translate(198,4)" filter="url(#footer-glow)"> 
                  <animateTransform attributeName="transform" 
                                    type="scale" 
                                    values="1;1.04;1" 
                                    dur="2.2s" 
                                    repeatCount="indefinite" 
                                    additive="sum"/> 
                  <path d="M38 0 L68 0 L50 40 L74 40 L30 98 L42 62 L20 62 Z" fill="url(#footer-boltGrad)"/> 
                  <path d="M46 6 L60 6 L50 34 L64 34 L38 84 L46 58 L34 58 Z" fill="#ffffff"/> 
                </g> 
                <text x="284" y="72" fontFamily="Inter, sans-serif" fontWeight="500" fontSize="62" letterSpacing="-1" fill="#ffffff"> 
                  olt 
                </text> 
              </svg>
            </a>
            <p className="text-sm leading-6 text-gray-300 max-w-sm sm:max-w-xs">
              Making sustainable heating accessible and affordable for every UK home. Expert heat pump installations with full government grant support.
            </p>
          </div>
          <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white uppercase tracking-wider">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a href="#benefits" className="text-sm leading-6 text-gray-400 hover:text-purple-400 transition-colors">
                      Benefits
                    </a>
                  </li>
                  <li>
                    <a href="#grant" className="text-sm leading-6 text-gray-400 hover:text-purple-400 transition-colors">
                      £7,500 Grant
                    </a>
                  </li>
                  <li>
                    <a href="#product" className="text-sm leading-6 text-gray-400 hover:text-purple-400 transition-colors">
                      Technology
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white uppercase tracking-wider">Contact</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-purple-400" />
                    <a href="tel:08001234567" className="text-sm leading-6 text-gray-400 hover:text-purple-400 transition-colors">
                      0800 123 4567
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-purple-400" />
                    <a href="mailto:hello@novavolt.co.uk" className="text-sm leading-6 text-gray-400 hover:text-purple-400 transition-colors">
                      hello@novavolt.co.uk
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm leading-6 text-gray-400">
                      123 Innovation Way<br />London<br />EC1A 1BB
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white uppercase tracking-wider">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a href="#" className="text-sm leading-6 text-gray-400 hover:text-purple-400 transition-colors">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm leading-6 text-gray-400 hover:text-purple-400 transition-colors">
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-400">
            &copy; {new Date().getFullYear()} NovaVolt Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
