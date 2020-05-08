import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Register from '@/components/Register'
import UserMyPage2 from '@/components/myPage/UserMyPage2'
import SellerMyPage2 from '@/components/myPage/SellerMyPage2'
import Information from '@/components/MainPage/Information'
import Info_re from '@/components/MainPage/InformationResult'
import Store from '@/components/MainPage/Store'
import Reservation from '@/components/MainPage/Reservation'
import Ranking from '@/components/MainPage/Ranking'
import Community from '@/components/MainPage/Community'
import Edit from '@/components/MainPage/Community/Edit'
import View from '@/components/MainPage/Community/View'
import Create from '@/components/MainPage/Community/Create'
import Camera from '@/components/MainPage/Camera'
import Profile from '@/components/Profile'
import UserMypage from '@/components/UserMyPage'
import SellerMypage from '@/components/SellerMyPage'

Vue.use(Router)

const isToken = (to, from, next) => {
  if (localStorage.getItem('userToken')) {
  }
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Information
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/usermypage2',
      name: 'UserMyPage2',
      component: UserMyPage2
    },
    {
      path: '/sellermypage2',
      name: 'SellerMyPage2',
      component: SellerMyPage2
    },
    {
      path: '/information',
      name: 'information',
      component: Information
    },
    {
      path: '/info_re',
      name: 'info_re',
      component: Info_re
    },
    {
      path: '/store',
      name: 'store',
      component: Store
    },
    {
      path: '/ranking',
      name: 'ranking',
      component: Ranking
    },
    {
      path: '/reservation',
      name: 'reservation',
      component: Reservation
    },
    {
      path: '/community',
      name: 'community',
      component: Community
    },
    {
      path: '/create',
      name: 'create',
      component: Create
    },
    {
      path: '/view',
      name: 'view',
      component: View
    },
    {
      path: '/edit',
      name: 'edit',
      component: Edit
    },
    {
      path: '/camera',
      name: 'camera',
      component: Camera
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/usermypage',
      name: 'usermypage',
      component: UserMypage
    },
    {
      path: '/sellermypage',
      name: 'sellermypage',
      component: SellerMypage
    }
  ]
})
