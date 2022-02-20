module.exports = {
    devServer: {
      proxy: {
        '^/api': {
          target: 'http://mevn-api:3080',
          changeOrigin: true
        },
      }
    }
  }