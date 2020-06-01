<template>
  <div class="container" style="margin-top: 5%; margin-bottom: 20%;">
    <div class="row">
      <div class="col-md-5 mt-5 mx-auto">
        <form v-on:submit.prevent="login">
          <img
            src="/img/logo.png"
            width="30%;"
            style="display: block; margin: 0px auto; padding-bottom:7%;"
            alt
          />
          <div class="form-group" style="margin-top: 2%;">
            <!-- <label for="email">Email address</label> -->
            <input
              type="email"
              v-model="email"
              class="form-control"
              name="email"
              placeholder="Email"
            />
          </div>
          <div class="form-group">
            <!-- <label for="password">Password</label> -->
            <input
              type="password"
              v-model="password"
              class="form-control"
              name="password"
              placeholder="Password"
            />
          </div>

          <button type="submit" class="btn btn-lg btn-primary1 btn-block">Sign in</button>

          <div class="form-group row mb-1">
            <a href="#" class="find" style="margin-left: 37%; margin-top:3%;">Forgot Password?</a>
          </div>
        </form>
        <div class="form-group" style="margin-top: 10%;">
          <router-link
            to="/register"
            tag="button"
            class="btn btn-lg btn-outline-secondary1 btn-block"
          >Register</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import router from '../router'
import EventBus from './EventBus'

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      // axios.defaults.headers.common['Authorization'] = 'Bearer ' + Vue.auth.getToken()
      axios
        .post('http://15.165.203.24/api/auth/login', {
          email: this.email,
          password: this.password
        })
        .then(res => {
          localStorage.setItem('usertoken', res.data.token)
          this.email = ''
          this.password = ''
          router.push({ name: 'Home' })
          console.log(res)
        })
        .catch(err => {
          console.log(err)
          console.log(err.response)
        })
      this.emitMethod()
    },
    emitMethod () {
      EventBus.$emit('logged-in', 'loggedin')
    }
  }
}
</script>

<style>
.find {
  color: black;
}

.find:visited {
  color: black;
  text-decoration: none;
}

.find:hover {
  color: rgb(234, 119, 142);
  text-decoration: none;
}

.vl {
  border-left: 0.5px solid #eaeaea;
  height: 500px;
}
</style>
