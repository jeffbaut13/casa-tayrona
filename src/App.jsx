import React, { useState, useEffect } from "react";
import { Loader } from "./components/loader/Loader";
import StartButton from "./components/StartButton";
import VideoPlayer from "./components/VideoPlayer";
import "./index.css"; // Asegúrate de importar Tailwind CSS
import videoCasa from "./assets/playa.mp4";
import CaApp from "./components/VideoThree";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [started, setStarted] = useState(true);

  const handleStart = () => {
    setStarted(true);
  };

  /* if (loading) {
    return <Loader setLoading={setLoading} />;
  }

  if (!started) {
    return <StartButton onClick={handleStart} />;
  } */

  return <CaApp />;
};

export default App;
