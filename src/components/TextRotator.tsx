import React from "react";
import { portfolioConfig } from "@/config/portfolio.config";
import RotatingText from "./animation/RotatingText";

function TextRotator() {
  return (
    <div className="flex flex-col justify-center items-start overflow-hidden">
      <div className="font-poppins text-base sm:text-2xl [text-wrap:balance] text-gray-700 flex items-center gap-2 flex-wrap">
        <span>I am a {portfolioConfig.title} &</span>
        <RotatingText
          texts={portfolioConfig.skills.roles}
          mainClassName="px-2 sm:px-2 bg-[#2f7df4] text-white font-rubik text-lg sm:text-3xl font-semibold overflow-hidden py-0.5 sm:py-1 justify-center rounded-lg"
          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1"
          staggerFrom="last"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={3000}
        />
      </div>
    </div>
  );
}

export default TextRotator;