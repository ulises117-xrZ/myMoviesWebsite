import React from "react";
import Lottie from "react-lottie";
import animation from "@/assets/loading_lottie.json";

const LoadingComponent = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,

    renderSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="loading">
      <Lottie options={defaultOptions} height={200} width={200} />
    </div>
  );
};

export default LoadingComponent;
