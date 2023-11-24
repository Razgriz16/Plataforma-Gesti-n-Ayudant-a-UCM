import React from "react";
// import { Link, useNavigate } from "react-router-dom";
import "./estudiante.css";
import Navbar from "../../Componentes/Navbar";
import Footer from "../../Componentes/Footer";
import Carousel from "../../Componentes/componentes-estudiantes/Carrusel/Carousel";

const VistaEstudiantes = () => {
  const username = localStorage.getItem('username'); // Recupera el nombre de usuario del localStorage

  return (
    <>
      <Navbar />
      <div className="vista-estudiantes">
        <div className="contenido">
          <p style={{ fontSize: "25px", textAlign: "center" }}>
            {username ? `Bienvenido Estudiante ${username}` : "Bienvenido estudiante"}
          </p>
        </div>
        <Carousel />
        <Footer />
      </div>
    </>
  );
};

export default VistaEstudiantes;
