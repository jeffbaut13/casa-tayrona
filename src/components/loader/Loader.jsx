import React from "react";
import Lottie from "lottie-react";
import loader from "../../lotties/loader.json";
export const Loader = () => {
  return (
    <div className="flex">
      <Lottie animationData={loader} />
    </div>
  );
};
