import React, { useState } from "react";
import imagencerrar from "/imagenes-tarjetas/cerrargaleria.svg";
import izq from "/imagenes-tarjetas/iz.svg";
import der from "/imagenes-tarjetas/der.svg";
import cer from "/imagenes-tarjetas/cerrargaleria.svg";

const Tarjeta = ({ images, title, description, onClose }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleImageClick = () => {
    setIsFullScreen(true);
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

  const handleCloseFullScreen = () => {
    setIsFullScreen(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full z-[55] flex items-center justify-center backdrop-blur-xl bg-gray-900 bg-opacity-35">
      <div className="flex items-center w-11/12 max-w-[70%] relative">
        <button onClick={onClose} className="absolute top-4 right-4">
          <img src={imagencerrar} className="w-8" />
        </button>
        <div className="w-1/2 relative">
          <div className="w-full relative flex items-center justify-center">
            <button
              onClick={handlePrevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl z-[71]"
            >
              <img src={izq} className="w-8" />
            </button>
            <img
              src={selectedImage}
              className="w-full z-[70] rounded-xl cursor-pointer"
              alt={title}
              onClick={handleImageClick}
            />
            <button
              onClick={handleNextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl z-[71]"
            >
              <img src={der} className="w-8" />
            </button>
          </div>
          <div className="flex justify-between z-[70] w-full my-4 overflow-hidden">
            {images.slice(currentIndex, currentIndex + 3).map((imgSrc, index) => (
              <img
                key={index}
                src={imgSrc}
                className="w-1/3 h-auto object-contain rounded-xl px-2"
                alt={`Thumbnail ${index + 1}`}
              />
            ))}
          </div>
        </div>
        <div className="text-[--bg] flex flex-col items-start w-1/2 ml-8">
          <h1 className="font-bold text-3xl">{title.replace(/_/g, " ")}</h1>
          <p
            dangerouslySetInnerHTML={{ __html: description }}
            className="text-start text-sm mt-2 w-11/12"
          />
        </div>
      </div>

      {isFullScreen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-[80] backdrop-blur-sm">
          <div className="relative w-4/5 h-4/5 rounded-xl flex items-center justify-center">
            <button
              onClick={handlePrevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl"
            >
              <img src={izq} className="w-16" />
            </button>
            <img src={selectedImage} className="max-w-4/5 max-h-4/5 rounded-xl" alt="Selected" />
            <button
              onClick={handleNextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl"
            >
              <img src={der} className="w-16" />
            </button>
          </div>
          <button
            onClick={handleCloseFullScreen}
            className="absolute top-4 right-4"
          >
            <img src={cer} className="w-8" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Tarjeta;
