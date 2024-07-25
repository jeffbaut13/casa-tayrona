import React, { useState, useEffect } from 'react';
import { Loader } from "./components/loader/Loader";
import StartButton from './components/StartButton';
import VideoPlayer from './components/VideoPlayer';
import './index.css'; // Asegúrate de importar Tailwind CSS
import videoCasa from "./assets/playa.mp4"

const App = () => {
  const [loading, setLoading] = useState(true);
  const [started, setStarted] = useState(false);

  const handleStart = () => {
    setStarted(true);
  };

  useEffect(() => {
    // Simulate video preloading
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (!started) {
    return <StartButton onClick={handleStart} />;
  }

  return <VideoPlayer videoSrc={videoCasa} setStarted={setStarted} started={started}/>;
};

export default App;
