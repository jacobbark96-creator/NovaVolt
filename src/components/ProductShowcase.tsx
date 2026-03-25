import { CheckCircle2 } from 'lucide-react';

const features = [
  'Ultra-quiet operation (as low as 35dB)',
  'High efficiency A+++ energy rating',
  'Works effectively even at -25°C',
  'Smart home compatible controls',
  'Sleek, modern black casing',
  'Professional installation included'
];

export default function ProductShowcase() {
  return (
    <div id="product" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-16 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
          
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-[#6B46C1]">Premium Technology</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                The Future of Home Heating
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Our state-of-the-art air source heat pumps are designed to blend seamlessly into your property's exterior while providing unparalleled performance and reliability.
              </p>
              
              <dl className="mt-10 max-w-xl space-y-4 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature} className="relative pl-9">
                    <dt className="inline font-medium text-gray-900">
                      <CheckCircle2 className="absolute left-1 top-1 h-5 w-5 text-[#6B46C1]" aria-hidden="true" />
                    </dt>
                    <dd className="inline">{feature}</dd>
                  </div>
                ))}
              </dl>
              
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="#quote"
                  className="rounded-md bg-[#6B46C1] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#55369A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6B46C1] transition-colors"
                >
                  Request a Survey
                </a>
              </div>
            </div>
          </div>
          
          <div className="relative flex justify-center">
            {/* We use an image URL that generates a sleek black tech device or heat pump aesthetic */}
            <img
              src="https://images.unsplash.com/photo-1616423641405-b049615a6b0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Sleek modern black heat pump exterior unit"
              className="w-full max-w-md rounded-2xl shadow-xl ring-1 ring-gray-200 object-cover aspect-[4/5]"
            />
            {/* Abstract decorative element behind the image */}
            <div className="absolute -inset-x-4 -inset-y-4 -z-10 rounded-3xl bg-gradient-to-br from-[#F3E8FF] to-white opacity-50 blur-2xl" />
          </div>
          
        </div>
      </div>
    </div>
  );
}
