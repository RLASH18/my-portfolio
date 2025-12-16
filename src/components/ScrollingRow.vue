<script setup lang="ts">
import { computed } from 'vue';

// Define props
const props = defineProps<{
    items: any[];
    direction: 'left' | 'right';
}>();

// Compute animation class based on direction
const animationClass = computed(() =>
    props.direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right'
);
</script>

<template>
    <div class="relative flex overflow-hidden py-4 border-y border-white/5 group">
        <div class="flex gap-8 whitespace-nowrap group-hover:[animation-play-state:paused]" :class="animationClass">
            <div v-for="(tech, idx) in [...items, ...items, ...items]" :key="idx"
                class="flex items-center gap-4 bg-neutral-900 px-6 py-3 border-2 border-white/5 hover:border-green-500 transition-all cursor-default">
                <component :is="tech.icon" :class="[tech.color, 'w-6 h-6']" />

                <span class="pixel-font text-[10px] text-white/80">{{ tech.name }}</span>
            </div>
        </div>
    </div>
</template>
