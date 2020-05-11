<template>
  <div class="container" style="margin-top: 10%;">
    <div class="row">
      <div class="col" style="margin-left:10%;">
        <!-- <img src="/static/deunfishing.png" id="top" width="60%" style="margin-top:1%; margin-right:0;" /> -->
        <img :src="ship.ship_image" id="top" width="60%" style="margin-top:1%; margin-right:0;" />
      </div>
      <div class="col">
        <h2>{{ ship.name }}</h2>
        <h2>{{ ship.owner_name }}</h2>
        <h2>{{ ship.location }}</h2>
        <h2>최대{{ ship.people }}명</h2>
        <h2>{{ ship.cost }}</h2>
        <h2>{{ ship.departure_time }}:00</h2>
        <h2>{{ ship.arrival_time }}:00</h2>
        <h2>{{ ship.business_time }}</h2>
        <h2>{{ ship.homepage }}</h2>
        <h4 style="color: grey;">승선할 날짜를 선택하세요</h4>
        <form v-on:submit.prevent="book">
          <label for="example-input">Choose a date</label>
          <b-input-group class="mb-3">
            <b-form-input
              id="example-input"
              v-model="ship.departure_date"
              type="text"
              placeholder="YYYY-MM-DD"
              autocomplete="off"
              style="width:50px;"
            ></b-form-input>
            <b-input-group-append>
              <b-form-datepicker
                v-model="ship.departure_date"
                button-only
                right
                locale="en-US"
                aria-controls="example-input"
                @context="onContext"
              ></b-form-datepicker>
            </b-input-group-append>
          </b-input-group>
          <div class="row form-group" style="margin-top: 2%;">
            <label for="email">인수</label>
            <input
              type="text"
              v-model="ship.people"
              class="form-control"
              name="people"
              placeholder="1"
              style="width: 10%;"
            />
            명
          </div>
          <button type="submit" class="btn btn-lg btn-primary1 btn-block">Reservation</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import router from '../../router'
import Datetime from 'vue-datetime'
import 'vue-datetime/dist/vue-datetime.css'

Vue.use(Datetime)

export default {
  created () {
    axios.get('/api/shipshow/' + this.$route.params.ship)
      .then(response => {
        this.ship = response.data
        console.log(response.data)
      })
      .catch(err => {
        console.log(err)
      })
  },
  data () {
    return {
      ship: {}
    }
  },
  methods: {
    book () {
      axios
        .post('/api/rentalstore', {
          headers: { Authorization: `Bearer ${localStorage.usertoken}` },
          departure_date: this.departure_date,
          number_of_people: this.ship.people,
          ship_id: this.ship.id
        })
        .then(res => {
          console.log(res)
          router.push({ name: 'Login' })
        })
        .catch(err => {
          console.log(err)
        })
    },
    onContext (ctx) {
      // The date formatted in the locale, or the `label-no-date-selected` string
      this.formatted = ctx.selectedFormatted
      // The following will be an empty string until a valid date is entered
      this.selected = ctx.selectedYMD
    }
  }
}
</script>
