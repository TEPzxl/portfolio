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
            Dynamic Web Magic with Next.js
          </h2>

          <TextGenerateEffect
            words="Crafting Dynamic Web Experiences with Next.js: A Portfolio Showcase"
            className="text-center text-4xl md:text-6xl lg:text-7xl max-w-[90vw] md:max-w-2xl lg:max-w-[60vw]"
          />

          <p className="my-6 text-lg text-gray-300 max-w-[90vw] md:max-w-2xl lg:max-w-[60vw]">
            Welcome to my portfolio, where I showcase my expertise in crafting
            dynamic web experiences using Next.js. Explore my projects and see how
            I bring creativity and functionality together in the world of web
            development.
          </p>

          <a href="#about">
            <MagicButton 
                title="show my work"
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
