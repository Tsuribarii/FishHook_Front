<template>
  <div style="margin-top:3.8%;">
        <table class="table">
      <thead>
        <tr>
          <th scope="col">제목</th>
          <th scope="col">이름</th>
          <th scope="col">조회수</th>
        </tr>
      </thead>
      <tbody v-for="board in laravelData.data" :key="board.id">
        <tr>
          <td scope="row">
            <router-link
              :to="'/view/' + board.id"
            >{{ board.title }}</router-link>
          </td>
          <td>{{ board.name }}</td>
          <td>{{ board.hits }}</td>
        </tr>
      </tbody>
    </table>

    <pagination :data="laravelData" @pagination-change-page="getResults"></pagination>

    <div class="form-group" style="margin-top: 10%;">
      <router-link to="/create" tag="button" class="btn btn-lg btn-outline-secondary1">Create</router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      laravelData: {}
    }
  },
  mounted () {
    this.getResults()
  },
  methods: {
    getResults (page = 1) {
      axios.get('api/list?page=' + page)
        .then(response => {
          this.laravelData = response.data
          console.log(this.laravelData)
        })
        .catch(err => {
          console.log(err)
          console.log(err.response)
        })
    }
  }
}
</script>
