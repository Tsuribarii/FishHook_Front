<template>
  <div id="app">
    <navbar
    v-show="
        $route.path === '/login' ||
        $route.path === '/register'
          ? false
          : true
      "></navbar>
    <router-view />
    <bottom></bottom>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Bottom from './components/Footer'

export default {
  name: 'App',
  components: {
    navbar: Navbar,
    bottom: Bottom
  }
}
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

.btn-primary2 {
  background: #66b3ff;
  color: white;
}

.btn-primary2:hover {
  background: white;
  border-color: #66b3ff;
  color: #66b3ff;
}

.btn-primary3 {
  background: #91aae7;
  color: white;
}

.btn-primary3:hover {
  background: white;
  border-color: #91aae7;
  color: #91aae7;
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
  color: black;
}

.btn-outline-secondary2:hover {
  background-color: #93c3f3;
  color: black;
}

.view {
  color: black;
}
.view:visited {
  color: black;
  text-decoration: none;
}
.view:hover {
  color: #75A8F2;
  text-decoration: none;
}
</style>
