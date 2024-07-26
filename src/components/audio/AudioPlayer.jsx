import Lottie from "lottie-react";
import React, { useState, useRef, useEffect } from "react";
import audio from "../../lotties/audio.json";
import { Audio } from "../ui/Audio";

const AudioPlayer = ({
  audioSrc,
  isPlaying,
  handleClickAudio,
  audioRef,
  active,
  hover,
}) => {
  const lottieRef = useRef(null);

  return (
    <div className="w-16 h-16 absolute bottom-6 left-1/2 -translate-x-1/2">
      <button onClick={handleClickAudio} className="w-full h-full">
        <Audio isPlaying={isPlaying} active={active} hover={hover} />
      </button>
      <audio ref={audioRef} src={audioSrc} loop />
    </div>
  );
};

export default AudioPlayer;
