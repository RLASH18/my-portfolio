<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import gsap from 'gsap';
import { ArrowRight, Github, Mail, Instagram, Linkedin } from 'lucide-vue-next';

const containerRef = ref<HTMLElement | null>(null);

// Typewriter State
const displayText = ref('');
const roleIndex = ref(0);
const isDeleting = ref(false);

// Configuration
const roles = ['SOFTWARE_DEVELOPER', 'FULLSTACK_ENGINEER', 'COMPUTER_SCIENCE_STUDENT', 'CODE_ENTHUSIAST'];
const typingSpeed = 150;
const deletingSpeed = 75;
const pauseDuration = 2000;

let typeTimeout: number;

// Typewriter Logic
const handleTyping = () => {
    const currentRole = roles[roleIndex.value];

    if (isDeleting.value) {
        // Deleting
        displayText.value = currentRole.substring(0, displayText.value.length - 1);

        if (displayText.value.length === 0) {
            isDeleting.value = false;
            roleIndex.value = (roleIndex.value + 1) % roles.length;
            typeTimeout = window.setTimeout(handleTyping, 500); // Small pause before typing next
        } else {
            typeTimeout = window.setTimeout(handleTyping, deletingSpeed);
        }
    } else {
        // Typing
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
    { icon: Linkedin, href: "https://linkedin.com", label: 'LinkedIn' }
];

onMounted(() => {
    // Start Typewriter
    handleTyping();

    // GSAP Animation
    const ctx = gsap.context(() => {
        gsap.from('.hero-anim', {
            y: 100,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power4.out"
        });
    }, containerRef.value as Element);

    // Cleanup function for GSAP context
    return () => ctx.revert();
});

onUnmounted(() => {
    clearTimeout(typeTimeout);
});
</script>

<template>
    <section ref="containerRef" class="relative min-h-screen flex items-center pt-36 md:pt-20 overflow-hidden">
        <div class="max-w-7xl mx-auto px-6 w-full">
            <div class="max-w-4xl">
                <h1 class="hero-anim pixel-font text-4xl md:text-6xl lg:text-8xl leading-none mb-4">
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

                <div class="hero-anim flex flex-wrap gap-8 items-center mb-12">
                    <div class="flex gap-4">
                        <a v-for="(social, i) in socialLinks" :key="i" :href="social.href" :aria-label="social.label"
                            class="p-3 bg-neutral-900 border-2 border-white/5 hover:border-green-500 hover:text-green-500 hover:-translate-y-1 transition-all">
                            <component :is="social.icon" :size="20" />
                        </a>
                    </div>

                    <div class="flex gap-4">
                        <a href="#projects"
                            class="group flex items-center gap-3 bg-green-500 text-black px-8 py-4 pixel-font text-[10px] md:text-sm hover:bg-white transition-all">
                            VIEW PROJECTS
                            <ArrowRight class="group-hover:translate-x-2 transition-transform" />
                        </a>
                    </div>
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
