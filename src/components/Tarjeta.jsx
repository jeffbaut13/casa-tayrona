import React from "react";

const Tarjeta = ({ videoSrc, images, title, description, onClose }) => {
  return (
    <div className="relative z-50">
      <div className="fixed flex flex-col top-0 left-0 h-screen bg-[#fffdf8] w-[600px] items-center">
        <button onClick={onClose}>
          <img src="../src/assets/x-07.svg" className="w-4 left-2 top-4 absolute" />
        </button>
        <div className="w-[550px] mt-14">
          <video
            src={videoSrc}
            className="w-full z-[70]"
            loop
            muted
            playsInline
            controls
          />
        </div>
        <div className="flex justify-center z-[70] w-full mt-4 overflow-hidden">
          {images.map((imgSrc, index) => (
            <img key={index} src={imgSrc} className="w-1/4 h-auto object-contain mx-2" />
          ))}
        </div>
        <div className="text-[--primary] flex w-[550px] mt-10">
          <h1 className="font-bold text-4xl">{title.replace(/_/g, " ")}</h1>
          <p className="mx-3">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Tarjeta;
