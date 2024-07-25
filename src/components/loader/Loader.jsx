import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import Lottie from "lottie-react";
import loader from "../../lotties/logo.json";
import gsap from "gsap";

export const Loader = ({ setPlay, started, setloading }) => {
  //const [animationPlayed, setAnimationPlayed] = useState(false);
  const container = useRef();
  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.fromTo(
        ".LoadIcon",
        {
          opacity: 0,
          ease: "power1.out",
        },
        {
          opacity: 1,
          ease: "power1.in",
          duration: 0.5,
        }
      );
      tl.from(".btnInicio", {
        opacity: 0,
        delay: 1.5,
        duration: 1,
      });
    },
    { scope: container }
  );

  const handleLoading = () => {
    const tl = gsap.timeline();

    tl.to(".LoadIcon", {
      opacity: 0,
      translateY: 20,
      ease: "power1.in",
      duration: 1,
    });
    tl.to(
      ".btnInicio",
      {
        opacity: 0,
      },
      "<"
    );

    tl.add(() => {
      setPlay(true);
    });
    tl.to(".background", {
      opacity: 0,
      duration: 2,
      ease: "power1.inOut",
    });
    tl.add(() => {
      setloading(false);
    });
  };

  return (
    <div
      ref={container}
      className="w-full h-full flex flex-col justify-evenly items-center absolute top-0 left-0 z-10"
    >
      <div className="background pointer-events-none fixed top-0 left-0 bg-[--bg] w-screen h-screen z-10" />
      <div />
      <Lottie loop={false} className="LoadIcon  z-20" animationData={loader} />

      <button
        onClick={started ? handleLoading : null}
        className="btnInicio flex justify-center items-center blackerMedium z-20  text-[--primary] border-2 border-[--primary] py-1 px-16 text-xl"
      >
        {!started ? (
          <figure className="inline-block h-6 w-6">
            <svg
              className="animate-spin text-[--primary]"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </figure>
        ) : (
          "Empezar"
        )}
      </button>
    </div>
  );
};
