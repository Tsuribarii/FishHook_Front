<template>
  <!-- <ul class="nav justify-content-center">
    <li class="nav-item" style="display:inline-block">
      <router-link to="/">
        <img src="/static/logo.png" width="9%;" alt />
      </router-link>
    </li>
  </ul> -->

<nav class="navbar navbar-expand-md sticky-top">
  <!-- One of the primary actions on mobile is to call a business - This displays a phone button on mobile only -->
  <div class="navbar-toggler-right">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>

  <div class="collapse navbar-collapse flex-column " id="navbar">

    <ul class="navbar-nav w-100 justify-content-center px-3">
      <li class="nav-item active">
        <router-link to="/" class="nav-link">
          <img src="/static/logo_mini.png" alt /><span class="sr-only">(current)</span>
        </router-link>
      </li>
    </ul>
    <div style="width:100%;"><hr></div>
    <ul class="navbar-nav justify-content-center w-100 px-3">
      <li v-if="auth == 'loggedin'" class="nav-item active" style="margin-right:3%;">
        <router-link class="nav-link" to="/community" style="color:#535353;">Community <span class="sr-only">(current)</span></router-link>
      </li>
      <li v-if="auth == 'loggedin'" class="nav-item active" style="margin-right:3%;">
        <router-link class="nav-link" to="/ranking" style="color:#535353;">Ranking <span class="sr-only">(current)</span></router-link>
      </li>
      <li class="nav-item active" style="margin-right:3%;">
        <router-link class="nav-link" to="/information" style="color:#535353;">Information <span class="sr-only">(current)</span></router-link>
      </li>
      <li class="nav-item active" style="margin-right:3%;">
        <router-link class="nav-link" to="/search" style="color:#535353;">Search <span class="sr-only">(current)</span></router-link>
      </li>
      <li class="nav-item active" style="margin-right:3%;">
        <router-link class="nav-link" to="/store" style="color:#535353;">Store <span class="sr-only">(current)</span></router-link>
      </li>
      <li v-if="auth == 'loggedin' && roles =='1'" class="nav-item active" style="margin-right:3%;">
        <router-link class="nav-link" to="/reservation" style="color:#535353;">Reservation <span class="sr-only">(current)</span></router-link>
      </li>
      <!-- 유저 마이페이지 -->
      <li v-if="auth == 'loggedin' && roles =='1'" class="nav-item active" style="margin-right:3%;">
        <router-link class="nav-link" to="/usermypage" style="color:#535353;">Mypage <span class="sr-only">(current)</span></router-link>
      </li>
      <!-- 판매자 마이페이지 -->
      <li v-if="auth == 'loggedin' && roles =='2'" class="nav-item active" style="margin-right:3%;">
        <router-link class="nav-link" to="/sellermypage" style="color:#535353;">Mypage <span class="sr-only">(current)</span></router-link>
      </li>
      <li v-if="auth == 'loggedin'" class="nav-item active" style="margin-right:3%;">
        <a class="nav-link" href v-on:click="logout" style="color:#535353;">Logout <span class="sr-only">(current)</span></a>
      </li>
      <li v-if="auth == ''" class="nav-item active" style="margin-right:3%;">
        <router-link class="nav-link" to="/login" style="color:#535353;">Login <span class="sr-only">(current)</span></router-link>
      </li>
      <li class="nav-item active" style="margin-right:3%; margin-top:0.01%;">
        <router-link class="nav-link" to="/term" style="color:#535353;">
          <svg class="bi bi-question" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.25 6.033h1.32c0-.781.458-1.384 1.36-1.384.685 0 1.313.343 1.313 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.007.463h1.307v-.355c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.326 0-2.786.647-2.754 2.533zm1.562 5.516c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
          </svg>
        </router-link>
      </li>
    </ul>
  </div>
</nav>

</template>

<script>
import EventBus from './EventBus'
import axios from 'axios'

EventBus.$on('logged-in', test => {
  console.log(test)
})

export default {
  data () {
    this.getUser().then(res => {
      this.roles = res.user.roles
      return res
    })
    return {
      auth: '',
      user: '',
      roles: ''
    }
  },
  methods: {
    logout () {
      localStorage.removeItem('usertoken')
      this.$router.push('/')
    },
    getUser () {
      return axios
        .get('/api/auth/profile', {
          headers: { Authorization: `Bearer ${localStorage.usertoken}` }
        })
        .then(res => {
          // console.log(res.data)
          return res.data
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  mounted () {
    EventBus.$on('logged-in', status => {
      this.auth = status
    })
  }
}
</script>
