import React from "react";
import imagenLogo from "../../assets/logo.svg";

export const LogoImagen = () => {
  return (
    <figure className="absolute top-12 z-50 left-1/2 -translate-x-1/2 w-60">
      <img src={imagenLogo} alt="" />
    </figure>
  );
};
