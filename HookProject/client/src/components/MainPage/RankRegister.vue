<template>
  <div class="container">
    <form v-on:submit.prevent="register">
      <h1 class="h3 mb-3 font-weight-normal" style="margin-bottom: 10%;">Rank Register</h1>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" v-model="name" class="form-control" name="name" readonly />
      </div>
      <div class="form-group">
        <label for="email">Location</label>
        <input
          type="text"
          v-model="location"
          class="form-control"
          name="location"
          placeholder="Enter location"
        />
      </div>
      <div class="form-group">
        <label for="tel">Length</label>
        <input
          type="text"
          v-model="length"
          class="form-control"
          name="length"
          placeholder="Enter length"
        />cm
      </div>
      <div class="form-group">
        <label for="tel">Analyzed Fish</label>
        <input
          type="text"
          v-model="fish_name"
          class="form-control"
          name="fish_name"
          placeholder="Enter length"
          readonly
        />
      </div>
      <div class="form-group">
        <label for="tel">image</label>
        <img :src="image" />
      </div>
      <button type="submit" class="btn btn-lg btn-primary1 btn-block">Register!</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import router from "../../router";

export default {
  data() {
    this.getUser().then(res => {
      this.name = res.user.name;
      return res;
    });
    return {
      name: "",
      location: "",
      length: "",
      fish_name: "",
      image: ""
    };
  },
  created() {
    axios
      .get("http://15.165.203.24/api/image")
      .then(response => {
        this.fish_name = response.data.fish_name;
        this.image = response.data.url;
        console.log(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    getUser() {
      return axios
        .get("http://15.165.203.24/api/auth/profile", {
          headers: { Authorization: `Bearer ${localStorage.usertoken}` }
        })
        .then(res => {
          console.log(res.data);
          return res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    register() {
      axios
        .post("http://15.165.203.24/api/rank/store", {
          token: localStorage.usertoken,
          location: this.location,
          length: this.length
        })
        .then(res => {
          console.log(res);
          router.push({ name: "Ranking" });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>