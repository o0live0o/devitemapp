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
        { path: '/login', component: () => import('@/components/login.vue') }
    ]
})

export default router