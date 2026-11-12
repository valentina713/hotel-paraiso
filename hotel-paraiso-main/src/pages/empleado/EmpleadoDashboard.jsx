import { useState } from "react";
import Sidebar from "../../components/Sidebar";
import "../admin/Dashboard.css"; // Reutilizamos los estilos del admin

function EmpleadoDashboard({ empleadoId, onLogout }) {
    const [seccion, setSeccion] = useState("Resumen");
    const opciones = ["Resumen", "Habitaciones", "Reservas"]; // Opciones para el empleado

    return (
        <div className="hp-dashboard">
            <Sidebar
                titulo="Panel de Empleado"
                opciones={opciones}
                seccion={seccion}
                cambiarSeccion={setSeccion}
                cerrarSesion={onLogout}
            />
            <main className="hp-main">
                <header className="hp-header">
                    <div>
                        <p className="hp-eyebrow">ÁREA DE EMPLEADO</p>
                        <h1>{seccion}</h1>
                        <p className="hp-subtitle">Gestión operativa del Hotel Paraíso</p>
                    </div>
                    <div className="hp-user">
                        <span className="hp-avatar">E</span>
                        <span>Empleado {empleadoId}</span>
                    </div>
                </header>

                <section className="hp-panel">
                    <div className="hp-panel-header">
                        <h2>{seccion}</h2>
                        <p>Bienvenido al sistema de gestión interna.</p>
                    </div>
                    <div style={{ padding: "40px", textAlign: "center", color: "#777" }}>
                        <h3>Módulo en construcción</h3>
                        <p>Aquí irán las herramientas para que los empleados gestionen reservas y habitaciones.</p>
                    </div>
                </section>
                <footer className="hp-footer">Hotel Paraíso · Panel de Empleado</footer>
            </main>
        </div>
    );
}

export default EmpleadoDashboard;