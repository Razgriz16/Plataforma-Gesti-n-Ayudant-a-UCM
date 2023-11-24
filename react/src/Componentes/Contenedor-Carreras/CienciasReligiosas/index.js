import React from "react";
import "./index.css";
import imgreligion from "../../../assets/religion/religiones.png";
import { NavLink } from "react-router-dom";
function CienciasReligiosas() {
  const carrera = [
    {
      imagen: imgreligion,
      nombre: "Pedagogía en Religión y Filosofía",
      descripcion: "Ver Postulantes a Ayudantias",
      ruta: "/encargado+id/estudiantes",
    },
  ];
  return (
    <section className="contenedor-tarjeta">
      {carrera.map((item) => (
        <NavLink to="/encargado/207892351">
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

export default CienciasReligiosas;
