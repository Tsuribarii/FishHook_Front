<template>
  <div class="container">
    <div>
      <img
        src="/static/info_map.png"
        id="top"
        width="20%"
        style="margin-top:15%;"
      />
      <img
        id="bigpic"
        src="bigpic"
        width="15%"
        style="display:none;  z-index:10; position:absolute; top:15%;"
      />
    </div>
    <!-- 여기부터 첫째장 -->
    <div v-show="currentTab === 0">
      <!-- 첫째줄 -->
      <div class="row">
        <button
          @mouseover="picture"
          @mouseout="original"
          class="btn btn-lg btn-outline-secondary2"
          v-on:click="InformationResult"
        >
          인천 물때표
        </button>
        <button class="btn btn-lg btn-outline-secondary2">부산 물때표</button>
        <button class="btn btn-lg btn-outline-secondary2">울산 물때표</button>
      </div>

      <!-- 둘째줄 -->
      <div class="row">
        <button class="btn btn-lg btn-outline-secondary2">평택 물때표</button>
        <button class="btn btn-lg btn-outline-secondary2">후포 물때표</button>
        <button class="btn btn-lg btn-outline-secondary2">울릉도 물때표</button>
      </div>

      <!-- 셋째줄 -->
      <div class="row">
        <button class="btn btn-lg btn-outline-secondary2">보령 물때표</button>
        <button class="btn btn-lg btn-outline-secondary2">묵호 물때표</button>
        <button class="btn btn-lg btn-outline-secondary2">장항 물때표</button>
      </div>
    </div>

    <!-- 여기부터 둘째장 -->
    <div v-show="currentTab === 1">
      <!-- 2첫째줄 -->
      <div class="row" s>
        <button class="btn btn-lg btn-outline-secondary2">제주 물때표</button>
        <button class="btn btn-lg btn-outline-secondary2">성산포 물때표</button>
        <button class="btn btn-lg btn-outline-secondary2">서귀포 물때표</button>
      </div>

      <!-- 2둘째줄 -->
      <div class="row">
        <button class="btn btn-lg btn-outline-secondary2">영광 물때표</button>
        <button class="btn btn-lg btn-outline-secondary2">속초 물때표</button>
        <button class="btn btn-lg btn-outline-secondary2">목포 물때표</button>
      </div>

      <!-- 2셋째줄 -->
      <div class="row">
        <button class="btn btn-lg btn-outline-secondary2">흑산도 물때표</button>
        <button class="btn btn-lg btn-outline-secondary2">완도 물때표</button>
        <button class="btn btn-lg btn-outline-secondary2">거문도 물때표</button>
      </div>

      <!-- 2넷째줄 -->
      <div class="row">
        <button class="btn btn-lg btn-outline-secondary2">여수 물때표</button>
        <button class="btn btn-lg btn-outline-secondary2">모슬포 물때표</button>
        <button class="btn btn-lg btn-outline-secondary2">통영 물때표</button>
      </div>
    </div>

    <div
      class="tabs"
      left
      color="#fafafa"
      style="margin-top:6%; margin-left:2%;"
    >
      <div
        class="tab"
        v-for="(item, index) in items"
        :class="{ active: currentTab === index }"
        @click="currentTab = index"
        :key="item"
      >
        {{ item }}
      </div>
    </div>
    <!-- 전체 레이아웃 -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentTab: 0,
      tab: null,
      items: ["←", "→"]
    };
  },
  methods: {
    InformationResult() {
      this.$router.push("/info_re");
    },
    picture() {
      var pic = "/static/map_first.png";
      document.getElementById("bigpic").src = pic.replace("90x90", "225x225");
      document.getElementById("bigpic").style.display = "block";
    },
    original() {
      var org = "/static/info_map.png";
      document.getElementById("bigpic").src = org.replace("90x90", "225x225");
      document.getElementById("bigpic").style.display = "block";
    }
  }
};
</script>
