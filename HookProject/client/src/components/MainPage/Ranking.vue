<template>
  <div class="container">
    <div style="margin-top:2%;">
      <table class="table" style="text-align:center; font-family: 'Nanum Gothic', sans-serif;">
        <thead>
          <tr>
            <th scope="col" style="border:none">순위</th>
            <th scope="col" style="border:none">물고기 사진</th>
            <th scope="col" style="border:none">cm</th>
            <th scope="col" style="border:none">유저 이름</th>
          </tr>
        </thead>
        <tbody v-for="(rank, index) in rankData.data" :key="rank.id" :rankData="rankData[index]">
          <tr>
            <th scope="row" style="line-height:6rem;">{{ index + 1 }}</th>
            <th><img :src="rank.photo"  style="width:20%; padding:1%;"/></th>
            <td style="line-height:6rem;">{{ rank.length }} cm</td>
            <td style="line-height:6rem;">{{ rank.name }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <pagination :data="rankData" @pagination-change-page="getResults" class="justify-content-md-center" style="margin-top: 3%;"></pagination>
    <div class="form-group" style="margin-top: 1%;">
      <router-link
        to="/camera"
        tag="button"
        class="btn btn-lg btn-outline-secondary1"
        style="position:absolute; top:85%; right:22%;"
        >Camera</router-link
      >
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
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
      rankData: {}
    }
  },
  created () {
  },
  mounted () {
    this.getResults()
  },
  methods: {
    getUser () {
      return axios
        .get('http://15.165.203.24/api/auth/profile', {
          headers: { Authorization: `Bearer ${localStorage.usertoken}` }
        })
        .then(res => {
          // console.log(res.data)
          return res.data
        })
        .catch(err => {
          console.log(err)
        })
    },
    getResults (page = 1) {
      axios.get('http://15.165.203.24/api/rank?page=' + page)
        .then(response => {
          this.rankData = response.data
          console.log(this.rankData)
        })
        .catch(err => {
          console.log(err)
          console.log(err.response)
        })
    }
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic&family=Noto+Serif+KR:wght@300&display=swap');
</style>
