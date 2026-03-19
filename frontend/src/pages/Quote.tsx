import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getServices } from "../services/serviceAPI"
import { createQuote } from "../services/quoteAPI"

type Service = {
  id: string
  title: string
}

function Quote() {

  const { serviceId } = useParams()

  const [services, setServices] = useState<Service[]>([])

  const [form, setForm] = useState({
    name: "",
    email: "",
    service_id: serviceId || "",
    message: ""
  })

  useEffect(() => {
    getServices().then((data) => {
      setServices(data)
    })
  }, [])

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    createQuote(form)

    alert("Quote request submitted!")
  }

  return (

    <section className="max-w-3xl mx-auto py-20 px-6">

      <h1 className="text-3xl font-bold mb-10 text-center">
        Request a Quote
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* NAME */}
        <input
          name="name"
          placeholder="Your Name"
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        {/* EMAIL */}
        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        {/* SERVICE SELECT */}
        <select
          name="service_id"
          value={form.service_id}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        >

          <option value="">Select a service</option>

          {services.map((service) => (
            <option key={service.id} value={service.id}>
              {service.title}
            </option>
          ))}

        </select>

        {/* MESSAGE */}
        <textarea
          name="message"
          placeholder="Describe your project"
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        {/* SUBMIT */}
        <button className="bg-blue-600 text-white px-6 py-3 rounded">
          Submit Quote Request
        </button>

      </form>

    </section>

  )
}

export default Quote