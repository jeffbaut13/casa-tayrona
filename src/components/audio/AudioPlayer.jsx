import Lottie from "lottie-react";
import React, { useState, useRef, useEffect } from "react";
import audio from "../../lotties/audio.json";

const AudioPlayer = ({ audioSrc, isPlaying, handleClickAudio, audioRef }) => {
  const lottieRef = useRef(null);

  useEffect(() => {
    if (!isPlaying) {
      lottieRef.current.pause();
    } else {
      lottieRef.current.play();
    }
  }, [isPlaying]);

  return (
    <div className="w-16 absolute bottom-6 left-1/2 -translate-x-1/2">
      <button
        onClick={handleClickAudio}
        className="p-2 rounded-full focus:outline-none"
      >
        <Lottie
          className={isPlaying ? "" : "opacity-40"}
          lottieRef={lottieRef}
          animationData={audio}
        />
      </button>
      <audio ref={audioRef} src={audioSrc} loop />
    </div>
  );
};

export default AudioPlayer;
