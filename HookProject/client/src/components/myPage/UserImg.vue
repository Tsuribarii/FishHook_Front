<template>
  <div class="container" style="margin-top:3%;">
    <div class="row">
      <!-- 이미지업로드 -->

      <div v-if="!userImage" class="upload-btn-wrapper">
        <button class="UploadImg">Upload Image</button>
        <input
          style="display:inline;"
          type="file"
          name="myfile"
          round
          class="change-profile-image"
          @change="onFileChange"
        />
      </div>
      <div v-else>
        <button
          class="delete-profile-image"
          color="secondary"
          icon="delete"
          @click="removeImage"
        >
          Delete
        </button>
      </div>
      <!-- 이미지업로드 끝 -->
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
        <h1>유저이름{{ name }}</h1>
        &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
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
export default {
  data() {
    this.getUser().then(res => {
      this.name = res.user.name;
      return res;
    });
    return {
      name: ""
    };
  },
  data: {
    userImage: ""
  },
  methods: {
    getUser() {
      return axios
        .get("http://13.125.253.47/api/profile", {
          headers: { Authorization: `Bearer ${localStorage.usertoken}` }
        })
        .then(res => {
          return res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) {
        return;
      }
      this.createImage(files[0]);
    },
    createImage(file) {
      var reader = new FileReader();
      var vm = this;

      reader.onload = e => {
        vm.userImage = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function(e) {
      this.userImage = "";
    },
    update() {
      //axios.defaults.headers.common['Authorization'] = 'Bearer ' + Vue.auth.getToken()
      axios
        .post("http://13.125.253.47/api/myupdate", {
          profile_photo: this.profile_photo
        })
        .then(res => {
          localStorage.setItem("usertoken", res.data.token);
          this.profile_photo = "";
          console.log(res);
        })
        .catch(err => {
          console.log(err);
          console.log(err.response);
        });
      this.emitMethod();
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
