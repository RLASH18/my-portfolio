<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import gsap from 'gsap';
import { ArrowRight, Github, Mail, Instagram, Linkedin } from 'lucide-vue-next';
import TerminalWindow from './TerminalWindow.vue';

const containerRef = ref<HTMLElement | null>(null);

// Typewriter State
const displayText = ref('');
const roleIndex = ref(0);
const isDeleting = ref(false);

// Configuration
const roles = ['SOFTWARE_DEVELOPER', 'FULLSTACK_DEVELOPER', 'COMPUTER_SCIENCE_STUDENT', 'CODE_ENTHUSIAST'];
const typingSpeed = 150;
const deletingSpeed = 75;
const pauseDuration = 2000;

let typeTimeout: number;

// Typewriter Logic
const handleTyping = () => {
    const currentRole = roles[roleIndex.value];
    if (!currentRole) return;

    if (isDeleting.value) {
        displayText.value = currentRole.substring(0, displayText.value.length - 1);

        if (displayText.value.length === 0) {
            isDeleting.value = false;
            roleIndex.value = (roleIndex.value + 1) % roles.length;
            typeTimeout = window.setTimeout(handleTyping, 500);
        } else {
            typeTimeout = window.setTimeout(handleTyping, deletingSpeed);
        }
    } else {
        displayText.value = currentRole.substring(0, displayText.value.length + 1);

        if (displayText.value.length === currentRole.length) {
            typeTimeout = window.setTimeout(() => {
                isDeleting.value = true;
                handleTyping();
            }, pauseDuration);
        } else {
            typeTimeout = window.setTimeout(handleTyping, typingSpeed);
        }
    }
};

const socialLinks = [
    { icon: Github, href: 'https://github.com/RLASH18', label: 'GitHub' },
    { icon: Mail, href: 'mailto:lacdangryan18@gmail.com', label: 'Gmail' },
    { icon: Instagram, href: 'https://www.instagram.com/ryanlester_18', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' }
];

onMounted(() => {
    handleTyping();

    const ctx = gsap.context(() => {
        gsap.from('.hero-anim', {
            y: 100,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power4.out"
        });
    }, containerRef.value as Element);

    return () => ctx.revert();
});

onUnmounted(() => {
    clearTimeout(typeTimeout);
});
</script>

<template>
    <section ref="containerRef" class="relative min-h-screen flex items-center pt-20 md:pt-20 overflow-hidden">
        <div class="max-w-7xl mx-auto px-6 w-full">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <!-- Left Side: Text Content -->
                <div class="max-w-4xl">
                    <h1 class="hero-anim pixel-font text-4xl md:text-6xl lg:text-7xl leading-none mb-4">
                        RYAN LESTER <br />
                        <span class="text-green-500">LACDANG</span>
                    </h1>

                    <div class="hero-anim h-8 mb-8">
                        <span class="pixel-font text-sm md:text-xl text-gray-400">
                            {{ ">_ " }} {{ displayText }}
                            <span class="animate-pulse inline-block w-3 h-6 bg-green-500 ml-1 align-middle"></span>
                        </span>
                    </div>

                    <p class="hero-anim text-gray-500 text-lg md:text-xl max-w-2xl mb-10 mono-font">
                        Building full-stack applications while learning, improving, and keeping things simple.
                    </p>

                    <div class="hero-anim flex flex-col gap-6 mb-12">
                        <div class="flex flex-row flex-wrap gap-3">
                            <a href="#projects"
                                class="group flex items-center gap-2 bg-green-500 text-black px-4 py-2 text-[9px] sm:px-6 sm:py-3 sm:text-[10px] md:px-8 md:py-4 md:text-sm pixel-font hover:bg-white transition-all">
                                VIEW PROJECTS
                                <ArrowRight
                                    class="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-2 transition-transform" />
                            </a>

                            <a href="#contact"
                                class="group flex items-center gap-2 border-2 border-white/10 px-4 py-2 text-[9px] sm:px-6 sm:py-3 sm:text-[10px] md:px-8 md:py-4 md:text-sm pixel-font hover:border-green-500 hover:text-green-500 transition-all">
                                CONTACT ME
                            </a>
                        </div>

                        <div class="flex gap-4">
                            <a v-for="(social, i) in socialLinks" :key="i" :href="social.href"
                                :aria-label="social.label" target="_blank" rel="noopener noreferrer"
                                class="text-gray-400 hover:text-green-500 hover:-translate-y-1 transition-all">
                                <component :is="social.icon" :size="18" />
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Right Side: Terminal Command History -->
                <div class="hero-anim hidden lg:block">
                    <TerminalWindow />
                </div>
            </div>
        </div>

        <div class="absolute bottom-0 left-0 w-full h-[30vh] opacity-20" :style="{
            backgroundImage: 'linear-gradient(0deg, #4ade80 1px, transparent 1px), linear-gradient(90deg, #4ade80 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            transform: 'perspective(500px) rotateX(60deg)',
            transformOrigin: 'bottom'
        }">
        </div>
    </section>
</template>
