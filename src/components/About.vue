<script setup lang="ts">
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import { User, Rocket, Heart } from 'lucide-vue-next';

const accentRef = ref<HTMLElement | null>(null);

const cards = [
    { icon: Rocket, title: 'MISSION', text: 'Help others & grow' },
    { icon: User, title: 'ROLE', text: 'Software Developer' },
    { icon: Heart, title: 'PASSION', text: 'Building useful apps' },
];

onMounted(() => {
    const ctx = gsap.context(() => {
        gsap.to('.pixel-accent-about', {
            y: -15,
            repeat: -1,
            yoyo: true,
            duration: 2.5,
            ease: "sine.inOut"
        });
    }, accentRef.value as Element);

    return () => ctx.revert();
});
</script>

<template>
    <section id="about" class="py-24 relative overflow-hidden">
        <div class="max-w-7xl mx-auto px-6">
            <div class="flex flex-col md:flex-row gap-20 items-center">

                <div class="md:w-5/12 w-full flex justify-center" ref="accentRef">
                    <div class="pixel-accent-about relative w-full max-w-sm">
                        <div
                            class="aspect-4/5 bg-neutral-900 border-4 border-white/10 p-2 overflow-hidden relative group">
                            <img src="/images/me.jpg" alt="Profile"
                                class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                            <div
                                class="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-green-500/5 to-transparent bg-size-[100%_4px] animate-[pulse_2s_infinite]">
                            </div>

                            <div
                                class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/40 backdrop-blur-[2px]">
                                <div class="pixel-font text-green-500 text-[10px] text-center px-4 leading-loose">
                                    [SCANNING_CHARACTER...]<br />
                                    [CLASS: DEVELOPER]<br />
                                    [FACTION: STUDENT]
                                </div>
                            </div>

                            <div class="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-green-500"></div>
                            <div class="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-green-500"></div>
                            <div class="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-green-500"></div>
                            <div class="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-green-500"></div>
                        </div>

                        <div
                            class="absolute -bottom-6 -right-2 md:-bottom-10 md:-right-6 bg-green-500 text-black p-2 md:p-4 pixel-border w-[140px] md:min-w-[200px] z-20 text-[10px] md:text-xs">
                            <div class="pixel-font text-[8px] md:text-[10px] mb-2 md:mb-3 uppercase tracking-tighter">
                                Character Stats
                            </div>
                            <div class="space-y-2 md:space-y-3">
                                <div class="space-y-1">
                                    <div class="flex justify-between text-[7px] md:text-[8px] mono-font font-bold">
                                        <span>EXP: PHP</span>
                                        <span>72%</span>
                                    </div>
                                    <div class="w-full bg-black/20 h-1.5 md:h-2">
                                        <div class="bg-black w-[72%] h-full"></div>
                                    </div>
                                </div>
                                <div class="space-y-1">
                                    <div class="flex justify-between text-[7px] md:text-[8px] mono-font font-bold">
                                        <span>EXP: LARAVEL</span>
                                        <span>55%</span>
                                    </div>
                                    <div class="w-full bg-black/20 h-1.5 md:h-2">
                                        <div class="bg-black w-[55%] h-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="absolute -top-10 -left-10 w-40 h-40 bg-green-500/5 -z-10 blur-3xl rounded-full">
                        </div>
                    </div>
                </div>

                <div class="md:w-7/12 space-y-8">
                    <h2 class="pixel-font text-3xl md:text-5xl text-white">
                        BIO <span class="text-green-500">DATA</span>
                    </h2>

                    <div class="space-y-6 text-gray-400 text-lg mono-font max-w-2xl leading-relaxed">
                        <p>
                            Hello, world! I am <span
                                class="text-white font-bold underline decoration-green-500 underline-offset-4">
                                Ryan Lester Lacdang</span>, a software developer in training who loves building useful
                            and practical digital systems.
                        </p>
                        <p>
                            My focus lies in building solid <span class="text-green-400">Back-end architecture</span>
                            while creating clean and usable <span class="text-purple-400">Front-end interfaces</span>. I
                            am constantly improving my PHP/Laravel skills and gradually learning modern JS frameworks
                            like Vue.
                        </p>
                        <p>
                            I aim to create applications that help others solve real problems, while challenging myself
                            to grow and improve as a developer.
                        </p>
                    </div>

                    <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
                        <div v-for="(item, idx) in cards" :key="idx"
                            class="p-5 bg-neutral-900 border-2 border-white/5 flex flex-col gap-4 group hover:border-green-500 transition-all">
                            <div
                                class="w-fit p-2 bg-neutral-800 text-green-500 group-hover:bg-green-500 group-hover:text-black transition-colors">
                                <component :is="item.icon" :size="20" />
                            </div>
                            <div>
                                <div class="pixel-font text-[10px] text-white mb-1">{{ item.title }}</div>
                                <div class="text-gray-500 text-xs mono-font">{{ item.text }}</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>
