<template>
  <div class="container">
    <div class="row">
      <table class="col table" style="text-align:center; font-family: 'Kosugi Maru', sans-serif;">
        <thead>
          <tr style="background-color: #91aae7; color: white;">
            <th style="text-align:left;">&nbsp;&nbsp;&nbsp;仁川潮見表</th>
            <th>&nbsp;</th>
          </tr>
          <tr style="color: #91aae7;">
            <th scope="col" style="border:none">
              <img src="/static/IRcalendar.png" style="width:5%;" />&nbsp; 日日
            </th>
            <th scope="col" style="border:none">
              <img src="/static/IRwave.png" style="width:7%;" />&nbsp; 潮見
            </th>
          </tr>
        </thead>
        <tbody v-for="tide in tides" v-bind:key="tide.id" :tide="tide">
          <tr style="color: #000387;">
            <th scope="row">8月 {{ tide.date }}日</th>
            <th>{{ tide.hide_tide }}</th>
          </tr>
        </tbody>
      </table>
      <div class="sayonara" style=" height:445px; overflow:hidden;">
        <table class="col table" style="text-align:center;">
          <thead>
            <tr style="background-color: #91aae7; color: #91aae7">
              <th colspan="4">물때표<-얘는css로없앨예정</th>
            </tr>
            <tr style="color: #91aae7;">
              <th scope="col" style="border:none">
                <img src="/static/IRtime.png" style="width:32%;" />&nbsp; 時刻
              </th>
              <th scope="col" style="border:none">
                <img src="/static/IRweather.png" style="width:32%;" />&nbsp; 天気
              </th>
              <th scope="col" style="border:none">
                <img src="/static/IRtemperature.png" style="width:32%;" />&nbsp; 気温
              </th>
              <th scope="col" style="border:none">
                <img src="/static/IRwind.png" style="width:32%;" />&nbsp; 風向
              </th>
            </tr>
          </thead>
          <tbody v-for="weather in weathers" v-bind:key="weather.id" :weather="weather">
            <tr style="color: #000387;">
              <th scope="row">{{ weather.time }}</th>
              <th>{{ weather.weather_status }}</th>
              <th>{{ weather.temperature }}</th>
              <th>{{ weather.wind_direction }}</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="anatamo" style="margin-left:85%">
      <router-link :to="'/reservation'" tag="button" class="btn btn-lg btn-primary3">船予約</router-link>
    </div>

    <div class="mobileanata">
      <router-link
        :to="'/reservation'"
        tag="button"
        class="btn btn-lg btn-outline-secondary1"
        style="float:right;"
      >선박대여</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["tide", "weather"],
  data() {
    return {
      location: "",
      weathers: [],
    };
  },
  created() {
    axios
      .get("/api/tide/" + this.$route.params.tide)
      .then((response) => {
        this.tides = response.data[0];
        this.weathers = response.data[1];
        console.log(response.data[0]);
        console.log(response.data[1]);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {},
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
  .sayonara {
    display: none;
  }
  .anatamo {
    display: none;
  }
}
</style>
