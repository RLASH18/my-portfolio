export interface TechItem {
    name: string;
    iconSlug: string;
    color: string;
    customSvg?: string;
}

export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    liveUrl: string;
    codeUrl: string;
    tags: string[];
}
