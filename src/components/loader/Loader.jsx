import React from "react";
import Lottie from "lottie-react";
import loader from "../../lotties/loader.json";

export const Loader = () => {
  // estado inial true loader false
  // estado play false loader true
  // estado el video ya a cargado false loader true

  return (
    <div className="flex">
      <Lottie animationData={loader} />
    </div>
  );
};
