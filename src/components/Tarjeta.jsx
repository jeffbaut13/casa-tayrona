import React, { useState } from "react";
import imagencerrar from "/imagenes-tarjetas/cerrarTarjeta.svg";
import izq from "/imagenes-tarjetas/flechaizimagen.svg";
import der from "/imagenes-tarjetas/flechaderimagen.svg";
import cer from "/imagenes-tarjetas/cerrargaleria.svg";

const Tarjeta = ({ videoSrc, images, title, description, onClose }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (index) => {
    setSelectedImage(images[index]);
    setCurrentIndex(index);
  };

  const handleCloseImage = () => {
    setSelectedImage(null);
    setCurrentIndex(0);
  };

  const handlePrevImage = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[newIndex]);
    setCurrentIndex(newIndex);
  };

  const handleNextImage = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[newIndex]);
    setCurrentIndex(newIndex);
  };

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
                className="w-1/4 h-auto object-contain rounded-3xl cursor-pointer"
                onClick={() => handleImageClick(index)}
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

      {selectedImage && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="relative w-4/5 h-4/5 rounded-xl flex items-center justify-center">
            <button
              onClick={handlePrevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl"
            >
              <img src={izq} className="w-16" />
            </button>
            <img src={selectedImage} className="max-w-full max-h-full rounded-xl" />
            <button
              onClick={handleNextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl"
            >
              <img src={der} className="w-16" />
            </button>
          </div>
          <button
            onClick={handleCloseImage}
            className="absolute top-4 "
          >
            <img src={cer} className="w-14" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Tarjeta;
