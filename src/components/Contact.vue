<script setup lang="ts">
import { Mail, Github, Linkedin, MessageSquare, Send } from 'lucide-vue-next';
</script>

<template>
    <section id="contact" class="py-24 bg-[#0a0a0a]">
        <div class="max-w-4xl mx-auto px-6">
            <div class="text-center mb-16">
                <h2 class="pixel-font text-3xl mb-4">READY TO <span class="text-green-500">START</span>?</h2>
                <p class="text-gray-500 mono-font">Drop a message or find me on social platforms.</p>
            </div>

            <div class="grid md:grid-cols-2 gap-12">
                <div class="space-y-8">
                    <div class="p-6 bg-neutral-900 border-2 border-white/5 space-y-4">
                        <h4 class="pixel-font text-xs text-green-500 flex items-center gap-2">
                            <MessageSquare :size="16" /> DIRECT_COMMUNICATION
                        </h4>
                        <p class="text-gray-400 mono-font text-sm">
                            I'm currently looking for internships and junior positions. My inbox is always open!
                        </p>
                        <div class="space-y-4 pt-4">
                            <a href="mailto:lacdangryan18.com" target="_blank" rel="noopener noreferrer"
                                class="flex items-center gap-4 text-white hover:text-green-400 transition-colors">
                                <div class="p-2 bg-neutral-800">
                                    <Mail :size="18" />
                                </div>
                                <span class="mono-font text-sm">lacdangryan18.com</span>
                            </a>
                            <a href="https://github.com/RLASH18" target="_blank" rel="noopener noreferrer"
                                class="flex items-center gap-4 text-white hover:text-green-400 transition-colors">
                                <div class="p-2 bg-neutral-800">
                                    <Github :size="18" />
                                </div>
                                <span class="mono-font text-sm">github.com/RLASH18</span>
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer"
                                class="flex items-center gap-4 text-white hover:text-green-400 transition-colors">
                                <div class="p-2 bg-neutral-800">
                                    <Linkedin :size="18" />
                                </div>
                                <span class="mono-font text-sm">linkedin.com/in/ryan18</span>
                            </a>
                        </div>
                    </div>
                </div>

                <form class="space-y-4" @submit.prevent>
                    <div class="space-y-2">
                        <label class="pixel-font text-[10px] block text-gray-500">USERNAME</label>
                        <input type="text"
                            class="w-full bg-neutral-900 border-2 border-white/10 px-4 py-3 text-white mono-font focus:border-green-500 outline-none transition-colors"
                            placeholder="Enter your name..." />
                    </div>
                    <div class="space-y-2">
                        <label class="pixel-font text-[10px] block text-gray-500">EMAIL_ADDRESS</label>
                        <input type="email"
                            class="w-full bg-neutral-900 border-2 border-white/10 px-4 py-3 text-white mono-font focus:border-green-500 outline-none transition-colors"
                            placeholder="Enter your email..." />
                    </div>
                    <div class="space-y-2">
                        <label class="pixel-font text-[10px] block text-gray-500">MESSAGE_CONTENT</label>
                        <textarea rows="4"
                            class="w-full bg-neutral-900 border-2 border-white/10 px-4 py-3 text-white mono-font focus:border-green-500 outline-none transition-colors"
                            placeholder="What's on your mind?"></textarea>
                    </div>
                    <button
                        class="w-full bg-green-500 text-black py-4 pixel-font text-xs flex items-center justify-center gap-3 hover:bg-white transition-all active:scale-95">
                        SEND TRANSMISSION
                        <Send :size="16" />
                    </button>
                </form>
            </div>
        </div>
    </section>
</template>
