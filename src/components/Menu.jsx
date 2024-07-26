import React, { useState } from "react";
import { gsap } from "gsap";
import HamburgesaIcon from "./HamburguesaIcon";
import AudioPlayer from "./audio/AudioPlayer";
import audioMusic from "../assets/audioMusic.mp3";

const Menu = ({
  onButtonClick,
  isPlaying,
  handleClickAudio,
  audioRef,
  handleShowReserva,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = React.useRef(null);
  const [hover, setHover] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => {
      const isExpanding = !prev;
      gsap.to(menuRef.current, {
        width: isExpanding ? "400px" : "100px",
        duration: 0.5,
        ease: "power2.out",
      });
      return isExpanding;
    });
  };

  const handleButtonClick = (buttonName) => {
    onButtonClick(buttonName); // Show the Reserva component

    toggleMenu(); // Close the menu after a button click
  };

  const cerrarAbrirCart = () => {
    handleShowReserva();
    toggleMenu();
  };

  console.log(hover);
  return (
    <div
      className="relative z-[51]"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-screen bg-[#6b728030] hover:bg-[#fffdf8] text-[#623e2a] transition-width duration-500 ease-out overflow-hidden ${
          isOpen ? "w-[400px] bg-[#fffdf8]" : "w-[100px]"
        }`}
      >
        <div
          className="absolute top-4 right-8 cursor-pointer"
          onClick={toggleMenu}
        >
          <HamburgesaIcon active={isOpen} hover={hover} />
        </div>

        {/* Texts when hover */}
        {!isOpen && hover && (
          <>
            <div className="absolute top-1/2 right-0 flex items-center justify-center -rotate-90 w-full whitespace-nowrap">
              <button
                onClick={cerrarAbrirCart}
                className="uppercase block hover:text-[#0090b2] transition-colors"
              >
                Contacto y reserva
              </button>
            </div>
          </>
        )}
        <AudioPlayer
          audioRef={audioRef}
          audioSrc={audioMusic}
          isPlaying={isPlaying}
          handleClickAudio={handleClickAudio}
          active={isOpen}
          hover={hover}
        />

        {/* Buttons in expanded menu */}
        {isOpen && (
          <div className="flex flex-col h-full items-center justify-center">
            <div className="flex flex-col w-1/2 whitespace-nowrap">
              <h1 className="font-bold text-2xl">Interiores</h1>
              <button
                onClick={() => handleButtonClick("Habitación_principal")}
                className="hover:text-[#0090b2] transition-colors mt-4 pl-4 text-start"
              >
                Habitación principal
              </button>
              <button
                onClick={() => handleButtonClick("Habitación_secundaria")}
                className="hover:text-[#0090b2] transition-colors mt-4 pl-4 text-start"
              >
                Habitaciones secundarias
              </button>
              <button
                onClick={() => handleButtonClick("Habitación_auxiliar")}
                className="hover:text-[#0090b2] transition-colors mt-4 pl-4 text-start"
              >
                Habitaciones auxiliar
              </button>
              <button
                onClick={() => handleButtonClick("Cocina")}
                className="hover:text-[#0090b2] transition-colors mt-4 pl-4 text-start"
              >
                Cocina
              </button>
              <button
                onClick={() => handleButtonClick("Comedor")}
                className="hover:text-[#0090b2] transition-colors mt-4 pl-4 text-start"
              >
                Comedor
              </button>
            </div>
            <div className="flex flex-col w-1/2 mt-10 whitespace-nowrap">
              <h1 className="mt-4 font-bold text-2xl">Exteriores</h1>
              <button
                onClick={() => handleButtonClick("Terraza")}
                className="hover:text-[#0090b2] transition-colors mt-4 pl-4 text-start"
              >
                Terraza
              </button>
              <button
                onClick={() => handleButtonClick("Piscina")}
                className="hover:text-[#0090b2] transition-colors mt-4 pl-4 text-start"
              >
                Piscina
              </button>
              <button
                onClick={() => handleButtonClick("Playa")}
                className="hover:text-[#0090b2] transition-colors mt-4 pl-4 text-start"
              >
                Playa
              </button>
            </div>
            <div className="flex flex-col w-1/2 mt-10 font-bold whitespace-nowrap">
              <button
                onClick={cerrarAbrirCart}
                className="block hover:text-[#0090b2] transition-colors px-2 text-start"
              >
                Contacto y Reserva
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
