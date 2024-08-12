import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../react-datepicker.css";

const Reserva = ({ onClose }) => {
  const [showDateModal, setShowDateModal] = useState(false);
  const [showGuestsModal, setShowGuestsModal] = useState(false);
  const [isStartDatePicker, setIsStartDatePicker] = useState(true);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [pets, setPets] = useState(0);

  const handleShowDateModal = () => {
    setShowDateModal(true);
  };

  const handleHideDateModal = () => {
    setShowDateModal(false);
  };

  const handleShowGuestsModal = () => {
    setShowGuestsModal(true);
  };

  const handleHideGuestsModal = () => {
    setShowGuestsModal(false);
  };

  const handleDateChange = (date) => {
    if (isStartDatePicker) {
      setStartDate(date);
      // Cambia automáticamente al calendario de salida
      setIsStartDatePicker(false);
    } else {
      setEndDate(date);
    }
  };

  const handleDatePickerToggle = (isStart) => {
    setIsStartDatePicker(isStart);
  };

  const handleAcceptDates = () => {
    const fechaInicio = startDate ? startDate.toLocaleDateString() : "Fecha de inicio no seleccionada";
    const fechaFin = endDate ? endDate.toLocaleDateString() : "Fecha de fin no seleccionada";
    document.getElementById("fechas").innerText = `Llegada: ${fechaInicio} - Salida: ${fechaFin}`;
    handleHideDateModal();
  };

  const handleAcceptGuests = () => {
    // Actualiza el texto en el elemento con id="huespedes"
    const guestsText = `${adults} Adultos, ${children} Niños, ${infants} Bebés, ${pets} Mascotas`;
    document.getElementById("huespedes").innerText = guestsText;
    setShowGuestsModal(false);
  };

  return (
    <div className="absolute w-full h-full helvetbold bg-white bg-opacity-20 backdrop-blur-2xl z-[55]">
      <div className="absolute inset-0 flex justify-center items-center w-full z-50 p-4 sm:p-0 overflow-y-auto">
        <figure
          onClick={onClose}
          className="cursor-pointer absolute right-4 top-4 w-10 h-16 rotate-180 z-20"
        >
          <img src="/imagenes-tarjetas/cerrargaleria.svg" alt="Cerrar" />
        </figure>
        <div className="w-full sm:w-[60%] h-auto sm:h-[70%]  text-gray-600 flex flex-col sm:flex-row md:mt-0 mt-60 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="w-full sm:w-1/2 px-6 sm:px-20 py-8 flex flex-col justify-center centrarVertical">
            <h1 className="text-xl sm:text-2xl font-bold mb-2">Confirma y paga</h1>
            <div className="md:mb-4">
              <h2 className="text-xl sm:text-2xl font-semibold">Tu viaje</h2>
              <div className="flex justify-between items-center mb-2">
                <p className="text-xs helvetLight" id="fechas">Escoge las fechas de tu viaje</p>
                <button onClick={handleShowDateModal} className="text-blue-600 text-sm">Editar</button>
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold">Huéspedes</h2>
              <div className="flex justify-between items-center">
                <p className="text-xs helvetLight" id="huespedes">¿Con quién viajas?</p>
                <button onClick={handleShowGuestsModal} className="text-blue-600 text-sm">Editar</button>
              </div>
              <div className="py-1">
                <div className="my-2 border-t border-gray-600 pt-2">
                  <h1 className="mb-2 text-xl sm:text-2xl">Precio</h1>
                  <p className="flex justify-between text-xs">
                    <span>
                      <span className="helvetLight p-0 m-0">$2,500 USD</span> <span className="p-0 m-0">x <span className="helvetLight">4</span> noches</span>
                    </span>
                    <span className="helvetLight">$10,000 USD</span>
                  </p>
                  <p className="flex justify-between text-xs">
                    <span>Oferta especial</span>
                    <span className="helvetLight">-$500 USD</span>
                  </p>
                  <p className="flex justify-between text-xs">
                    <span>Transporte personalizado</span>
                    <span className="helvetLight">$200 USD</span>
                  </p>
                </div>
                <div className="pt-4">
                  <p className="flex justify-between text-lg sm:text-xl">
                    <span className="text-xl sm:text-2xl">Total</span>
                    <span className="helvetLight">$9,200 USD</span>
                  </p>
                </div>
              </div>

              <div className="w-full items-center justify-center flex border-t border-gray-600 pt-4 mt-4">
                <span className="text-center text-lg sm:text-xl text-gray-600">
                  Reserva ahora y ahorra un <span className="helvetLight">5%</span>
                </span>
              </div>
              <p className="text-[10px] sm:text-[10px] text-gray-600 mt-2 border border-gray-600 p-2 sm:p-2 rounded-lg flex flex-col items-center">
                <span>Kasa Paraíso Tayrona ofrece un descuento único para las fechas</span>
                <span>de tu viaje. Reserva pronto para aprovechar esta oferta especial.</span> 
              </p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 bg-black text-white">
            <div className="h-full flex flex-col">
              <img
                src="/imagenes-tarjetas/check.webp"
                alt="Hospedaje"
                className="w-full h-[200px] sm:h-[65%] object-cover"
              />
              <div className="flex flex-col items-center p-4 sm:p-0">
                <div className="w-full sm:w-3/4 flex flex-col items-center">
                  <h1 className="text-white text-lg sm:text-[21px] py-4 border-b-[1px] border-[#515151]">Hospedaje en Kasa Paraíso Tayrona</h1>
                </div>
                <button className="my-4 p-2 bg-sky-500 rounded-lg">
                  Pagar con Mercado Pago
                </button>
                <p className="text-xs">Paga de forma segura</p>
              </div>
            </div>
          </div>
        </div>
        {showDateModal && (
          <div className="absolute w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50 p-4 sm:p-0">
            <div className="bg-[#FFFDF8] p-4 sm:p-8 rounded-lg shadow-lg relative w-full sm:w-[500px] h-auto mx-auto">
              <div className="text-[#515151] flex flex-col items-center py-4">
                <h1 className="text-xl sm:text-2xl">Selecciona las fechas de tu viaje</h1>
                <p className="text-xs">Agrega las fechas y obtén los precios exactos</p>
              </div>
              <button
                onClick={handleHideDateModal}
                className="absolute top-4 right-4 text-gray-500 hover:text-black"
              >
                &times;
              </button>
              <div className="flex justify-between mb-4 p-[2px] bg-[#EDE9DD] rounded-md">
                <button
                  onClick={() => handleDatePickerToggle(true)}
                  className={`w-1/2 pr-2 ${isStartDatePicker ? "bg-white rounded-md text-gray-500" : "text-gray-500"}`}
                >
                  Llegada
                </button>
                <button
                  onClick={() => handleDatePickerToggle(false)}
                  className={`w-1/2 pl-2 ${!isStartDatePicker ? "bg-white rounded-md text-gray-500" : "text-gray-500"}`}
                >
                  Salida
                </button>
              </div>
              <DatePicker
                selected={isStartDatePicker ? startDate : endDate}
                onChange={handleDateChange}
                selectsStart={isStartDatePicker}
                startDate={startDate}
                endDate={endDate}
                inline
              />
              <div className="flex justify-between mt-4">
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
                  onClick={handleAcceptDates}
                  className="bg-[#F0E3CE] text-[#515151] px-4 py-2 rounded-md"
                >
                  Aceptar
                </button>
              </div>
            </div>
          </div>
        )}
        {showGuestsModal && (
             <div className="absolute w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50 p-4 sm:p-0">
             <div className="bg-[#FFFDF8] p-8 rounded-lg shadow-lg relative w-full sm:w-[500px] h-auto mx-auto">
               <div className="text-[#515151] flex flex-col items-center py-4">
                 <h1 className="text-xl sm:text-2xl">Huéspedes</h1>
                 <p className="text-xs">Ingresa la cantidad de personas que viajarán contigo.</p>
               </div>
               <button
                 onClick={() => setShowGuestsModal(false)}
                 className="absolute top-4 right-4 text-gray-500 hover:text-black"
               >
                 &times;
               </button>
               <div className="grid grid-cols-2 gap-4 mb-4 text-gray-500 helvetLight">
                 <div className="flex flex-col items-center">
                   <span>Adultos <small>(13 años en adelante)</small></span>
                   <div className="flex items-center mt-2">
                     <button onClick={() => setAdults(adults - 1)} disabled={adults === 0} className=" bg-[--bg] px-2">
                       -
                     </button>
                     <span className="mx-2 helvetLight">{adults}</span>
                     <button onClick={() => setAdults(adults + 1)} className=" bg-[--bg] px-2">+</button>
                   </div>
                 </div>
                 <div className="flex flex-col items-center helvetLight">
                   <span>Niños <small>(De 2 a 12 años)</small></span>
                   <div className="flex items-center mt-2">
                     <button onClick={() => setChildren(children - 1)} disabled={children === 0} className=" bg-[--bg] px-2">
                       -
                     </button>
                     <span className="mx-2">{children}</span>
                     <button onClick={() => setChildren(children + 1)} className=" bg-[--bg] px-2">+</button>
                   </div>
                 </div>
                 <div className="flex flex-col items-center helvetLight">
                   <span>Bebés <small>(Hasta 2 años)</small></span>
                   <div className="flex items-center mt-2">
                     <button onClick={() => setInfants(infants - 1)} disabled={infants === 0} className=" bg-[--bg] px-2">
                       -
                     </button>
                     <span className="mx-2">{infants}</span>
                     <button onClick={() => setInfants(infants + 1)} className=" bg-[--bg] px-2">+</button>
                   </div>
                 </div>
                 <div className="flex flex-col items-center helvetLight">
                   <span>Mascotas</span>
                   <div className="flex items-center mt-2">
                     <button onClick={() => setPets(pets - 1)} disabled={pets === 0} className=" bg-[--bg] px-2">
                       -
                     </button>
                     <span className="mx-2">{pets}</span>
                     <button onClick={() => setPets(pets + 1)} className=" bg-[--bg] px-2">+</button>
                   </div>
                 </div>
               </div>
               <div className="flex justify-between">
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
                   onClick={handleAcceptGuests}
                   className="bg-[#000000] text-white px-4 py-2 rounded-md"
                 >
                   Aceptar
                 </button>
               </div>
             </div>
           </div>
            )}
      </div>
    </div>
  );
};

export default Reserva;
