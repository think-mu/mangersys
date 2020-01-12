import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/common/Home')
const Main = () => import('views/page/Main')
const PersonData = () => import('views/page/PersonData')


Vue.use(VueRouter)

const routes= [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/',
    component: Home,
    meta: { title: '自述文件'},
    children: [
      {
        path: '/main',
        component: Main,
        meta: { title: '系统首页' }
      },{
        path: '/persondata',
        component: PersonData,
        meta: { title: '系统首页' }
      }
    ]
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router