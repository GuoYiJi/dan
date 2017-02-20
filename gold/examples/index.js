import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './pages/App.vue'
import routes from './route.config.js'
import './Common/styles/index.scss'
import 'rowgrid.js'
Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  base: __dirname,
  routes
})

new Vue({ // eslint-disable-line
  render: h => h(App),
  router
}).$mount('#app');
