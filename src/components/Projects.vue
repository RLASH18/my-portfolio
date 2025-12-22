<script setup lang="ts">
import { PROJECTS } from '@/data/projects';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-vue-next';
</script>

<template>
    <section id="projects" class="py-24">
        <div class="max-w-7xl mx-auto px-6">
            <div class="flex justify-between items-end mb-16">
                <div>
                    <h2 class="pixel-font text-3xl mb-4">FEATURED <span class="text-green-500">PROJECTS</span></h2>
                    <p class="text-gray-500 mono-font">Showcasing projects I've built and learned from.</p>
                </div>
                <div class="hidden md:block pixel-font text-[10px] text-green-500 animate-pulse">
                    [COMPLETED_PROJECTS: 5+]
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                <div v-for="project in PROJECTS" :key="project.id"
                    class="group relative bg-[#0a0a0a] border-4 border-white/5 hover:border-green-500 transition-all flex flex-col h-full">
                    <div class="aspect-video relative overflow-hidden">
                        <img :src="project.image" :alt="project.title"
                            class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" />
                    </div>

                    <div class="p-6 flex flex-col flex-grow">
                        <h3 class="pixel-font text-lg mb-4 text-white group-hover:text-green-400 transition-colors">
                            {{ project.title }}
                        </h3>
                        <p class="text-gray-400 text-sm mono-font mb-4 flex-grow">
                            {{ project.description }}
                        </p>

                        <!-- Tags -->
                        <div class="flex flex-wrap gap-2 mb-6">
                            <span v-for="tag in project.tags" :key="tag"
                                class="bg-black/80 border border-green-500/30 px-2 py-1 pixel-font text-[8px] text-green-400">
                                {{ tag }}
                            </span>
                        </div>

                        <div class="flex gap-3">
                            <a v-if="project.liveUrl && project.liveUrl !== '#'" :href="project.liveUrl" target="_blank"
                                rel="noopener noreferrer"
                                class="flex-1 flex items-center justify-center gap-2 bg-white text-black py-3 pixel-font text-[10px] hover:bg-green-500 transition-colors">
                                <ExternalLink :size="14" /> LIVE
                            </a>
                            <button v-else disabled
                                class="flex-1 flex items-center justify-center gap-2 bg-gray-700 text-gray-500 py-3 pixel-font text-[10px] cursor-not-allowed opacity-50">
                                <ExternalLink :size="14" /> LIVE
                            </button>
                            <a :href="project.codeUrl" target="_blank" rel="noopener noreferrer"
                                class="flex-1 flex items-center justify-center gap-2 border-2 border-white/10 py-3 pixel-font text-[10px] hover:border-green-500 hover:text-green-500 transition-colors">
                                <Github :size="14" /> CODE
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex justify-center mt-8">
                <a href="https://github.com/RLASH18?tab=repositories" target="_blank" rel="noopener noreferrer"
                    class="group inline-flex items-center gap-2 bg-green-500 text-black px-4 py-2 text-[9px] sm:px-6 sm:py-3 sm:text-[10px] md:px-8 md:py-4 md:text-sm pixel-font hover:bg-white transition-all">
                    SEE MORE PROJECTS
                    <ArrowUpRight
                        class="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
            </div>

        </div>
    </section>
</template>