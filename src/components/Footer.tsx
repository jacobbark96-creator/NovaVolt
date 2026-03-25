import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#374151] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <span className="text-2xl font-bold mb-4 block">NovaVolt</span>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
              Your trusted partner for professional heat pump installations across the UK. Making energy-efficient heating accessible to everyone.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300">
                <Phone className="h-5 w-5 mr-3 text-[#9F7AEA]" />
                <span>0800 123 4567</span>
              </li>
              <li className="flex items-center text-gray-300">
                <Mail className="h-5 w-5 mr-3 text-[#9F7AEA]" />
                <a href="mailto:info@novavolt.co.uk" className="hover:text-white transition-colors">
                  info@novavolt.co.uk
                </a>
              </li>
              <li className="flex items-start text-gray-300">
                <MapPin className="h-5 w-5 mr-3 mt-1 text-[#9F7AEA]" />
                <span>
                  123 Innovation Way<br />
                  London<br />
                  EC1A 1BB
                </span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} NovaVolt Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
