import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/common/Home')

Vue.use(VueRouter)

const routes= [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: { title: ''},
    children: [
      
    ]
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router