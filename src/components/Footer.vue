<script setup lang="ts">
import { Cpu } from 'lucide-vue-next';
</script>

<template>
    <footer class="py-12 border-t border-white/5">
        <div class="max-w-7xl mx-auto px-6">
            <div class="flex flex-col md:flex-row justify-between items-center gap-8">
                <div class="flex items-center gap-4">
                    <Cpu class="text-green-500" />
                    <div class="pixel-font text-xs">RY<span class="text-green-500">AN</span> © 2025</div>
                </div>

                <div class="flex gap-8">
                    <a href="#about"
                        class="mono-font text-xs text-gray-500 hover:text-white transition-colors">ABOUT</a>
                    <a href="#stacks"
                        class="mono-font text-xs text-gray-500 hover:text-white transition-colors">TECH-STACK</a>
                    <a href="#projects"
                        class="mono-font text-xs text-gray-500 hover:text-white transition-colors">PROJECTS</a>
                </div>

                <div class="text-gray-600 mono-font text-[10px]">
                    NEVER STOP CREATING 🔥
                </div>
            </div>

            <div class="mt-12 h-1 bg-gradient-to-r from-green-500 via-transparent to-purple-500 opacity-30"></div>
        </div>
    </footer>
</template>
