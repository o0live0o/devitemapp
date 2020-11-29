import Vue from 'vue'
import router from "./router";
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import './plugins/element.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import App from './App.vue'
import './assets/css/global.css'

Vue.use(Element,{size:'small'})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
