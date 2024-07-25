import React, { useState } from "react";
import { gsap } from "gsap";
import HamburgesaIcon from "./HamburguesaIcon";

const Menu = ({ onButtonClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = React.useRef(null);
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive((prevActive) => !prevActive);
  };

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
    onButtonClick(buttonName);
    toggleMenu(); // Close the menu after a button click
  };

  return (
    <div
      className="relative z-50"
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
          <HamburgesaIcon handleClick={handleClick} active={active} />
        </div>

        {/* Texts when hover */}
        {!isOpen && hover && (
          <div
            className="absolute top-1/2 right-0 flex items-center justify-center -rotate-90 w-full"
          >
            <button
              className="block hover:text-[#0090b2] transition-colors pl-4"
            >
              Contacto
            </button>
            <p className="pl-4">y</p>
            <button
              className="block hover:text-[#0090b2] transition-colors pl-4"
            >
              Reserva
            </button>
          </div>
        )}

        {/* Buttons in expanded menu */}
        {isOpen && (
          <div className="flex flex-col h-full items-center justify-center">
            <div className="flex flex-col w-1/2">
              <h1 className="font-bold text-2xl">Interiores</h1>
              <button onClick={() => handleButtonClick("Habitacion_principal")} className="hover:text-[#0090b2] transition-colors mt-4 pl-4 text-start">
                Habitación principal
              </button>
              <button onClick={() => handleButtonClick("Habitacion_secundaria")} className="hover:text-[#0090b2] transition-colors mt-4 pl-4 text-start">
                Habitaciones secundarias
              </button>
              <button onClick={() => handleButtonClick("Habitacion_auxiliar")} className="hover:text-[#0090b2] transition-colors mt-4 pl-4 text-start">
                Habitaciones auxiliar
              </button>
              <button onClick={() => handleButtonClick("cocina")} className="hover:text-[#0090b2] transition-colors mt-4 pl-4 text-start">
                Cocina
              </button>
              <button onClick={() => handleButtonClick("comedor")} className="hover:text-[#0090b2] transition-colors mt-4 pl-4 text-start">
                Comedor
              </button>
            </div>
            <div className="flex flex-col w-1/2 mt-10">
              <h1 className="mt-4 font-bold text-2xl">Exteriores</h1>
              <button onClick={() => handleButtonClick("terraza")} className="hover:text-[#0090b2] transition-colors mt-4 pl-4 text-start">
                Terraza
              </button>
              <button onClick={() => handleButtonClick("piscina")} className="hover:text-[#0090b2] transition-colors mt-4 pl-4 text-start">
                Piscina
              </button>
              <button onClick={() => handleButtonClick("playa")} className="hover:text-[#0090b2] transition-colors mt-4 pl-4 text-start">
                Playa
              </button>
            </div>
            <div className="flex flex-col w-1/2 mt-10 font-bold">
              <button className="block hover:text-[#0090b2] transition-colors px-2 text-start">
                Contacto
              </button>
              <button className="block hover:text-[#0090b2] transition-colors px-2 text-start">
                y Reserva
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
