<template>
  <div class="container">
    <div class="row" style="margin-top: 2%; margin-left: 8%; margin-bottom: 3%; font-family: 'Nanum Gothic', sans-serif;, serif;">
      <div v-for="search in searchData.data" :key="search.id"  style="margin-left: 2%;">
        <b-card-group deck>
          <b-card
            :title="search.place_name"
            style="width:18rem;"
          >
            <b-card-text>{{ search.phone_number }}</b-card-text>
            <a
                v-bind:href="search.homepage"
                tag="button"
                class="btn btn-lg btn-outline-secondary1 btn-block"
              >Go homepage</a>
          </b-card>
        </b-card-group>
      </div>
    </div>
    <pagination :data="searchData" @pagination-change-page="getResults" class="justify-content-md-center"></pagination>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      searchData: {}
    }
  },
  mounted () {
    this.getResults()
  },
  methods: {
    getResults (page = 1) {
      axios.get('/api/fishing?page=' + page)
        .then(response => {
          this.searchData = response.data
          console.log(this.searchData)
        })
        .catch(err => {
          console.log(err)
          console.log(err.response)
        })
    }
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic&family=Noto+Serif+KR:wght@300&display=swap');
</style>
