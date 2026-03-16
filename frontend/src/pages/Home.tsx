import { useEffect, useState } from "react"
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

      <section className="h-[70vh] flex flex-col justify-center items-center text-center bg-gray-50">

        <h1 className="text-5xl font-bold text-slate-900 mb-6">
          Unlock Investment Opportunities Across Africa
        </h1>

        <p className="text-lg text-gray-600 max-w-xl mb-8">
          ICG Capital Africa provides strategic advisory, capital mobilization,
          and investment facilitation across emerging markets.
        </p>

        <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
          Get a Quote
        </button>

      </section>


      {/* SERVICES SECTION */}

      <section className="max-w-6xl mx-auto px-6 py-24">

        <h2 className="text-3xl font-bold text-center mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}

        </div>

      </section>

    </div>
  )
}

export default Home