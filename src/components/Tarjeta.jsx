import React from "react";
import imagencerrar from "/imagenes-tarjetas/cerrarTarjeta.svg";

const Tarjeta = ({ videoSrc, images, title, description, onClose }) => {
  return (
    <div className="relative z-50 flex">
      <div className="fixed flex flex-col top-0 left-0 h-screen bg-[#fffdf8] w-[600px] items-center p-14">
        <div className="flex flex-col justify-center h-full">
          <div className="w-full">
            <video
              src={`../${videoSrc}`}
              className="w-full z-[70] rounded-xl"
              loop
              muted
              playsInline
              controls
            />
          </div>
          <div className="flex justify-between z-[70] w-full my-4 overflow-hidden min-h-24">
            {images.map((imgSrc, index) => (
              <img
                key={index}
                src={imgSrc}
                className="w-1/4 h-auto object-contain rounded-3xl"
              />
            ))}
          </div>
          <div className="text-[--primary] flex">
            <h1 className="font-bold text-3xl ">{title.replace(/_/g, " ")}</h1>
            <p
              dangerouslySetInnerHTML={{ __html: description }}
              className="mx-3 text-xs ml-8"
            />
          </div>
        </div>
      </div>
      <div className="fixed top-0 left-[600px] iconocerrar w-[50px] p-0 h-full">
        <div className="flex flex-col justify-center h-full">
        <button onClick={onClose}>
          <img src={imagencerrar} className="w-full" />
        </button>
        </div>
      </div>
    </div>
  );
};

export default Tarjeta;
