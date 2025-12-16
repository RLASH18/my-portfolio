<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Navbar from '@/components/Navbar.vue';
import Hero from '@/components/Hero.vue';
import About from '@/components/About.vue';
import TechStack from '@/components/TechStack.vue';
import Projects from '@/components/Projects.vue';
import Contact from '@/components/Contact.vue';
import Footer from '@/components/Footer.vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

// Template Ref for the main container
const mainRef = ref<HTMLElement | null>(null);

onMounted(() => {
    const sections = gsap.utils.toArray('section');

    sections.forEach((section: any) => {
        gsap.from(section, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                end: "top 20%",
                toggleActions: "play none none reverse"
            }
        });
    });
});
</script>

<template>
    <div ref="mainRef" class="min-h-screen bg-[#050505] text-white selection:bg-green-500 selection:text-black">
        <div class="fixed inset-0 pointer-events-none z-50 opacity-[0.03]" :style="{
            backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '40px 40px'
        }">
        </div>

        <Navbar />
        <main>
            <Hero />
            <About />
            <TechStack />
            <Projects />
            <Contact />
        </main>
        <Footer />
    </div>
</template>
