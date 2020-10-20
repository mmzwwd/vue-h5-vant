<template>
  <div class='pushTutorial'>
    <div class="title">光大银行信用卡推广教程</div>
    <div class="content">
      <div class="img-box"><img src="https://static.rong360.com/cimg/be/be6f262e7e2145a93ae815b9b6547e87edc82031.png" alt=""></div>
      <div class="text">重点提醒：以上活动仅限当月申请且当月结算</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pushTutorial',
  data() {
    return {}
  },
  components: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style lang="scss"  scoped>
.pushTutorial {
  padding: 30px 15px;
  .title {
    color: #3b3453;
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 20px;
  }
  .content {
    .img-box {
      width: 100%;
      margin: 15px auto;
      img {
        width: 100%;
        max-height: 100%;
      }
    }
    .text {
      font-size: 14px;
      line-height: 20px;
      color: #605f6b;
    }
  }
}
</style>
