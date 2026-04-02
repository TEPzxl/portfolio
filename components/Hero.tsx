import { FaLocationArrow } from "react-icons/fa";
import { GridBackground } from "./ui/GridBackgroud";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const Hero = () => {
  return (
    <section id="about" className="relative w-full min-h-screen overflow-hidden bg-black-100 flex items-center justify-center">
      <Spotlight
        className="-top-40 left-0 md:-left-32 md:-top-20 h-screen"
        fill="white"
      />
      <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="white" />
      <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />

      <GridBackground />

      <div className="relative z-10 text-center flex flex-col items-center">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-blue-100 max-w-80">
            TEPZXL | 全栈开发者作品集
          </h2>

          <TextGenerateEffect
            words="我专注于构建高性能、可扩展的 Web 产品，从精致前端到可靠后端，覆盖全链路交付。"
            className="text-center text-4xl md:text-6xl lg:text-7xl max-w-[90vw] md:max-w-2xl lg:max-w-[60vw]"
          />

          <p className="my-6 text-lg text-gray-300 max-w-[90vw] md:max-w-2xl lg:max-w-[60vw]">
            我使用 Next.js、TypeScript 与现代后端技术栈打造可落地的软件产品。
            这个作品集展示了我如何把产品想法转化为可上线功能，并在架构清晰、
            性能优化和用户体验之间取得平衡。
          </p>

          <a href="#projects">
            <MagicButton 
                title="查看我的项目"
                icon={<FaLocationArrow />}
                position="right"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
