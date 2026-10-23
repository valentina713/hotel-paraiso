import { useState } from 'react'
import '../admin/Dashboard.css'
import Sidebar from '../../components/Sidebar'
import TablaReservas from '../../components/TablaReservas'

function ClienteDashboard({ onLogout }) {
  const [seccion, setSeccion] = useState('Mis reservas')
  const opciones = ['Mis reservas', 'Mi perfil']

  return (
    <div className="hp-dashboard">
      <Sidebar
        titulo="Espacio del Cliente"
        opciones={opciones}
        seccion={seccion}
        cambiarSeccion={setSeccion}
        cerrarSeccion={onLogout}
        />
<main className="hp-main">
    <header className="hp-header">
    <div>
        <p className="hp-eyebrow">PANEL DEL CLIENTE</p>
        <h1>{seccion}</h1>
        <p>Bienvenido al Hotel Paraíso</p>
    </div>
    </header>
    <section className="hp-panel">
        <div className="hp-panel-content">
            <h2>{seccion}</h2>
            <p>
                {seccion === 'Mis reservas' 
                ? 'Consulta aqui tus reservas.' 
                : 'Aquí podras consultar tu información personal.'
                }
            </p>
        </div>
        {seccion === 'Mis reservas' && <TablaReservas />}
    </section>
</main>

    </div>
    )
    }

export default ClienteDashboard
