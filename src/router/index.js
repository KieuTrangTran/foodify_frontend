import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/overview',
      name: 'overview',
      component: () => import('../views/OverviewView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/create',
      name: 'create-recipes',
      component: () => import('../views/CreateRecipes.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    }

  ]
})

export default router


//"index.js verlinkt auf die einzelnen Unterseiten. Unterseiten in den views Ordner. Components eher Componenten die über mehrere Seiten sichtbar (zB NavBar, Footer) - Oder in die App.vue (die oberste Seite, wo man häufiger Nav, reinmacht)"