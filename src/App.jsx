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

  return (
    <>
      <figure class="a-video js-video m-shoresExpScreen__video">
        <video
          class="a-video__video js-video-video"
          data-id="loop-endscreenv1.mp4"
          data-preloader="preload"
          data-shores-exp="videoEnd"
          data-src="/media/pages/uploads/d94b98e2ba-1694528848/loop-endscreenv1.mp4"
          loop
          muted
          autoPlay
          playsinline
          id="html5_video_ge3hzeefcyg"
          src={videoCasa}
        ></video>{" "}
      </figure>
    </>
  );
};

export default App;
