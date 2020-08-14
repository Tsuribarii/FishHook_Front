<template>
  <div class="container">
    <div>
      <table class="table" style="text-align:center; font-family: 'Kosugi Maru', sans-serif;">
        <thead>
          <tr style="color:#66b3ff;">
            <th class="mobile_rank" scope="col" style="border:none" width="10%;">ランキング</th>
            <th class="mobile_photo" scope="col" style="border:none" width="40%;">魚の種類</th>
            <th class="mobile_length" scope="col" style="border:none" width="20%;">cm</th>
            <th class="mobile_name" scope="col" style="border:none">名前</th>
          </tr>
        </thead>
        <tbody v-for="(rank, index) in rankData.data" :key="rank.id" :rankData="rankData[index]">
          <tr style="color: #000387;">
            <th scope="row" style="line-height:6rem;">{{ index + 1 }}</th>
            <th>
              <img class="mobile_photo_size" :src="rank.url" style="width:50%; height:3.8%;" />
            </th>
            <th style="line-height:6rem;">{{ rank.length }} cm</th>
            <th style="line-height:6rem;">{{ rank.name }}</th>
          </tr>
        </tbody>
      </table>
    </div>

    <pagination
      :data="rankData"
      @pagination-change-page="getResults"
      class="justify-content-md-center"
      style="margin-top: 3%;"
    ></pagination>
    <!-- <div class="form-group" style="margin-top: 1%;">
      <router-link
        to="/camera"
        tag="button"
        class="btn btn-lg btn-outline-secondary1"
        style="position:absolute; top:85%; right:22%;"
        >Camera</router-link
      >
    </div>-->
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    this.getUser().then((res) => {
      this.name = res.user.name;
      this.email = res.user.email;
      this.password = res.user.password;
      return res;
    });

    return {
      name: "",
      email: "",
      password: "",
      rankData: {},
    };
  },
  created() {},
  mounted() {
    this.getResults();
  },
  methods: {
    getUser() {
      return axios
        .get("/api/auth/profile", {
          headers: { Authorization: `Bearer ${localStorage.usertoken}` },
        })
        .then((res) => {
          // console.log(res.data)
          return res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getResults(page = 1) {
      axios
        .get("/api/rank?page=" + page)
        .then((response) => {
          this.rankData = response.data;
          console.log(this.rankData);
        })
        .catch((err) => {
          console.log(err);
          console.log(err.response);
        });
    },
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Nanum+Gothic&family=Noto+Serif+KR:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css?family=Kosugi+Maru&display=swap");
@media screen and (min-width: 769px) {
  .mobileanata {
    display: none;
  }
}

@media screen and (max-width: 768px) {
  .mobile_rank {
    width: 16%;
  }
  .mobile_length {
    width: 30%;
  }
  .mobile_photo {
    width: 30%;
  }

  .mobile_photo_size {
    width: 100%;
  }
  .mobile_name {
    width: 30%;
  }
}
</style>
