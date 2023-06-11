import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import CSHomepFW from './views/c-homep-fw'
import './style.css'

Vue.use(Router)
Vue.use(Meta)
export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'CSHomepFW',
      path: '/',
      component: CSHomepFW,
    },
  ],
})
