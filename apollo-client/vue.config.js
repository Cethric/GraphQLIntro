module.exports = {
    pwa: {
        workboxPluginMode: 'InjectManifest',
        manifestCrossorigin: 'use-credentials',
        name: 'Apollo Client'
    },

    runtimeCompiler: false,

    css: {
        requireModuleExtension: true,
        sourceMap: true
    }
}