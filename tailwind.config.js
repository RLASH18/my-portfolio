export default {
    theme: {
        extend: {
            animation: {
                'scroll-left': 'scroll-left 40s linear infinite', // Adjust speed as needed
                'scroll-right': 'scroll-right 40s linear infinite',
            },
            keyframes: {
                'scroll-left': {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-33.33%)' }, // Moves 1/3 (because we tripled items)
                },
                'scroll-right': {
                    '0%': { transform: 'translateX(-33.33%)' },
                    '100%': { transform: 'translateX(0)' },
                },
            },
        },
    },
}