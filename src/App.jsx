import { useState } from "react"
import { Routes, Route, Navigate, useNavigate } from "react-router-dom"
import Home from "./pages/Home"
import Dashboard from "./pages/admin/Dashboard"
import ClienteDashboard from "./pages/cliente/ClienteDashboard"
import ProtectedRoute from "./components/ProtectedRoute"
 
function App() {
  const [autenticado, setAutenticado] = useState(false)
  const navigate = useNavigate()

  const iniciarSesion = (rol) => {
    setAutenticado(true)
    navigate(rol === "cliente" ? "/cliente" : "/admin")
  }
  const cerrarSesion = () => {
    setAutenticado(false)
    navigate("/")
  }
  return (
    <Routes>
      <Route
        path="/"
        element={<Home onLogin={iniciarSesion} />}
      />
      <Route
        path="/admin"
        element={
          <ProtectedRoute autenticado ={autenticado} >
          <Dashboard onLogout={cerrarSesion} />
          </ProtectedRoute>
        }
          />
      <Route
        path="/cliente"
        element={
          <ProtectedRoute autenticado={autenticado}>
          <ClienteDashboard onLogout={cerrarSesion} />
          </ProtectedRoute>
       } 
           />
    </Routes>
  )
}
 
export default App