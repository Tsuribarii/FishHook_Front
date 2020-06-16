<template>
  <div class="container" style="margin-top:5%;">
    <div class="row">
      <!-- <div class="col">
        <UserImg></UserImg>
      </div> -->
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
          >{{ item }}</div>
        </div>
      </div>
      <!-- About -->
      <UserAbout class="col" v-show="currentTab === 0"></UserAbout>

      <!-- Check -->
      <div v-show="currentTab === 1">
        <!-- <div class="row">
          <h4 style="color: #75A8F2; padding-top: 0.5%; margin-left:3px; margin-right:2%;">전체</h4>
          <v-icon color="#A6A6A6">alarm_on</v-icon>
          <h4 style="color: #A6A6A6; padding-top: 0.5%; margin-left:3px; margin-right:2%;">이용예정</h4>
          <v-icon color="#A6A6A6">playlist_add_check</v-icon>
          <h4 style="color: #A6A6A6; padding-top: 0.5%; margin-left:3px; margin-right:2%;">이용완료</h4>
          <v-icon color="#A6A6A6">undo</v-icon>
          <h4 style="color: #A6A6A6; padding-top: 0.5%; margin-left:3px; margin-right:2%;">취소・환불</h4>
        </div> -->
        <div class="row">
          <div style="color: #75A8F2; margin-left:4%; margin-right:4%;">3</div>
          <div style="color: #A6A6A6; margin-left:5%; margin-right:4%;">0</div>
          <div style="color: #A6A6A6; margin-left:7%; margin-right:4%;">2</div>
          <div style="color: #A6A6A6; margin-left:8%; margin-right:4%;">1</div>
        </div>

        <div class="row">
          <!-- 예약된 선박 리스트 -->
          <!-- <div class="col-sm" style="margin-top:7%; margin-right:5%;">
            <div class="row">
              <div style="background-color:grey;width:30rem; height:2.5rem; line-height:1.5rem;">
                <div class="row">
                  <v-icon color="#FAFAFA">check_circle_outline</v-icon>
                  <h4 style="color: #FAFAFA; padding-top: 2%; margin-left:3px;">이용완료</h4>
                </div>
              </div>
            </div> -->
            <!-- 여기부터 No -->
            <!-- <div class="b" style="background-color:lightgrey; padding:1%;">
              <div style="padding-top:3%;">No. 45321564</div>
              <div class="row" style="margin-top:2%; margin-bottom:2%;">
                <h1>은빈호</h1>
                <v-spacer></v-spacer>
                <v-icon color="#A6A6A6">more_vert</v-icon>
              </div>
              <hr />
              <div style="margin-top:2%; margin-bottom:2%;">
                <b style="color: #A6A6A6;">일정</b>
                &nbsp&nbsp
                <b>2020.03.25(수) AM11:00</b>
              </div>
              <div style="margin-top:2%; margin-bottom:2%;">
                <b style="color: #A6A6A6;">업체</b>
                &nbsp&nbsp
                <b>은빈이네 선박</b>
              </div>
              <hr />
              <div style="margin-top:2%; margin-bottom:2%;">
                <b style="color: #A6A6A6;">결제금액</b>
                &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                <b style="color: #ED0000;">60,000원</b>
              </div>
            </div> -->
          </div>

          <!-- 예약된 선박 리스트 -->
          <!-- <div class="col-sm" style="margin-top:7%;">
            <div class="row">
              <div style="background-color:grey;width:30rem; height:2.5rem; line-height:1.5rem;">
                <div class="row">
                  <v-icon color="#FAFAFA">check_circle_outline</v-icon>
                  <h4 style="color: #FAFAFA; padding-top: 2%; margin-left:3px;">이용완료</h4>
                </div>
              </div>
            </div> -->
            <!-- 여기부터 No -->
            <!-- <div class="b" style="background-color:lightgrey; padding:1%;">
              <div style="padding-top:3%;">No. 45321564</div>
              <div class="row" style="margin-top:2%; margin-bottom:2%;">
                <h1>이든호</h1>
                <v-spacer></v-spacer>
                <v-icon color="#A6A6A6">more_vert</v-icon>
              </div>
              <hr />
              <div style="margin-top:2%; margin-bottom:2%;">
                <b style="color: #A6A6A6;">일정</b>
                &nbsp&nbsp
                <b>2020.03.25(수) AM11:00</b>
              </div>
              <div style="margin-top:2%; margin-bottom:2%;">
                <b style="color: #A6A6A6;">업체</b>
                &nbsp&nbsp
                <b>든든한 낚시</b>
              </div>
              <hr />
              <div style="margin-top:2%; margin-bottom:2%;">
                <b style="color: #A6A6A6;">결제금액</b>
                &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                <b style="color: #ED0000;">60,000원</b>
              </div>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import UserImg from '@/components/myPage/UserImg'
import UserAbout from '@/components/myPage/UserAbout'
import axios from 'axios'
import swal from 'sweetalert'

export default {
  components: {
    UserImg,
    UserAbout
  },
  data () {
    this.getUser().then(res => {
      // console.log(res)
      this.name = res.user.name
      this.email = res.user.email
      this.password = res.user.password
      this.roles = res.user.roles
      console.log(this.id)
      return res
    })
    return {
      currentTab: 0,
      tab: null,
      items: ['about', 'check'],
      email: '',
      password: '',
      name: '',
      roles: 1
    }
  },
  methods: {
    getUser () {
      return axios
        .get('/api/myabout/', {
          headers: { Authorization: `Bearer ${localStorage.usertoken}` }
        })
        .then(res => {
          console.log(res.data)
          return res.data
        })
        .catch(err => {
          console.log(err)
          console.log(err.response)
        })
    },
    update () {
      if (!this.password) {
        swal(
          '??��?��?��?���?? 湲곗?��??��?��?��二쇱�???��?��?��',
          '??��?��?��?���?? 湲곗?��??��?��?��二쇱�???��?��?��',
          'error',
          {
            button: 'OK'
          }
        )
      } else {
        axios
          .post(
            '/api/myupdate/' + this.$route.params.product,
            this.product
          )
          .then(response => {
            swal('Updated!', 'Your product has been updated!', 'success')
          })
      }
    }
  }
}
</script>

<style>
.tab:hover {
  color: #6185f3;
}
</style>
