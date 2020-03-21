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
},
{
    path:'/main',
    name:'main',
    component: () => import('@/components/MainPage.vue'),
    children:
    [{
        path: '/calmaterial',
        component: () => import('@/components/calculate/CalMaterial.vue')
      },
      {
          path: '/calstone',
          component: () => import('@/components/calculate/CalStone.vue')
      }]
}]


export default router