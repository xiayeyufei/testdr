import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import CheckOut from '@/components/CheckOut'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'iMain',
    component: Main,
    props: true,
  },
    {
      path: '/checkout',
      name: 'checkout',
      component: CheckOut,
      props: true
    },
    {
      path: '*',
      redirect: "/"
    }
  ]
})
