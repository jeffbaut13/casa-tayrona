import React, { useRef, useEffect, useState } from "react";
import Menu from "./Menu";
import Tarjeta from "./Tarjeta";
import data from "../assets/data";
import { LogoImagen } from "./loader/LogoImagen";
import Reserva from "../components/Reservas";
import AudioPlayer from "./audio/AudioPlayer";
import audioMusic from "../assets/audioMusic.mp3";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../react-datepicker.css";

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
  const [showCalendar, setShowCalendar] = useState(false);
  const [showGuests, setShowGuests] = useState(false);
  const [isStartDatePicker, setIsStartDatePicker] = useState(true);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [pets, setPets] = useState(0);

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

  const handleShowCalendar = () => {
    setShowCalendar(true);
  };

  const handleHideCalendar = () => {
    setShowCalendar(false);
  };

  const handleShowGuests = () => {
    setShowGuests(true);
  };

  const handleHideGuests = () => {
    setShowGuests(false);
  };

  return (
    <div className="absolute z-0 top-0 left-0 w-full h-full overflow-hidden">
      <div className="absolute top-[25%] left-1/2 transform -translate-x-1/2 flex bor rounded-xl px-4 z-[50] centrarContacto">
        <button
          onClick={handleShowCalendar}
          className="text-[--primary] hover:text-[#0090b2] transition-colors flex flex-col items-start text-start px-14 py-3 bg-[#f4efdf90] hover:bg-[--bg] rounded-l-xl"
        >
          <span className="text-[15px] font-bold">Ida/vuelta</span>
          <span className="text-xs opacity-70">Escoge fecha</span>
        </button>
        <button
          onClick={handleShowGuests}
          className="relative text-[--primary] hover:text-[#0090b2] transition-colors flex flex-col items-start px-14 py-3 bg-[#f4efdf90] hover:bg-[--bg]"
        >
          <span className="text-[15px]">Quien</span>
          <span className="text-xs opacity-70">¿Cuántos?</span>
          <span className="absolute top-2 bottom-2 left-0 w-0.5 bg-[--primary]"></span>
          <span className="absolute top-2 bottom-2 right-0 w-0.5 bg-[--primary]"></span>
        </button>
        <button
          onClick={handleShowReserva}
          className="text-[--primary] hover:text-[#0090b2] transition-colors flex flex-col items-start px-14 py-3 bg-[#f4efdf90] hover:bg-[--bg] rounded-r-xl"
        >
          <span className="text-[15px]">Reservar</span>
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
      {showCalendar && (
        <div className="fixed top-[34%] left-1/2 transform -translate-x-1/2 z-[70]  flex text-[#515151] text-[15px] items-center">
          <div className="bg-[#FFFDF8] px-16 py-8 rounded-lg shadow-lg relative w-[520px] h-[400px] mx-auto">
            <button
              onClick={handleHideCalendar}
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
            >
              &times;
            </button>
            <h2 className="mb-4 text-center">Agrega las fechas de tu viaje y obtén los precios exactos</h2>
            <div className="flex justify-between mb-4 p-[2px] bg-[#EDE9DD] rounded-md">
              <button
                onClick={() => setIsStartDatePicker(true)}
                className={`w-1/2  pr-2 ${isStartDatePicker ? 'bg-white rounded-md' : ''}`}
              >
                Llegada:
              </button>
              <button
                onClick={() => setIsStartDatePicker(false)}
                className={`w-1/2 pl-2 ${!isStartDatePicker ? 'bg-white rounded-md' : ''}`}
              >
                Salida:
              </button>
            </div>
            <div className="mb-0">
              {isStartDatePicker ? (
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  inline
                />
              ) : (
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                  inline
                />
              )}
            </div>
            <div className="flex justify-between">
              <button
                onClick={() => {
                  setStartDate(null);
                  setEndDate(null);
                }}
                className="text-gray-500"
              >
                Restablecer
              </button>
              <button
                onClick={handleHideCalendar}
                className="bg-black text-white px-4 py-1 rounded"
              >
                Aceptar
              </button>
            </div>
          </div>
        </div>
      )}
      {showGuests && (
        <div className="fixed top-[34%] left-1/2 transform -translate-x-1/2 z-[70]  flex text-[#515151] font-sans text-[15px] items-center">
          <div className="bg-[#FFFDF8] px-16 py-8 rounded-lg shadow-lg relative w-[520px] h-[400px] mx-auto">
            <button
              onClick={handleHideGuests}
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
            >
              &times;
            </button>
            <h2 className="text-center font-bold mb-2">Huéspedes</h2>
            <p className="text-center mb-4">Ingresa la cantidad de personas que viajarán contigo.</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center">
                <span className="font-bold">Adultos</span>
                <span className="text-xs">(13 años en adelante)</span>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() => setAdults(Math.max(0, adults - 1))}
                    className="bg-[#EDE9DD] w-8 h-8 flex items-center justify-center rounded-md"
                  >
                    −
                  </button>
                  <span className="mx-4">{adults}</span>
                  <button
                    onClick={() => setAdults(adults + 1)}
                    className="bg-[#EDE9DD] w-8 h-8 flex items-center justify-center rounded-md"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-bold">Niños</span>
                <span className="text-xs">(De 2 a 12 años)</span>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() => setChildren(Math.max(0, children - 1))}
                    className="bg-[#EDE9DD] w-8 h-8 flex items-center justify-center rounded-md"
                  >
                    −
                  </button>
                  <span className="mx-4">{children}</span>
                  <button
                    onClick={() => setChildren(children + 1)}
                    className="bg-[#EDE9DD] w-8 h-8 flex items-center justify-center rounded-md"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-bold">Bebés</span>
                <span className="text-xs">(Hasta 2 años)</span>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() => setInfants(Math.max(0, infants - 1))}
                    className="bg-[#EDE9DD] w-8 h-8 flex items-center justify-center rounded-md"
                  >
                    −
                  </button>
                  <span className="mx-4">{infants}</span>
                  <button
                    onClick={() => setInfants(infants + 1)}
                    className="bg-[#EDE9DD] w-8 h-8 flex items-center justify-center rounded-md"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-bold">Mascotas</span>
                <div className="flex items-center my-6">
                  <button
                    onClick={() => setPets(Math.max(0, pets - 1))}
                    className="bg-[#EDE9DD] w-8 h-8 flex items-center justify-center rounded-md"
                  >
                    −
                  </button>
                  <span className="mx-4">{pets}</span>
                  <button
                    onClick={() => setPets(pets + 1)}
                    className="bg-[#EDE9DD] w-8 h-8 flex items-center justify-center rounded-md"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-6">
              <button
                onClick={() => {
                  setAdults(0);
                  setChildren(0);
                  setInfants(0);
                  setPets(0);
                }}
                className="text-gray-500"
              >
                Restablecer
              </button>
              <button
                onClick={handleHideGuests}
                className="bg-black text-white px-4 py-1 rounded"
              >
                Aceptar
              </button>
            </div>
          </div>
        </div>
      )}
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
