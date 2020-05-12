<template>
  <!-- <ul class="nav justify-content-center">
    <li class="nav-item" style="display:inline-block">
      <router-link to="/">
        <img src="/static/logo.png" width="9%;" alt />
      </router-link>
    </li>
  </ul> -->

  <ul class="nav justify-content-center">
    <li class="nav-item">
      <a class="nav-link active" href="#">Active</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#"><img src="/static/logo_mini.png" alt /></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">dd</a>
    </li>
  </ul>

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
