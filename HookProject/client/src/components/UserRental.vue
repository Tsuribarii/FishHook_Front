<template>
  <!-- 예약된 선박 리스트 -->
  <div class="col-sm" style="margin-top:7%; margin-right:5%;">
    <div class="row">
      <div style="background-color:grey;width:30rem; height:2.5rem; line-height:1.5rem;">
        <div class="row">
          <svg
            class="bi bi-check-circle"
            color="#FAFAFA"
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M15.354 2.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3-3a.5.5 0 11.708-.708L8 9.293l6.646-6.647a.5.5 0 01.708 0z"
              clip-rule="evenodd"
            />
            <path
              fill-rule="evenodd"
              d="M8 2.5A5.5 5.5 0 1013.5 8a.5.5 0 011 0 6.5 6.5 0 11-3.25-5.63.5.5 0 11-.5.865A5.472 5.472 0 008 2.5z"
              clip-rule="evenodd"
            />
          </svg>
          <h4 style="color: #FAFAFA; padding-top: 2%; margin-left:3px;">이용완료</h4>
        </div>
      </div>
    </div>
    <!-- 여기부터 No-->
      <div class="b" style="background-color:lightgrey; padding:1%;">
      <div style="padding-top:3%;">No. {{ rental.id }}</div>
      <div class="row" style="margin-top:2%; margin-bottom:2%;">
        <h1>{{ rental.ship_id }}</h1>
        <br />
        <svg
          class="bi bi-three-dots-vertical"
          color="#A6A6A6"
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M9.5 13a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0-5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0-5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <hr />
      <div style="margin-top:2%; margin-bottom:2%;">
        <b style="color: #A6A6A6;">일정</b>
        &nbsp;&nbsp;
        <b>2020.03.25(수) {{ rental.departure_date }} AM11:00 {{ rental.ship_id }}</b>
      </div>
      <div style="margin-top:2%; margin-bottom:2%;">
        <b style="color: #A6A6A6;">업체</b>
        &nbsp;&nbsp;
        <b>은빈이네 선박</b>
      </div>
      <hr />
      <div style="margin-top:2%; margin-bottom:2%;">
        <b style="color: #A6A6A6;">결제금액</b>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <b
          style="color: #ED0000;"
        >60,000 {{ rental.ship_id }} 원</b>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['rental']
}
</script>
