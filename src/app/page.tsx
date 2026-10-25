import SocialLinks from "@/components/SocialLinks";
import HeroTexts from "@/components/HeroTexts";
import HeroImage from "@/components/HeroImage";
import GithubBtn from "@/components/animation/GithubBtn";
import DownLoadResumeBtn from "@/components/DownLoadResumeBtn";
import FramerWrapper from "@/components/animation/FramerWrapper";

export default function Home() {
  return (
    <div className="h-full w-full flex items-center justify-center gap-32 max-lg:flex-col max-lg:gap-8 px-12">
      {/* LEFT SIDE  */}
      <FramerWrapper
        className="h-auto w-auto flex flex-col justify-center gap-4"
        y={0}
        x={-100}
      >
        <HeroTexts />
        <div className="h-fit w-full p-4 flex gap-4">
          <SocialLinks />
        </div>
        <DownLoadResumeBtn />
      </FramerWrapper>
      
      {/* RIGHT SIDE image  */}
      <FramerWrapper
        className="relative max-lg:hidden"
        y={0}
        x={100}
      >
        {/* IMAGE  */}
        <HeroImage />
      </FramerWrapper>
    </div>
  );
}