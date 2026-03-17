function About() {
  return (
    <div>

      {/* HERO */}

      <section className="bg-gray-900 text-white py-24 text-center">

        <h1 className="text-4xl font-bold mb-4">
          About ICG Capital Africa
        </h1>

        <p className="max-w-2xl mx-auto text-gray-300">
          We connect investors, institutions, and businesses with
          high-impact opportunities across Africa's rapidly growing markets.
        </p>

      </section>


      {/* COMPANY OVERVIEW */}

      <section className="py-20">

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>

            <h2 className="text-3xl font-bold mb-6">
              Who We Are
            </h2>

            <p className="text-gray-600 mb-4">
              ICG Capital Africa is a consulting and investment advisory firm
              focused on unlocking opportunities across Africa's emerging markets.
            </p>

            <p className="text-gray-600">
              We provide strategic advisory, capital mobilization,
              and investment facilitation services for businesses,
              institutions, and investors.
            </p>

          </div>

          <img
            src="/src/assets/Nairobi.jpeg"
            className="rounded-xl shadow-xl"
          />

        </div>

      </section>

    </div>
  )
}

export default About