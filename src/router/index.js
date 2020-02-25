const router = [{
    path: '/',
    name: 'login',
    // meta: {
    //     title: '登录',
    //     hideInMenu: true
    // },
    component: ()=>import('@/components/login/index.vue')
},
{  
    path: '/login',
    name: 'login',
    // meta: {
    //     title: '登录',
    //     hideInMenu: true
    // },
    component: ()=>import('@/components/login/index.vue')    
}]


export default router