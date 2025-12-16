import type { LucideIcon } from 'lucide-vue-next';

export interface TechItem {
    name: string;
    icon: LucideIcon;
    color: string;
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
