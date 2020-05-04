<template>
  <div id="app">
    <navbar></navbar>
    <router-view />
    <bottom></bottom>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Bottom from "./components/Footer";

export default {
  name: "App",
  components: {
    navbar: Navbar,
    bottom: Bottom
  }
};
</script>

<style>
.btn-primary1 {
  background: #6185f3;
  color: white;
}

.btn-primary1:hover {
  background: white;
  border-color: #6185f3;
  color: #6185f3;
}

.btn-outline-secondary1 {
  border-color: #6185f3;
  color: #6185f3;
}

.btn-outline-secondary1:hover {
  background-color: #6185f3;
  color: white;
}

.btn-outline-secondary2 {
  border-color: #93c3f3;
  color: #black;
}

.btn-outline-secondary2:hover {
  background-color: #93c3f3;
  color: black;
}
</style>
