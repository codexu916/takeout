import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routers'
// import Msite from '../pages/Msite/Msite.vue'
// import Search from '../pages/Search/Search.vue'
// import Order from '../pages/Order/Order.vue'
// import Profile from '../pages/Profile/profile.vue'
// Vue.use(VueRouter)

export default new VueRouter({
  mode:'history',
  routes
})