import type { Project } from '@/types/types';

export const PROJECTS: Project[] = [
    {
        id: 1,
        title: "QuestLog: Dev Journal",
        description: "A full-stack Laravel application for developers to track their daily coding quests and level up their skills.",
        image: "https://picsum.photos/seed/quest/600/400",
        liveUrl: "#",
        codeUrl: "#",
        tags: ["Laravel", "Livewire", "Tailwind"]
    },
    {
        id: 2,
        title: "VoxelShop E-commerce",
        description: "A highly responsive Vue.js store featuring a custom pixel-art UI and Inertia.js for seamless navigation.",
        image: "https://picsum.photos/seed/voxel/600/400",
        liveUrl: "#",
        codeUrl: "#",
        tags: ["Vue.js", "Inertia", "MySQL"]
    },
    {
        id: 3,
        title: "RetroChat Realtime",
        description: "Realtime messaging inspired by old-school IRC but with modern features like image uploads and markdown.",
        image: "https://picsum.photos/seed/chat/600/400",
        liveUrl: "#",
        codeUrl: "#",
        tags: ["PHP", "JavaScript", "SQLite"]
    }
];
