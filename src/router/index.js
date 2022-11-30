/*
 * @Author: pikachuworld jinqingemail@163.com
 * @Date: 2022-08-31 17:00:03
 * @LastEditors: jinqingsong
 * @LastEditTime: 2022-11-29 14:30:37
 * @FilePath: /e-commerce-admin/src/router/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

import { useCounterStore } from '@/stores/counter'
import OrderAdmin from '@/views/OrderAdmin/Index.vue'
import FlowList from '@/views/demo/FlowList.vue'
import LogicFlow from '@/views/demo/LogicFlow.vue'
import D3Demo from '@/views/demoVisual/d3.vue'
import ThreeDemo from '@/views/demoVisual/three.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/d3js',
            name: 'd3demo',
            component: D3Demo

        },
        {
            path: '/threejs',
            name: 'threeDemo',
            component: ThreeDemo

        },
        {
            path: '/flowList',
            name: 'FlowList',
            component: FlowList

        },
        {
            path: '/flow',
            name: 'logicFlow',
            component: LogicFlow

        },
        {
            path: '/home',
            name: 'home',
            component: HomeView,
            children: [
                {
                    path: 'order/:type', // 0是普通订单， 1是秒杀订单
                    name: "order",
                    // component: Order,
                    component: OrderAdmin,
                }
            ],
            // redirect: '/home/order/0'
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
            path: '/login',
            name: 'login',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/login/Login.vue')
        },

    ]
})

// router.beforeEach((from) => {
//     const counterStore = useCounterStore()
//     const { isLogin } = counterStore
//     if (isLogin || from.name == 'login') {
//         return true
//     } else {
//         return { name: 'login' }
//     }
// })

export default router
