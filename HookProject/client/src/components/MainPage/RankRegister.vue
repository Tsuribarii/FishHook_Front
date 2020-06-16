<template>
    <div class="container">
        <form v-on:submit.prevent="register">
          <h1 class="h3 mb-3 font-weight-normal" style="margin-bottom: 10%;">Rank Register</h1>
          <div class="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              v-model="name"
              class="form-control"
              name="name"
              readonly
            />
          </div>
          <div class="form-group">
            <label for="email">Location</label>
            <input
              type="text"
              v-model="location"
              class="form-control"
              name="location"
              placeholder="Enter location"
            />
          </div>
          <div class="form-group">
            <label for="tel">Length</label>
            <input
              type="text"
              v-model="length"
              class="form-control"
              name="length"
              placeholder="Enter length"
            />cm
          </div>
          <div class="form-group">
            <label for="tel">Fish name</label>
            <input
              type="text"
              v-model="fish_name"
              class="form-control"
              name="fish_name"
              placeholder="Enter length"
            />
          </div>
          <div class="form-group">
            <label for="tel">image</label>
            <img :src="image" />
          </div>
          <button type="submit" class="btn btn-lg btn-primary1 btn-block">Register!</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
import router from '../../router'

export default {
  data () {
    return {
      name: '',
      location: '',
      length: '',
      fish_name: '',
      image: ''
    }
  },
  created () {
    axios
      .get('/api/image')
      .then(response => {
        this.analyzes = response.data
        console.log(response.data)
      })
      .catch(err => {
        console.log(err)
      })
  },
  methods: {
    getUser () {
      return axios
        .get('/api/auth/profile', {
          headers: { Authorization: `Bearer ${localStorage.usertoken}` }
        })
        .then(res => {
          console.log(res.data)
          return res.data
        })
        .catch(err => {
          console.log(err)
        })
    },
    register () {
      axios
        .post('http://13.125.253.47/api/rank/store', {
          token: localStorage.usertoken,
          location: this.location,
          length: this.length
        })
        .then(res => {
          console.log(res)
          router.push({ name: 'Ranking' })
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
