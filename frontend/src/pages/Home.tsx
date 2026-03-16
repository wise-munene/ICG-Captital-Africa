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
     <section
  className="relative h-screen flex flex-col items-center justify-center text-center bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('/src/assets/_.jpeg')" }}
>

  <div className="absolute inset-0 bg-black/50"></div>

  <div className="relative z-10">
    <h1 className="text-5xl font-bold text-white mb-6">
      Unlock Investment Opportunities Across Africa
    </h1>

    <p className="text-lg text-gray-200 max-w-xl mb-8">
      ICG Capital Africa provides strategic advisory, capital mobilization,
      and investment facilitation across emerging markets.
    </p>

    <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
      Get a Quote
    </button>
  </div>

</section>

      {/* SERVICES SECTION */}

      <section className="max-w-6xl mx-auto px-6 py-24">

        <h2 className="text-3xl font-bold text-center mb-12">
          Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}

        </div>

      </section>

      {/* WHY CHOOSE US */}

<section className="bg-gray-50 py-24">

  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

    <div>
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
        className="rounded-lg shadow-lg"
      />
    </div>

  </div>

</section>

    </div>
  )
}

export default Home