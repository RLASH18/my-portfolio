<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { Gamepad2, Menu, X } from 'lucide-vue-next';

const isScrolled = ref(false);
const isMenuOpen = ref(false);

const navLinks = [
    { name: 'ABOUT', href: '#about' },
    { name: 'STACK', href: '#stack' },
    { name: 'PROJECTS', href: '#projects' },
];

const handleScroll = () => {
    isScrolled.value = window.scrollY > 20;
};

// Add scroll listener on mount, remove on unmount
onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
    <nav class="fixed w-full z-100 transition-all duration-300" :class="[
        isScrolled ? 'bg-[#050505]/95 backdrop-blur-sm py-3' : 'bg-transparent py-6',
        isScrolled ? 'shadow-[0_1px_0_0_rgba(34,197,94,0.3)]' : ''
    ]">
        <div class="max-w-7xl mx-auto px-6 flex justify-between items-center">
            <a href="#" class="flex items-center gap-3 group">
                <div class="bg-green-500 p-2 pixel-border group-hover:scale-110 transition-transform">
                    <Gamepad2 class="text-black w-6 h-6" />
                </div>
                <span class="pixel-font text-sm md:text-lg tracking-tighter hover:text-green-400 transition-colors">
                    RY<span class="text-green-500">AN</span>
                </span>
            </a>

            <div class="hidden md:flex gap-8 items-center">
                <a v-for="link in navLinks" :key="link.name" :href="link.href"
                    class="pixel-font text-[10px] tracking-widest hover:text-green-400 hover:-translate-y-1 transition-all">
                    {{ link.name }}
                </a>
                <a href="#contact"
                    class="px-4 py-2 bg-white text-black pixel-font text-[10px] hover:bg-green-500 hover:-translate-y-1 active:translate-y-0 transition-all">
                    HIRE ME
                </a>
            </div>

            <button class="md:hidden text-white" @click="isMenuOpen = !isMenuOpen">
                <component :is="isMenuOpen ? X : Menu" :size="24" />
            </button>
        </div>

        <div v-if="isMenuOpen"
            class="absolute top-full left-0 w-full bg-[#0a0a0a] border-b-2 border-green-500 p-6 flex flex-col gap-6 md:hidden">
            <a v-for="link in navLinks" :key="link.name" :href="link.href" @click="isMenuOpen = false"
                class="pixel-font text-xs tracking-widest">
                {{ link.name }}
            </a>
        </div>
    </nav>
</template>
