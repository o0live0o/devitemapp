import Vue from 'vue'
import router from "./router";
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import './plugins/element.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import App from './App.vue'
<<<<<<< HEAD
import store from './store'
=======
import './assets/css/global.css'
>>>>>>> master

Vue.use(Element,{size:'small'})
Vue.config.productionTip = false

<<<<<<< HEAD
Vue.use(VueRouter)

const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

=======
>>>>>>> master
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
