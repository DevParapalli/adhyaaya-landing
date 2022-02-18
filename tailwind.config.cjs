const config = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    corePlugins: {
        preflight: false
    },
    theme: {
        extend: {},
    },
    prefix: 'tw-',
    plugins: [require('daisyui')],
};

module.exports = config;
