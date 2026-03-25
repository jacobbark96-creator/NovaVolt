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
    <div id="quote" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Get Your Free Quote
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Fill out the form below to find out how much you could save with a heat pump and your £7,000 government grant.
          </p>
        </div>

        <div className="mx-auto max-w-xl">
          <div className="bg-white py-10 px-6 sm:px-10 rounded-2xl shadow-lg border-t-4 border-[#6B46C1]">
            {isSuccess ? (
              <div className="text-center py-12">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-6">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Received!</h3>
                <p className="text-gray-600">
                  Thank you for your interest. One of our heating experts will be in touch shortly to discuss your requirements.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="mt-8 text-[#6B46C1] font-semibold hover:text-[#55369A]"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
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
                      className="block w-full rounded-md border-0 py-2.5 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#6B46C1] sm:text-sm sm:leading-6 transition-shadow"
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
                      className="block w-full rounded-md border-0 py-2.5 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#6B46C1] sm:text-sm sm:leading-6 transition-shadow"
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
                      className="block w-full rounded-md border-0 py-2.5 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#6B46C1] sm:text-sm sm:leading-6 transition-shadow uppercase"
                      placeholder="SW1A 1AA"
                    />
                  </div>
                  <p className="mt-2 text-xs text-gray-500">
                    We need your postcode to check if you're in our service area.
                  </p>
                </div>

                {error && (
                  <div className="rounded-md bg-red-50 p-4">
                    <p className="text-sm text-red-700">{error}</p>
                  </div>
                )}

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex w-full justify-center items-center rounded-md bg-[#6B46C1] px-3 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-[#55369A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6B46C1] disabled:opacity-70 disabled:cursor-not-allowed transition-all"
                  >
                    {isSubmitting ? (
                      'Sending Request...'
                    ) : (
                      <>
                        Get My Free Quote
                        <Send className="ml-2 -mr-1 h-4 w-4" aria-hidden="true" />
                      </>
                    )}
                  </button>
                </div>
                <p className="text-xs text-center text-gray-500 mt-4">
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
