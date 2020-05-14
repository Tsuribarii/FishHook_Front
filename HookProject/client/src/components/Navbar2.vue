<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top" style="opacity: 0.9;">
    <button
    class="navbar-toggler"
      pe="button"
      da-toggle="collapse"
      da-target="#navbar1"
      ar-controls="navbar1"
      ar-expanded="false"
      ia-label="Toggle navigation"
    >
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="justify-content-center">
      <router-link to="/">
        <img src="/static/logo.png" width="9%;" alt />
      </router-link>
    </div>
    <div class="collapse navbar-collapse" id="navbar1">
    <ul class="navbar-nav ml-auto">
      <li v-if="auth == ''" class="nav-item">
        <router-link class="nav-link" to="/login">
            <svg
              class="bi bi-gear-fill"
              width="1.3em"
              height="1.3em"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 01-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 01.872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 012.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 012.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 01.872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 01-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 01-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 100-5.86 2.929 2.929 0 000 5.858z"
                clip-rule="evenodd"
              />
            </svg>
          </router-link>
        </li>
        <li v-if="auth == 'loggedin'" class="nav-item">
          <router-link class="nav-link" to="/">
            <svg
              class="bi bi-house-fill"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 3.293l6 6V13.5a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 012 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5z"
                clip-rule="evenodd"
              />
              <path
                fill-rule="evenodd"
                d="M7.293 1.5a1 1 0 011.414 0l6.647 6.646a.5.5 0 01-.708.708L8 2.207 1.354 8.854a.5.5 0 11-.708-.708L7.293 1.5z"
                clip-rule="evenodd"
              />
            </svg>
          </router-link>
        </li>
        <!-- 일반유저 -->
        <li v-if="auth == 'loggedin' && roles =='1'" class="nav-item">
          <router-link class="nav-link" to="/usermypage">
            <svg
              class="bi bi-person-fill"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 100-6 3 3 0 000 6z"
                clip-rule="evenodd"
              />
            </svg>
          </router-link>
        </li>
        <!-- 판매자 -->
        <li v-if="auth == 'loggedin' && roles =='2'" class="nav-item">
          <router-link class="nav-link" to="/sellermypage">
            <svg
              class="bi bi-person-fill"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 100-6 3 3 0 000 6z"
                clip-rule="evenodd"
              />
            </svg>
          </router-link>
        </li>

        <li v-if="auth == 'loggedin' && roles =='2'" class="nav-item">
          <router-link class="nav-link" to="/approval">
            <svg
              class="bi bi-bell-fill"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 16a2 2 0 002-2H6a2 2 0 002 2zm.995-14.901a1 1 0 10-1.99 0A5.002 5.002 0 003 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"
              />
            </svg>
          </router-link>
        </li>
        <li v-if="auth == 'loggedin'" class="nav-item">
          <a class="nav-link" href v-on:click="logout">
            <svg
              class="bi bi-unlock-fill"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M.5 9a2 2 0 012-2h7a2 2 0 012 2v5a2 2 0 01-2 2h-7a2 2 0 01-2-2V9z" />
              <path
                fill-rule="evenodd"
                d="M8.5 4a3.5 3.5 0 117 0v3h-1V4a2.5 2.5 0 00-5 0v3h-1V4z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </li>
      </ul>
    </div>
    <div class="collapse navbar-collapse" id="navbar1">
      <ul class="navbar-nav">
        <li v-if="auth == 'loggedin'" class="nav-item">
          <router-link class="nav-link" to="/community">Community</router-link>
        </li>
        <li v-if="auth == 'loggedin'" class="nav-item">
          <router-link class="nav-link" to="/ranking">Ranking</router-link>
        </li>
        <li v-if="auth == 'loggedin'" class="nav-item">
          <router-link class="nav-link" to="/information">Information</router-link>
        </li>
        <li v-if="auth == 'loggedin'" class="nav-item">
          <router-link class="nav-link" to="/store">Store</router-link>
        </li>
        <li v-if="auth == 'loggedin' && roles =='1'" class="nav-item">
          <router-link class="nav-link" to="/reservation">Reservation</router-link>
        </li>
        <li v-if="auth == 'loggedin' && roles =='2'" class="nav-item">
          <router-link class="nav-link" to="/approval">Approval</router-link>
        </li>
        <li v-if="auth == 'loggedin'" class="nav-item">
          <router-link class="nav-link" to="/search">Search</router-link>
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
