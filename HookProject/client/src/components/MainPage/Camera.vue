<template>
  <div class="container" style="margin-top: 2%;">
    <!-- 이미지업로드 -->
    <form @submit.prevent="analyze" enctype="multipart/form-data">
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
            <button type="button" class="btn btn-outline-primary" @click="onCapture">Capture Photo</button>
            <button type="button" class="btn btn-outline-danger" @click="onStop">Stop Camera</button>
            <button type="button" class="btn btn-outline-success" @click="onStart">Start Camera</button>
          </div>
        </div>
      </div>
      <div class="col-md-6">
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
import router from '../../router'

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
      image: ''
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
      /* var fileReader = new FileReader()
      fileReader.readAsDataURL(e.target.files[0])
      fileReader.onload = (e) => {
        this.image = e.target.result
      } */
      this.image = e.target.files[0]
    },
    analyze () {
      let formData = new FormData()
      formData.append('image', this.image)
      formData.append('token', localStorage.usertoken)

      return axios
        .post('http://13.125.253.47/api/image/store', formData)
        .then(res => {
          console.log(res.data)
          router.push({ name: 'Rankregister' })
          return res.data
        })
        .catch(err => {
          console.log(err)
          console.log(err.response.data)
        })
    }
  }
}
</script>
