import { useEffect, useState } from "react"
import {Link} from "react-router-dom"
import { getServices } from "../services/serviceAPI"
import ServiceCard from "../components/ServiceCard"

type Service = {
  id: string
  title: string
  description: string
  category: string
}

function Home() {

  const [services, setServices] = useState<Service[]>([])

  useEffect(() => {
    getServices().then((data) => {
      setServices(data.slice(0,6))
    })
  }, [])

  return (
    <div>

      {/* HERO SECTION */}

      <section
        className="relative h-screen flex items-center justify-center text-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/src/assets/_.jpeg')" }}
      >

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>

        <div className="relative z-10 max-w-3xl px-6">

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Unlock Investment Opportunities Across Africa
          </h1>

          <p className="text-lg text-gray-200 mb-8">
            ICG Capital Africa provides strategic advisory, capital mobilization,
            and investment facilitation across emerging markets.
          </p>


          <Link to= {`/quote/${services[0]?.id}`}>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
              Get a Quote
            </button>
          </Link>

        </div>

      </section>


      {/* SERVICES SECTION */}

      <section className="bg-white py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-14">
            Our Services
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}

          </div>

        </div>

      </section>


      {/* WHY CHOOSE US */}

      <section className="bg-gray-50 py-20">

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <div className="max-w-lg">

            <h2 className="text-3xl font-bold mb-6">
              Why Choose ICG Capital Africa
            </h2>

            <p className="text-gray-600 mb-6">
              We connect investors, institutions, and businesses with
              high-impact opportunities across Africa's rapidly growing markets.
            </p>

            <ul className="space-y-4 text-gray-700">
              <li>✔ Deep understanding of African markets</li>
              <li>✔ Strong investor and institutional network</li>
              <li>✔ Strategic advisory and capital mobilization expertise</li>
              <li>✔ Focus on long-term sustainable investment</li>
            </ul>

          </div>

          <div>

            <img
              src="/src/assets/Nairobi.jpeg"
              className="rounded-xl shadow-xl w-full object-cover"
            />

          </div>

        </div>

      </section>


      {/* CALL TO ACTION */}

      <section className="bg-blue-600 py-20 text-center text-white">

        <div className="max-w-3xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-4">
            Ready to Explore Investment Opportunities?
          </h2>

          <p className="mb-8 text-blue-100">
            Contact ICG Capital Africa today to discuss your next investment opportunity.
          </p>

          <button className="bg-white text-blue-600 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition">
            Contact Us
          </button>

        </div>

      </section>

    </div>
  )
}

export default Home