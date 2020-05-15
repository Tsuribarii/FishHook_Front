<template>
  <div class="container" style="margin-top: 10%;">
    <!-- 이미지업로드 -->
    <form @submit.prevent="analyze" enctype="multipart/form-data">
      <div class="form-group" style="margin-top: 2%;">
        <label for="text">location</label>
        <div class="row">
          <input
            type="text"
            v-model="location"
            class="form-control"
            name="location"
            placeholder="1"
            style="width: 10%; margin-left: 3%;"
          />
        </div>
      </div>
      <div class="form-group" style="margin-top: 2%;">
        <label for="text">length</label>
        <div class="row">
          <input
            type="text"
            v-model="length"
            class="form-control"
            name="length"
            placeholder="1"
            style="width: 10%; margin-left: 3%;"
          />
          cm
        </div>
      </div>
      <div class="input-group">
        <div class="custom-file">
          <input type="file" @change="imageChanged" class="custom-file-input" name="image" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04">
          <label class="custom-file-label" for="inputGroupFile04">Choose file</label>
        </div>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary1" type="submit" id="inputGroupFileAddon04">Upload</button>
        </div>
      </div>
    </form>
<!-- 숨겨진 카메라 -->
    <div class="row">
      <div class="col-md-6">
        <h2>Current Camera</h2>
        <code v-if="device">{{ device.label }}</code>
        <div class="border">
          <vue-web-cam
            ref="webcam"
            :device-id="deviceId"
            width="100%"
            @started="onStarted"
            @stopped="onStopped"
            @error="onError"
            @cameras="onCameras"
            @camera-change="onCameraChange"
          />
        </div>

        <div class="row">
          <div class="col-md-12">
            <select v-model="camera">
              <option>-- Select Device --</option>
              <option
                v-for="device in devices"
                :key="device.deviceId"
                :value="device.deviceId"
              >{{ device.label }}</option>
            </select>
          </div>
          <div class="col-md-12">
            <button type="button" class="btn btn-primary" @click="onCapture">Capture Photo</button>
            <button type="button" class="btn btn-danger" @click="onStop">Stop Camera</button>
            <button type="button" class="btn btn-success" @click="onStart">Start Camera</button>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <h2>Captured Image</h2>
        <figure class="figure">
            <img :src="img" class="img-responsive" />
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
import { WebCam } from 'vue-web-cam'
import axios from 'axios'

export default {
  components: {
    'vue-web-cam': WebCam
  },
  data () {
    return {
      img: null,
      camera: null,
      deviceId: null,
      devices: [],
      image: '',
      length: '',
      location: ''
    }
  },
  computed: {
    device: function () {
      return this.devices.find(n => n.deviceId === this.deviceId);
    }
  },
  watch: {
    camera: function (id) {
      this.deviceId = id;
    },
    devices: function () {
      // Once we have a list select the first one
      const [first, ...tail] = this.devices;
      if (first) {
        this.camera = first.deviceId;
        this.deviceId = first.deviceId;
      }
    }
  },
  methods: {
    onCapture (stream) {
      console.log('On Started Event', stream);
    },
    onStopped (stream) {
      console.log('On Stopped Event', stream);
    },
    onStop () {
      this.$refs.webcam.stop();
    },
    onStart () {
      this.$refs.webcam.start();
    },
    onError (error) {
      console.log('On Error Event', error);
    },
    onCameras (cameras) {
      this.devices = cameras;
      console.log('On Cameras Event', cameras);
    },
    onCameraChange (deviceId) {
      this.deviceId = deviceId;
      this.camera = deviceId;
      console.log('On Camera Change Event', deviceId);
    },
    imageChanged (e) {
      console.log(e.target.files[0])
      var fileReader = new FileReader()
      fileReader.readAsDataURL(e.target.files[0])
      fileReader.onload = (e) => {
        this.image = e.target.result
      }
    },
    analyze () {
      return axios
        .post('http://13.125.253.47/api/rank/store', {
          token: localStorage.usertoken,
          image: this.image,
          length: this.length,
          location: this.location
        })
        .then(res => {
          console.log(res.data)
          return res.data
        })
        .catch(err => {
          console.log(err)
        })
    },
  }
}
</script>
