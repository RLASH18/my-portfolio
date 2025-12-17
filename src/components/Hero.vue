<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import gsap from 'gsap';
import { ArrowRight, Github, Mail, Instagram, Linkedin } from 'lucide-vue-next';

const containerRef = ref<HTMLElement | null>(null);
const terminalRef = ref<HTMLElement | null>(null);

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

const allCommands = [
    { cmd: 'git pull origin main', output: 'Already up to date' },
    { cmd: 'npm run build', output: '✓ Build completed successfully' },
    { cmd: 'git commit -m "Refine awesome portfolio"', output: '[main 7a3f2b1] Refine awesome portfolio' },
    { cmd: 'npm test', output: 'All tests passed ✓' },
    { cmd: 'git push origin main', output: 'Everything up-to-date' },
    { cmd: 'npm install', output: 'Added 42 packages' },
    { cmd: 'php artisan migrate', output: 'Migration completed successfully' },
    { cmd: 'git status', output: 'On branch main, nothing to commit' },
    { cmd: 'npm run dev', output: 'Server running on localhost:5173' },
    { cmd: 'composer install', output: 'Generating autoload files' },
    { cmd: 'php artisan serve', output: 'Laravel development server started' },
    { cmd: 'git checkout -b feature/new-component', output: 'Switched to a new branch' },
    { cmd: 'composer update', output: 'Dependencies updated successfully' },
    { cmd: 'npm run lint', output: 'No linting errors found' },
    { cmd: 'php artisan cache:clear', output: 'Application cache cleared!' }
];

const terminalLines = ref<Array<{ type: 'command' | 'output', text: string, lineNum: number }>>([]);
let commandIndex = 0;
let lineNumber = 1;
let terminalInterval: number;

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

// Terminal Animation
const addTerminalLine = () => {
    const command = allCommands[commandIndex % allCommands.length];

    if (!command) return;

    // Add command
    terminalLines.value.push({ type: 'command', text: command.cmd, lineNum: lineNumber++ });

    // Add output after a short delay
    setTimeout(() => {
        terminalLines.value.push({ type: 'output', text: command.output, lineNum: lineNumber++ });

        // Keep only last 10 lines
        if (terminalLines.value.length > 10) {
            terminalLines.value.shift();
            terminalLines.value.shift();
        }

        // Auto-scroll to bottom
        if (terminalRef.value) {
            terminalRef.value.scrollTop = terminalRef.value.scrollHeight;
        }
    }, 500);

    commandIndex++;
};

const startTerminal = () => {
    // Add initial commands immediately
    addTerminalLine();
    setTimeout(() => addTerminalLine(), 1000);

    // Then continue at regular intervals
    terminalInterval = window.setInterval(() => {
        addTerminalLine();
    }, 3500);
};

const socialLinks = [
    { icon: Github, href: 'https://github.com/RLASH18', label: 'GitHub' },
    { icon: Mail, href: 'mailto:lacdangryan18@gmail.com', label: 'Gmail' },
    { icon: Instagram, href: 'https://www.instagram.com/ryanlester_18', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' }
];

onMounted(() => {
    handleTyping();
    startTerminal();

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
    if (terminalInterval) {
        clearInterval(terminalInterval);
    }
});
</script>

<template>
    <section ref="containerRef" class="relative min-h-screen flex items-center pt-24 md:pt-20 overflow-hidden">
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
                    <div class="terminal-window">
                        <!-- Terminal Header -->
                        <div class="terminal-header">
                            <div class="terminal-dots">
                                <span class="dot red"></span>
                                <span class="dot yellow"></span>
                                <span class="dot green"></span>
                            </div>
                            <div class="terminal-title pixel-font">ryan@portfolio:~$</div>
                        </div>

                        <!-- Terminal Body -->
                        <div ref="terminalRef" class="terminal-body">
                            <div v-for="(line, index) in terminalLines" :key="index" class="terminal-line">
                                <span class="line-number">{{ line.lineNum }}</span>
                                <span v-if="line.type === 'command'" class="command-line">
                                    <span class="prompt">$</span> {{ line.text }}
                                </span>
                                <span v-else class="output-line">{{ line.text }}</span>
                            </div>
                            <div class="terminal-cursor">
                                <span class="line-number">{{ lineNumber }}</span>
                                <span class="prompt">$</span>
                                <span class="cursor-blink">_</span>
                            </div>
                        </div>
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

<style scoped>
.terminal-window {
    background: rgba(0, 0, 0, 0.8);
    border: 2px solid #4ade80;
    border-radius: 16px;
    overflow: hidden;
    box-shadow:
        0 0 40px rgba(74, 222, 128, 0.4),
        0 0 80px rgba(74, 222, 128, 0.2);
    backdrop-filter: blur(10px);
}

.terminal-header {
    background: rgba(0, 0, 0, 0.6);
    border-bottom: 1px solid rgba(74, 222, 128, 0.3);
    padding: 14px 20px;
    display: flex;
    align-items: center;
    gap: 16px;
}

.terminal-dots {
    display: flex;
    gap: 8px;
}

.dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
}

.dot.red {
    background: #ff5f56;
}

.dot.yellow {
    background: #ffbd2e;
}

.dot.green {
    background: #27c93f;
}

.terminal-title {
    font-size: 12px;
    color: #4ade80;
    letter-spacing: 0.5px;
}

.terminal-body {
    padding: 24px 20px;
    height: 380px;
    overflow-y: auto;
    font-family: 'Courier New', monospace;
    font-size: 14px;
    line-height: 1.8;
}

.terminal-body::-webkit-scrollbar {
    width: 6px;
}

.terminal-body::-webkit-scrollbar-track {
    background: transparent;
}

.terminal-body::-webkit-scrollbar-thumb {
    background: rgba(74, 222, 128, 0.3);
    border-radius: 3px;
}

.terminal-body::-webkit-scrollbar-thumb:hover {
    background: rgba(74, 222, 128, 0.5);
}

.terminal-line {
    display: flex;
    align-items: flex-start;
    margin-bottom: 4px;
    animation: fadeIn 0.4s ease;
}

.line-number {
    color: #4ade80;
    min-width: 32px;
    text-align: right;
    margin-right: 16px;
    opacity: 0.5;
    font-size: 12px;
    user-select: none;
}

.command-line {
    color: #4ade80;
    flex: 1;
}

.output-line {
    color: #9ca3af;
    flex: 1;
    padding-left: 20px;
}

.prompt {
    color: #22c55e;
    margin-right: 8px;
    font-weight: bold;
}

.terminal-cursor {
    display: flex;
    align-items: center;
    color: #4ade80;
    margin-top: 8px;
}

.cursor-blink {
    animation: blink 1s infinite;
    margin-left: 4px;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateX(-10px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes blink {

    0%,
    50% {
        opacity: 1;
    }

    51%,
    100% {
        opacity: 0;
    }
}

.terminal-window:hover {
    box-shadow:
        0 0 50px rgba(74, 222, 128, 0.5),
        0 0 100px rgba(74, 222, 128, 0.3);
}
</style>
