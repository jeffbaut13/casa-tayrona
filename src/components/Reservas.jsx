import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";

const Reserva = ({ onClose }) => {
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
      className="absolute w-full h-full bg-white bg-opacity-20 backdrop-blur-2xl z-50"
    >
      <div className="absolute inset-0 flex flex-col justify-center items-center w-full z-50">
        {/* <iframe
          width="707 "
          height="785"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FfTLAo9BIJfEFfzs2YuKCME%2Fprueba-kasacoroto%3Fnode-id%3D1-5%26t%3DiR1xCaEplPfbqfcu-1%26scaling%3Dscale-down%26content-scaling%3Dfixed%26page-id%3D0%253A1"
          allowFullScreen
        ></iframe> */}
      </div>
    </div>
  );
};

export default Reserva;
