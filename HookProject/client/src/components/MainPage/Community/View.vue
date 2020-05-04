<template>
  <div class="container">
    <div style="margin-top:10%;">
      <div class="card">
        <div class="card-header">Quote</div>
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer class="blockquote-footer">
              Someone famous in
              <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
    <div class="row" style="margin-top: 10%;">
      <div class="form-group">
        <router-link to="/edit" tag="button" class="btn btn-lg btn-outline-secondary1">Edit</router-link>
      </div>
      <button class="btn btn-lg btn-primary1" @delete-article="deleteArticle(board)">Delete</button>
    </div>
  </div>
</template>

<script>
import VueCkeditor from "vue-ckeditor2";
import swal from "sweetalert";
import axios from "axios";

export default {
  components: { VueCkeditor },
  data() {
    return {
      content: "",
      config: {
        toolbar: [
          { name: "document", items: ["Source"] },
          {
            name: "basicstyles",
            items: [
              "Bold",
              "Italic",
              "Underline",
              "Strike",
              "Subscript",
              "Superscript"
            ]
          },
          {
            name: "paragraph",
            items: [
              "NumberedList",
              "BulletedList",
              "-",
              "JustifyLeft",
              "JustifyCenter",
              "JustifyRight",
              "JustifyBlock"
            ]
          },
          { name: "links", items: ["Link", "Unlink"] },
          { name: "insert", items: ["Image", "Table"] },
          "/",
          { name: "styles", items: ["Font", "FontSize"] },
          { name: "colors", items: ["TextColor", "BGColor"] }
        ],
        height: 300
      },
      board: {}
    };
  },
  created() {
    axios
      .get("http://13.125.253.47/api/show/" + this.$route.params.board)
      .then(response => {
        this.board = response.data;
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    onBlur(evt) {
      console.log(evt);
    },
    onFocus(evt) {
      console.log(evt);
    },
    onContentDom(evt) {
      console.log(evt);
    },
    onDialogDefinition(evt) {
      console.log(evt);
    },
    onFileUploadRequest(evt) {
      console.log(evt);
    },
    onFileUploadResponse(evt) {
      console.log(evt);
    },
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
            .delete("http://13.125.253.47/api/delete/" + board.id)
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

