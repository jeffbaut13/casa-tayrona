import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import Menu from "./Menu";
import Tarjeta from "./Tarjeta";
import { Button } from "./ui/Button";
import { togglePlay } from "../helpers/helper";
import data from "../assets/data";
import { LogoImagen } from "./loader/LogoImagen";
import Reserva from "../components/Reservas";

const tiempo = [
  { Terraza: [4, 10] },
  { Habitación_secundaria: [14, 20] },
  { Cocina: [23, 29] },
  { Piscina: [34, 39] },
  { Habitación_principal: [52, 56] },
  { Comedor: [63, 66] },
  { Habitación_auxiliar: [70, 72] },
  { Playa: [86, 90] },
];

const nombres = tiempo.map((obj) => Object.keys(obj)[0]);

const VideoPlayer = ({
  videoSrc,
  setStarted,
  started,
  play,
  setPlay,
  isPlaying,
  handleClickAudio,
  audioRef,
}) => {
  const videoRef = useRef(null);
  const refs = useRef(
    nombres.reduce((acc, value) => {
      acc[value] = React.createRef();
      return acc;
    }, {})
  );
  const [showTarjeta, setShowTarjeta] = useState(false);
  const [showReserva, setShowReserva] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    const handleLoadedData = () => {
      setStarted(true);
    };

    video.addEventListener("loadedmetadata", handleLoadedData);

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedData);
    };
  }, [setStarted]);

  useEffect(() => {
    const video = videoRef.current;

    const showButton = (buttonRef, start, sumaTotal) => {
      gsap.to(buttonRef.current, {
        opacity: 1,
        pointerEvents: "all",
        translateY: "0%",
        duration: 0.5,
        delay: start,
        onComplete: () => {
          gsap.to(buttonRef.current, {
            pointerEvents: "none",
            opacity: 0,
            translateY: "40%",
            duration: 1,
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
    } else {
      videoRef.current.pause();
    }
  }, [play]);

  const handleShowTarjeta = (nombre) => {
    const tarjetaData = data.find((item) => item.title === nombre);
    setShowTarjeta(tarjetaData);
    setPlay(false);
  };

  const handleHideTarjeta = () => {
    setShowTarjeta(false);
    setPlay(true);
  };

  const handleShowReserva = () => {
    setShowReserva(true);
  };

  const handleHideReserva = () => {
    setShowReserva(false);
  };

  return (
    <div className="absolute z-0 top-0 left-0 w-full h-full overflow-hidden">
      <Menu
        audioRef={audioRef}
        handleShowReserva={handleShowReserva}
        onButtonClick={handleShowTarjeta}
        isPlaying={isPlaying}
        handleClickAudio={handleClickAudio}
      />
      {showReserva && <Reserva onClose={handleHideReserva} />}
      <LogoImagen />
      <div className="bg-gradient-to-b from-[#00000070] via-transparent to-[#000000a1] fixed z-[1] top-0 left-0 w-screen h-screen pointer-events-none" />
      <video
        ref={videoRef}
        src={videoSrc}
        className="w-full z-0"
        loop
        muted
        playsInline
      />

      {started && (
        <div
          //onClick={() => togglePlay(play, setPlay)}
          className="absolute bottom-12 left-12 z-10 w-[32rem] h-28 flex items-center"
        >
          <div className="relative w-full h-full">
            {nombres.map((nombre, index) => (
              <Button
                handleclick={() => handleShowTarjeta(nombre)}
                key={index}
                buRef={refs.current[nombre]}
                title={nombre.replace(/_/g, " ")}
              />
            ))}
          </div>
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
    </div>
  );
};

export default VideoPlayer;
