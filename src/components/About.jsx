export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-10">
        About <span style={{fontFamily:"MyFont"}}>RentSetters</span>
      </h2>

      <div className="max-w-4xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed space-y-8">
        <p>
          RentSetters is a next-generation real estate service based in Kochi, Kerala,
          built to simplify how people rent, buy, and manage properties. We combine
          technology, transparency, and personalized support to connect tenants,
          landlords, and PG owners seamlessly all without brokers or hidden costs.
        </p>
        <p>
          With a growing database of verified homes, flats, and PG accommodations across
          Kerala, RentSetters helps you find your ideal stay through smart filtering,
          virtual tours, and real-time assistance. Our mission is to make renting easy,
          secure, and time-saving, whether you’re searching for your next home or
          managing one from afar.
        </p>
      </div>
    </section>
  );
}
