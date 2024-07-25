import React, { useState, useEffect } from "react";
import { Loader } from "./components/loader/Loader";
import StartButton from "./components/StartButton";
import VideoPlayer from "./components/VideoPlayer";
import "./index.css"; // Asegúrate de importar Tailwind CSS
import videoCasa from "./assets/playa.mp4";

const App = () => {
  const [play, setPlay] = useState(false);
  const [started, setStarted] = useState(false);

  console.log("el video esta en play? " + play);
  console.log("el video esta " + started);

  return (
    <>
      <Loader setPlay={setPlay} started={started} />

      <VideoPlayer
        videoSrc={videoCasa}
        setStarted={setStarted}
        started={started}
        play={play}
      />
    </>
  );
};

export default App;
