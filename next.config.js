/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        // Disable compilation progress output
        config.plugins.push(
            new webpack.ProgressPlugin({
                handler: (percentage, message, ...args) => {
                    // Add your own custom progress handling logic here if needed
                },
            })
        );

        return config;
    },
}

module.exports = nextConfig
