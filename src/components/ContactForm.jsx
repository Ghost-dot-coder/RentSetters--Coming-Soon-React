import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="flex justify-center py-20 px-4 bg-[#fdfbfa]">
      <div
        className="w-full max-w-3xl bg-white shadow-md rounded-xl p-10 
        animate-fade-slide"
      >
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#1b1b1b] text-center mb-10">
          Get in Touch / Send Enquiry
        </h1>

        {submitted ? (
          <p className="text-green-600 text-xl text-center font-semibold">
            Thank you! We&apos;ll get back soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">

            {/* Name */}
            <div className="text-left">
              <label className="font-semibold text-gray-700">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full mt-1 px-4 py-3 bg-[#fcf3ec] border rounded-md"
              />
            </div>

            {/* Email */}
            <div className="text-left">
              <label className="font-semibold text-gray-700">Email</label>
              <input
                type="email"
                placeholder="your.email@example.com"
                required
                className="w-full mt-1 px-4 py-3 bg-[#fcf3ec] border rounded-md"
              />
            </div>

            {/* Phone */}
            <div className="text-left">
              <label className="font-semibold text-gray-700">Phone</label>
              <input
                type="tel"
                placeholder="Your Phone Number"
                required
                className="w-full mt-1 px-4 py-3 bg-[#fcf3ec] border rounded-md"
              />
            </div>

            {/* Message */}
            <div className="text-left">
              <label className="font-semibold text-gray-700">
                Message
                <span className="text-sm text-gray-500 ml-2">
                  Gentle fade-in / slide-up animation on scroll.
                </span>
              </label>
              <textarea
                rows={4}
                placeholder="How can we help you?"
                required
                className="w-full mt-1 px-4 py-3 bg-[#fcf3ec] border rounded-md"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="mt-4 w-full bg-[#ff6a00] hover:bg-[#e45e00] 
              text-white text-lg font-semibold py-3 rounded-md transition"
            >
              Submit Enquiry
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
