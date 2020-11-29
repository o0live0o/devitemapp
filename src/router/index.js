import Vue from 'vue'
import VueRouter from 'vue-router'
// const router = [{
//     path: '/',
//     name: 'login',
//     // meta: {
//     //     title: '登录',
//     //     hideInMenu: true
//     // },
//     component: ()=>import('@/components/login/index.vue')
// },
// {  
//     path: '/login',
//     name: 'login',
//     // meta: {
//     //     title: '登录',
//     //     hideInMenu: true
//     // },
//     component: ()=>import('@/components/login/index.vue')    
// },
// {
//     path:'/main',
//     name:'main',
//     component: () => import('@/components/MainPage.vue'),
//     children:
//     [{
//         path: '/calmaterial',
//         component: () => import('@/components/calculate/CalMaterial.vue')
//       },
//       {
//           path: '/calstone',
//           component: () => import('@/components/calculate/CalStone.vue')
//       }]
// }]

Vue.use(VueRouter)

const router = new VueRouter ({
    routes: [
        { path: '/', redirect: '/login' },
        { path: '/login', component: () => import('@/components/login.vue') },
        { path: '/home', component: () => import('@/components/home.vue') }
    ]
})

router.beforeEach((to, from, next) => {
    if(to.path === '/login') return next()
    const token = window.sessionStorage.getItem('token')
    if(!token) 
    {
        return next('/login')
    }
    next()
})

export default router