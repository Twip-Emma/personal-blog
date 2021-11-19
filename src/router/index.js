/*
 * @Author: 七画一只妖
 * @Date: 2021-11-17 11:42:56
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-19 19:04:41
 * @Description: file content
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

// 路由懒加载
// const Welcome = () => import(/* webpackChunkName: "Welcome" */ '@/views/Welcome')
import HomePage from '@/views/HomePage'
import Essay from '@/views/Essay'
import Message from '@/views/Message'
import Project from '@/views/Project'
import About from '@/views/About'
import BlogInfo from '@/components/index/BlogInfo'

import Login from '@/components/login/Login'


const routes = [
    // {
    //     path: '/error',
    //     component: Error
    // },
    {
        path: '/',
        component: HomePage,
    },
    {
        name:"HomePage",
        path: '/home',
        component: HomePage,
    },
    {
        name:"Essay",
        path: '/essay',
        component: Essay,
    },
    {
        name:"Message",
        path: '/message',
        component:Message
    },
    {
        name:"Project",
        path: '/project',
        component:Project
    },
    {
        name:"About",
        path:"/about",
        component:About
    },
    {
        name:"BlogInfo",
        path:"/bloginfo",
        component:BlogInfo
    },
    {
        name:"Login",
        path:"/login",
        component:Login
    }
]


// 解决：重复点击路由报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {  
    return originalPush.call(this, location).catch(err => err)
}



const router = new VueRouter({
    routes
})
Vue.use(VueRouter)
export default router
