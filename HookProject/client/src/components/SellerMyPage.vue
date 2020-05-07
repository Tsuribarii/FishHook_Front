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
        <b>Profile &nbsp&nbsp ─────────────</b>
      </div>
    </div>
    <br />
    <!-- div class row 끝 -->
    <div class="row" style="width:280px; display:inline-block;">
      <div>
        <!-- 유저이름 -->

        <h1 style="display:inline">{{ name }}</h1>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
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
    <div v-show="currentTab === 1" class="row" style=" position:absolute; right:30%; top:27%;">
      <vue-event-calendar :events="demoEvents"></vue-event-calendar>
    </div>
  </div>
  <!-- container -->
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    this.getUser().then(res => {
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
      demoEvents: [
        {
          date: "2020/03/18", // Required
          title: "은빈이네 선박 AM10:30" // Required
        },
        {
          date: "2020/03/12",
          title: "든든한 선박 PM11:00",
          desc: "description",
          customClass: "disabled highlight" // Custom classes to an calendar cell
        }
      ],
      name: "",
      email: "",
      password: "",
      roles: "",
      profile_photo: "",
    };
  },
  methods: {
    getUser() {
      return axios
        .get("/api/myabout", {
          headers: { Authorization: `Bearer ${localStorage.usertoken}` }
        })
        .then(res => {
          // console.log(res.data)
          return res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    imageChanged(e) {
      console.log(e.target.files[0]);
      var fileReader = new FileReader();
      fileReader.readAsDataURL(e.target.files[0]);
      fileReader.onload = e => {
        this.user.profile_photo = e.target.result;
      };
    },
    update() {
      this.$validator.updateDictionary({
        al: {
          attributes: {
            name: "emri"
          }
        }
      });
      this.$validator.setLocale("al");

      this.$validator.validateAll().then(() => {
        axios
          .post("http://13.125.253.47/api/myupdate", this.profile_photo)
          .then(response => {
            /* this.$router.push('/') */
            console.log(response);
          })
          .catch(err => {
            console.log(err.response);
          });
      });
    }
  }
};
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
