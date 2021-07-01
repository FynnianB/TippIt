module.exports = {
  // publicPath: process.env.NODE_ENV === 'production' ?
  //   '/TippIt/' : '/'
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