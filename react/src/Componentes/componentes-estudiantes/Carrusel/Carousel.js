import React, { useState, useEffect } from "react";
import expo from "../../../assets/carousel/expo.png";
import postula from "../../../assets/carousel/postula.png";
import "./Carousel.css";
import { NavLink } from "react-router-dom";

const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [postula, expo]; // Rutas de las imágenes

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); 

    return () => {
      clearInterval(interval); // Limpieza del temporizador al desmontar el componente
    };
  }, []);

  return (
    <div className="image-slider-container">
      <div className="image-container">
        {currentImage === 0 ? (
          <NavLink to = "formularioE">
            <img src={images[currentImage]} alt="Imagen Carrusel" />
          </NavLink>
        ) : (
          <img src={images[currentImage]} alt="Imagen Carrusel"/>
        )}
      </div>
    </div>
  );
};

export default ImageSlider;
