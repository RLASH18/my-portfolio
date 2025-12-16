<script setup lang="ts">
import { computed } from 'vue';
import * as simpleIcons from 'simple-icons';

const props = defineProps<{
    items: any[];
    direction: 'left' | 'right';
}>();

const animationClass = computed(() =>
    props.direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right'
);

// Get icon SVG path from simple-icons or use custom SVG
const getIconPath = (tech: any) => {
    // If custom SVG is provided, use it
    if (tech.customSvg) {
        return tech.customSvg;
    }

    // Convert slug to proper simple-icons format
    const iconKey = `si${tech.iconSlug.charAt(0).toUpperCase()}${tech.iconSlug.slice(1)}`;
    const icon = (simpleIcons as any)[iconKey];

    return icon?.path || '';
};
</script>

<template>
    <div class="relative flex overflow-hidden py-4 border-y border-white/5 group">
        <div class="flex gap-8 whitespace-nowrap group-hover:[animation-play-state:paused]" :class="animationClass">
            <div v-for="(tech, idx) in [...items, ...items, ...items]" :key="idx"
                class="flex items-center gap-4 bg-neutral-900 px-6 py-3 border-2 border-white/5 hover:border-green-500 transition-all cursor-default">

                <!-- Render actual brand icon as SVG -->
                <svg :class="[tech.color, 'w-6 h-6']" role="img" viewBox="0 0 24 24" fill="currentColor">
                    <path :d="getIconPath(tech)" />
                </svg>

                <span class="pixel-font text-[10px] text-white/80">{{ tech.name }}</span>
            </div>
        </div>
    </div>
</template>
