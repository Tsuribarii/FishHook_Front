<template>
  <div>
    <h5
      class="nope"
      style="font-size:1.1rem; font-weight:bold; color:#000387; font-family: 'Kosugi Maru', sans-serif; margin-left:17.1rem; margin-bottom:2%;"
    >潮見表の地域リスト</h5>
    <h8
      class="immobile"
      style="margin-top:4%; text-align:center; font-family: 'Kosugi Maru', sans-serif;"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &rtrif;
      地域を選んでください &ltrif;
    </h8>

    <div class="row" style="margin-left: 11%;">
      <div v-for="tide in laravelData.data" :key="tide.id">
        <b-card-group deck>
          <div style="width: 28rem; margin-left:3.7rem; margin-bottom: 2rem;">
            <router-link class="view" :to="'/info_re/' + tide.id">
              <b-card :img-src="tide.image" img-alt="Image" img-top>
                <b-card-text>
                  <h4
                    style="font-size:1.1rem; font-weight:bold; color:#000387; font-family: 'Quicksand', sans-serif; margin-left:3%; height:0.1rem; line-height:0.1rem; padding-bottom:1px; "
                  >
                    {{ tide.location }} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 15°C &nbsp;
                    <img
                      style="width:6%; margin-left:7rem;"
                      src="/static/sun.png"
                    />
                  </h4>
                </b-card-text>
              </b-card>
            </router-link>
          </div>
        </b-card-group>
      </div>
    </div>
    <pagination
      :data="laravelData"
      @pagination-change-page="getResults"
      class="justify-content-md-center"
    ></pagination>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Slab:wght@100&family=Quicksand&family=Tangerine:wght@700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Nanum+Gothic&family=Noto+Serif+KR:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css?family=Kosugi+Maru&display=swap");
@media screen and (min-width: 769px) {
  .immobile {
    display: none;
  }
}

@media screen and (max-width: 768px) {
  .nope {
    display: none;
  }
  .immobile {
    display: visible;
  }
}

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

<script>
import axios from "axios";

export default {
  props: ["tide"],
  data() {
    return {
      location: "",
      tides: [],
      laravelData: {},
    };
  },
  mounted() {
    this.getResults();
  },
  methods: {
    getResults(page = 1) {
      axios
        .post("/api/tide/index?page=" + page)
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
