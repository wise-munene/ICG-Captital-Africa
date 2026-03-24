import { useState, useEffect } from "react"

function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    document.title = "Contact | ICG Capital"
  }, [])

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    setLoading(true)

    // simulate request
    setTimeout(() => {
      setLoading(false)
      setSuccess(true)

      setForm({
        name: "",
        email: "",
        message: ""
      })
    }, 1000)
  }

  return (

    <section className="min-h-screen bg-gray-50 py-20 px-6">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div>

          <h1 className="text-4xl font-semibold mb-6 tracking-tight">
            Contact Us
          </h1>

          <p className="text-gray-600 mb-8 leading-relaxed">
            Get in touch with ICG Capital Africa to discuss investment opportunities,
            partnerships, or advisory services.
          </p>

          <div className="space-y-4 text-gray-700">

            <div>
              <p className="text-sm text-gray-500">Location</p>
              <p className="font-medium">Nairobi, Kenya</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-medium">info@icgcapitalafrica.com</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Phone</p>
              <p className="font-medium">+254 700 000 000</p>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">

          {/* SUCCESS MESSAGE */}
          {success && (
            <div className="mb-6 p-4 bg-green-100 text-green-700 rounded">
              Message sent successfully!
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">

            <input
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              name="email"
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full border border-gray-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </form>

        </div>

      </div>

    </section>
  )
}

export default Contact