<template>
  <div class="container">
    <div style="margin-top:3%;">
      <div class="card">
        <div
          class="card-header"
          style="font-weight: 500; font-size:1.6rem; font-family: 'Nanum Gothic', sans-serif;, serif;"
        >Title &nbsp; : &nbsp; {{ board.title }}</div>
        <div class="card-body" style="height:17rem;">
          <blockquote class="blockquote mb-0">
            <p style="font-family: 'Nanum Gothic', sans-serif;">{{ board.content }}</p>
            <div
              style="text-align:right; font-family: 'Nanum Gothic', sans-serif; line-height:35rem;"
            >작성자 &nbsp; : &nbsp; {{ board.name }}</div>
          </blockquote>
        </div>
        <div class="card-footer" style="font-weight: 500; font-family: 'Nanum Gothic', sans-serif;">
          Species &nbsp; : &nbsp; {{ board.species }}
          <br />
          Bait &nbsp; : &nbsp; {{ board.bait }}
          <br />
          Location &nbsp; : &nbsp; {{ board.location }}
        </div>
      </div>
    </div>
    <!-- 여기부터 댓글 -->
    <div style="margin-top: 2%;">
      <div class="card" v-for="comment in laravelData" :key="comment.name">
        <div
          class="card-header"
          style="font-weight: 500; font-size:1rem; font-family: 'Nanum Gothic', sans-serif;, serif;"
        >Comment</div>
        <div class="card-body" style="height:5rem;">
          <blockquote class="blockquote mb-0">
            <p style="font-family: 'Nanum Gothic', sans-serif;">{{ comment.content }}</p>
            <div
              style="text-align:right; font-family: 'Nanum Gothic', sans-serif; line-height:0.1rem;"
            >작성자 &nbsp; : &nbsp; {{ comment.name }}</div>
          </blockquote>
        </div>
      </div>
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
