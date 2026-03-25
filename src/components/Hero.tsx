import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-[#6B46C1] to-[#55369A]">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-20 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <span className="inline-flex items-center space-x-2 rounded-full bg-white/10 px-3 py-1 text-sm font-semibold leading-6 text-white ring-1 ring-inset ring-white/20">
              <span>Boiler Upgrade Scheme</span>
            </span>
          </div>
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
            £7,000 Government Grant Available
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-200">
            Upgrade your home heating system to a modern, energy-efficient heat pump. Save money on your energy bills and claim your £7,000 government grant today.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="#quote"
              className="rounded-md bg-white px-8 py-3.5 text-sm font-semibold text-[#6B46C1] shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors flex items-center"
            >
              Get Your Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a href="#benefits" className="text-sm font-semibold leading-6 text-white hover:text-gray-200 transition-colors">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <img
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Modern cozy home interior"
              className="w-[48rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10 object-cover opacity-90"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
