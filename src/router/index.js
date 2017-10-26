import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Hello'
import Media from '@/components/test'
import Login from '@/components/login'

Vue.use(Router)
Vue.directive('title', {
  inserted: function (el, binding) {
    document.title = el.dataset.title
  }
})
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/media',
      name: 'Media',
      component: Media
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})

