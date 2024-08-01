import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";

const Reserva = ({ onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(1); // Asumiendo que el índice inicial es 1

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex <= 1 ? 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex >= 4 ? 4 : prevIndex + 1));
  };

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEsc);

    // Limpiar el event listener cuando el componente se desmonte
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <div
      onKeyDown={close}
      className="absolute w-full h-full bg-white bg-opacity-20 backdrop-blur-2xl z-[55]"
    >
      <div className="absolute inset-0 flex justify-center items-center w-full z-50">
        <div onClick={onClose} className="fixed z-10 w-full h-full" />

        <figure
          onClick={onClose}
          className="cursor-pointer absolute left-1/2 -translate-x-1/2 bottom-12 w-16 h-16 rotate-180 z-20"
        >
          <img src="/imagenes-tarjetas/cerrargaleria.svg" alt="" />
        </figure>
        

      </div>
    </div>
  );
};

export default Reserva;
