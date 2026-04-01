import { IconType } from "react-icons";
import { SiDjango, SiGin, SiGit, SiGo, SiJavascript, SiLinux, SiMysql, SiPostgresql, SiPostman, SiPython, SiReact, SiRedis, SiTailwindcss, SiTypescript } from "react-icons/si";

export type TechItem = {
    name: string;
    icon: IconType;
}

export type TechGroup = {
    category: string;
    items: TechItem[];
}

export const techStack: TechGroup[] = [
    {
        category: "Frontend",
        items: [
            {name: "JavaScript", icon: SiJavascript},
            {name: "TypeScript", icon: SiTypescript},
            {name: "React", icon: SiReact},
            {name: "Tailwind CSS", icon: SiTailwindcss}
        ]
    },
    {
        category: "Backend",
        items: [
            {name: "Python", icon: SiPython},
            {name: "Django", icon: SiDjango},
            {name: "Go", icon: SiGo},
            {name: "Gin", icon: SiGin},
        ]
    },
    {
        category: "Database",
        items: [
            {name: "MySQL", icon: SiMysql},
            {name: "PostgreSQL", icon: SiPostgresql},
        ]
    },
    {
        category: "Tools",
        items: [
            {name: "Linux", icon: SiLinux},
            {name: "Git", icon: SiGit},
            {name: "Postman", icon: SiPostman},
            {name: "Redis", icon: SiRedis}
        ]
    }
]