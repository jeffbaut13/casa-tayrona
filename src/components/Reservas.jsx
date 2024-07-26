import React, { useState } from "react";

const images = [
  "../src/assets/contacto1.png",
  "../src/assets/contacto2.png",
  "../src/assets/contacto3.png",
  "../src/assets/contacto4.png",
  "../src/assets/contacto5.png",
];

const Reserva = ({ onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      className="relative text-black h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('../src/assets/reserva.jpg')" }}
    >
      <div className="absolute inset-0 flex flex-col justify-center items-center w-full z-50">
        <div className="relative flex items-center space-x-4">
          <button
            onClick={onClose}
            className="absolute top-2 right-24 p-2 rounded-full"
          >
            <img className=" w-4" src="../src/assets/cerrar.png" />
          </button>
          <button onClick={handlePrev} className="p-2">
            <img
              src="../src/assets/btnIzquierda.png"
              alt="Botón Izquierda"
              className="w-[50px]"
            />
          </button>
          <img
            src={images[currentImageIndex]}
            alt="Contacto"
            className="w-[300px]"
          />
          <button onClick={handleNext} className="p-2">
            <img
              src="../src/assets/btnDerecha.png"
              alt="Botón Derecha"
              className="w-[50px]"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reserva;
