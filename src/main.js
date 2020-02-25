import Vue from 'vue'
import VueRouter from "vue-router";
import routes from "./router";
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import './plugins/element.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import App from './App.vue'

Vue.use(Element,{size:'small'})
Vue.config.productionTip = false

Vue.use(VueRouter)


const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
