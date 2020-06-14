<template>
  <div class="container" style="margin-top: 10%;">
    <div>
      <router-link
        :to="'/reservation'"
        tag="button"
        class="btn btn-lg btn-outline-secondary1"
      >선박대여</router-link>
    </div>

    <table class="table">
        <thead>
          <tr>
            <th scope="col">시간</th>
            <th scope="col">지역</th>
            <th scope="col">물때</th>
            <th scope="col">날씨</th>
          </tr>
        </thead>
        <tbody v-for="weather in weathers" v-bind:key="weather.id" :weather="weather">
          <tr>
            <td scope="row">{{ weather.time }}</td>
            <td>{{ weather.weather_status }}</td>
            <td>{{ weather.temperature }}</td>
            <td>{{ weather.wind_direction }}</td>
          </tr>
        </tbody>
      </table>
<!--     <div class="row">
      <svg
        class="bi bi-geo-alt"
        color="#75a8f2 "
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M8 16s6-5.686 6-10A6 6 0 002 6c0 4.314 6 10 6 10zm0-7a3 3 0 100-6 3 3 0 000 6z"
          clip-rule="evenodd"
        />
      </svg>
      <h4 style="color: #75A8F2; padding-top: 10%; margin-left:3px;">속초</h4>
      <button
        class="btn btn-sm btn-outline-secondary1"
        style="width:90px; height:50px;"
      >
        선박 대여
      </button>
      <svg
        class="bi bi-chevron-right"
        color="#75A8F2"
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M4.646 1.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L10.293 8 4.646 2.354a.5.5 0 010-.708z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
    <hr />
    <p>2020년 03월 25일 수요일</p>
    <p>기준 06:00</p>
    <hr />
    <div class="row">
      <div>
        <img
          src="/static/cloudy.png"
          id="top"
          width="15%"
          style="margin-top:1%;"
        />
        <div>12˚C</div>
      </div>
      <p>최저 10˚</p>
      <p>최고 17˚</p>
      <p>파고 0.5m</p>
      <p>풍속 남남동풍 2m/s</p>
      <hr
        style="border: none; border-left: 1px solid hsla(200, 10%, 50%,100); height: 30vh; width: 1px;"
      />
      <img
        src="/static/info_re2.png"
        id="top"
        width="20%"
        style="margin-top:1%;"
      />
      <p>물때 / 물흐름</p>
      <div>
        <h3>9물 /</h3>
        <div style="width: 4%; height: 10px; background-color: ##75A8F2;">
          MAX
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: ['tide', 'weather'],
  data () {
    return {
      location: '',
      tides: [],
      weathers: []
    }
  },
  created () {
    axios.get('/api/tide/' + this.$route.params.tide)
      .then(response => {
        this.tides = response.data[0]
        this.weathers = response.data[1]
        console.log(response.data[0])
        console.log(response.data[1])
      })
      .catch(err => {
        console.log(err)
      })
  },
  methods: {

  }
}
</script>
