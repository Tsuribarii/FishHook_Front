<template>
  <div class="container">
    <table class="table" style="margin-top:15%;">
      <thead>
        <tr>
          <th scope="col">이름</th>
          <th scope="col">위치</th>
          <th scope="col">전화번호</th>
          <th scope="col">홈페이지</th>
          <th scope="col">어종 사진</th>
          <th scope="col">가격</th>
        </tr>
      </thead>
      <tbody v-for="search in searches" v-bind:key="search.id" :search="search">
        <tr>
          <td scope="row">{{ search.place_name }}</td>
          <td>{{ search.location }}</td>
          <td>{{ search.phone_number }}</td>
          <td>{{ search.homepage }}</td>
          <td><img :src="search.main_fish_image[0]" alt=""></td>
          <td>{{ search.price }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: ['search'],
  data () {
    return {
      searches: []
    }
  },
  created () {
    axios
      .get('/api/fishing')
      .then(response => {
        this.searches = response.data
        console.log(response.data)
      })
      .catch(err => {
        console.log(err)
      })
  },
  methods: {
  }
}
</script>
