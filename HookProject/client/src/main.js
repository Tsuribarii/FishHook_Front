// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import refresh from "./refresh";
/* import BootstrapVue from 'bootstrap-vue' */
import axios from "axios";
import VeeValidate from "vee-validate";
import Auth from "./packages/auth/Auth.js";
import cors from "cors";
/* import VueMqtt from 'vue-mqtt' */
import "vue-event-calendar/dist/style.css"; // ^1.1.10, CSS has been extracted as one file, so you can easily update it.
import vueEventCalendar from "vue-event-calendar";
import * as VueGoogleMaps from "vue2-google-maps";
import VueScrollTo from "vue-scrollto";
import Carousel3d from "vue-carousel-3d";
import VueGeolocation from "vue-browser-geolocation";
import "./registerServiceWorker";
import moment from "moment";
import VueCamera from "./components/MainPage/Camera.vue";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

/* require('../node_modules/bootstrap/dist/css/bootstrap.css')
require('../node_modules/bootstrap-vue/dist/bootstrap-vue.css') */

Vue.use(VueScrollTo, Carousel3d);
Vue.config.productionTip = false;
Vue.use(VueGeolocation);

Vue.use(vueEventCalendar, { locale: "ko" });
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyA_VoNXdL03NgSGkyvvigId9fSIIikcZII",
    language: "ja",
    libraries: "places" // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)

    // If you want to set the version, you can do so:
    // v: '3.26',
  }
  // If you intend to programmatically custom event listener code
  // (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
  // instead of going through Vue templates (e.g. `<GmapMap @zoom_changed='someFunc'>`)
  // you might need to turn this on.
  // autobindAllEvents: false,

  // If you want to manually install components, e.g.
  // import {GmapMarker} from 'vue2-google-maps/src/components/marker'
  // Vue.component('GmapMarker', GmapMarker)
  // then disable the following:
  // installComponents: true,
});

/* Vue.use(VueMqtt, 'ws://arominds.com:8883', {
  timeout: 3,
  username:'hyeonbin',
  password:'password',
}); */

Vue.use(Auth);
Vue.use(refresh);
/* Vue.use(BootstrapVue) */
Vue.use(VeeValidate);
Vue.use(cors);

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.component("pagination", require("laravel-vue-pagination"));
Vue.prototype.moment = moment;

Vue.config.productionTip = false;
const base = axios.create({
  baseURL: "http://52.78.187.234"
});
Vue.prototype.$http = base;

axios.defaults.headers.common["Content-Type"] =
  "application/x-www-form-urlencoded";

const plugin = {
  install(Vue) {
    Vue.component("VueCamera", VueCamera);
  }
};

export default VueCamera;

// Auto-install
let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  beforeCreate() {
    this.$refresh.checktoken();
  },
  components: {
    App
  },
  template: "<App/>"
});
