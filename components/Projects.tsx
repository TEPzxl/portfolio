import { projectsData, type TechIconKey } from "@/data/projects";
import Image from "next/image";
import type { IconType } from "react-icons";
import {
  SiApachekafka,
  SiDjango,
  SiDocker,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiRedis,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { PinContainer } from "./ui/3d-pin";

const iconMap: Record<TechIconKey, IconType> = {
  react: SiReact,
  nextjs: SiNextdotjs,
  typescript: SiTypescript,
  tailwindcss: SiTailwindcss,
  nodejs: SiNodedotjs,
  mysql: SiMysql,
  mongodb: SiMongodb,
  postgresql: SiPostgresql,
  docker: SiDocker,
  redis: SiRedis,
  kafka: SiApachekafka,
  django: SiDjango,
};

const Projects = () => {
  return (
    <div className="py-20" id="projects">
      <h2 className="text-3xl font-bold mb-10 text-center text-purple-200">
        My Projects
      </h2>

      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projectsData.map(
          ({ id, title, description, imageUrl, projectUrl, iconList }) => (
            <div
              key={id}
              className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
            >
              <PinContainer title={projectUrl} href={projectUrl}>
                <div className="relative flex items-center justify-center sm:w-[520px] w-[80vw] overflow-hidden h-[30vh] sm:h-[40vh] mb-10">
                  <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    sizes="(max-width: 640px) 80vw, 520px"
                    className="object-contain object-bottom"
                  />
                </div>

                <h2 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {title}
                </h2>

                <p className="text-sm lg:text-xl lg:font-normal text-gray-400 line-clamp-2">
                  {description}
                </p>

                <div className="flex items-center justify-between mt-5 mb-3">
                  <div className="flex items-center gap-4">
                    {iconList.map((iconKey) => {
                      const IconComponent = iconMap[iconKey];
                      return (
                        <IconComponent
                          key={iconKey}
                          className="text-gray-200 text-xl"
                        />
                      );
                    })}
                  </div>
                  <span className="flex items-center text-xs font-medium text-purple-400 group-hover:underline">
                    Check Live Site
                    <svg
                      className="ml-1 w-3 h-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </span>
                </div>
              </PinContainer>
            </div>
          ),
        )}
      </div>
    </div>
  );
};

export default Projects;
