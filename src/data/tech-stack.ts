import type { TechItem } from '@/types/types';
import {
    Code2,
    FileCode2,
    Database,
    Layout,
    Server,
    Terminal,
    Github,
    Cpu,
    Globe,
    Layers,
    Smartphone,
    GitBranch,
    Monitor,
    Zap
} from 'lucide-vue-next';

export const TECH_STACK: { row1: TechItem[], row2: TechItem[], row3: TechItem[] } = {
    row1: [
        { name: 'JavaScript', icon: Code2, color: 'text-yellow-400' },
        { name: 'Vue.js', icon: Globe, color: 'text-green-500' },
        { name: 'Vite', icon: Zap, color: 'text-purple-500' },
        { name: 'Inertia.js', icon: Layers, color: 'text-purple-500' },
        { name: 'Tailwind CSS', icon: Layout, color: 'text-blue-400' },
        { name: 'Bootstrap', icon: Layout, color: 'text-purple-600' },
    ],
    row2: [
        { name: 'PHP', icon: FileCode2, color: 'text-indigo-400' },
        { name: 'Laravel', icon: Server, color: 'text-red-500' },
        { name: 'Livewire', icon: Smartphone, color: 'text-pink-500' },
        { name: 'MySQL', icon: Database, color: 'text-blue-500' },
        { name: 'SQLite', icon: Database, color: 'text-sky-400' },
    ],
    row3: [
        { name: 'Git', icon: GitBranch, color: 'text-orange-500' },
        { name: 'GitHub', icon: Github, color: 'text-white' },
        { name: 'VS Code', icon: Monitor, color: 'text-blue-500' },
        { name: 'Terminal', icon: Terminal, color: 'text-green-400' },
        { name: 'Docker', icon: Cpu, color: 'text-blue-400' },
    ]
};