import { createRouter, createWebHashHistory } from 'vue-router'
// import HomeView from "../views/HomeView.vue"; 44

const Layout = () => import('@/views/LayoutView')
const Login = () => import('@/views/LoginView')
const Home = () => import('@/views/home/IndexView')

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      { path: '/', component: Home },
      {
        path: '/measures',
        component: import('@/views/measures/IndexView'),
      },
      {
        path: '/timetable',
        component: import('@/views/timetable/IndexView'),
      },
      {
        path: '/rpinfo',
        component: import('@/views/rpinfo/IndexView'),
      },
      {
        path: '/score',
        component: import('@/views/score/IndexView'),
      },
    ],
  },
  {
    path: '/login',
    component: Login,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
