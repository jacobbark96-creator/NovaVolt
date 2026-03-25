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
    <div id="product" className="bg-gray-50 py-24 sm:py-32 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl overflow-hidden -z-10 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[30rem] sm:w-[40rem] h-[30rem] sm:h-[40rem] rounded-full bg-purple-100 opacity-50 blur-3xl mix-blend-multiply"></div>
        <div className="absolute -bottom-40 -left-40 w-[30rem] sm:w-[40rem] h-[30rem] sm:h-[40rem] rounded-full bg-purple-50 opacity-50 blur-3xl mix-blend-multiply"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-16 gap-y-12 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
          
          <div className="lg:pr-8 lg:pt-4 order-2 lg:order-1">
            <div className="lg:max-w-lg">
              <h2 className="text-sm sm:text-base font-semibold leading-7 text-[#6B46C1] uppercase tracking-wider font-sans">Premium Technology</h2>
              <p className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-gray-900">
                The Future of Home Heating
              </p>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600 font-sans">
                Our state-of-the-art air source heat pumps are designed to blend seamlessly into your property's exterior while providing unparalleled performance, reliability, and massive energy savings.
              </p>
              
              <dl className="mt-8 sm:mt-10 max-w-xl space-y-3 sm:space-y-4 text-sm sm:text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature} className="relative pl-9 flex items-center bg-white p-3 sm:p-4 rounded-xl shadow-sm border border-gray-100 transition-all hover:shadow-md hover:border-purple-100">
                    <dt className="inline font-medium text-gray-900 absolute left-3">
                      <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-[#6B46C1]" aria-hidden="true" />
                    </dt>
                    <dd className="inline ml-1 sm:ml-2 text-gray-700">{feature}</dd>
                  </div>
                ))}
              </dl>
              
              <div className="mt-8 sm:mt-10 flex items-center gap-x-6">
                <a
                  href="#quote"
                  className="w-full sm:w-auto text-center rounded-full bg-[#6B46C1] px-6 sm:px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-500/30 hover:bg-[#55369A] hover:shadow-purple-500/50 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6B46C1] transition-all"
                >
                  Request a Survey
                </a>
              </div>
            </div>
          </div>
          
          <div className="relative flex justify-center lg:justify-end order-1 lg:order-2 w-full">
            {/* Abstract decorative element behind the image */}
            <div className="absolute -inset-x-2 sm:-inset-x-4 -inset-y-2 sm:-inset-y-4 -z-10 rounded-3xl bg-gradient-to-br from-[#E9D8FD] to-white opacity-60 blur-xl sm:blur-2xl" />
            
            <div className="relative group w-full max-w-[320px] sm:max-w-md">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <img
                src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Sleek%20modern%20matte%20black%20heat%20pump%20unit%20close%20up,%20minimalist%20tech%20design,%20premium%20studio%20lighting,%20dark%20background,%20purple%20glow%20accents&image_size=portrait_4_3"
                alt="Sleek modern black heat pump exterior unit"
                className="relative w-full rounded-2xl shadow-2xl ring-1 ring-gray-900/5 object-cover aspect-[4/5] transform transition duration-500 hover:scale-[1.02]"
              />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
