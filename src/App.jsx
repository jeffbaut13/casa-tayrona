import React, { useState, useEffect, useRef } from "react";
import { Loader } from "./components/loader/Loader";
import RadarLoader from "./components/RadarLoader";
import StartButton from "./components/StartButton";
import VideoPlayer from "./components/VideoPlayer";
import "./index.css"; // Asegúrate de importar Tailwind CSS

const App = () => {
  const [play, setPlay] = useState(false);
  const [started, setStarted] = useState(true);
  const [loading, setLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handleClickAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  console.log(isPlaying);
  return (
    < >
       {loading && (
        <>
          <Loader
            setPlay={setPlay}
            started={started}
            setLoading={setLoading}
            handleClickAudio={handleClickAudio}
          />
{/*            <RadarLoader />
 */}         </>
      )}
      <VideoPlayer
        audioRef={audioRef}
        setPlay={setPlay}
        videoSrc={"/videos/playa.mp4"}
        setStarted={setStarted}
        started={started}
        play={play}
        isPlaying={isPlaying}
        handleClickAudio={handleClickAudio}
      />
     </>
  );
};

export default App;
