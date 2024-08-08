import React, { useRef, useEffect, useState } from "react";
import data from "../assets/data";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const tiempo = [
  { Terraza: [4, 10] },
  { Habitación_secundaria: [14, 20] },
  { Cocina: [23, 29] },
  { Piscina: [34, 39] },
  { Habitación_principal: [52, 56] },
  { Comedor: [63, 66] },
  { Habitación_auxiliar: [70, 72] },
];

const nombres = tiempo.map((obj) => Object.keys(obj)[0]);

const Menu = ({
  onButtonClick,
  isPlaying,
  handleClickAudio,
  audioRef,
  handleShowReserva,
}) => {
  const refs = useRef(
    nombres.reduce((acc, value) => {
      acc[value] = {
        imageRef: React.createRef(),
        buttonRef: React.createRef(),
      };
      return acc;
    }, {})
  );

  useEffect(() => {
    const showImage = (imageRef, start, sumaTotal, buttonRef) => {
      gsap.to(imageRef.current, {
        opacity: 1,
        pointerEvents: "all",
        duration: 0.5,
        delay: start,
        onComplete: () => {
          gsap.to(imageRef.current, {
            pointerEvents: "none",
            opacity: 0,
            duration: 1,
            delay: sumaTotal - start,
          });
        },
      });

      gsap.to(buttonRef.current, {
        scale: 1.8,
        duration: 1.5,
        ease: "easeInOut",
        delay: start,
        opacity: 1,
        color: "white",
        onComplete: () => {
          gsap.to(buttonRef.current, {
            scale: 1,
            duration: 3,
            opacity: 0.4,
            ease: "easeInOut",
            delay: sumaTotal - start,
            color: "white",
          });
        },
      });

      // Desplazar automáticamente para centrar el botón
      setTimeout(() => {
        buttonRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      }, start * 1000); // start está en segundos, convertimos a milisegundos
    };

    const video = document.querySelector("video");

    const handleTimeUpdate = () => {
      const currentTime = video.currentTime;

      tiempo.forEach((obj) => {
        const key = Object.keys(obj)[0];
        const [start, end] = obj[key];

        const resta = end - start;
        const imageRef = refs.current[key]?.imageRef;
        const buttonRef = refs.current[key]?.buttonRef;

        if (currentTime >= start && currentTime < end) {
          showImage(imageRef, 0, resta, buttonRef);
        }
      });
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  const handleButtonClick = (buttonName) => {
    onButtonClick(buttonName);
  };

  return (
    <div
      className="fixed bottom-20 left-0 w-full text-[--bg] transition-colors duration-500 ease-out z-[51] overflow-hidden"
    >
      <div
        className="flex justify-center pt-24 pb-4 w-full overflow-x-scroll no-scrollbar"
      >
        <div className="flex justify-start items-center w-full">
          {nombres.map((nombre) => {
            const tarjetaData = data.find((item) => item.title === nombre);
            return (
              <div
                key={nombre}
                className="relative flex flex-col items-center min-w-[100vw]" // ancho mínimo igual al ancho de la pantalla
              >
                <div
                  ref={refs.current[nombre].imageRef}
                  className="opacity-0 pointer-events-none absolute bottom-full mb-2 transition-all duration-500 ease-in-out flex flex-col items-center"
                >
                  <div className="grid grid-cols-2 gap-1 w-40">
                    {tarjetaData.images.slice(0, 2).map((imgSrc, imgIndex) => (
                      <img
                        key={imgIndex}
                        src={imgSrc}
                        alt={`${nombre.replace(/_/g, " ")} ${imgIndex + 1}`}
                        className="h-auto object-cover rounded-lg"
                      />
                    ))}
                  </div>
                  <div>
                    <button
                      className="w-40 bg-[--bg] text-[--primary] mt-2 rounded-md"
                      onClick={() => handleButtonClick(nombre)}
                    >
                      Ver más
                    </button>
                  </div>
                </div>
                <button
                  ref={refs.current[nombre].buttonRef}
                  onClick={() => handleButtonClick(nombre)}
                  className="hover:text-[#0090b2] transition-colors mt-4 text-button opacity-40 flex flex-col items-center"
                >
                  {nombre
                    .replace(/_/g, " ")
                    .split(" ")
                    .map((word, index) => (
                      <span key={index} className="leading-none">
                        {word}
                      </span>
                    ))}
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-[70%] border-t-2 border-[--bg] opacity-40 mx-auto mt-0"></div>
    </div>
  );
};

export default Menu;
