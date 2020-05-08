<template>
  <div class="container" style="margin-top: 10%;">
    <div class="row">
      <div id="app"></div>
      <div style="margin-left:10%;">
        <img src="/static/deunfishing.png" id="top" width="60%" style="margin-top:1%;" />
        <h2>든든한 낚시</h2>
        <h4 style="color: grey;">승선할 날짜를 선택하세요</h4>

        <datetime type="datetime" v-model="datetime12" use12-hour></datetime>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Datetime from 'vue-datetime'
import 'vue-datetime/dist/vue-datetime.css'

Vue.use(Datetime)

export default {
  data () {
    return {
      datetime12: '2018-05-12T17:19:06.151Z'
    }
  }
}
</script>
