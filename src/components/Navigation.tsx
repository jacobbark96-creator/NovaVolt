import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-[#6B46C1]">NovaVolt</span>
            </a>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#benefits" className="text-gray-600 hover:text-[#6B46C1] transition-colors font-medium">Benefits</a>
            <a href="#product" className="text-gray-600 hover:text-[#6B46C1] transition-colors font-medium">How it Works</a>
            <a 
              href="#quote" 
              className="bg-[#6B46C1] text-white px-6 py-2.5 rounded-md font-medium hover:bg-[#55369A] transition-colors shadow-sm"
            >
              Get Quote
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#6B46C1]"
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
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
            <a
              href="#benefits"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#6B46C1] hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Benefits
            </a>
            <a
              href="#product"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#6B46C1] hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              How it Works
            </a>
            <a
              href="#quote"
              className="block w-full text-center mt-4 px-3 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#6B46C1] hover:bg-[#55369A]"
              onClick={() => setIsOpen(false)}
            >
              Get Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
