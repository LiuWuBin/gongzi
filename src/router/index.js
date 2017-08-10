import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: require('../views/Index')
    },
    {
      path: '/setting',
      name: 'setting',
      component: require('../views/Setting')
    },
    {
      path: '/about',
      name: 'about',
      component: require('../views/About')
    },
    {
      path: '*',
      component: require('../views/Index')
    }
  ]
})
