import React, { useState } from "react";
import "./navbar.css";
import Logo from "../../assets/logo_ucm_marca.png";
import { useNavigate, useLocation } from "react-router-dom";

function Navbar(props) {
  const navigate = useNavigate();
  const location = useLocation();

  const [menuHamburguesaDesplegado, setMenuHamburguesaDesplegado] =
    useState(false);
  const [menuUsuarioDesplegado, setMenuUsuarioDesplegado] = useState(false);

  const toggleMenuHamburguesa = () => {
    setMenuHamburguesaDesplegado(!menuHamburguesaDesplegado);
    setMenuUsuarioDesplegado(false);
  };

  const toggleMenuUsuario = () => {
    setMenuUsuarioDesplegado(!menuUsuarioDesplegado);
    setMenuHamburguesaDesplegado(false);
  };

  const handleCerrarSesion = () => {
    localStorage.removeItem("token");
    navigate("/");
    console.log("Sesión cerrada");
  };

  // Redirigir a una ruta específica al hacer clic en una opción
  const handleNavigateTo = (route) => {
    navigate(route);
  };

  // Identificar la vista actual en función de la URL
  const currentView = location.pathname.includes("admin")
    ? "Admin"
    : location.pathname.includes("encargado")
    ? "Encargado"
    : "Estudiante";

  return (
    <div className="header">
      <button onClick={toggleMenuHamburguesa} className="header-toggle2">
        ☰ Opciones
      </button>
      <div
        className={`opciones-admin ${
          menuHamburguesaDesplegado ? "header-abierto" : ""
        }`}
      >
        <ul
          className={`opciones ${menuHamburguesaDesplegado ? "mostrar" : ""}`}
        >
          {currentView === "Admin" && (
            <>
              <li onClick={() => handleNavigateTo("/admin/admin")}>
                Administradores
              </li>
              <li onClick={() => handleNavigateTo("/admin/carrera")}>
                Carreras
              </li>
              <li onClick={() => handleNavigateTo("/admin/encargado")}>
                Encargados
              </li>
              <li onClick={() => handleNavigateTo("/admin/estudiante")}>
                Estudiantes
              </li>
              <li onClick={() => handleNavigateTo("/admin/facultad")}>
                Facultades
              </li>
              <li onClick={() => handleNavigateTo("/admin/ramo")}>Ramos</li>
            </>
          )}
          {currentView === "Encargado" && (
            <>
              <li>Opción 1 para Encargado</li>
              <li>Opción 2 para Encargado</li>
            </>
          )}
          {currentView === "Estudiante" && (
            <>
              <li>
                <a href="FormularioE" className="sin-subrayado">
                  Realizar postulación
                </a>
              </li>
              <li>Modificar o eliminar postulaciones</li>
              <li>Resultados de la postulación</li>
            </>
          )}
        </ul>
      </div>
      <img className="logo_ucm" src={Logo} alt="Logo" />
      <button onClick={toggleMenuUsuario} className="header-toggle"></button>
      <div
        className={`header-menu ${
          menuUsuarioDesplegado ? "header-abierto" : ""
        }`}
      >
        <ul>
          <li>
            <a
              href="https://gestion-clave.ucm.cl/#/actualizar"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#fff" }}
              className="sin-subrayado"
            >
              Cambiar Contraseña
            </a>
          </li>
          <li onClick={handleCerrarSesion}>Cerrar Sesión</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
