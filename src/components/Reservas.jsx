import React from "react";

const Reserva = ({ onClose }) => {
  return (
    <div className="absolute w-full h-full bg-white bg-opacity-20 backdrop-blur-2xl z-[55]">
      <div className="absolute inset-0 flex justify-center items-center w-full z-50">
        <figure
          onClick={onClose}
          className="cursor-pointer absolute right-4 top-4 w-10 h-16 rotate-180 z-20"
        >
          <img src="/imagenes-tarjetas/cerrargaleria.svg" alt="Cerrar" />
        </figure>
        <div className="w-[50%] h-[70%] text-black font-sans flex bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="w-1/2 px-20 py-8">
            <h1 className="text-1xl font-bold mb-4">Confirma y paga</h1>
            <div className="mb-4">
              <h2 className=" text-sm font-semibold mb-2">Tu viaje</h2>
              <div className="flex justify-between items-center mb-2">
                <p className=" text-xs">Escoge las fechas de tu viaje</p>
                <button className="text-blue-600 text-sm">Editar</button>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm">¿Con quién viajas?</p>
                <button className="text-blue-600 text-sm">Editar</button>
              </div>
              <p className="text-xs mt-1 text-gray-600">
                ¿Traes un animal de servicio?
              </p>
            </div>
{/*             <div>
              <h2 className="text-1xl font-semibold mb-2">Paga con</h2>
              <div className="mb-4">
                <label className="block text-sm mb-1">
                  Nombre como aparece en la tarjeta
                </label>
                <input
                  type="text"
                  className="w-full border rounded p-2 text-sm"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm mb-1">Número de la tarjeta</label>
                <input
                  type="text"
                  className="w-full border rounded p-2 text-sm"
                />
              </div>
              <div className="flex space-x-4 mb-6">
                <div className="w-1/2">
                  <label className="block text-sm mb-1">Caducidad</label>
                  <input
                    type="text"
                    className="w-full border rounded p-2 text-sm"
                  />
                </div>
                <div className="w-1/2">
                  <label className="block text-sm mb-1">CVC</label>
                  <input
                    type="text"
                    className="w-full border rounded p-2 text-sm"
                  />
                </div>
              </div>
              <div className="w-full items-center justify-center flex border-t border-gray-600 pt-4">
              <span className=" text-center text-xl text-gray-600">
                Reserva ahora y ahorra un 5%
              </span>
              </div>
              <p className="text-xs text-gray-600 mt-2 border border-gray-600 p-4 rounded-lg">
                Kasa Paraíso Tayrona ofrece un descuento único para las fechas
                de tu viaje. Reserva pronto para aprovechar esta oferta especial.
              </p>
            </div>
 */}          </div>
          <div className="w-1/2 bg-black text-white ">
            <div className="h-full flex flex-col">
              <img
                src="/imagenes-tarjetas/check.webp"
                alt="Hospedaje"
                className="w-full p-0 m-0 object-cover"
              />
              <div className=" px-20 py-8">
                <di>
                <h1 className="text-xl font-bold mb-4 ">
                  Hospedaje en Kasa Paraíso Tayrona
                </h1>
                
                <div className="mb-4 border-t border-gray-600 pt-4">
                <h1 className=" mb-4 text-xl">Informacion del precio</h1>
                  <p className="flex justify-between">
                    <span>$2,500 USD x 4 noches</span>
                    <span>$10,000 USD</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Oferta especial</span>
                    <span>-$500 USD</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Transporte personalizado</span>
                    <span>$200 USD</span>
                  </p>
                </div>
                <div className="border-t border-gray-600 pt-4">
                  <p className="flex justify-between text-xl">
                    <span>Total (USD)</span>
                    <span>$9,200 USD</span>
                  </p>
                </div>

                </di>
                
              <div className=" w-full items-center justify-center flex">
              <button className="w-1/2 rounded-lg bg-white text-black py-3 mt-6">
                Confirma y paga
              </button>
              
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reserva;
