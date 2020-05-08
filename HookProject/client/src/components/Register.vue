<template>
  <div class="container" style="margin-top: 5%">
    <div class="row">
      <div class="col-md-6 mt-5 mx-auto">
        <form v-on:submit.prevent="register">
          <h1 class="h3 mb-3 font-weight-normal">Register</h1>
          <div class="custom-control custom-radio custom-control-inline">
            <input
              type="radio"
              id="1"
              name="1"
              class="custom-control-input"
              v-model="roles"
              :value="1"
            />
            <label class="custom-control-label" for="1">일반유저</label>
          </div>
          <div class="custom-control custom-radio custom-control-inline">
            <input
              type="radio"
              id="2"
              name="2"
              class="custom-control-input"
              v-model="roles"
              :value="2"
            />
            <label class="custom-control-label" for="2">판매자</label>
          </div>
          <div class="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              v-model="name"
              class="form-control"
              name="name"
              placeholder="Enter your first name"
            />
          </div>
          <div class="form-group">
            <label for="email">Email address</label>
            <input
              type="email"
              v-model="email"
              class="form-control"
              name="email"
              placeholder="Enter email"
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              v-model="password"
              class="form-control"
              name="password"
              placeholder="Password"
            />
          </div>
          <div class="form-group">
            <label for="tel">Phone</label>
            <input
              type="text"
              v-model="phone_number"
              class="form-control"
              name="phone_number"
              placeholder="Enter telephone"
            />
          </div>
          <button type="submit" class="btn btn-lg btn-primary1 btn-block">Register!</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import router from '../router'
export default {
  data () {
    return {
      roles: 1,
      name: '',
      email: '',
      password: '',
      phone_number: ''
    }
  },
  methods: {
    register () {
      axios
        .post('/api/auth/register', {
          roles: this.roles,
          name: this.name,
          email: this.email,
          password: this.password,
          phone_number: this.phone_number
        })
        .then(res => {
          console.log(res)
          router.push({ name: 'Login' })
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
