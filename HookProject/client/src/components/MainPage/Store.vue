<template>
  <div class="row" style>
    <div class="col-lm-3">
      <div id="map" ref="map">
        <map-marker :lat="35.876867" :lng="128.662890"></map-marker>
        <map-marker :lat="35.900827" :lng="128.608796"></map-marker>
        <map-marker :lat="35.90057" :lng="128.631704"></map-marker>
      </div>
    </div>
    <button class="btnedit btn btn-primary1">クムホツリプラザ</button>
  </div>
</template>

<script>
import MapMarker from "./MapMarker";
import MapInfoWindow from "./MapInfoWindow";

export default {
  components: {
    MapMarker,
    MapInfoWindow,
  },
  data: () => ({
    map: null,
  }),
  methods: {
    getMap(callback) {
      let vm = this;
      function checkForMap() {
        if (vm.map) callback(vm.map);
        else setTimeout(checkForMap, 200);
      }
      checkForMap();
    },
  },
  mounted() {
    this.map = new window.google.maps.Map(this.$refs["map"], {
      center: { lat: 35.896335, lng: 128.621815 },
      zoom: 13,
    });
  },
};
</script>

<style scoped>
#map {
  width: 1600px;
  height: 600px;
  background: grey;
  justify-content: center;
  margin-left: 10%;
}
.btnedit {
  position: fixed;
  width: 100px;
  right: 690px;
  top: 660px;
  opacity: 0;
  color: black;
}
.btnedit:hover {
  opacity: 1;
}
</style>
