import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import refresh from './refresh'
import axios from 'axios'
import VeeValidate from 'vee-validate'
import cors from 'cors'
import 'vue-event-calendar/dist/style.css' // ^1.1.10, CSS has been extracted as one file, so you can easily update it.
import vueEventCalendar from 'vue-event-calendar'
import * as VueGoogleMaps from 'vue2-google-maps'
import VueScrollTo from 'vue-scrollto'
import VueGeolocation from 'vue-browser-geolocation'
import moment from 'moment'
import VueCamera from './components/MainPage/Camera.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(VueScrollTo)
Vue.use(VueGeolocation)
Vue.use(vueEventCalendar, { locale: 'ko' })
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyA_VoNXdL03NgSGkyvvigId9fSIIikcZII',
    libraries: 'places' // This is required if you use the Autocomplete plugin
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
})
Vue.use(refresh)
Vue.use(VeeValidate)
Vue.use(cors)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.component('pagination', require('laravel-vue-pagination'))
Vue.prototype.moment = moment
Vue.config.productionTip = false
const base = axios.create({
  baseURL: 'http://15.165.203.24'
})
Vue.prototype.$http = base
axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'
const plugin = {
  install (Vue) {
    Vue.component('VueCamera', VueCamera)
  }
}

export default VueCamera
// Auto-install
let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(plugin)
}

new Vue({
  router,
  store,
  beforeCreate () {
    this.$refresh.checktoken()
  },
  render: h => h(App)
}).$mount('#app')
