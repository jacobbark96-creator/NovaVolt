import { Check, Info, ShieldCheck, Zap } from 'lucide-react';

export default function BusDetails() {
  return (
    <div id="grant" className="bg-white py-24 sm:py-32 overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent"></div>
        <div className="absolute -left-40 top-40 w-[30rem] h-[30rem] rounded-full bg-purple-50 opacity-50 blur-3xl mix-blend-multiply"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-16 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
          
          <div className="lg:pr-8">
            <div className="lg:max-w-lg">
              <div className="inline-flex items-center gap-2 mb-6 bg-purple-50 px-4 py-2 rounded-full border border-purple-100 shadow-sm">
                <span className="text-purple-600">
                  <Info className="w-4 h-4" />
                </span>
                <span className="text-sm font-semibold leading-6 text-purple-700 uppercase tracking-wider">Government Funding</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-6">
                The Boiler Upgrade Scheme <br className="hidden sm:block" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">(BUS)</span>
              </h2>
              <div className="prose prose-base sm:prose-lg text-gray-600">
                <p className="mb-6">
                  The UK Government is currently offering an upfront grant of <strong>£7,000</strong> to encourage homeowners to replace fossil fuel heating systems with a more efficient, low-carbon heat pump.
                </p>
                <div className="bg-gradient-to-br from-purple-50 to-white p-5 sm:p-6 rounded-2xl border border-purple-100 shadow-sm mb-6 relative overflow-hidden">
                  <div className="absolute right-0 top-0 w-24 h-24 bg-purple-200 rounded-full opacity-20 blur-xl translate-x-1/2 -translate-y-1/2"></div>
                  <div className="flex gap-3 sm:gap-4 relative z-10">
                    <div className="flex-shrink-0 mt-1">
                      <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                    </div>
                    <p className="m-0 text-sm sm:text-base text-gray-700">
                      With NovaVolt, you don't even have to worry about the paperwork. <strong>We handle the entire grant application process for you</strong>, deducting the £7,000 directly from your final installation quote.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative mt-8 lg:mt-0">
            <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-purple-100 to-indigo-50 rounded-[2rem] sm:rounded-[2.5rem] transform rotate-3 opacity-50 blur-lg"></div>
            <div className="bg-white rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-8 lg:p-12 shadow-xl sm:shadow-2xl border border-gray-100 relative z-10">
              <div className="absolute top-0 right-0 p-6 sm:p-8 opacity-5 sm:opacity-10 pointer-events-none">
                <ShieldCheck className="w-24 h-24 sm:w-32 sm:h-32 text-purple-600" />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 flex items-center gap-3">
                  <span className="bg-purple-100 text-purple-600 p-1.5 sm:p-2 rounded-xl">
                    <Check className="w-5 h-5 sm:w-6 sm:h-6" />
                  </span>
                  Eligibility Criteria
                </h3>
                <ul className="space-y-4 sm:space-y-6">
                  {[
                    'You must own the property you are applying for (including businesses and second homes)',
                    'You must be replacing a fossil fuel heating system (such as oil, gas, or direct electric)',
                    'The property must have a valid Energy Performance Certificate (EPC)',
                    'No outstanding recommendations for loft or cavity wall insulation'
                  ].map((item, index) => (
                    <li key={index} className="flex gap-x-3 sm:gap-x-4 group">
                      <div className="mt-1 flex h-6 w-6 sm:h-8 sm:w-8 flex-none items-center justify-center rounded-full bg-purple-50 group-hover:bg-purple-600 transition-colors duration-300">
                        <Check className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <span className="text-sm sm:text-base text-gray-600 leading-6 sm:leading-7 group-hover:text-gray-900 transition-colors duration-300">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-gray-100">
                  <a href="#quote" className="group inline-flex items-center gap-2 text-sm sm:text-base text-purple-600 font-semibold hover:text-purple-800 transition-colors">
                    Check your eligibility today 
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}