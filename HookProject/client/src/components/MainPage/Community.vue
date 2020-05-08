<template>
  <div style="margin-top:3.8%;">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">번호</th>
          <th scope="col">제목</th>
          <th scope="col">작성자</th>
          <th scope="col">날짜</th>
          <th scope="col">조회수</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Today was great!!!!</td>
          <td>Mark</td>
          <td>2020.05.02</td>
          <td>2</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>I like Fishing!</td>
          <td>Thornton</td>
          <td>2020.04.22</td>
          <td>1</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>My friend was foolish!</td>
          <td>Jason</td>
          <td>2020.04.20</td>
          <td>5</td>
        </tr>
      </tbody>
    </table>

    <div class="form-group" style="margin-top: 10%;">
      <router-link to="/create" tag="button" class="btn btn-lg btn-outline-secondary1">Create</router-link>
    </div>
  </div>
</template>

<script>
export default {}
</script>
