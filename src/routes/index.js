import React from 'react'
import { Redirect } from 'react-router-dom';
import BlankLayout from '../layouts/BlankLayout';
import HomeLayout from "../layouts/HomeLayout";
import { Login } from './modules/login';
import { Dashboard } from "./modules/dashboard";
import { Community } from "./modules/community"
import NotFound from "../components/NotFound";

export default [
  {
    component: BlankLayout,
    routes: [
      {
        path: '/user',
        component: BlankLayout,
        routes: [
          {
            path: '/user/login',
            exact: true,
            key: 'login',
            title: '登录',
            component: Login
          },
        ]
      },
      {
        path: '/',
        component: HomeLayout,
        routes: [
          {
            path: "/",
            exact: true,
            render: () => <Redirect to={"/dashboard"} />
          },
          {
            path: '/dashboard',
            title: '仪表盘',
            component: Dashboard
          },
          {
            component: BlankLayout,
            title: '用户管理',
            routes:[
              {
                path: '/community',
                title: '社区管理',
                component: Community
              }
            ]
          },
          {
            path: '/404',
            component: NotFound
          }
        ]
      },
    ]
  },
]
