/*
 * @Author: 七画一只妖
 * @Date: 2021-11-17 10:27:10
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-17 15:16:30
 * @Description: file content
 */
import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import VueRouter from "vue-router"
import router from "./router"

import store from "./store"

Vue.use(ElementUI);
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router:router,
  store:store
}).$mount('#app')
