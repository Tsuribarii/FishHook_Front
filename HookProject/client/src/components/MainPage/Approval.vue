<template>
  <div class="container">
    <div class="row" style="margin-top:15%;">
      <h2 >Notification</h2>
      <svg
        class="bi bi-bell-fill"
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 16a2 2 0 002-2H6a2 2 0 002 2zm.995-14.901a1 1 0 10-1.99 0A5.002 5.002 0 003 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"
        />
        </svg>
    </div>
    <table class="table" >
      <thead>
        <tr>
          <th scope="col">유저 프로필</th>
          <th scope="col">이름</th>
          <th scope="col">날짜</th>
          <th scope="col">승인</th>
          <th scope="col">취소</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">null</th>
          <td>신재현</td>
          <td>2020.05.23 AM11:00</td>
          <td><button type="submit" class="btn btn-lg btn-primary btn-block">승인</button></td>
          <td><button type="submit" class="btn btn-lg btn-danger btn-block">취소</button></td>
        </tr>
        <tr>
          <th scope="row">null</th>
          <td>정바름</td>
          <td>2020.05.11 PM03:00</td>
          <td><button type="submit" class="btn btn-lg btn-primary btn-block">승인</button></td>
          <td><button type="submit" class="btn btn-lg btn-danger btn-block">취소</button></td>
        </tr>
        <tr>
          <th scope="row">null</th>
          <td>강도은</td>
          <td>2020.04.21 AM10:30</td>
          <td><button type="submit" class="btn btn-lg btn-primary btn-block">승인</button></td>
          <td><button type="submit" class="btn btn-lg btn-danger btn-block">취소</button></td>
        </tr>
        <tr>
          <th scope="row">null</th>
          <td>박하남</td>
          <td>2020.03.30 AM09:00</td>
          <td><button type="submit" class="btn btn-lg btn-primary btn-block">승인</button></td>
          <td><button type="submit" class="btn btn-lg btn-danger btn-block">취소</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

</script>
