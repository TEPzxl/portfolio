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

export const projects: Project[] = [

]