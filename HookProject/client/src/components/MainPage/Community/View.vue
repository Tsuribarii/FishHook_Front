<template>
  <div class="container">
    <div style="margin-top:3%;">
      <div class="card">
        <div class="card-header" style="font-weight: 500; font-size:1.6rem; font-family: 'Nanum Gothic', sans-serif;, serif;">Title &nbsp; : &nbsp; {{ board.title }}</div>
        <div class="card-body" style="height:25rem;">
          <blockquote class="blockquote mb-0">
            <p style="font-family: 'Nanum Gothic', sans-serif;">{{ board.content }}</p>
            <div style="text-align:right; font-family: 'Nanum Gothic', sans-serif; line-height:38rem;">작성자 &nbsp; : &nbsp; {{ board.name }}</div>
          </blockquote>
        </div>
        <div class="card-footer" style="font-weight: 500; font-family: 'Nanum Gothic', sans-serif;">Species &nbsp; : &nbsp; {{ board.species }}<br />Bait &nbsp; : &nbsp; {{ board.bait }}<br />Location &nbsp; : &nbsp; {{ board.location }}</div>
      </div>
    </div>
    <!-- <div class="row" style="margin-top: 10%;">
      <div class="form-group">
        <router-link to="/edit" tag="button" class="btn btn-lg btn-outline-secondary1">Edit</router-link>
      </div>
      <button class="btn btn-lg btn-primary1" @delete-article="deleteArticle(board)">Delete</button>
    </div> -->
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic&family=Noto+Serif+KR:wght@300&display=swap');
</style>
<script>
import swal from 'sweetalert'
import axios from 'axios'

export default {
  data () {
    return {
      board: {}
    }
  },
  created () {
    axios
      .get('/api/show/' + this.$route.params.board)
      .then(response => {
        this.board = response.data
        console.log(this.board)
      })
      .catch(err => {
        console.log(err)
      })
  },
  methods: {
    deleteArticle (board) {
      swal(
        {
          title: 'Are you sure?',
          text: 'You will not be able to recover this article!',
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#DD6B55',
          confirmButtonText: 'Yes, delete it!',
          closeOnConfirm: false
        },
        function () {
          axios
            .delete('/api/delete/' + this.$route.params.board)
            .then(response => {
              let index = this.board.indexOf(board)
              this.boards.splice(index, 1)
              swal('Deleted!', 'Your article has been deleted', 'success')
            })
        }.bind(this)
      )
    }
  }
}
</script>
