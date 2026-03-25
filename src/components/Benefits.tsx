import { Leaf, PoundSterling, Settings } from 'lucide-react';

const benefits = [
  {
    name: 'Lower Energy Bills',
    description: 'Heat pumps are incredibly efficient, delivering up to 300% more heat energy than the electrical energy they consume.',
    icon: PoundSterling,
  },
  {
    name: 'Eco-Friendly Heating',
    description: 'Significantly reduce your carbon footprint. Heat pumps use ambient air, making them a sustainable choice for your home.',
    icon: Leaf,
  },
  {
    name: 'Reliable & Long-lasting',
    description: 'Built to last with minimal maintenance required. Our premium systems provide consistent comfort year-round.',
    icon: Settings,
  },
];

export default function Benefits() {
  return (
    <div id="benefits" className="bg-white py-24 sm:py-32 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-[#6B46C1] tracking-wide uppercase">Why Upgrade?</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Benefits of a Heat Pump
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Make the smart switch to renewable heating. Enjoy lower bills, a warmer home, and contribute to a greener future.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit.name} className="flex flex-col items-center text-center bg-gray-50 p-8 rounded-3xl transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-gray-100 group">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100 group-hover:bg-[#6B46C1] transition-colors duration-300">
                  <benefit.icon className="h-8 w-8 text-[#6B46C1] group-hover:text-white transition-colors duration-300" aria-hidden="true" />
                </div>
                <dt className="text-xl font-semibold leading-7 text-gray-900">
                  {benefit.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{benefit.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
