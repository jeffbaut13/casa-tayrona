import React, { useState, useEffect } from "react";
import videoCasa from "./assets/playa.mp4";
import "./index.css"; // Asegúrate de importar Tailwind CSS

const App = () => {
  return (
    <div className="app-container">
      <figure className="video-container">
        <video
          className="background-video"
          loop
          muted
          autoPlay
          playsInline
          src={videoCasa}
        ></video>
      </figure>
      <div className="content">
        <h1>Título del sitio</h1>
        <button>Botón de ejemplo</button>
        <p>Otro contenido que va encima del video.</p>
      </div>
    </div>
  );
};

export default App;
