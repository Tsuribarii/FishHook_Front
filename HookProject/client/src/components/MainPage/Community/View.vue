<template>
  <div class="container" style="font-family: 'Kosugi Maru', sans-serif;">
    <div style="margin-top:2%;">
      <div class="card">
        <div
          class="card-header"
          style="background-color: white; font-weight: 500; font-size:1.2rem; font-family: 'Kosugi Maru', sans-serif;"
        >
          <b>
            <span style=" color:#000387;">タイトル</span>
            : {{ board.title }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span
              style="text-align:right; font-family: 'Nanum Gothic', sans-serif; color:#000387;"
            >名前</span>
            : {{ board.name }}&nbsp;&nbsp;&nbsp;&nbsp;
            <span style="color:#000387;">ビュー</span>
            : {{ board.hits }}
          </b>

          <!-- 여기부터 -->
          <!-- <div style="text-align:right; font-family: 'Nanum Gothic', sans-serif;">
            <b>
              <span style="color:#000387;">작성자</span>
              &nbsp; : &nbsp; {{ board.name }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span
                style="color:#000387;"
              >조회수</span>
              &nbsp; : &nbsp; {{ board.hits }}
            </b>
          </div>-->
          <!-- 여기까지 -->
        </div>
        <div class="card-body" style="height:15rem;">
          <blockquote class="blockquote mb-0">
            <p style="font-family: 'Kosugi Maru', sans-serif;">{{ board.content }}</p>
            <div
              style="text-align:right; font-family: 'Kosugi Maru', sans-serif; line-height:18rem;color:#000387;"
            >
              <b
                style="font-size:1rem;"
              >Species &nbsp; : &nbsp; {{ board.species }} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bait &nbsp; : &nbsp; {{ board.bait }} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Location &nbsp; : &nbsp; {{ board.location }}</b>
            </div>
          </blockquote>
        </div>
      </div>
    </div>
    <div style="margin-top: 1.3%;">
      <div class="card">
        <div
          class="card-header"
          style="background-color: white; font-weight: 500; font-size:1rem; font-family: 'Nanum Gothic', sans-serif;, serif; color:#000387;"
        >
          <b>コメント</b>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item" v-for="comment in laravelData" :key="comment.name">
            <p style="font-family: 'Nanum Gothic', sans-serif;">{{ comment.content }}</p>
            <div
              style="text-align:right; font-family: 'Nanum Gothic', sans-serif; line-height:0.1rem;"
            >ユーザー &nbsp; : &nbsp; {{ comment.name }}</div>
          </li>
          <li class="list-group-item">
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="コメントをお書きください。"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <div class="input-group-append">
                <button class="btn btn-primary2" type="button" id="button-addon2">등록</button>
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
@import url("https://fonts.googleapis.com/css?family=Kosugi+Maru&display=swap");
</style>
<script>
import swal from "sweetalert";
import axios from "axios";

export default {
  data() {
    return {
      board: {},
      laravelData: {},
    };
  },
  created() {
    axios
      .get("/api/show/" + this.$route.params.board)
      .then((response) => {
        this.board = response.data;
        console.log(this.board);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("/api/showcomment/" + this.$route.params.board)
      .then((response) => {
        this.laravelData = response.data;
        console.log(this.laravelData);
      })
      .catch((err) => {
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
          closeOnConfirm: false,
        },
        function () {
          axios
            .delete("/api/delete/" + this.$route.params.board)
            .then((response) => {
              let index = this.board.indexOf(board);
              this.boards.splice(index, 1);
              swal("Deleted!", "Your article has been deleted", "success");
            });
        }.bind(this)
      );
    },
  },
};
</script>
