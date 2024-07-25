import React, { useState } from 'react';
import { Loader } from "./components/loader/Loader";
import StartButton from './StartButton';
import VideoPlayer from './VideoPlayer';
import './index.css'; // Asegúrate de importar Tailwind CSS

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

  return <VideoPlayer videoSrc="path/to/your/video.mp4" />;
};

export default App;
