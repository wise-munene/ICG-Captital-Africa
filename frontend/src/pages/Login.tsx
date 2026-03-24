
import { useState } from "react"
import { loginUser } from "../services/authAPI"
import { useAuth } from "../hooks/useAuth"
import { useNavigate } from "react-router-dom"

function Login() {

  const [form, setForm] = useState({
    email: "",
    password: ""
  })

  const [loading, setLoading] = useState(false)

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
    setLoading(true)

    try {
      const res = await loginUser(form)
      console.log('login response:', res)

      // save user + token
      if(!res.user || !res.access_token){
        alert(res.message || 'Login failed')
        return
      }
      login(res.user, res.access_token)

     navigate("/admin")

    } catch (err) {
      alert("Invalid email or password")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md space-y-6"
      >

        <h2 className="text-2xl font-bold text-center">
          Login
        </h2>

        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

      </form>

    </div>
  )
}

export default Login

