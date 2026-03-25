import { Zap, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pb-8 pt-12 sm:pt-16 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-6 sm:space-y-8">
            <a href="/" className="flex items-center gap-2 group">
              <div className="p-1.5 rounded-lg bg-white/10 group-hover:bg-purple-500/20 transition-colors">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
              </div>
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                NovaVolt
              </span>
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
                      £7,000 Grant
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
