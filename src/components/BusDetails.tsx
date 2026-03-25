import { Check, Info } from 'lucide-react';

export default function BusDetails() {
  return (
    <div id="grant" className="bg-[#F9FAFB] py-24 sm:py-32 overflow-hidden relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-16 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-purple-100 text-purple-700 p-1.5 rounded-md">
                  <Info className="w-5 h-5" />
                </span>
                <h2 className="text-base font-semibold leading-7 text-[#6B46C1] uppercase tracking-wider">Government Funding</h2>
              </div>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                The Boiler Upgrade Scheme (BUS)
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                The UK Government is currently offering an upfront grant of <strong>£7,000</strong> to encourage homeowners to replace fossil fuel heating systems with a more efficient, low-carbon heat pump.
              </p>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                With NovaVolt, you don't even have to worry about the paperwork. We handle the entire grant application process for you, deducting the £7,000 directly from your final installation quote.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-gray-100 relative">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-gradient-to-br from-purple-400 to-[#6B46C1] rounded-full opacity-20 blur-2xl"></div>
            <h3 className="text-xl font-bold text-gray-900 mb-6">Who is eligible?</h3>
            <ul className="space-y-4">
              {[
                'You must own the property you are applying for (including businesses and second homes)',
                'You must be replacing a fossil fuel heating system (such as oil, gas, or direct electric)',
                'The property must have a valid Energy Performance Certificate (EPC)',
                'No outstanding recommendations for loft or cavity wall insulation'
              ].map((item, index) => (
                <li key={index} className="flex gap-x-3">
                  <div className="mt-1 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-purple-100">
                    <Check className="h-4 w-4 text-[#6B46C1]" />
                  </div>
                  <span className="text-gray-600 leading-7">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-gray-100">
              <a href="#quote" className="text-[#6B46C1] font-semibold hover:text-[#55369A] flex items-center transition-colors">
                Check your eligibility today <span aria-hidden="true" className="ml-2">→</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}