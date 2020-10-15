/*
 * @Author: live0x 
 * @Date: 2020-10-14 15:56:57 
 * @Last Modified by: live0x
 * @Last Modified time: 2020-10-14 15:57:30
 */
import MainComponent from '../components/MainPage'

const router = [{
    path: '/',
    name: 'main',
    component: MainComponent,
    redirect: '/hellovue',
    children: [
        { path: 'hellovue', component: () => import('@/components/HelloWorld.vue') }
    ]
},
{
    path: '/login',
    name: 'login',
    component: () => import('@/components/login/index.vue')
},
{
    path: '/main',
    name: 'main',
    component: MainComponent
},
{
    path: '/helloo',
    component: MainComponent,
    children: [
        { path: '/', component: () => import('@/components/HelloW.vue') }
    ]
},
{
    path: '/calmaterial',
    component: MainComponent,
    children: [{
        path: 'index',
        component: () => import('@/components/calculate/CalMaterial.vue')
    },

    { path: 'hello', component: () => import('@/components/calculate/CalStone.vue') }
    ]
}]

export default router