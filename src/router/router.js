import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    "history": createWebHashHistory(),
    routes: [
        // {
        //     path: '/',
        //     name: 'layout',
        //     component: () => import('../layout'),
        //     redirect: '/index',
        //     children: [
        //         {
        //             path: '/index',
        //             name: 'index',
        //             component: () => import('../pages/home')
        //         },
        //         {
        //             path: '/test',
        //             name: 'test',
        //             component: () => import('../pages/test')
        //         }
        //     ]
        // },
        {
            path: '/',
            redirect: '/index',
        },
        {
            path: '/index',
            name: 'index',
            component: () => import('pages/home')
        },
        {
            path: '/imgRelease',
            name: 'imgRelease',
            component: () => import('pages/imgRelease')
        }
        
    ]
})

export default router;