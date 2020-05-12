<template>
  <div class="container">
    <div style="margin-top:20%;">
      <div class="card">
        <div class="card-header">{{ board.title }}</div>
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <p>{{ board.content }}</p>
          </blockquote>
        </div>
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
