import Vue from 'vue'
import Router from 'vue-router'
/* import Home from '@/components/Home' */
import Login from '@/components/Login'
import Register from '@/components/Register'
import Information from '@/components/MainPage/Information'
import InfoRe from '@/components/MainPage/InformationResult'
import Store from '@/components/MainPage/Store'
import Reservation from '@/components/MainPage/Reservation'
import Reservation2 from '@/components/MainPage/Reservation2'
import Ranking from '@/components/MainPage/Ranking'
import RankRegister from '@/components/MainPage/RankRegister'
import Community from '@/components/MainPage/Community'
import Edit from '@/components/MainPage/Community/Edit'
import View from '@/components/MainPage/Community/View'
import Create from '@/components/MainPage/Community/Create'
import Camera from '@/components/MainPage/Camera'
import Profile from '@/components/Profile'
import UserMypage from '@/components/UserMyPage'
import SellerMypage from '@/components/SellerMyPage'
import Search from '@/components/MainPage/Search'
import Approval from '@/components/MainPage/Approval'

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
      path: '/information',
      name: 'Information',
      component: Information
    },
    {
      path: '/info_re/:tide',
      name: 'InfoRe',
      component: InfoRe
    },
    {
      path: '/store',
      name: 'Store',
      component: Store
    },
    {
      path: '/ranking',
      name: 'Ranking',
      component: Ranking
    },
    {
      path: '/rankregister',
      name: 'Rankregister',
      component: RankRegister
    },
    {
      path: '/reservation',
      name: 'Reservation',
      component: Reservation
    },
    {
      path: '/reser_view/:ship',
      name: 'Reservation2',
      component: Reservation2
    },
    {
      path: '/community',
      name: 'Community',
      component: Community
    },
    {
      path: '/create',
      name: 'Create',
      component: Create
    },
    {
      path: '/view/:board',
      name: 'View',
      component: View
    },
    {
      path: '/edit',
      name: 'Edit',
      component: Edit
    },
    {
      path: '/camera',
      name: 'Camera',
      component: Camera
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/usermypage',
      name: 'Usermypage',
      component: UserMypage
    },
    {
      path: '/sellermypage',
      name: 'Sellermypage',
      component: SellerMypage
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/approval',
      name: 'Approval',
      component: Approval
    }
  ]
})
