import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar-contenido">
        <a href="/" className="navbar-logo">Hotel Paraíso</a>

        <ul className="navbar-menu">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#habitaciones">Habitaciones</a></li>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar