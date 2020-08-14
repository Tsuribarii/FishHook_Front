<template>
  <div class="container">
    <div>
      <table
        class="table"
        style="text-align:center; font-family: 'Kosugi Maru', sans-serif;margin-bottom: 1%; "
      >
        <thead>
          <tr style="color:#66b3ff;">
            <th scope="col" style="border:none">番号</th>
            <th scope="col" style="border:none">タイトル</th>
            <th scope="col" style="border:none">名前</th>
            <th scope="col" style="border:none">ビュー</th>
          </tr>
        </thead>
        <tbody
          v-for="(board, index) in laravelData.data"
          :key="board.id"
          :laravelData="laravelData[index]"
          style="color: #000387;"
        >
          <tr>
            <td>{{ index + 1 }}</td>
            <td scope="row">
              <router-link
                :to="'/view/' + board.id"
                class="view"
                style="color: #000387;"
              >{{ board.title }}</router-link>
            </td>
            <td>{{ board.name }}</td>
            <td>{{ board.hits }}</td>
          </tr>
        </tbody>
      </table>

      <pagination
        :data="laravelData"
        @pagination-change-page="getResults"
        class="justify-content-md-center"
      ></pagination>

      <!-- <div class="form-group" style="margin-top: 10%;">
        <router-link to="/create" tag="button" class="btn btn-lg btn-outline-secondary1">Create</router-link>
      </div>-->
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      laravelData: {},
    };
  },
  mounted() {
    this.getResults();
  },
  methods: {
    getResults(page = 1) {
      axios
        .get("/api/list?page=" + page)
        .then((response) => {
          this.laravelData = response.data;
          console.log(this.laravelData);
        })
        .catch((err) => {
          console.log(err);
          console.log(err.response);
        });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nanum+Gothic&family=Noto+Serif+KR:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css?family=Kosugi+Maru&display=swap");
.view {
  color: black;
}
.view:visited {
  color: black;
  text-decoration: none;
}
.view:hover {
  color: #75a8f2;
  text-decoration: none;
}
</style>
