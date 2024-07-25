import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';

const VideoPlayer = ({ videoSrc, setStarted, started }) => {
  const canvasRef = useRef(null);
  const terrazaButtonRef = useRef(null);
  const habitacionButtonRef = useRef(null);
  const videoElement = useRef(document.createElement('video'));
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const video = videoElement.current;

    // Set up video source and event listeners
    video.src = videoSrc;
    video.crossOrigin = 'anonymous'; // To handle CORS issues if video is from another domain

    const handleLoadedData = () => {
      setStarted(true);
      canvas.width = video.videoWidth || canvas.clientWidth;
      canvas.height = video.videoHeight || canvas.clientHeight;
      drawFrame();
    };

    const drawFrame = () => {
      if (!video.paused && !video.ended) {
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        requestAnimationFrame(drawFrame);
      }
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('play', drawFrame);

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('play', drawFrame);
    };
  }, [setStarted]);

  useEffect(() => {
    if (isPlaying) {
      const video = videoElement.current;

      const showButton = (buttonRef, start, end) => {
        gsap.to(buttonRef.current, {
          opacity: 1,
          duration: 0.5,
          delay: start,
          onComplete: () => {
            gsap.to(buttonRef.current, {
              opacity: 0,
              duration: 0.5,
              delay: end - start,
            });
          },
        });
      };

      video.addEventListener('timeupdate', () => {
        const currentTime = video.currentTime;
        
        if (currentTime >= 0 && currentTime < 6) {
          showButton(terrazaButtonRef, 0, 6);
        }
        
        if (currentTime >= 8 && currentTime < 15) {
          showButton(habitacionButtonRef, 0, 7);
        }
      });
    }
  }, [isPlaying]);

  const handlePlay = () => {
    setIsPlaying(true);
    videoElement.current.play();
  };

  return (
    <div className="relative">
      <canvas ref={canvasRef} className="w-full h-auto" />

      {started && (
        <button
          ref={terrazaButtonRef}
          className="absolute left-10 top-10 opacity-0 bg-green-500 text-white px-4 py-2 rounded pointer-events-auto"
        >
          Terraza
        </button>
      )}

      {started && (
        <button
          ref={habitacionButtonRef}
          className="absolute left-10 top-20 opacity-0 bg-red-500 text-white px-4 py-2 rounded pointer-events-auto"
        >
          Habitación
        </button>
      )}

      {!isPlaying && (
        <div className="absolute inset-0 flex justify-center items-center">
          <button onClick={handlePlay} className="bg-blue-500 text-white px-4 py-2 rounded">
            Reproducir
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
