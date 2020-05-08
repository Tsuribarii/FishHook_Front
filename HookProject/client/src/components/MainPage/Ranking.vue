<template>
  <div class="container">
    <div style="margin-top:6%;">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">순위</th>
            <th scope="col">물고기 사진</th>
            <th scope="col">cm</th>
            <th scope="col">유저 프로필</th>
          </tr>
        </thead>
        <tbody v-for="(rank, index) in ranks" v-bind:key="rank.id" :rank="rank" :ranks="ranks[index]">
          <tr>
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ rank.photo }}</td>
            <td>{{ rank.length }} cm</td>
            <td>{{ rank.name }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="form-group" style="margin-top: 10%;">
      <router-link
        to="/camera"
        tag="button"
        class="btn btn-lg btn-outline-secondary1"
        >Camera</router-link
      >
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: ['rank'],
  data () {
    this.getUser().then(res => {
      this.name = res.user.name
      this.email = res.user.email
      this.password = res.user.password
      return res
    })

    return {
      name: '',
      email: '',
      password: '',
      ranks: []
    }
  },
  created () {
    axios
      .get('/api/rank')
      .then(response => {
        // this.products = response.body
        // this.products = response
        this.ranks = response.data
        // console.log(response)
        console.log(response.data)
        // console.log(response.body)
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
          // console.log(res.data)
          return res.data
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
