/*
 * @Author: 七画一只妖
 * @Date: 2021-11-17 11:42:56
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-17 15:30:24
 * @Description: file content
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

// 路由懒加载
// const Welcome = () => import(/* webpackChunkName: "Welcome" */ '@/views/Welcome')
import HomePage from '@/views/HomePage'
import Essay from '@/views/Essay'

Vue.use(VueRouter)

const routes = [
    // {
    //     path: '/error',
    //     component: Error
    // },
    {
        name:"HomePage",
        path: '/',
        component: HomePage,
    },
    {
        name:"Essay",
        path: '/essay',
        component: Essay,
    },
]

const router = new VueRouter({
    routes
})

export default router
