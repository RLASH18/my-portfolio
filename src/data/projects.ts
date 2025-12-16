import type { Project } from '@/types/types';

export const PROJECTS: Project[] = [
    {
        id: 1,
        title: 'ABG Prime Builders: E-Commerce System',
        description: 'A custom e-commerce system, built using a PHP framework we created from scratch. The system manages hardware products, orders, inventory and etc.',
        image: '/images/projects/abgprime.png',
        liveUrl: 'https://abgprime.shop',
        codeUrl: 'https://github.com/RLASH18/hss-main',
        tags: ['PHP', 'JavaScript', 'Tailwind', 'MySQL']
    },
    {
        id: 2,
        title: 'Mecha Book: Appointment System',
        description: 'A practice project built to learn and experiment with Livewire. The system has three user roles: Admin, Employee, and Customer. Admins can manage all appointments and users, Employees can view and handle their assigned appointments, and Customers can create appointments.',
        image: '/images/projects/mechabook.png',
        liveUrl: "#",
        codeUrl: 'https://github.com/RLASH18/mecha-book',
        tags: ['Laravel', 'Livewire', 'Tailwind', 'MySQL', 'OAuth2']
    }
];
