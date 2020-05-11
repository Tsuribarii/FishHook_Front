<template>
  <div class="row container">
    <div>
      <img src="/static/info_map.png" id="top" width="20%" style="margin-top:15%;" />
      <img
        id="bigpic"
        src="bigpic"
        width="15%"
        style="display:none;  z-index:10; position:absolute; top:15%;"
      />
    </div>

    <!-- 여기부터 첫째장 -->
    <div v-show="currentTab === 0" style="margin-top: 15%;">
      <!-- 첫째줄 -->
      <div class="btn-group" v-for="(tide, index) in tides"
        v-bind:key="tide.id"
        :tide="tide"
        :tides="tides[index]">
          <router-link
            :to="'/info_re/' + tide.id"
            tag="button"
            class="col-sm btn btn-lg btn-outline-secondary2"
          >{{ tide.location }}</router-link>
      </div>
      <!-- <div
        class="btn-group"
        v-for="(tide, index) in tides"
        v-bind:key="tide.id"
        :tide="tide"
        :tides="tides[index]"
      >
        <button
          class="col-sm btn btn-lg btn-outline-secondary2"
          v-on:click="InformationResult"
        >{{ tide.location }}</button>
        <div class="w-100"></div>
      </div> -->
    </div>

    <!-- 여기부터 둘째장 -->
    <!-- <div v-show="currentTab === 1">
      <div v-for="tide in tides" v-bind:key="tide.id" :tide="tide" class="row">
        <button class="btn btn-lg btn-outline-secondary2" style="width:10rem;">{{ tide.location }}</button>
      </div>
    </div>

    <div class="tabs" left color="#fafafa" style="margin-top:6%; margin-left:2%;">
      <div
        class="tab"
        v-for="(item, index) in items"
        :class="{ active: currentTab === index }"
        @click="currentTab = index"
        :key="item"
      >{{ item }}</div>
    </div> -->
    <!-- 전체 레이아웃 -->
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: ['tide'],
  data () {
    return {
      currentTab: 0,
      tab: null,
      items: ['←', '→'],
      location: '',
      tides: []
    }
  },
  created () {
    axios
      .post('/api/tide/index')
      .then(response => {
        this.tides = response.data
        console.log(response.data)
      })
      .catch(err => {
        console.log(err)
      })
  },
  methods: {
    /* InformationResult () {
      this.$router.push('/info_re')
    }, */
    picture () {
      var pic = '/static/map_first.png'
      document.getElementById('bigpic').src = pic.replace('90x90', '225x225')
      document.getElementById('bigpic').style.display = 'block'
    },
    original () {
      var org = '/static/info_map.png'
      document.getElementById('bigpic').src = org.replace('90x90', '225x225')
      document.getElementById('bigpic').style.display = 'block'
    }
  }
}
</script>
