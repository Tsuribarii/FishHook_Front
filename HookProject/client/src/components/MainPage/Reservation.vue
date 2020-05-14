<template>
  <div class="container">
    <div class="row" style="margin-top: 7%; margin-bottom: 1%;">
      <!-- <h2 >Reservation</h2> -->
    </div>
    <div class="row" style="margin-left: 0.5%;">
      <div v-for="ship in laravelData.data" :key="ship.id">
        <b-card-group deck style="width: 90%;">
          <b-card
            :title="ship.name"
            :img-src="ship.ship_image"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 25rem;"
            class="mb-2"
          >
            <b-card-sub-title>
              {{ ship.owner_name}}
            </b-card-sub-title>
            <b-card-text>
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
      axios.get('api/shiplist?page=' + page)
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
