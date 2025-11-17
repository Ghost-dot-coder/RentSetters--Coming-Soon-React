import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Landing() {
  return (
    <section className="bg-landing relative min-h-screen flex flex-col items-center justify-center py-40">
      {/* Black Tint Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center flex flex-col items-center px-4">
        <img src="/logo png1.png" className="w-36" alt="" />
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-lg" style={{fontFamily:"MyFont"}}>
          RentSetters
        </h1>

        <h2 className="text-3xl md:text-5xl font-bold text-white mb-10 max-w-4xl leading-tight drop-shadow-md">
          Simplifying Home Renting, Buying & Property
          <br />
          Management in Kochi.
        </h2>

        <div className="flex gap-6 justify-center">
          <a
            href="https://wa.me/message/LVMAB7DP7VCDF1"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
          >
            <FaWhatsapp size={28} />
          </a>

          <a
            href="https://www.instagram.com/rent.setters?igsh=MWI4a29kemNvdHFhag=="
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-600 text-white p-4 rounded-full shadow-lg hover:bg-pink-700 transition-colors"
          >
            <FaInstagram size={28} />
          </a>

          <a
            href="https://facebook.com/rentsetters"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
          >
            <FaFacebookF size={28} />
          </a>
        </div>
      </div>
    </section>
  );
}
