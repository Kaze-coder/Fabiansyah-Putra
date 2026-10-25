import logo from "../../public/PhotoProfile.png";
import TiltedCard from "./animation/TiltedCard";

const HeroImage = () => {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <div className="rounded-full overflow-hidden border-4 border-slate-200 dark:border-slate-700 shadow-2xl">
        <TiltedCard
          imageSrc={logo}
          altText="Fabiansyah Putra - Portfolio"
          containerHeight="400px"
          containerWidth="400px"
          imageHeight={400}
          imageWidth={400}
          scaleOnHover={1.08}
          rotateAmplitude={14}
          showMobileWarning={false}
          showTooltip={false}
        />
      </div>
    </div>
  );
};

export default HeroImage;