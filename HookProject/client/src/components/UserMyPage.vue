<template>
  <div class="container" style="margin-top:3%;  font-family: 'Nanum Gothic', sans-serif;">
    <div style="margin-left:27%;">
    <!-- Tab -->
    <div class="col" style="margin-left:29%;">

      <div class="tabs" style="position:absolute; top:27%; right:75%;">
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
      </div> -->
      <!-- 이미지업로드 끝 -->
      <div>
        <img :src="profile_photo" width="270" height="360" />
      </div>
    </div>
    <!-- row -->
    <br />
    <div class="row" style="width:280px; display:inline-block; margin-top: 0.5%;">
      <div>
        <b>Profile &nbsp;&nbsp;──────────────</b>
      </div>
    </div>
    <br />
    <!-- div class row 끝 -->
    <div class="row" style="width:280px; display:inline-block;">
      <div>
        <!-- 유저이름 -->

        <h1 style="display:inline">{{ name }}</h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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

        <h4 style="color: #75A8F2; margin-left:3px; display:inline;">서울</h4>

        <button
          class="btn btn-outline-secondary1 pull-right"
          @click="update"
          style="display:inline-block; margin-top:10%; width:17rem;"
          v-show="currentTab === 0"
        >Update</button>
      </div>
    </div>
    <!-- div class row 끝 -->

    <!-- UserInfo -->
    <div v-show="currentTab === 0" class="row" style=" position:absolute; right:37%; top:31%;">
      <div style="margin-top:0;">
        <form>
          <!-- UserInfo -->
          <div>
            <h5 style="color:#93c3f3;">UserInformation</h5>
            <div class="form-group" >
              <label for="email">Email address</label>
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
              <label for="password">Password</label>
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
            <br>
            <h5 style="color:#93c3f3;">UserProfile</h5>
            <div class="form-group">
              <label for="name">Name</label>
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
              <label for="tel">Role</label>
              <input
                type="text"
                class="form-control"
                name="roles"
                placeholder="일반유저"
                readonly
              />
            </div>
            <!-- <div class="form-group">
              <label for="name">Introduce</label>
              <input
                type="text"
                v-model="name"
                class="form-control"
                name="name"
                placeholder="Enter your name"
              />
            </div>-->
          </div>
        </form>
      </div>
      <!-- UserInfo -->
    </div>

    <!-- Check -->
    <div v-show="currentTab === 1" class="row" style=" position:absolute; right:28%; top:27%;">
      <!-- <div class="row">
        <svg
          class="bi bi-calendar"
          color="#75A8F2"
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M14 0H2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"
            clip-rule="evenodd"
          />
          <path
            fill-rule="evenodd"
            d="M6.5 7a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm-9 3a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm-9 3a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2z"
            clip-rule="evenodd"
          />
        </svg>
        <h4 style="color: #75A8F2; padding-top: 0.5%; margin-left:3px; margin-right:2%;">전체</h4>
        <svg
          class="bi bi-alarm"
          color="#A6A6A6"
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M8 15A6 6 0 108 3a6 6 0 000 12zm0 1A7 7 0 108 2a7 7 0 000 14z"
            clip-rule="evenodd"
          />
          <path
            fill-rule="evenodd"
            d="M8 4.5a.5.5 0 01.5.5v4a.5.5 0 01-.053.224l-1.5 3a.5.5 0 11-.894-.448L7.5 8.882V5a.5.5 0 01.5-.5z"
            clip-rule="evenodd"
          />
          <path
            d="M.86 5.387A2.5 2.5 0 114.387 1.86 8.035 8.035 0 00.86 5.387zM11.613 1.86a2.5 2.5 0 113.527 3.527 8.035 8.035 0 00-3.527-3.527z"
          />
          <path
            fill-rule="evenodd"
            d="M11.646 14.146a.5.5 0 01.708 0l1 1a.5.5 0 01-.708.708l-1-1a.5.5 0 010-.708zm-7.292 0a.5.5 0 00-.708 0l-1 1a.5.5 0 00.708.708l1-1a.5.5 0 000-.708zM5.5.5A.5.5 0 016 0h4a.5.5 0 010 1H6a.5.5 0 01-.5-.5z"
            clip-rule="evenodd"
          />
          <path d="M7 1h2v2H7V1z" />
        </svg>
        <h4 style="color: #A6A6A6; padding-top: 0.5%; margin-left:3px; margin-right:2%;">이용예정</h4>
        <svg
          class="bi bi-card-checklist"
          color="#A6A6A6"
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M14.5 3h-13a.5.5 0 00-.5.5v9a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-9a.5.5 0 00-.5-.5zm-13-1A1.5 1.5 0 000 3.5v9A1.5 1.5 0 001.5 14h13a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0014.5 2h-13z"
            clip-rule="evenodd"
          />
          <path
            fill-rule="evenodd"
            d="M7 5.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zm-1.496-.854a.5.5 0 010 .708l-1.5 1.5a.5.5 0 01-.708 0l-.5-.5a.5.5 0 11.708-.708l.146.147 1.146-1.147a.5.5 0 01.708 0zM7 9.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zm-1.496-.854a.5.5 0 010 .708l-1.5 1.5a.5.5 0 01-.708 0l-.5-.5a.5.5 0 01.708-.708l.146.147 1.146-1.147a.5.5 0 01.708 0z"
            clip-rule="evenodd"
          />
        </svg>
        <h4 style="color: #A6A6A6; padding-top: 0.5%; margin-left:3px; margin-right:2%;">이용완료</h4>
        <svg
          class="bi bi-arrow-counterclockwise"
          color="#A6A6A6"
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M12.83 6.706a5 5 0 00-7.103-3.16.5.5 0 11-.454-.892A6 6 0 112.545 5.5a.5.5 0 11.91.417 5 5 0 109.375.789z"
            clip-rule="evenodd"
          />
          <path
            fill-rule="evenodd"
            d="M7.854.146a.5.5 0 00-.708 0l-2.5 2.5a.5.5 0 000 .708l2.5 2.5a.5.5 0 10.708-.708L5.707 3 7.854.854a.5.5 0 000-.708z"
            clip-rule="evenodd"
          />
        </svg>
        <h4 style="color: #A6A6A6; padding-top: 0.5%; margin-left:3px; margin-right:2%;">취소・환불</h4>
      </div>
      <div class="row">
        <div style="color: #75A8F2; margin-left:4%; margin-right:4%;">{{ all }}</div>
        <div style="color: #A6A6A6; margin-left:5%; margin-right:4%;">{{ reserve }}</div>
        <div style="color: #A6A6A6; margin-left:7%; margin-right:4%;">{{ complete }}</div>
        <div style="color: #A6A6A6; margin-left:8%; margin-right:4%;">{{ cancel }}</div>
      </div> -->

      <!-- 든아 여기얌 -->
      <div class="row" style=" position:absolute; right:1%; top:40%;">
        <!-- 예약된 선박 리스트 -->
        <vue-custom-scrollbar class="scroll-area" :settings="settings" @ps-scroll-y="scrollHanle"
        style="margin-top:5%;">
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
                  :footer="rental.cost + '원'"
                  footer-tag="footer"
                  :title="rental.name"
                  style="width:400px;"
                >
                  <b-card-text>{{ rental.owner_name }}<br /><b>{{ rental.departure_date }} AM{{ rental.departure_time }}:00</b></b-card-text>
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
import axios from 'axios'
import vueCustomScrollbar from 'vue-custom-scrollbar'

