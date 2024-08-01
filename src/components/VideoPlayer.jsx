import React, { useRef, useEffect, useState } from "react";
import Menu from "./Menu";
import Tarjeta from "./Tarjeta";
import data from "../assets/data";
import { LogoImagen } from "./loader/LogoImagen";
import Reserva from "../components/Reservas";
import AudioPlayer from "./audio/AudioPlayer";
import audioMusic from "../assets/audioMusic.mp3";

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
  const [showTarjeta, setShowTarjeta] = useState(false);
  const [showReserva, setShowReserva] = useState(false);

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
      <div className="absolute top-[25%] left-1/2 transform -translate-x-1/2 flex bor rounded-xl px-4 z-[50] centrarContacto">
        <button
          onClick={handleShowReserva}
          className="text-[--primary] hover:text-[#0090b2] transition-colors flex flex-col items-start text-start px-14 py-3 bg-[#f4efdf90] hover:bg-[--bg] rounded-l-xl"
        >
          <span className=" text-[15px] font-bold">Llegada</span><span className=" text-xs opacity-70">Escoge fecha</span>
        </button>
        <button
          onClick={handleShowReserva}
          className="relative text-[--primary] hover:text-[#0090b2] transition-colors flex flex-col items-start px-14 py-3 bg-[#f4efdf90] hover:bg-[--bg]"
        >
          <span className="text-[15px]">Salida</span><span className="text-xs opacity-70">Escoge fecha</span>
          <span className="absolute top-2 bottom-2 left-0 w-0.5 bg-[--primary]"></span>
          <span className="absolute top-2 bottom-2 right-0 w-0.5 bg-[--primary]"></span>
        </button>
        <button
          onClick={handleShowReserva}
          className="text-[--primary] hover:text-[#0090b2] transition-colors flex flex-col items-start px-14 py-3 bg-[#f4efdf90] hover:bg-[--bg] rounded-r-xl"
        >
          <span className="text-[15px]">Quien</span><span className="text-xs opacity-70">¿Cuantos?</span>
        </button>
      </div>

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
        onLoadedMetadata={() => setStarted(true)}
      />

      {showTarjeta && (
        <Tarjeta
          videoSrc={showTarjeta.videoSrc}
          images={showTarjeta.images}
          title={showTarjeta.title}
          description={showTarjeta.description}
          onClose={handleHideTarjeta}
        />
      )}

      {/* Botón de Contacto y Reserva */}

      {/* Componente AudioPlayer movido aquí */}
      <AudioPlayer
        audioRef={audioRef}
        audioSrc={audioMusic}
        isPlaying={isPlaying}
        handleClickAudio={handleClickAudio}
        active={true}
      />
    </div>
  );
};

export default VideoPlayer;
