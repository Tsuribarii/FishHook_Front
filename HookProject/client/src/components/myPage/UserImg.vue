<template>
  <div class="container" style="margin-top:3%;">
    <div class="row">
      <!-- 이미지업로드 -->

      <div v-if="!profile_photo" class="upload-btn-wrapper">
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
    <!-- div class col 끝 -->

    <div class="row">
      <div>
        <b>Profile &nbsp&nbsp ─────────────</b>
      </div>
    </div>
    <!-- div class row 끝 -->
    <div class="row">
      <div>
        <!-- 유저이름 -->
        <h1>유저이름{{ name }}</h1>&nbsp&nbsp &nbsp&nbsp &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
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
        <h4 style="color: #75A8F2; padding-top: 4%; margin-left:3px;">서울</h4>
      </div>
    </div>
    <!-- div class row 끝 -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  data:function() {
    this.getUser().then(res => {
      this.name = res.user.name;
      this.profile_photo = res.user.profile_photo;
      return res;
    });
    return {
      name: "",
      profile_photo: ""
    };
  },
  data: {
    userImage: ""
  },
  methods: {
    getUser() {
      return axios
        .get("/api/myabout", {
          headers: { Authorization: `Bearer ${localStorage.usertoken}` }
        })
        .then(res => {
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
    create() {
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
    },
    emitMethod() {
      EventBus.$emit("logged-in", "loggedin");
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
</style>
