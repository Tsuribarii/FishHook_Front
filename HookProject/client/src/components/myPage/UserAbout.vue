<template>
  <div class="container" style="margin-top:10%;">
    <div class="row">
      <div class="col-md-6 mt-5 mx-auto">
        <form v-on:submit.prevent="register">
          <!-- UserInfo -->
          <div>
            <h5 style="color:#93c3f3;">UserInformation</h5>

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
          </div>
          <!-- UserProf -->

          <div>
            <h5 style="color:#93c3f3;">UserProfile</h5>
            <div class="form-group">
              <label for="name">Name</label>
              <input
                type="text"
                v-model="name"
                class="form-control"
                name="name"
                placeholder="your name"
              />
            </div>
            <div class="form-group">
              <label for="tel">Role</label>
              <input
                type="text"
                v-model="roles"
                class="form-control"
                name="roles"
                placeholder="Role"
              />
            </div>
            <!-- <div class="form-group">
              <label for="name">Introduce</label>
              <input
                type="text"
                v-model="name"
                class="form-control"
                name="name"
                placeholder="Enter your name"
              />
            </div>-->
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import swal from 'sweetalert'
import axios from 'axios'

export default {
  data () {
    this.getUser().then(res => {
      // console.log(res)
      this.name = res.user.name
      this.email = res.user.email
      this.password = res.user.password
      this.roles = res.user.roles
      console.log(this.id)
      return res
    })
    return {
      currentTab: 0,
      tab: null,
      items: ['about', 'check'],
      email: '',
      password: '',
      name: '',
      roles: ''
    }
  },
  methods: {
    getUser () {
      return axios
        .get('/api/myabout/', {
          headers: { Authorization: `Bearer ${localStorage.usertoken}` }
        })
        .then(res => {
          console.log(res.data)
          return res.data
        })
        .catch(err => {
          console.log(err)
          console.log(err.response)
        })
    },
    update () {
      if (!this.password) {
        swal(
          '??��?��?��?���?? 湲곗?��??��?��?��二쇱�???��?��?��',
          '??��?��?��?���?? 湲곗?��??��?��?��二쇱�???��?��?��',
          'error',
          {
            button: 'OK'
          }
        )
      } else {
        axios
          .post(
            '/api/myupdate/' + this.$route.params.product,
            this.product
          )
          .then(response => {
            swal('Updated!', 'Your product has been updated!', 'success')
          })
      }
    }
  }
}
</script>
