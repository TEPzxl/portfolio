export type NavItem = {
    name: string;
    link: string;
    icon?: React.ReactNode;
}

export const navItems: NavItem[] = [
    {name: "About", link: "#about"},
    {name: "Tech Stack", link: "#tech-stack"},
    {name: "Projects", link: "#projects"},
    {name: "Contact", link: "#contact"},
];