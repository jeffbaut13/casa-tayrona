import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import Menu from "./Menu";
import Tarjeta from "./Tarjeta";
import { Button } from "./ui/Button";
import data from "../assets/data.json";

const tiempo = [
  { terraza: [4, 10] },
  { habitacionSecundaria: [14, 20] },
  { cocina: [23, 29] },
  { piscina: [34, 39] },
  { habitacionprincipal: [52, 56] },
  { comedor: [63, 66] },
  { habitacionAuxiliar: [70, 72] },
  { playa: [86, 90] },
];

const diferencias = tiempo.map((obj) => {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      return obj[key][1] - obj[key][0];
    }
  }
});

const nombres = tiempo.map((obj) => Object.keys(obj)[0]);

const sumaTotal = diferencias.reduce((acc, curr) => acc + curr, 0);

const VideoPlayer = ({ videoSrc, setStarted, started, play }) => {
  const videoRef = useRef(null);
  const refs = useRef(
    nombres.reduce((acc, value) => {
      acc[value] = React.createRef();
      return acc;
    }, {})
  );
  const [showTarjeta, setShowTarjeta] = useState(null);

  useEffect(() => {
    const video = videoRef.current;

    const handleLoadedData = () => {
      setStarted(true);
    };

    video.addEventListener("loadeddata", handleLoadedData);

    return () => {
      video.removeEventListener("loadeddata", handleLoadedData);
    };
  }, [setStarted]);

  useEffect(() => {
    const video = videoRef.current;

    const showButton = (buttonRef, start, sumaTotal) => {
      gsap.to(buttonRef.current, {
        opacity: 1,
        translateX: "100%",
        duration: 1,
        delay: start,
        onComplete: () => {
          gsap.to(buttonRef.current, {
            opacity: 0,
            translateX: "-100%",
            duration: 2,
            delay: sumaTotal - start,
          });
        },
      });
    };

    video.addEventListener("timeupdate", () => {
      const currentTime = video.currentTime;

      tiempo.forEach((obj, index) => {
        const key = Object.keys(obj)[0];
        const [start, end] = obj[key];

        const resta = end - start;
        const buttonRef = refs.current[key];
        if (currentTime >= start && currentTime < end) {
          showButton(buttonRef, 0, resta);
        }
      });
    });
  }, []);

  useEffect(() => {
    if (play) {
      videoRef.current.play();
    }
  }, [play]);

  const handleShowTarjeta = (nombre) => {
    const tarjetaData = data.find(item => item.title.toLowerCase() === nombre);
    setShowTarjeta(tarjetaData);
  };

  const handleHideTarjeta = () => {
    setShowTarjeta(null);
  };

  return (
    <div className="absolute z-0 top-0 left-0 w-full h-full overflow-hidden">
      <video
        ref={videoRef}
        src={videoSrc}
        className="w-full"
        loop
        muted
        playsInline
      />

      {started && (
        <div className="z-20 absolute top-0 left-0 w-full h-full">
          {nombres.map((nombre, index) => (
            <Button
              handleclick={() => handleShowTarjeta(nombre)}
              key={index}
              buRef={refs.current[nombre]}
              title={nombre}
            />
          ))}
        </div>
      )}
      
      {showTarjeta && (
        <Tarjeta
          videoSrc={showTarjeta.videoSrc}
          images={showTarjeta.images}
          title={showTarjeta.title}
          description={showTarjeta.description}
          onClose={handleHideTarjeta}
        />
      )}
      
      <Menu />
    </div>
  );
};

export default VideoPlayer;
