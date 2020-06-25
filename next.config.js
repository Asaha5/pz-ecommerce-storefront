const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    webpack: (config) => {
        config.module.rules.push({
            test: /\.mjs$/,
            include: /node_modules/,
            type: "javascript/auto"
        });
        config.plugins.push(new OptimizeCssAssetsPlugin({
            cssProcessorPluginOptions: {
                preset: 'advanced',
            },
        }))
        return config
    }
}