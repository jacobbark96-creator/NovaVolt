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
              <svg className="h-full w-auto" viewBox="0 0 400 120" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="footer-boltGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#e9d5ff" />
                    <stop offset="50%" stopColor="#c084fc" />
                    <stop offset="100%" stopColor="#7e22ce" />
                  </linearGradient>
                  <filter id="footer-glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Nova */}
                <text x="0" y="85" fontFamily="Inter, sans-serif" fontWeight="600" fontSize="72" letterSpacing="-1" fill="#ffffff">
                  Nova
                </text>

                {/* Stylized V + Lightning Bolt */}
                <g transform="translate(180, 15)" filter="url(#footer-glow)">
                  <path
                    d="M 25 0 L 45 60 L 55 35 L 75 35 L 45 95 L 25 30 L 10 30 Z"
                    fill="url(#footer-boltGrad)"
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
                <text x="260" y="85" fontFamily="Inter, sans-serif" fontWeight="600" fontSize="72" letterSpacing="-1" fill="#ffffff">
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
