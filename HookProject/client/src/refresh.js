/* 새로고침하면 로그인 풀리니까 필요한 페이지 */
import EventBus from '../src/components/EventBus'
import axios from 'axios'

export default function (Vue) {
  Vue.refresh = {
    checktoken () {
      axios
        .get('/api/auth/profile', {
          headers: { Authorization: `Bearer ${localStorage.usertoken}` }
        })
        .then(res => {
          console.log(res)
          EventBus.$emit('logged-in', 'loggedin')
        })
        .catch(err => {
          console.log(err)
          console.log(err.response)
        })
    }
  }
  Object.defineProperties(Vue.prototype, {
    $refresh: {
      get () {
        return Vue.refresh
      }
    }
  })
}
