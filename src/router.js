import SearchHome from './layouts/Layout.vue'

const routers = [
    {
        path: '/home',
        name: 'home',
        component: SearchHome
    },
    {
        path: '/',
        component: SearchHome
    },
]
export default routers
