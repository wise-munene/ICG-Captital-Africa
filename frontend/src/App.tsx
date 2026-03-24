import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { useAuth } from "./hooks/useAuth"

import Navbar from "./components/Navbar"

import Home from "./pages/Home"
import Services from "./pages/Services"
import About from "./pages/About"
import Quote from "./pages/Quote"
import Login from "./pages/Login"
import AdminDashboard from "./pages/AdminDashboard"
import Contact from "./pages/Contact"
import Footer from "./components/Footer"

function ProtectedRoute({ children }: any) {
  const { user } = useAuth()
  return user ? children : <Navigate to="/admin-login" />
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />

        <Route path="/quote" element={<Quote />} />
        <Route path="/quote/:serviceId" element={<Quote />} />

        <Route path="/admin-login" element={<Login />} />

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
          <Footer />
    </BrowserRouter>
  )
}

export default App