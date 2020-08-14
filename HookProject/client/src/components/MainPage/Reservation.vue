<template>
  <div class="container">
    <div class="row" style="margin-top: 5%; margin-bottom: 1%; ">
      <!-- <h2 >Reservation</h2> -->
    </div>
    <div class="row" style="margin-left: 3%; margin-bottom:3%;">
      <div v-for="ship in laravelData.data" :key="ship.id">
        <router-link class="view" :to="'/reser_view/' + ship.id">
          <b-card-group deck style="width: 90%;">
            <b-card
              class="card-img-top"
              :img-src="ship.ship_image"
              img-alt="Image"
              img-top
              tag="article"
              style="width:22rem; height:20rem; margin-bottom:3%; font-family: 'Kosugi Maru', sans-serif;"
            >
              <b-card-title
                :title="ship.name"
                style="font-family: 'Kosugi Maru', sans-serif; font-weight:800; color:#000387; font-size:1.2rem;"
              ></b-card-title>
              <b-card-sub-title style="font-family: 'Kosugi Maru', sans-serif;">{{ ship.owner_name}}</b-card-sub-title>
              <b-card-text style="font-family: 'Nanum Gothic', sans-serif;, serif;">
                {{ ship.departure_time }}:00 ~ {{ ship.arrival_time }}:00
                <p
                  style="color:#66b3ff;"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ ship.cost }}円</p>
              </b-card-text>
            </b-card>
          </b-card-group>
        </router-link>
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
@import url("https://fonts.googleapis.com/css2?family=Nanum+Gothic&family=Noto+Serif+KR:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css?family=Kosugi+Maru&display=swap");
.card-img-top {
  width: 100%;
  height: 10vw;
  object-fit: cover;
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
        .get("/api/shiplist?page=" + page)
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
