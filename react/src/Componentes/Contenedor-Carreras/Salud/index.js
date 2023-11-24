import React from "react";
import "./index.css";
import imgaobtetricia from "../../../assets/salu/abstetricia.png";
import imgenfermeria from "../../../assets/salu/enfermeria.png";
import imgkine from "../../../assets/salu/kine.png";
import imgnutri from "../../../assets/salu/nutricion.png";
import imgpsicologia from "../../../assets/salu/psicologia.png";
import imgtecnomedica from "../../../assets/salu/tecnologia_medica.png";
import imgterapia from "../../../assets/salu/terapia_ocupacional.png";
import { NavLink } from "react-router-dom";
function Salud() {
  const carrera = [
    {
      imagen: imgaobtetricia,
      nombre: "Obstetricia y Puericultura [Nueva]",
      descripcion: "Ver Postulantes a Ayudantias",
    },
    {
      imagen: imgenfermeria,
      nombre: "Enfermería - Talca",
      descripcion: "Ver Postulantes a Ayudantias",
    },
    {
      imagen: imgkine,
      nombre: "Kinesiología",
      descripcion: "Ver Postulantes a Ayudantias",
    },
    {
      imagen: imgnutri,
      nombre: "Nutrición y Dietética",
      descripcion: "Ver Postulantes a Ayudantias",
    },
    {
      imagen: imgpsicologia,
      nombre: "Psicología - Talca",
      descripcion: "Ver Postulantes a Ayudantias",
    },
    {
      imagen: imgtecnomedica,
      nombre: "Tecnología Médica",
      descripcion: "Ver Postulantes a Ayudantias",
    },
    {
      imagen: imgterapia,
      nombre: "Terapia Ocupacional",
      descripcion: "Ver Postulantes a Ayudantias",
    },
  ];
  return (
    <section className="contenedor-tarjeta">
      {carrera.map((item) => (
        <NavLink to="/encargado/201359027">
          <article className="tarjeta" key={item.nombre}>
            <img src={item.imagen} alt={item.nombre} className="" />
            <h2>{item.nombre}</h2>
            <p>{item.descripcion}</p>
          </article>
        </NavLink>
      ))}
    </section>
  );
}

export default Salud;
