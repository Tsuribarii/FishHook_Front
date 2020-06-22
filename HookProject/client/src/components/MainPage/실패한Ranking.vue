<template>
  <div class="container" style="margin-top:2%;  font-family: 'Nanum Gothic', sans-serif;">
    <div style="margin-left:27%;">
      <!-- Tab -->
      <div class="col" style="margin-left:5%;">
        <div class="tabs" style="position:absolute; top:5%; right:75%;">
          <div
            class="tab"
            style="display:inline; font-size:1rem; margin-right:25%; top:5%;"
            v-for="(item, index) in items"
            :class="{ active: currentTab === index }"
            @click="currentTab = index"
            @change="$refs.table.setLimit($event.target.item)"
            :key="item"
          >{{ item }}</div>
        </div>
      </div>
      <!-- All -->
      <div v-show="currentTab === 0" class="row" style=" position:absolute; right:10%; top:28%;">
        <div>
          <!-- All -->
          <div>
            <table
              class="table"
              style="text-align:center; font-family: 'Nanum Gothic', sans-serif;"
            >
              <thead>
                <tr>
                  <th class="mobile_rank" scope="col" style="border:none" width="10%;">순위</th>
                  <th class="mobile_photo" scope="col" style="border:none" width="40%;">물고기</th>
                  <th class="mobile_length" scope="col" style="border:none" width="20%;">cm</th>
                  <th class="mobile_name" scope="col" style="border:none">이름</th>
                </tr>
              </thead>
              <tbody
                v-for="(rank, index) in rankData.data"
                :key="rank.id"
                :rankData="rankData[index]"
              >
                <tr>
                  <th scope="row" style="line-height:6rem;">{{ index + 1 }}</th>
                  <th>
                    <img class="mobile_photo_size" :src="rank.url" style="width:50%; height:3.8%;" />
                  </th>
                  <td style="line-height:6rem;">{{ rank.length }} cm</td>
                  <td style="line-height:6rem;">{{ rank.name }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!-- All -->
      </div>

      <!-- RockFish -->
      <div
        v-show="currentTab === 1"
        value="rockfish"
        class="row"
        style=" position:absolute; right:47%; top:31%;"
      >
        <div>
          <h5 style="color:#93c3f3;">볼락랭킹</h5>
          <table class="table" style="text-align:center; font-family: 'Nanum Gothic', sans-serif;">
            <thead>
              <tr>
                <th class="mobile_rank" scope="col" style="border:none" width="10%;">순위</th>
                <th class="mobile_photo" scope="col" style="border:none" width="40%;">물고기</th>
                <th class="mobile_length" scope="col" style="border:none" width="20%;">cm</th>
                <th class="mobile_name" scope="col" style="border:none">이름</th>
              </tr>
            </thead>
            <tbody
              v-for="(rank, index) in rankData.data"
              :key="rank.id"
              :rankData="rankData[index]"
            >
              <tr>
                <th scope="row" style="line-height:6rem;">{{ index + 1 }}</th>
                <th>
                  <img class="mobile_photo_size" :src="rank.url" style="width:50%; height:3.8%;" />
                </th>
                <td style="line-height:6rem;">{{ rank.length }} cm</td>
                <td style="line-height:6rem;">{{ rank.name }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <pagination
        :data="rankData"
        @pagination-change-page="getResults"
        class="justify-content-md-center"
        style="margin-top: 3%;"
      ></pagination>
      <!-- StripedBeakfish -->
      <div v-show="currentTab === 2" class="row" style=" position:absolute; right:47%; top:31%;">
        <div>
          <h5 style="color:#93c3f3;">돌돔랭킹</h5>
        </div>
      </div>

      <!-- RedSnapper -->
      <div v-show="currentTab === 3" class="row" style=" position:absolute; right:47%; top:31%;">
        <div>
          <h5 style="color:#93c3f3;">도미랭킹</h5>
        </div>
      </div>
    </div>
    <!-- currentTab 3 -->
  </div>
  <!-- 도미 -->

  <!-- container -->
</template>

<script>
import axios from "axios";

export default {
  props: ["rental"],
  data() {
    return {
      currentTab: 0,
      tab: null,
      items: ["All", "RockFish", "StripedBeakfish", "RedSnapper"],
      rankData: {}
    };
  },
  mounted() {
    this.getResults();
  },
  methods: {
    getResults(page = 1) {
      axios
        .get("/api/rank?page=" + page)
        .then(response => {
          this.rankData = response.data;
          console.log(this.rankData);
        })
        .catch(err => {
          console.log(err);
          console.log(err.response);
        });
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nanum+Gothic&family=Noto+Serif+KR:wght@300&display=swap");
.upload-btn-wrapper {
  position: relative;
  overflow: hidden;
  display: inline-block;
}

.UploadImg {
  border: 2px solid gray;
  color: gray;
  background-color: white;
  width: 17rem;
  height: 250px;
  padding: 8px 20px;
  border-radius: 8px;
  font-size: 20px;
  font-weight: bold;
}

.upload-btn-wrapper input[type="file"] {
  font-size: 100px;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
}

.tab:hover {
  color: #6185f3;
}

.scroll-area {
  position: relative;
  margin: auto;
  width: 400px;
  height: 400px;
}
</style>
