export type TechIconKey = ("react" 
    | "nextjs" 
    | "typescript" 
    | "tailwindcss" 
    | "nodejs" 
    | "mysql" 
    | "mongodb" 
    | "postgresql" 
    | "docker" 
    | "redis" 
    | "kafka" 
    | "django"
);

export type Project = {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    projectUrl: string;
    iconList: TechIconKey[];
}

export const projectsData: Project[] = [
    {
        id: 1,
        title: "Project One",
        description: "A web application built with Next.js and Tailwind CSS.",
        imageUrl: "/portfolio.png",
        projectUrl: "https://example.com/project-one",
        iconList: ["nextjs", "tailwindcss", "typescript"]
    },
    {
        id: 2,
        title: "Project Two",
        description: "A web application built with Next.js and Tailwind CSS.",
        imageUrl: "/portfolio.png",
        projectUrl: "https://example.com/project-two",
        iconList: ["nextjs", "tailwindcss", "typescript"]
    },
    {
        id: 3,
        title: "Project Three",
        description: "A web application built with Next.js and Tailwind CSS.",
        imageUrl: "/portfolio.png",
        projectUrl: "https://example.com/project-three",
        iconList: ["nextjs", "tailwindcss", "typescript"]
    }
]