module.exports = {
  publicPath: '/TippIt/',
  transpileDependencies: [
    'vuetify'
  ],

  pwa: {
    name: 'TippIt',
    themeColor: '#FF5722'
  },
  configureWebpack: {
    output: {
      crossOriginLoading: 'anonymous'
    }
  }
}
