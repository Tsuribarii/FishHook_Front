<template>
  <div class="container">
    <div style="margin-top:2%;">
      <div class="card">
        <div
          class="card-header"
          style="font-weight: 500; font-size:1.3rem; font-family: 'Nanum Gothic', sans-serif;, serif;"
        >Title &nbsp; : &nbsp; {{ board.title }}</div>
        <div class="card-body" style="height:13rem;">
          <blockquote class="blockquote mb-0">
            <p style="font-family: 'Nanum Gothic', sans-serif;">{{ board.content }}</p>
            <div
              style="text-align:right; font-family: 'Nanum Gothic', sans-serif; line-height:15rem;"
            >작성자 &nbsp; : &nbsp; {{ board.name }}</div>
          </blockquote>
        </div>
        <div class="card-footer" style="font-weight: 500; font-family: 'Nanum Gothic', sans-serif;">
          Species &nbsp; : &nbsp; {{ board.species }},&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Bait &nbsp; : &nbsp; {{ board.bait }},&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Location &nbsp; : &nbsp; {{ board.location }}
        </div>
      </div>
    </div>
    <div style="margin-top: 1.3%;">
      <div class="card">
        <div
          class="card-header"
          style="font-weight: 500; font-size:1rem; font-family: 'Nanum Gothic', sans-serif;, serif;"
        >Comment</div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item" v-for="comment in laravelData" :key="comment.name">
            <p style="font-family: 'Nanum Gothic', sans-serif;">{{ comment.content }}</p>
            <div
              style="text-align:right; font-family: 'Nanum Gothic', sans-serif; line-height:0.1rem;"
            >작성자 &nbsp; : &nbsp; {{ comment.name }}</div>
          </li>
          <li class="list-group-item">
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="댓글을 입력해주세요"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button" id="button-addon2">등록</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <!-- <div class="row" style="margin-top: 10%;">
      <div class="form-group">
        <router-link to="/edit" tag="button" class="btn btn-lg btn-outline-secondary1">Edit</router-link>
      </div>
      <button class="btn btn-lg btn-primary1" @delete-article="deleteArticle(board)">Delete</button>
      </div>-->
    </div>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Nanum+Gothic&family=Noto+Serif+KR:wght@300&display=swap");
</style>
<script>
import swal from "sweetalert";
import axios from "axios";

export default {
  data() {
    return {
      board: {},
      laravelData: {}
    };
  },
  created() {
    axios
      .get("/api/show/" + this.$route.params.board)
      .then(response => {
        this.board = response.data;
        console.log(this.board);
      })
      .catch(err => {
        console.log(err);
      });

    axios
      .get("/api/showcomment/" + this.$route.params.board)
      .then(response => {
        this.laravelData = response.data;
        console.log(this.laravelData);
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    deleteArticle(board) {
      swal(
        {
          title: "Are you sure?",
          text: "You will not be able to recover this article!",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "Yes, delete it!",
          closeOnConfirm: false
        },
        function() {
          axios
            .delete("/api/delete/" + this.$route.params.board)
            .then(response => {
              let index = this.board.indexOf(board);
              this.boards.splice(index, 1);
              swal("Deleted!", "Your article has been deleted", "success");
            });
        }.bind(this)
      );
    }
  }
};
</script>
