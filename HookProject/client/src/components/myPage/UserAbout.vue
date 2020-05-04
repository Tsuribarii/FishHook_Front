<template>
  <div class="container" style="margin-top:10%;">
    <div class="row">
      <div class="col-md-6 mt-5 mx-auto">
        <form v-on:submit.prevent="register">
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
                placeholder="Enter your first name"
              />
            </div>
            <div class="form-group">
              <label for="tel">Role</label>
              <input
                type="text"
                v-model="phone_number"
                class="form-control"
                name="phone_number"
                placeholder="Role"
              />
            </div>
            <div class="form-group">
              <label for="name">Introduce</label>
              <input
                type="text"
                v-model="name"
                class="form-control"
                name="name"
                placeholder="Enter your name"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import swal from "sweetalert";

export default {
  data() {
    return {
      currentTab: 0,
      tab: null,
      items: ["about", "check"],
      email: "",
      password: "",
      name: "",
      role: 1
    };
  },
  methods: {
    /* getUser() {
      return axios
        .get("http://13.125.253.47/api/myabout", {
          headers: { Authorization: `Bearer ${localStorage.usertoken}` }
        })
        .then(res => {
          return res.data;
        })
        .catch(err => {
          console.log(err);
        });
    }, */
    getUser() {
      return axios
        .get("http://13.125.253.47/api/profile/", {
          headers: { Authorization: `Bearer ${localStorage.usertoken}` }
        })
        .then(res => {
          EventBus.$emit("logged-in", "loggedin");
        })
        .catch(err => {
          console.log(err);
          console.log(err.response);
        });
    },
    update() {
      if (!this.password) {
        swal(
          "??��?��?��?���?? 湲곗?��??��?��?��二쇱�???��?��?��",
          "??��?��?��?���?? 湲곗?��??��?��?��二쇱�???��?��?��",
          "error",
          {
            button: "OK"
          }
        );
      } else {
        axios
          .post(
            "http://13.125.253.47/api/myupdate/" + this.$route.params.product,
            this.product
          )
          .then(response => {
            swal("Updated!", "Your product has been updated!", "success");
          });
      }
    }
  }
};
</script>
