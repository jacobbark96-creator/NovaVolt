import { Leaf, PoundSterling, ShieldCheck } from 'lucide-react';

const benefits = [
  {
    name: 'Lower Energy Bills',
    description: 'Heat pumps are incredibly efficient, delivering up to 4 times more energy than they consume. This means significantly lower heating costs for your home.',
    icon: PoundSterling,
  },
  {
    name: 'Eco-Friendly Heating',
    description: 'Reduce your carbon footprint by up to 65%. Heat pumps use electricity to extract ambient heat from the air, making them a sustainable choice for the future.',
    icon: Leaf,
  },
  {
    name: 'Reliable & Long-lasting',
    description: 'Built to last with minimal maintenance required. Our premium heat pumps come with extended warranties and provide consistent comfort year-round.',
    icon: ShieldCheck,
  },
];

export default function Benefits() {
  return (
    <div id="benefits" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why Upgrade to a Heat Pump?
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Join thousands of UK homeowners making the switch to smart, efficient heating.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div 
                key={benefit.name} 
                className="flex flex-col bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
              >
                <dt className="flex items-center gap-x-3 text-xl font-semibold leading-7 text-gray-900 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#F3E8FF]">
                    <benefit.icon className="h-6 w-6 text-[#6B46C1]" aria-hidden="true" />
                  </div>
                  {benefit.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
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
