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
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router