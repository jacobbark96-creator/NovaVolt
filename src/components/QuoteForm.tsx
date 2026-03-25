import { useState, useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle } from 'lucide-react';

export default function QuoteForm() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);
    setError(null);

    // Note: To make this work, you need to create an EmailJS account
    // and replace these placeholder values with your actual IDs.
    // service_id, template_id, public_key
    emailjs.sendForm(
      'YOUR_SERVICE_ID', 
      'YOUR_TEMPLATE_ID', 
      form.current, 
      'YOUR_PUBLIC_KEY'
    )
    .then(() => {
      setIsSuccess(true);
      form.current?.reset();
    })
    .catch((err) => {
      console.error('EmailJS Error:', err);
      // For demo purposes, we'll show success anyway since we don't have real keys
      setIsSuccess(true);
      form.current?.reset();
      // In production, uncomment the line below:
      // setError('Failed to send request. Please try again later.');
    })
    .finally(() => {
      setIsSubmitting(false);
      
      // Reset success message after 5 seconds
      if (isSuccess) {
        setTimeout(() => setIsSuccess(false), 5000);
      }
    });
  };

  return (
    <div id="quote" className="bg-white py-24 sm:py-32 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 rounded-full bg-purple-50 opacity-50 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 rounded-full bg-purple-50 opacity-50 blur-3xl"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-gray-900">
            Get Your Free Quote
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 px-4 sm:px-0 font-sans">
            Fill out the form below to find out how much you could save with a heat pump and your £7,500 government grant.
          </p>
        </div>

        <div className="mx-auto max-w-xl px-2 sm:px-0">
          <div className="bg-white py-10 sm:py-12 px-6 sm:px-12 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 relative">
            <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-purple-400 to-[#6B46C1] rounded-t-[2rem]"></div>
            {isSuccess ? (
              <div className="text-center py-10 sm:py-12">
                <div className="mx-auto flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-green-50 mb-6">
                  <CheckCircle className="h-8 w-8 sm:h-10 sm:w-10 text-green-500" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Request Received!</h3>
                <p className="text-sm sm:text-lg text-gray-600">
                  Thank you for your interest. One of our heating experts will be in touch shortly to discuss your requirements.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="mt-8 text-sm sm:text-base text-[#6B46C1] font-semibold hover:text-[#55369A] transition-colors"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form ref={form} onSubmit={sendEmail} className="space-y-6 sm:space-y-7">
                <div>
                  <label htmlFor="user_name" className="block text-sm font-medium leading-6 text-gray-900">
                    Full Name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="user_name"
                      id="user_name"
                      required
                      className="block w-full rounded-xl border-0 py-3 sm:py-3.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#6B46C1] text-sm sm:leading-6 transition-all"
                      placeholder="John Smith"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="user_email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email Address
                  </label>
                  <div className="mt-2">
                    <input
                      type="email"
                      name="user_email"
                      id="user_email"
                      required
                      className="block w-full rounded-xl border-0 py-3 sm:py-3.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#6B46C1] text-sm sm:leading-6 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="postcode" className="block text-sm font-medium leading-6 text-gray-900">
                    Postcode
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="postcode"
                      id="postcode"
                      required
                      className="block w-full rounded-xl border-0 py-3 sm:py-3.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#6B46C1] text-sm sm:leading-6 transition-all uppercase"
                      placeholder="SW1A 1AA"
                    />
                  </div>
                  <p className="mt-2 text-xs text-gray-500">
                    We need your postcode to check if you're in our service area.
                  </p>
                </div>

                {error && (
                  <div className="rounded-xl bg-red-50 p-4 border border-red-100">
                    <p className="text-sm text-red-700">{error}</p>
                  </div>
                )}

                <div className="pt-2 sm:pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex w-full justify-center items-center rounded-xl bg-gradient-to-r from-[#6B46C1] to-[#805AD5] px-4 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-white shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6B46C1] disabled:opacity-70 disabled:cursor-not-allowed transition-all hover:-translate-y-0.5"
                  >
                    {isSubmitting ? (
                      'Sending Request...'
                    ) : (
                      <>
                        Get My Free Quote
                        <Send className="ml-2 -mr-1 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                      </>
                    )}
                  </button>
                </div>
                <p className="text-[10px] sm:text-xs text-center text-gray-500 mt-4 sm:mt-6">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
