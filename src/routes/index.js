import { Login } from './modules/login';
import BlankLayout from '../layouts/BlankLayout';

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
      }
    ]
  }
]
