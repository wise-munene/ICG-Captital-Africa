import { useState } from "react"
import { loginUser } from "../services/authAPI"
import { useAuth } from "../hooks/useAuth"
import { useNavigate } from "react-router-dom"

function Login() {

  const [form, setForm] = useState({
    email: "",
    password: ""
  })

  const { login } = useAuth()
  const navigate = useNavigate()

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    try {
      const res = await loginUser(form)

      // save user + token
      login(res.user, res.access_token)

      // redirect to admin
      navigate("/admin")

    } catch (err) {
      alert("Login failed")
    }
  }

  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-50">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md space-y-6"
      >

        <h2 className="text-2xl font-bold text-center">
          Admin Login
        </h2>

        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <button className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700">
          Login
        </button>

      </form>

    </div>
  )
}

export default Login