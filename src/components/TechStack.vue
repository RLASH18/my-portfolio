<script setup lang="ts">
import ScrollingRow from './ScrollingRow.vue';
import { TECH_STACK } from '@/data/tech-stack';
</script>

<template>
    <section id="stack" class="py-24 bg-black/50 overflow-hidden">
        <div class="max-w-7xl mx-auto px-6 mb-16">
            <h2 class="pixel-font text-3xl text-center">
                TECH <span class="text-green-500">STACK</span>
            </h2>
            <p class="text-center text-gray-500 mt-4 mono-font">Equipped with the finest tools in the trade.</p>
        </div>

        <div class="space-y-8">
            <div class="relative">
                <div
                    class="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none">
                </div>
                <div
                    class="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none">
                </div>

                <ScrollingRow :items="TECH_STACK.row1" direction="left" />
                <div class="h-4"></div>
                <ScrollingRow :items="TECH_STACK.row2" direction="right" />
                <div class="h-4"></div>
                <ScrollingRow :items="TECH_STACK.row3" direction="left" />
            </div>
        </div>
    </section>
</template>