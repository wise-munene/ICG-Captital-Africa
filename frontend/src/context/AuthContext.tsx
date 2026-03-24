import { createContext, useState, useEffect } from "react"

export const AuthContext = createContext<any>(null)

export function AuthProvider({ children }: any) {

  const [user, setUser] = useState<any>(null)

  //restore user from localStorage on app load
  useEffect(() => {
  const storedUser = localStorage.getItem("user")

  if (storedUser && storedUser !== "undefined") {
    setUser(JSON.parse(storedUser))
  } else {
    setUser(null)
  }
}, [])

  //login function
  const login = (userData: any, token: string) => {
    localStorage.setItem("user", JSON.stringify(userData))
    localStorage.setItem("token", token)

    setUser(userData)
  }

  //logout function

  const logout = () => {
    localStorage.removeItem("user")
    localStorage.removeItem("token")
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}