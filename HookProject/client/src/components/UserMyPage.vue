<template>
  <div class="container" style="margin-top:10%;">
    <!-- Tab -->
    <div class="col" style="margin-left:29%;">
      <div class="tabs">
        <div
          class="tab"
          style="display:inline; font-size:1.3rem; margin-right:5%;"
          v-for="(item, index) in items"
          :class="{ active: currentTab === index }"
          @click="currentTab = index"
          :key="item"
        >{{ item }}</div>
      </div>
    </div>
    <!-- 이미지업로드 -->
    <div class="row" style="width:28px; display:inline-block;">
      <div v-if="profile_photo='default.jpg'" class="upload-btn-wrapper">
        <button class="UploadImg">Upload Image</button>
        <input
          style="display:inline;"
          type="file"
          name="profile_photo"
          round
          class="change-profile-image"
          @change="imageChanged"
        />
      </div>
      <!-- 이미지업로드 끝 -->
      <div v-else>
        <img :src="profile_photo" width="382" height="460" />
      </div>
    </div>
    <!-- row -->
    <br />
    <div class="row" style="width:280px; display:inline-block;">
      <div>
        <b>Profile &nbsp;&nbsp; ─────────────</b>
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
        >
          <path
            fill-rule="evenodd"
            d="M8 16s6-5.686 6-10A6 6 0 002 6c0 4.314 6 10 6 10zm0-7a3 3 0 100-6 3 3 0 000 6z"
            clip-rule="evenodd"
          />
        </svg>

        <h4 style="color: #75A8F2; margin-left:3px; display:inline;">서울</h4>

        <button
          class="btn btn-primary1 pull-right"
          @click="update"
          style="display:inline-block;"
          v-show="currentTab === 0"
        >Update</button>
      </div>
    </div>
    <!-- div class row 끝 -->

    <!-- UserInfo -->
    <div v-show="currentTab === 0" class="row" style=" position:absolute; right:52%; top:27%;">
      <div style="margin-top:0;">
        <form>
          <!-- UserInfo -->
          <div>
            <h5 style="color:#93c3f3;">UserInformation</h5>

            <div class="form-group">
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
                placeholder="Password"
              />
            </div>
          </div>
          <!-- UserProf -->
          <div>
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
            <div class="form-group">
              <label for="tel">Role</label>
              <input
                type="text"
                v-model="roles"
                class="form-control"
                name="roles"
                placeholder="Role"
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
    <div v-show="currentTab === 1" class="row" style=" position:absolute; right:41%; top:27%;">
      <div class="row">
        <svg
          class="bi bi-calendar"
          color="#A6A6A6"
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
        <div style="color: #75A8F2; margin-left:4%; margin-right:4%;">3</div>
        <div style="color: #A6A6A6; margin-left:5%; margin-right:4%;">0</div>
        <div style="color: #A6A6A6; margin-left:7%; margin-right:4%;">2</div>
        <div style="color: #A6A6A6; margin-left:8%; margin-right:4%;">1</div>
      </div>

      <!-- 든아 여기얌 -->
      <div class="row" style=" position:absolute; right:1%; top:40%;">
        <!-- 예약된 선박 리스트 -->
        <!-- <UserRental v-for="rental in rentals" v-bind:key="rental.id"></UserRental> -->
        <div
          v-for="rental in rentals"
          v-bind:key="rental.id"
          :rental="rental"
          class="col-sm"
          style="margin-top:7%; margin-right:5%;"
        >
          <div class="row">
            <div style="background-color:grey;width:30rem; height:2.5rem; line-height:1.5rem;">
              <div class="row">
                <svg
                  class="bi bi-check-circle"
                  color="#FAFAFA"
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M15.354 2.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3-3a.5.5 0 11.708-.708L8 9.293l6.646-6.647a.5.5 0 01.708 0z"
                    clip-rule="evenodd"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M8 2.5A5.5 5.5 0 1013.5 8a.5.5 0 011 0 6.5 6.5 0 11-3.25-5.63.5.5 0 11-.5.865A5.472 5.472 0 008 2.5z"
                    clip-rule="evenodd"
                  />
                </svg>
                <h4 style="color: #FAFAFA; padding-top: 2%; margin-left:3px;">이용완료</h4>
              </div>
            </div>
          </div>
          <!-- 여기부터 No-->
          <div class="b" style="background-color:lightgrey; padding:1%;">
            <div style="padding-top:3%;">No. {{ rental.id }}</div>
            <div class="row" style="margin-top:2%; margin-bottom:2%;">
              <h1>{{ rental.ship_id }}</h1>
              <br />
              <svg
                class="bi bi-three-dots-vertical"
                color="#A6A6A6"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M9.5 13a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0-5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0-5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <hr />
            <div style="margin-top:2%; margin-bottom:2%;">
              <b style="color: #A6A6A6;">일정</b>
              &nbsp;&nbsp;
              <b>2020.03.25(수) {{ rental.departure_date }} AM11:00 {{ rental.ship_id }}</b>
            </div>
            <div style="margin-top:2%; margin-bottom:2%;">
              <b style="color: #A6A6A6;">업체</b>
              &nbsp;&nbsp;
              <b>은빈이네 선박</b>
            </div>
            <hr />
            <div style="margin-top:2%; margin-bottom:2%;">
              <b style="color: #A6A6A6;">결제금액</b>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <b
                style="color: #ED0000;"
              >60,000 so sad... {{ rental.ship_id }} 원</b>
            </div>
            <!-- 결제금액 -->
          </div>
          <!-- No 끝 -->
        </div>
        <!-- 예약된 선박 리스트 -->
      </div>
      <!-- 든아 여기얌 -->
    </div>
    <!-- currentTab 1 -->
  </div>
  <!-- container -->
</template>

<script>
import axios from 'axios'
import UserRental from '@/components/UserRental'

export default {
  components: {
    UserRental
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
      rentals: []
    }
  },
  created () {
    axios
      .get('/api/mycheck', {
        headers: { Authorization: `Bearer ${localStorage.usertoken}` }
      })
      .then(response => {
        // this.products = response.body
        // this.products = response
        this.rentals = response.data
        // console.log(response)
        console.log(response.data)
        // console.log(response.body)
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
          // console.log(res.data)
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
    }
  }
}
</script>

<style>
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
</style>
