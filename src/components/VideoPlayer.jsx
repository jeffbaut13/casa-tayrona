import React, { useRef, useEffect, useState } from "react";
import Menu from "./Menu";
import Tarjeta from "./Tarjeta";
import data from "../assets/data";
import { LogoImagen } from "./loader/LogoImagen";
import Reserva from "../components/Reservas";
import AudioPlayer from "./audio/AudioPlayer";
import audioMusic from "../assets/audioMusic.mp3";
import "../react-datepicker.css";

const VideoPlayer = ({
  videoSrc,
  setStarted,
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
    setPlay(false);  // Detener el video al mostrar la reserva
  };

  const handleHideReserva = () => {
    setShowReserva(false);
    setPlay(true);  // Reanudar el video al ocultar la reserva
  };

  return (
    <div className="absolute z-0 top-0 left-0 w-full h-full overflow-hidden movil">
      <AudioPlayer
        audioRef={audioRef}
        audioSrc={audioMusic}
        isPlaying={isPlaying}
        handleClickAudio={handleClickAudio}
        active={true}
      />
      
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

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-36 z-[40]">
        <button
          className="w-full border-2 px-10 py-1 rounded-md bg-[#f4efdf] text-[#623e2a] hover:text-[#f4efdf] hover:bg-[#f4efdf3d]"
          onClick={handleShowReserva}
        >
          Reserva
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;
