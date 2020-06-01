<template>
  <div class="container">
    <div class="row" style="margin-top: 5%; margin-bottom: 1%; ">
      <!-- <h2 >Reservation</h2> -->
    </div>
    <div class="row" style="margin-left: 3%; margin-bottom:3%;">
      <div v-for="ship in laravelData.data" :key="ship.id">
        <b-card-group deck style="width: 90%;">
          <b-card
            class="card-img-top"
            :title="ship.name"
            :img-src="ship.ship_image"
            img-alt="Image"
            img-top
            tag="article"
            style="width:22rem; height:26rem; margin-bottom:3%; font-family: 'Nanum Gothic', sans-serif;, serif;"
          >
            <b-card-sub-title style="font-family: 'Nanum Gothic', sans-serif;, serif;">
              {{ ship.owner_name}}
            </b-card-sub-title>
            <b-card-text style="font-family: 'Nanum Gothic', sans-serif;, serif;">
              {{ ship.departure_time }}:00 ~ {{ ship.arrival_time }}:00<br />
              {{ ship.cost }}원
            </b-card-text>
            <router-link
              :to="'/reser_view/' + ship.id"
              tag="button"
              class="btn btn-lg btn-outline-secondary1 btn-block"
            >Reservation</router-link>
          </b-card>
        </b-card-group>
      </div>
    </div>
    <pagination :data="laravelData" @pagination-change-page="getResults" class="justify-content-md-center"></pagination>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic&family=Noto+Serif+KR:wght@300&display=swap');
.card-img-top {
    width: 100%;
    height: 10vw;
    object-fit: cover;
}
</style>

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
      axios.get('http://15.165.203.24/api/shiplist?page=' + page)
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
