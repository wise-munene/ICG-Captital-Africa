import { useState } from "react"

function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()

    alert("Message sent successfully!")

    setForm({
      name: "",
      email: "",
      message: ""
    })
  }

  return (

    <section className="min-h-screen bg-gray-50 py-20 px-6">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div>
          <h1 className="text-4xl font-bold mb-6">
            Contact Us
          </h1>

          <p className="text-gray-600 mb-6">
            Get in touch with ICG Capital Africa to discuss investment opportunities,
            partnerships, or advisory services.
          </p>

          <div className="space-y-4 text-gray-700">
            <p>📍 Nairobi, Kenya</p>
            <p>📧 info@icgcapitalafrica.com</p>
            <p>📞 +254 700 000 000</p>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-md space-y-6"
        >

          <input
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

          <input
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

          <button className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700">
            Send Message
          </button>

        </form>

      </div>

    </section>
  )
}

export default Contact