<template>
  <div class="container">
    <div class="row" style="margin-top:6%; margin-left: 8%;">
      <div v-for="search in searches" v-bind:key="search.id" :search="search" style="margin-left: 2%; margin-bottom: 2%;">
        <b-card-group deck></b-card-group>
          <b-card
            :header="search.place_name"
            header-tag="header"
            :title="search.place_name"
          >
            <b-card-text>Header and footers using props.</b-card-text>
            <a
                v-bind:href="search.homepage"
                tag="button"
                class="btn btn-lg btn-outline-secondary1 btn-block"
              >Go homepage</a>
          </b-card>
        </b-card-group>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: ['search'],
  data () {
    return {
      searches: []
    }
  },
  created () {
    axios
      .get('/api/fishing')
      .then(response => {
        this.searches = response.data
        console.log(response.data)
      })
      .catch(err => {
        console.log(err)
      })
  },
  methods: {
  }
}
</script>
