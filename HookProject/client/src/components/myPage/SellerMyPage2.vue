<template>
  <div class="container" style="margin-top:5%;">
    <div class="row">
      <div class="col">
        <UserImg></UserImg>
      </div>
      <!-- About, Check 선택 탭 -->
      <div class="col">
        <div class="tabs">
          <div
            class="tab"
            style="display:inline; font-size:1.3rem; margin-right:5%;"
            v-for="(item, index) in items"
            :class="{ active: currentTab === index }"
            @click="currentTab = index"
            :key="item"
          >
            {{ item }}
          </div>
        </div>
      </div>
      <!-- About -->
      <UserAbout class="col" v-show="currentTab === 0"></UserAbout>

      <!-- Check -->
      <div v-show="currentTab === 1">
        <vue-event-calendar :events="demoEvents"></vue-event-calendar>
      </div>
    </div>
  </div>
</template>

<script>
import UserImg from '@/components/myPage/UserImg'
import UserAbout from '@/components/myPage/UserAbout'

export default {
  components: {
    UserImg,
    UserAbout
  },
  data () {
    return {
      currentTab: 0,
      tab: null,
      items: ['about', 'check'],

      demoEvents: [
        {
          date: '2020/03/18', // Required
          title: '은빈이네 선박 AM10:30' // Required
        },
        {
          date: '2020/03/12',
          title: '든든한 선박 PM11:00',
          desc: 'description',
          customClass: 'disabled highlight' // Custom classes to an calendar cell
        }
      ]
    }
  }
}
</script>

<style>
.tab:hover {
  color: #6185f3;
}
</style>
