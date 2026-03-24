import { useEffect } from "react"
import nairobiImage from "../assets/Nairobi.jpeg"

function About() {

  useEffect(() => {
    document.title = "About | ICG Capital"
  }, [])

  return (
    <div>

      {/* HERO */}
      <section className="bg-gray-900 text-white py-24 text-center">

        <h1 className="text-4xl md:text-5xl font-semibold mb-4 tracking-tight">
          About ICG Capital Africa
        </h1>

        <p className="max-w-2xl mx-auto text-gray-300 text-lg">
          Unlocking high-impact investment opportunities across Africa’s dynamic and rapidly growing markets.
        </p>

      </section>


      {/* COMPANY OVERVIEW */}
      <section className="py-20 bg-white">

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          {/* TEXT */}
          <div>

            <h2 className="text-3xl font-semibold mb-6 tracking-tight">
              Who We Are
            </h2>

            <p className="text-gray-600 mb-4 leading-relaxed">
              ICG Capital Africa is a strategic advisory and investment firm focused on connecting capital with opportunity across Africa’s emerging markets.
            </p>

            <p className="text-gray-600 mb-4 leading-relaxed">
              We work closely with businesses, investors, and institutions to deliver tailored solutions in capital mobilization, business strategy, and transaction advisory.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Our expertise spans multiple sectors, enabling us to support clients in navigating complex markets and achieving sustainable growth.
            </p>

          </div>

          {/* IMAGE */}
          <div>
            <img
              src={nairobiImage}
              className="rounded-2xl shadow-xl w-full object-cover"
            />
          </div>

        </div>

      </section>


      {/* WHAT WE DO */}
      <section className="py-20 bg-gray-50">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-semibold mb-10 tracking-tight">
            What We Do
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-lg mb-2">
                Investment Advisory
              </h3>
              <p className="text-gray-600 text-sm">
                Supporting investors with strategic insights and opportunities across key African sectors.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-lg mb-2">
                Capital Mobilization
              </h3>
              <p className="text-gray-600 text-sm">
                Helping businesses raise capital through strong investor networks and financial structuring.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-lg mb-2">
                Strategic Advisory
              </h3>
              <p className="text-gray-600 text-sm">
                Providing guidance on growth, restructuring, and market expansion strategies.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* MISSION */}
      <section className="py-20 bg-white">

        <div className="max-w-3xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-semibold mb-6 tracking-tight">
            Our Mission
          </h2>

          <p className="text-gray-600 leading-relaxed">
            To bridge the gap between capital and opportunity by empowering businesses and investors with the tools, insights, and partnerships needed to succeed in Africa’s evolving economic landscape.
          </p>

        </div>

      </section>

    </div>
  )
}

export default About