import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/cv',
      name: 'App',
      components: {
        default: () => import('../components/login/AppLogged.vue'),
        mobile: () => import('../components/mobile/MobileApp.vue')
      },
      children: [
        {
          path: '',
          name: 'Profil',
          component: () => import('../components/mobile/AppProfile.vue')
        },
        {
          path: 'experiences',
          name: 'Skúsenosti',
          component: () => import('../components/mobile/AppExp.vue') 
        },
        {
          path: 'education',
          name: 'Vzdelanie',
          component: () => import('../components/mobile/AppEducation.vue')  
        },
        {
          path: 'other',
          name: 'Ostatné',
          component:() => import('../components/mobile/AppOther.vue') 
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../components/login/AppGuest.vue')
    },
  ]
})
export default router
