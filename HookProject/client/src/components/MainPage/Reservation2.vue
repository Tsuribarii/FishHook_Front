<template>
  <div class="container" style="margin-top: 3%; font-family: 'Kosugi Maru', sans-serif;">
    <div class="row">
      <div class="col" style="margin-left:10%;">
        <img
          :src="ship.ship_image"
          id="top"
          width="90%"
          style="margin-top:1%; margin-right:0; margin-bottom: 3%;"
        />
      </div>
      <div
        class="card"
        style="width: 27rem; margin-left:2.3rem; margin-right:0.2rem; margin-bottom:1rem;"
      >
        <div class="card-header" style="background-color: #66b3ff; color: white;">
          <b>予約</b>
        </div>
        <div class="card-body">
          <div class="card-title" style=" font-size:1.3rem;">
            <span style="color:#000387; font-weight:800;">{{ ship.name }}</span>
            &nbsp;
            <span
              style="color : #66b3ff;"
            >{{ ship.cost }}円</span>
          </div>
          <div
            class="card-sub-title"
          >{{ ship.owner_name }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {{ ship.departure_time }}:00 ~ {{ ship.arrival_time }}:00</div>
          <form v-on:submit.prevent="book" style="margin-top: 8.5%;">
            <label for="example-input">日</label>
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
            <div class="form-group" style="margin-top: 2%;">
              <label for="text">人数</label>
              <div class="row">
                <input
                  type="text"
                  v-model="ship.people"
                  class="form-control"
                  name="people"
                  placeholder="1"
                  style="width: 10%; margin-left: 3%;"
                />
                人
              </div>
            </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button
              type="submit"
              class="btn btn-lg btn-primary2"
            >予約する</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import router from "../../router";
import Datetime from "vue-datetime";
import "vue-datetime/dist/vue-datetime.css";

Vue.use(Datetime);

export default {
  created() {
    axios
      .get("/api/shipshow/" + this.$route.params.ship)
      .then((response) => {
        this.ship = response.data;
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  data() {
    return {
      ship: {},
    };
  },
  methods: {
    book() {
      axios
        .post("http://15.165.203.24/api/rentalstore", {
          token: localStorage.usertoken,
          departure_date: this.ship.departure_date,
          number_of_people: this.ship.people,
          ship_id: this.ship.id,
        })
        .then((res) => {
          console.log(res);
          router.push({ name: "Usermypage" });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    onContext(ctx) {
      // The date formatted in the locale, or the `label-no-date-selected` string
      this.formatted = ctx.selectedFormatted;
      // The following will be an empty string until a valid date is entered
      this.selected = ctx.selectedYMD;
    },
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Nanum+Gothic&family=Noto+Serif+KR:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css?family=Kosugi+Maru&display=swap");
</style>
