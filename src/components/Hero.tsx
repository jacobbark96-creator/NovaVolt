import { ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900">
      {/* Background Gradients */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#6B46C1] to-[#9F7AEA] opacity-40 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
      </div>
      
      <div className="mx-auto max-w-7xl px-6 pb-16 pt-10 sm:pb-24 lg:flex lg:px-8 lg:py-20 items-center">
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl z-10 relative">
          <div className="mt-10 sm:mt-16 lg:mt-8 flex items-center gap-x-4">
            <span className="inline-flex items-center space-x-2 rounded-full bg-purple-500/10 px-4 py-1.5 text-sm font-semibold leading-6 text-purple-300 ring-1 ring-inset ring-purple-500/20 backdrop-blur-sm">
              <Zap className="h-4 w-4" />
              <span>Boiler Upgrade Scheme</span>
            </span>
          </div>
          <h1 className="mt-8 text-5xl font-bold tracking-tight text-white sm:text-7xl leading-[1.1]">
            Claim Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-200">£7,000</span> Grant Today
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Upgrade your home heating to a sleek, energy-efficient heat pump. Slash your energy bills, reduce your carbon footprint, and let the government cover the upfront costs.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="#quote"
              className="rounded-full bg-gradient-to-r from-[#6B46C1] to-[#805AD5] px-8 py-4 text-base font-semibold text-white shadow-[0_0_20px_rgba(107,70,193,0.4)] hover:shadow-[0_0_30px_rgba(107,70,193,0.6)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500 transition-all flex items-center hover:scale-105"
            >
              Get Your Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <div className="flex items-center gap-x-2 text-sm font-medium leading-6 text-gray-300">
              <ShieldCheck className="h-5 w-5 text-purple-400" />
              <span>No obligation</span>
            </div>
          </div>
        </div>
        
        <div className="mx-auto mt-10 flex max-w-2xl sm:mt-16 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-20 relative z-10">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none relative">
            {/* Decorative ring behind image */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-purple-600 to-purple-400 opacity-20 blur-2xl"></div>
            
            <img
              src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=A%20sleek%20modern%20matte%20black%20heat%20pump%20unit%20installed%20outside%20a%20beautiful%20modern%20home,%20bright%20lighting,%20premium%20professional%20photography,%20subtle%20purple%20accents&image_size=portrait_4_3"
              alt="Sleek modern black heat pump exterior unit"
              className="w-[36rem] rounded-2xl bg-gray-800 shadow-2xl ring-1 ring-white/10 object-cover relative z-10"
            />
            
            {/* Floating stats card */}
            <div className="absolute -bottom-6 -left-6 sm:-bottom-10 sm:-left-10 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-xl z-20 hidden sm:block">
              <div className="flex items-center gap-4">
                <div className="bg-purple-500/20 p-3 rounded-full">
                  <Zap className="h-6 w-6 text-purple-300" />
                </div>
                <div>
                  <p className="text-sm text-gray-300 font-medium">Energy Efficiency</p>
                  <p className="text-2xl font-bold text-white">A+++ Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Gradient */}
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#6B46C1] to-[#4C1D95] opacity-40 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
      </div>
    </div>
  );
}
