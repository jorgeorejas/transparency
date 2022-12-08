const path = require('path');
module.exports = {
    stories: [
        '../design-system/atoms/**/*.stories.@(js|jsx|ts|tsx)',
        '../design-system/molecules/**/*.stories.@(js|jsx|ts|tsx)',
        '../design-system/organisms/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    staticDirs: ['../public'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        {
            name: '@storybook/addon-postcss',
            options: {
                postcssLoaderOptions: {
                    implementation: require('postcss'),
                },
            },
        },
    ],
    framework: '@storybook/react',
    core: {
        builder: '@storybook/builder-webpack5',
    },
    webpackFinal: (config) => {
        /**
         * Add support for alias-imports
         * @see https://github.com/storybookjs/storybook/issues/11989#issuecomment-715524391
         */
        config.resolve.alias = {
            ...config.resolve?.alias,
            '@': [
                path.resolve(__dirname, '../src/'),
                path.resolve(__dirname, '../'),
            ],
        };

        /**
         * Fixes font import with /
         * @see https://github.com/storybookjs/storybook/issues/12844#issuecomment-867544160
         */
        config.resolve.roots = [
            path.resolve(__dirname, '../public'),
            'node_modules',
        ];

        return config;
    },
};
