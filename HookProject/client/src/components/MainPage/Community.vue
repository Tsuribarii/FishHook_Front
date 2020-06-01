<template>
  <div class="container">
    <div style="margin-top:2%;">
      <table class="table" style="text-align:center; margin-bottom: 3%; font-family: 'Nanum Gothic', sans-serif;">
        <thead>
          <tr>
            <th scope="col" style="border:none">번호</th>
            <th scope="col" style="border:none">제목</th>
            <th scope="col" style="border:none">이름</th>
            <th scope="col" style="border:none">조회수</th>
          </tr>
        </thead>
        <tbody v-for="(board, index) in laravelData.data" :key="board.id" :laravelData="laravelData[index]">
          <tr>
            <th>{{ index + 1 }}</th>
            <td scope="row">
              <router-link
                :to="'/view/' + board.id"
                class="view"
              >{{ board.title }}</router-link>
            </td>
            <td>{{ board.name }}</td>
            <td>{{ board.hits }}</td>
          </tr>
        </tbody>
      </table>

      <pagination :data="laravelData" @pagination-change-page="getResults" class="justify-content-md-center"></pagination>

      <!-- <div class="form-group" style="margin-top: 10%;">
        <router-link to="/create" tag="button" class="btn btn-lg btn-outline-secondary1">Create</router-link>
      </div> -->
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
      axios.get('http://15.165.203.24/api/list?page=' + page)
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

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic&family=Noto+Serif+KR:wght@300&display=swap');
  .view {
    color: black;
  }
  .view:visited {
    color: black;
    text-decoration: none;
  }
  .view:hover {
    color: #75A8F2;
    text-decoration: none;
  }
</style>
