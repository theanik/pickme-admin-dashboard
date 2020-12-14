import Vue from 'vue'
import Router from 'vue-router'
import DashboardLayout from '@/layout/DashboardLayout'
import AuthLayout from '@/layout/AuthLayout'
Vue.use(Router)

export default new Router({
  mode: 'history',
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: 'login',
      component: AuthLayout,
      children: [
        {
          path: '/login',
          name: 'login',
          component: () => import(/* webpackChunkName: "demo" */ './views/Login.vue')
        },
        {
          path: '/register',
          name: 'register',
          component: () => import(/* webpackChunkName: "demo" */ './views/Register.vue')
        }
      ]
    },
    {
      path: '/',
      redirect: 'dashboard',
      component: DashboardLayout,
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "demo" */ './views/Dashboard.vue')
        },
        {
          path: '/icons',
          name: 'icons',
          component: () => import(/* webpackChunkName: "demo" */ './views/Icons.vue')
        },
        {
          path: '/profile',
          name: 'profile',
          component: () => import(/* webpackChunkName: "demo" */ './views/UserProfile.vue')
        },
        {
          path: '/maps',
          name: 'maps',
          component: () => import(/* webpackChunkName: "demo" */ './views/Maps.vue')
        },
        {
          path: '/tables',
          name: 'tables',
          component: () => import(/* webpackChunkName: "demo" */ './views/Tables.vue')
        },
        {
          path: '/employee',
          name: 'employee',
          component: () => import(/* webpackChunkName: "demo" */ './views/Employee.vue')
        },
        {
          path: '/admin',
          name: 'admin',
          component: () => import(/* webpackChunkName: "demo" */ './views/Admin.vue')
        },
        {
          path: '/driver',
          name: 'driver',
          component: () => import(/* webpackChunkName: "demo" */ './views/Driver.vue')
        },
        {
          path: '/user',
          name: 'user',
          component: () => import(/* webpackChunkName: "demo" */ './views/User.vue')
        },
        {
          path: '/vehicle',
          name: 'vehicle',
          component: () => import(/* webpackChunkName: "demo" */ './views/Vehicle.vue')
        },
        {
          path: '/region',
          name: 'region',
          component: () => import(/* webpackChunkName: "demo" */ './views/Region.vue')
        },
        {
          path: '/promocode',
          name: 'promocode',
          component: () => import(/* webpackChunkName: "demo" */ './views/Promocode.vue')
        },
        {
          path: '/usernotification',
          name: 'usernotification',
          component: () => import(/* webpackChunkName: "demo" */ './views/UserNotification.vue')
        },
        {
          path: '/drivernotification',
          name: 'drivernotification',
          component: () => import(/* webpackChunkName: "demo" */ './views/DriverNotification.vue')
        },
        {
          path: '/fare',
          name: 'fare',
          component: () => import(/* webpackChunkName: "demo" */ './views/Fare.vue')
        },
        {
          path: '/ridelog',
          name: 'ridelog',
          component: () => import(/* webpackChunkName: "demo" */ './views/RideLog.vue')
        },
        {
          path: '/ridecomplitelog',
          name: 'ridecomplitelog',
          component: () => import(/* webpackChunkName: "demo" */ './views/RideCompliteLog.vue')
        },

        {
          path: '/complaintype',
          name: 'complaintype',
          component: () => import(/* webpackChunkName: "demo" */ './views/ComplainType.vue')
        },
        {
          path: '/usercomplain',
          name: 'usercomplain',
          component: () => import(/* webpackChunkName: "demo" */ './views/UserComplain.vue')
        },
        {
          path: '/userwallet',
          name: 'userwallet',
          component: () => import(/* webpackChunkName: "demo" */ './views/UserWallet.vue')
        },
        {
          path: '/userrechargelog',
          name: 'userrechargelog',
          component: () => import(/* webpackChunkName: "demo" */ './views/UserRechargeLog.vue')
        },
        {
          path: '/driverearninfo',
          name: 'driverearninfo',
          component: () => import(/* webpackChunkName: "demo" */ './views/DriverBalance.vue')
        },
        {
          path: '/driverpaycheck',
          name: 'driverpaycheck',
          component: () => import(/* webpackChunkName: "demo" */ './views/DriverPayCheck.vue')
        },
        {
          path : '/paymentlog',
          name: 'paymentlog',
          component: () => import(/* webpackChunkName: "demo" */ './views/PaymentLog.vue')
        },
        
      ]
    },
    
  ]
})
