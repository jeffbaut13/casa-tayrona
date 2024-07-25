import React, { useState } from "react";
import { gsap } from "gsap";
import HamburgesaIcon from "./HamburguesaIcon";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = React.useRef(null);
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);

  console.log(hover);

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

  return (
    <div
      className="relative z-50"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-screen bg-[#6b728030] hover:bg-[#fffdf8] text-[#623e2a] transition-width duration-500 ease-out overflow-hidden ${
          isOpen ? "w-[400px]" : "w-[100px]"
        }`}
      >
        <div
          className="absolute top-4 right-8 cursor-pointer"
          onClick={toggleMenu}
        >
          <HamburgesaIcon handleClick={handleClick} active={active} />
        </div>

        {/* Menu items shown only when hover */}
        <div
          className={`absolute top-1/2 right-0 transition-all duration-300 ease-out ${
            isOpen || hover
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-full"
          }`}
          style={{ width: "100px" }}
        >
          {isOpen ? (
            <div></div>
          ) : (
            <div className="flex items-center mt-10 -rotate-90">
              <a
                href="#contacto"
                className="block hover:text-[#0090b2] transition-colors px-2"
              >
                Contacto
              </a>
              y
              <a
                href="#reserva"
                className="block hover:text-[#0090b2] transition-colors px-2"
              >
                Reserva
              </a>
            </div>
          )}
        </div>

        {/* Buttons in expanded menu */}
        {isOpen && (
          <div className="flex flex-col h-full items-center justify-center">
            <div className="flex flex-col w-1/2">
              <h1 className=" font-bold text-1xl">Interiores</h1>
              <a
                href="#section2"
                className="hover:text-[#0090b2] transition-colors mt-4 pl-4"
              >
                Habitacion principal
              </a>
              <a
                href="#section2"
                className="hover:text-[#0090b2] transition-colors mt-4 pl-4"
              >
                Habitaciones secundarias
              </a>
              <a
                href="#section3"
                className="hover:text-[#0090b2] transition-colors mt-4 pl-4"
              >
                Cocina
              </a>
              <a
                href="#section4"
                className="hover:text-[#0090b2] transition-colors mt-4 pl-4"
              >
                Baños
              </a>
              <a
                href="#section5"
                className="hover:text-[#0090b2] transition-colors mt-4 pl-4"
              >
                Sala
              </a>
            </div>
            <div className="flex flex-col w-1/2 mt-10">
              <h1 className="mt-4 font-bold text-1xl">Exteriores</h1>
              <a
                href="#section1"
                className="hover:text-[#0090b2] transition-colors mt-4 pl-4"
              >
                Terraza
              </a>
              <a
                href="#section2"
                className="hover:text-[#0090b2] transition-colors mt-4 pl-4"
              >
                Piscina
              </a>
              <a
                href="#section3"
                className="hover:text-[#0090b2] transition-colors mt-4 pl-4"
              >
                Río
              </a>
              <a
                href="#section4"
                className="hover:text-[#0090b2] transition-colors mt-4 pl-4"
              >
                Playa
              </a>
            </div>
            <div className=" flex flex-col w-1/2 mt-10 font-bold ">
              <a
                href="#contacto"
                className="block hover:text-[#0090b2] transition-colors px-2"
              >
                Contacto
              </a>
              <a
                href="#reserva"
                className="block hover:text-[#0090b2] transition-colors px-2"
              >
                y Reserva
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
