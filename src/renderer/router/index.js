// eslint-disable-next-line no-unused-vars
import VueRouter from 'vue-router'
// eslint-disable-next-line no-unused-vars
import Vue from 'vue'
import one from '../components/one.vue'
import two from '../components/two.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: one
  }, {
    path: '/two',
    component: two
  }
]

const router = new VueRouter({
  routes
})

export default router
