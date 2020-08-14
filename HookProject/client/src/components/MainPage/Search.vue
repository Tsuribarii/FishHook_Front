<template>
  <div>
    <div
      class="row"
      style=" margin-left: 12%; margin-bottom: 0.6%; font-family: 'Kosugi Maru', sans-serif;"
    >
      <div v-for="search in searchData.data" :key="search.id">
        <div
          class="card"
          style="width: 27rem; margin-left:2.3rem; margin-right:0.2rem; margin-bottom:1rem;"
        >
          <div class="card-header" style="background-color: #66b3ff; color:#66b3ff;">Featured</div>
          <div class="card-body">
            <h5 class="card-title" style="color:#000387;">
              <b>{{ search.place_name }}</b>
            </h5>
            <p class="card-text" style="height:50px;">
              {{ search.fishing_type }} &nbsp&nbsp&nbsp | &nbsp&nbsp&nbsp {{ search.people }}
              <br />
              <br />
              <span style="color: #66b3ff">{{ search.phone_number }}</span>
              <a
                v-bind:href="search.homepage"
                class="btn btn-primary2"
                style="float:right; margin-top: 0;"
              >Homepage</a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <pagination
      :data="searchData"
      @pagination-change-page="getResults"
      class="justify-content-md-center"
    ></pagination>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      searchData: {},
    };
  },
  mounted() {
    this.getResults();
  },
  methods: {
    getResults(page = 1) {
      axios
        .get("/api/fishing?page=" + page)
        .then((response) => {
          this.searchData = response.data;
          console.log(this.searchData);
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
@import url("https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Nanum+Gothic&family=Noto+Serif+KR:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css?family=Kosugi+Maru&display=swap");

@media screen and (min-width: 769px) {
  .bin {
    width: 18rem;
  }
}

@media screen and (max-width: 768px) {
  .bin {
    width: 15rem;
  }
}
</style>
