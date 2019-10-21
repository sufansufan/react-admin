import React from 'react'
import { Redirect } from 'react-router-dom';
import { Login } from './modules/login';
import { Dashboard } from "./modules/dashboard";
import BlankLayout from '../layouts/BlankLayout';
import HomeLayout from "../layouts/HomeLayout";

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
            component: Login
          }
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
            component: Dashboard
          }
        ]
      },

    ]
  }
]
