<template>
  <div class="container">
    <div class="row" style="margin-top:15%;">
      <h2 >Reservation</h2>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">사진</th>
          <th scope="col">배 이름</th>
          <th scope="col">업체 이름</th>
          <th scope="col">사진</th>
          <th scope="col">출발시간</th>
          <th scope="col">도착시간</th>
          <th scope="col">인수</th>
          <th scope="col">가격</th>
        </tr>
      </thead>
      <tbody v-for="ship in laravelData.data" :key="ship.id">
        <tr>
          <img :src="ship.ship_image" alt="">
          <td scope="row">
            <router-link
              :to="'/reser_view/' + ship.id"
            >{{ ship.name }}</router-link>
          </td>
          <td>{{ ship.owner_name }}</td>
          <td>{{ ship.ship_image }}</td>
          <td>{{ ship.departure_time }}:00</td>
          <td>{{ ship.arrival_time }}:00</td>
          <td>{{ ship.people }}명</td>
          <td>{{ ship.cost }}원</td>
        </tr>
      </tbody>
    </table>

    <pagination :data="laravelData" @pagination-change-page="getResults"></pagination>
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
