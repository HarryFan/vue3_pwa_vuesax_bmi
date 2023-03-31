const {
  defineConfig
} = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name: 'My PWA App',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',

    // 預先快取資源
    workboxOptions: {
      runtimeCaching: [{
          urlPattern: new RegExp('https://cdn.jsdelivr.net/'),
          handler: 'CacheFirst',
        },
        {
          urlPattern: new RegExp('/api/'),
          handler: 'NetworkFirst',
          options: {
            networkTimeoutSeconds: 5,
          },
        },
      ],
    },
  },
})