<template>
  <div class="container" style="margin-top:1%;  font-family: 'Kosugi Maru', sans-serif;">
    <div style="margin-left:20%;">
      <!-- Tab -->
      <div class="col" style="margin-left:30%;">
        <div class="tabs" style="position:absolute; top:27%; right:85%;">
          <div
            class="tab"
            style="display:inline; font-size:1.3rem; margin-right:18%; top:25%;"
            v-for="(item, index) in items"
            :class="{ active: currentTab === index }"
            @click="currentTab = index"
            :key="item"
          >{{ item }}</div>
        </div>
      </div>
      <!-- 이미지업로드 -->
      <div class="row" style="width:28px; display:inline-block;">
        <!-- <div v-if="profile_photo='default.jpg'" class="upload-btn-wrapper">
        <button class="UploadImg">Upload Image</button>
        <input
          style="display:inline;"
          type="file"
          name="profile_photo"
          round
          class="change-profile-image"
          @change="imageChanged"
        />
        </div>-->
        <!-- 이미지업로드 끝 -->
        <div>
          <img :src="profile_photo" width="270" height="360" />
        </div>
      </div>
      <!-- row -->
      <br />
      <div class="row" style="width:280px; display:inline-block; margin-top: 0.5%;">
        <div>
          <b>
            プロフィール &nbsp;&nbsp;
            <p style="color: #66b3ff;">──────────────────</p>
          </b>
        </div>
      </div>
      <br />
      <!-- div class row 끝 -->
      <div class="row" style="width:280px; display:inline-block;">
        <div>
          <!-- 유저이름 -->

          <h2 style="display:inline">{{ name }}</h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <svg
            class="bi bi-geo-alt"
            color="#75a8f2"
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            style="padding-bottom:1%;"
          >
            <path
              fill-rule="evenodd"
              d="M8 16s6-5.686 6-10A6 6 0 002 6c0 4.314 6 10 6 10zm0-7a3 3 0 100-6 3 3 0 000 6z"
              clip-rule="evenodd"
            />
          </svg>

          <h4 style="color: #75A8F2; margin-left:3px; display:inline;">ソウル</h4>

          <button
            class="btn btn-outline-secondary1 pull-right"
            @click="update"
            style="display:inline-block; margin-top:10%; width:17rem;"
            v-show="currentTab === 0"
          >アップデート</button>
        </div>
      </div>
      <!-- div class row 끝 -->

      <!-- UserInfo -->
      <div v-show="currentTab === 0" class="row" style=" position:absolute; right:38.5%; top:40%;">
        <div style="margin-top:0;">
          <form>
            <!-- UserInfo -->
            <div>
              <h5 style="color:#93c3f3;">ユーザーインフォメーション</h5>
              <div class="form-group">
                <label for="email">メール</label>
                <input
                  type="email"
                  v-model="email"
                  class="form-control"
                  name="email"
                  placeholder="Enter email"
                  readonly
                />
              </div>
              <div class="form-group">
                <label for="password">パスワード</label>
                <input
                  type="password"
                  v-model="password"
                  class="form-control"
                  name="password"
                  placeholder="******"
                  readonly
                />
              </div>
            </div>
            <!-- UserProf -->
            <div>
              <br />
              <h5 style="color:#93c3f3;">ユーザーのプロフィール</h5>
              <div class="form-group">
                <label for="name">名前</label>
                <input
                  type="text"
                  v-model="name"
                  class="form-control"
                  name="name"
                  placeholder="your name"
                  readonly
                />
              </div>
              <div v-if="roles =='1'" class="form-group">
                <label for="tel">ロール</label>
                <input type="text" class="form-control" name="roles" placeholder="一般ユーザー" readonly />
              </div>
            </div>
          </form>
        </div>
        <!-- UserInfo -->
      </div>

      <!-- Check -->
      <div v-show="currentTab === 1" class="row" style=" position:absolute; right:32.8%; top:38%;">
        <!-- 든아 여기얌 -->
        <div class="row" style=" position:absolute; right:1%; top:40%;">
          <!-- 예약된 선박 리스트 -->
          <vue-custom-scrollbar
            class="scroll-area"
            :settings="settings"
            @ps-scroll-y="scrollHanle"
            style="margin-top:5%;"
          >
            <div
              v-for="rental in rentals"
              v-bind:key="rental.id"
              :rental="rental"
              class="col-sm"
              style="margin-top:7%; margin-right:3%;"
            >
              <div class="row">
                <b-card-group class="row" deck>
                  <b-card
                    :header="'No. ' + rental.id + ' ' + rental.status"
                    header-tag="header"
                    :footer="rental.cost + '円'"
                    footer-tag="footer"
                    :title="rental.name"
                    style="width:400px;"
                  >
                    <b-card-text>
                      {{ rental.owner_name }}
                      <br />
                      <b>{{ rental.departure_date }} AM{{ rental.departure_time }}:00</b>
                    </b-card-text>
                  </b-card>
                </b-card-group>
              </div>
              <!-- No 끝 -->
            </div>
            <!-- 예약된 선박 리스트 -->
          </vue-custom-scrollbar>
        </div>
        <!-- 든아 여기얌 -->
      </div>
    </div>
    <!-- currentTab 1 -->
  </div>
  <!-- container -->
</template>

<script>
import axios from "axios";
import vueCustomScrollbar from "vue-custom-scrollbar";

export default {
  components: {
    vueCustomScrollbar,
  },
  props: ["rental"],
  data() {
    this.getUser().then((res) => {
      this.name = res.user.name;
      this.email = res.user.email;
      this.password = res.user.password;
      this.roles = res.user.roles;
      this.profile_photo = res.user.profile_photo;
      return res;
    });
    return {
      currentTab: 0,
      tab: null,
      items: ["about", "check"],
      name: "",
      email: "",
      password: "",
      roles: "",
      profile_photo: "",
      rentals: [],
      all: "",
      reserve: "",
      complete: "",
      cancel: "",
      settings: {
        maxScrollbarLength: 60,
      },
    };
  },
  created() {
    axios
      .get("/api/mycheck", {
        headers: { Authorization: `Bearer ${localStorage.usertoken}` },
      })
      .then((response) => {
        this.rentals = response.data;
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("/api/status", {
        headers: { Authorization: `Bearer ${localStorage.usertoken}` },
      })
      .then((response) => {
        console.log(response.data);
        this.all = response.data.all;
        this.reserve = response.data.reserve;
        this.complete = response.data.complete;
        this.cancel = response.data.cancel;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    getUser() {
      return axios
        .get("/api/auth/profile", {
          headers: { Authorization: `Bearer ${localStorage.usertoken}` },
        })
        .then((res) => {
          console.log(res.data);
          return res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    imageChanged(e) {
      console.log(e.target.files[0]);
      var fileReader = new FileReader();
      fileReader.readAsDataURL(e.target.files[0]);
      fileReader.onload = (e) => {
        this.user.profile_photo = e.target.result;
      };
    },
    update() {
      this.$validator.updateDictionary({
        al: {
          attributes: {
            name: "emri",
          },
        },
      });
      this.$validator.setLocale("al");

      this.$validator.validateAll().then(() => {
        axios
          .post("/api/myupdate", this.profile_photo)
          .then((response) => {
            /* this.$router.push('/') */
            console.log(response);
          })
          .catch((err) => {
            console.log(err.response);
          });
      });
    },
    scrollHanle(evt) {
      console.log(evt);
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nanum+Gothic&family=Noto+Serif+KR:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css?family=Kosugi+Maru&display=swap");

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
