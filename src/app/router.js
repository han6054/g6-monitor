import {createRouter, createWebHistory} from 'vue-router'

/* 路由 */
const routes = [
    {
        name: 'home',
        path: '/',
        meta: {
            title: 'Dashboard',
        },
        component: () => import('../views/index.vue'),
    }, 
    {
        name: 'global',
        path: '/global',
        meta: {
            title: '全局监控',
        },
        component: () => import('../views/monitor/global'),
    }, 
    // {
    //     name: 'server',
    //     path: '/server',
    //     meta: {
    //         title: '服务监控',
    //     },
    //     component: () => import('../views/monitor/server'),
    // },
    //  {
    //     name: 'user',
    //     path: '/user',
    //     meta: {
    //         title: '用户行为',
    //     },
    //     component: () => import('../views/monitor/user'),
    // },
    // {
    //     name: 'server/list',
    //     path: '/server-list',
    //     meta: {
    //         title: '服务管理',
    //     },
    //     component: () => import('../views/record/server-list'),
    // },
    // {
    //     name: 'user/list',
    //     path: '/user-list',
    //     meta: {
    //         title: '用户行为管理',
    //     },
    //     component: () => import('../views/record/user-list'),
    // },
];

const options = {
    history: createWebHistory(),
    routes,
};

export default createRouter(options);