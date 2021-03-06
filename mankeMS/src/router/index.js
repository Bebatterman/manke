import Vue from 'vue';

// 1. 引入Vue-Router
import VueRouter from 'vue-router'


import Home from '@/pages/Home.vue'

import Manger from '../pages/Manger'
import ManagerList from '../pages/Manger/Manger.vue'
import ManagerEdit from '../pages/Manger/MEdit.vue'

import User from '../pages/user/Default.vue'
import UserList from '../pages/user/List.vue'
import UserEdit from '../pages/user/Edit.vue'

import Mine from '../pages/Mine.vue'
import Order from '../pages/Order/Order.vue'
import ordermenu from '../pages/Order/ordmenu.vue'
import ordstatus from '../pages/Order/ordstatus.vue'

import Login from '../pages/Login.vue'
import NotFound from '../pages/NotFound.vue'

// Goods的索引列表
import Goods from '../pages/goods/Default.vue'
import Goodslist from '../pages/goods/List.vue'
import GoodsParameter from '../pages/goods/Parameter.vue'
import GoodsSort from '../pages/goods/Sort.vue'
import GoodsEdit from '../pages/goods/Edit.vue'
import GoodsAdd from '../pages/goods/Add.vue'


// 2. 使用VueRouter
Vue.use(VueRouter)

// 3. 实例化并配置参数
const router = new VueRouter({
    mode:"hash",
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/home',
            component: Home,
            children: [
                {
                    path: '/manger',
                    component: Manger,
                    children: [
                        {
                            path: 'manger',
                            component: ManagerList
                        },
                        {
                            name: 'managerEdit',
                            path: 'medit/:id',
                            component: ManagerEdit
                        }
                    ]
                },
                {
                    path: '/user',
                    component: User,
                    children: [
                        {
                            path: '',
                            redirect: 'list'
                        }, {
                            path: 'List',
                            component: UserList
                        }, {
                            name: 'userEdit',
                            path: 'edit/:id',
                            component: UserEdit
                        }
                    ]
                },
                {
                    path: '/order',
                    component: Order,
                    children: [{
                        path: '',
                        redirect: 'ordermenu/'
                    }, {
                        path: 'ordstatus',
                        component: ordstatus
                    },
                    {
                        path: 'ordermenu/',
                        component: ordermenu
                    }]
                },
                {
                    path: '/goods',
                    component: Goods,
                    children: [
                        // 进入商品管理页面直接跳到商品列表
                        {
                            path: '',
                            redirect: 'list'
                        },
                        {
                            name: 'Goodslist',
                            path: 'list',
                            component: Goodslist
                        }, {
                            path: 'gparameter',
                            component: GoodsParameter
                        }, {
                            path: 'gkind:id',
                            component: GoodsSort
                        }, {
                            name:'goodsEdit',
                            path: 'edit/:id',
                            component: GoodsEdit
                        }, {
                            name: 'goodsAdd',
                            path: '/goods/add',
                            component: GoodsAdd
                        }
                    ]
                },
                {
                    path: '/mine',
                    component: Mine
                },
                {
                    path: '/404',
                    component: NotFound
                },
                {
                    path: '*',
                    redirect: '/404'
                }
            ]
        },
        {
            path: '/login',
            component: Login
        },
    ]
})
export default router;
