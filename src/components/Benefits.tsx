import { Leaf, PoundSterling, Settings, Shield, Thermometer, Zap } from 'lucide-react';

const benefits = [
  {
    name: 'Lower Energy Bills',
    description: 'Heat pumps are incredibly efficient, delivering up to 300% more heat energy than the electrical energy they consume.',
    icon: PoundSterling,
    color: 'from-blue-400 to-indigo-500'
  },
  {
    name: 'Eco-Friendly Heating',
    description: 'Significantly reduce your carbon footprint. Heat pumps use ambient air, making them a sustainable choice for your home.',
    icon: Leaf,
    color: 'from-emerald-400 to-teal-500'
  },
  {
    name: 'Reliable & Long-lasting',
    description: 'Built to last with minimal maintenance required. Our premium systems provide consistent comfort year-round.',
    icon: Settings,
    color: 'from-purple-400 to-[#6B46C1]'
  },
  {
    name: 'Year-Round Comfort',
    description: 'Advanced climate control that provides both efficient heating in winter and optional cooling in summer.',
    icon: Thermometer,
    color: 'from-orange-400 to-red-500'
  },
  {
    name: 'Smart Home Ready',
    description: 'Control your heating from anywhere using your smartphone, optimizing your energy usage automatically.',
    icon: Zap,
    color: 'from-pink-400 to-rose-500'
  },
  {
    name: '10-Year Warranty',
    description: 'Complete peace of mind with our comprehensive parts and labor warranty on all new installations.',
    icon: Shield,
    color: 'from-cyan-400 to-blue-500'
  }
];

export default function Benefits() {
  return (
    <div id="benefits" className="bg-gray-50 py-24 sm:py-32 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-purple-200/20 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-indigo-200/20 blur-3xl pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-center px-4 sm:px-0">
          <div className="inline-flex items-center gap-2 mb-6 bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm">
            <span className="text-xs sm:text-sm font-semibold leading-6 text-[#6B46C1] uppercase tracking-wider font-sans">Why Upgrade?</span>
          </div>
          <p className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-gray-900">
            Smarter Heating,<br />Better Living
          </p>
          <p className="mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600 max-w-xl mx-auto font-sans">
            Make the smart switch to renewable heating. Enjoy lower bills, a warmer home, and contribute to a greener future with our state-of-the-art heat pumps.
          </p>
        </div>
        
        <div className="mx-auto mt-12 sm:mt-16 max-w-7xl lg:mt-24">
          <dl className="grid max-w-xl grid-cols-1 gap-6 sm:gap-x-8 sm:gap-y-10 lg:max-w-none lg:grid-cols-3 mx-auto">
            {benefits.map((benefit) => (
              <div 
                key={benefit.name} 
                className="relative flex flex-col bg-white p-6 sm:p-8 rounded-2xl sm:rounded-[2rem] transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 sm:hover:-translate-y-2 border border-gray-100 group overflow-hidden"
              >
                {/* Hover gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className={`mb-4 sm:mb-6 inline-flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br ${benefit.color} shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    <benefit.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" aria-hidden="true" />
                  </div>
                  <dt className="text-lg sm:text-xl font-bold leading-7 text-gray-900 mb-2 sm:mb-4 group-hover:text-[#6B46C1] transition-colors duration-300">
                    {benefit.name}
                  </dt>
                  <dd className="flex flex-auto flex-col text-sm sm:text-base leading-6 sm:leading-7 text-gray-600">
                    <p className="flex-auto">{benefit.description}</p>
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
