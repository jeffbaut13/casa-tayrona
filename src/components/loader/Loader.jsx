import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import loader from "../../lotties/loader.json";
import loaderTwo from "../../lotties/loader2.json";
import gsap from "gsap";

export const Loader = ({ setLoading }) => {
  const [animationPlayed, setAnimationPlayed] = useState(false);

  useEffect(() => {
    if (!animationPlayed) {
      const tl = gsap.timeline();
      tl.fromTo(
        ".LoadIcon",
        {
          opacity: 0,
          ease: "power1.out",
          duration: 2,
        },
        {
          opacity: 1,
          ease: "power1.in",
          duration: 3,
        }
      ).then(() => {
        setAnimationPlayed(true);
      });

      tl.to(".LoadIcon", {
        opacity: 1,
      });
    }
  }, [animationPlayed]);

  return (
    <div className="flex">
      <Lottie
        className="LoadIcon absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        animationData={loader}
      />
      <Lottie
        className="LoadIconTwo opacity-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        animationData={loaderTwo}
      />
    </div>
  );
};
