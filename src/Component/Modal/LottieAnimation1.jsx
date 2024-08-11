import React from "react";
import Lottie from "lottie-react";
import animationData from "../../Lottie/Animation - 1723363229480.json"; // Ensure this path is correct

const LottieAnimation1 = () => {
  return (
    <Lottie
      animationData={animationData}
      loop={true}
      autoplay={true}
      style={{ height: 400, width: 400 }}
    />
  );
};

export default LottieAnimation1;
