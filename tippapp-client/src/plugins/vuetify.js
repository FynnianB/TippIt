import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import de from 'vuetify/es5/locale/de';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: '#FF5722',
        secondary: '#00B383',
        accent: '#FF9E80',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
      },
    },
  },
  lang: {
    locales: {
      de
    },
    current: 'de',
  },
});