export default {
  components: {
    vueCustomScrollbar
  },
  props: ['rental'],
  data () {
    this.getUser().then(res => {
      this.name = res.user.name
      this.email = res.user.email
      this.password = res.user.password
      this.roles = res.user.roles
      this.profile_photo = res.user.profile_photo
      return res
    })
    return {
      currentTab: 0,
      tab: null,
      items: ['about', 'check'],
      name: '',
      email: '',
      password: '',
      roles: '',
      profile_photo: '',
      rentals: [],
      all: '',
      reserve: '',
      complete: '',
      cancel: '',
      settings: {
        maxScrollbarLength: 60
      }
    }
  },
  created () {
    axios
      .get('/api/mycheck', {
        headers: { Authorization: `Bearer ${localStorage.usertoken}` }
      })
      .then(response => {
        this.rentals = response.data
        console.log(response.data)
      })
      .catch(err => {
        console.log(err)
      })

    axios
      .get('/api/status', {
        headers: { Authorization: `Bearer ${localStorage.usertoken}` }
      })
      .then(response => {
        console.log(response.data)
        this.all = response.data.all
        this.reserve = response.data.reserve
        this.complete = response.data.complete
        this.cancel = response.data.cancel
      })
      .catch(err => {
        console.log(err)
      })
  },
  methods: {
    getUser () {
      return axios
        .get('/api/auth/profile', {
          headers: { Authorization: `Bearer ${localStorage.usertoken}` }
        })
        .then(res => {
          console.log(res.data)
          return res.data
        })
        .catch(err => {
          console.log(err)
        })
    },
    imageChanged (e) {
      console.log(e.target.files[0])
      var fileReader = new FileReader()
      fileReader.readAsDataURL(e.target.files[0])
      fileReader.onload = e => {
        this.user.profile_photo = e.target.result
      }
    },
    update () {
      this.$validator.updateDictionary({
        al: {
          attributes: {
            name: 'emri'
          }
        }
      })
      this.$validator.setLocale('al')

      this.$validator.validateAll().then(() => {
        axios
          .post('/api/myupdate', this.profile_photo)
          .then(response => {
            /* this.$router.push('/') */
            console.log(response)
          })
          .catch(err => {
            console.log(err.response)
          })
      })
    },
    scrollHanle (evt) {
      console.log(evt)
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic&family=Noto+Serif+KR:wght@300&display=swap');
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
