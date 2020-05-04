<template>
  <div class="container">
    <div style="margin-top:6%;">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">순위</th>
            <th scope="col">물고기 사진</th>
            <th scope="col">cm</th>
            <th scope="col">유저 프로필</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>picture</td>
            <td>76cm</td>
            <td>Tom</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>picture</td>
            <td>48cm</td>
            <td>Jason</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>picture</td>
            <td>30cm</td>
            <td>Mark</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="form-group" style="margin-top: 10%;">
      <router-link to="/camera" tag="button" class="btn btn-lg btn-outline-secondary1">Camera</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>