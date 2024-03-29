import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import './assets/sass/style.scss'

import Vuetify from 'vuetify/lib'


Vue.use(Vuetify);
const opts ={}
export default new Vuetify(opts)
Vue.config.productionTip = false


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
