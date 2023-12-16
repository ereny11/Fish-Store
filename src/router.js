import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Store',
        component: () => import ('./views/Store.vue')
    },
    {
        path: '/cart',
        name: 'Cart',
        component: () => import ('./views/Cart.vue')
    },
    {
        path: '/inventory',
        name: 'Inventory',
        component: () => import ('./views/Inventory.vue')
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import ('./views/Register.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import ('./views/Login.vue')
    },
    {
        path: '/home',
        name: 'Home',
        component: () => import('./views/Home.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router