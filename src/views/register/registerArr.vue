<template>
  <div class='registerArr'>
    <div class="warpper">
      <img class="warpper-img" :src="require('./../../assets/images/arr1.png')" alt="">
      <div class="text">注册成功</div>
      <div class="warpper-text">恭喜您已成为理事<br><span style="font-weight: 700;">邀请码：qwwqsad</span></div>
    </div>
    <div class="centre">
      <div class="centre-p">关注后即可开启推广权限</div>
      <img class="centre-img" :src="require('./../../assets/images/yhcs.jpg')" alt="">
      <div class="centre-text">长按或扫描二维码关注</div>
    </div>
    <div class="registerArr-text">申卡局内人为新世界旗下办卡平台</div>
  </div>
</template>

<script>
export default {
  name: 'registerArr',
  data() {
    return {}
  },
  components: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style lang='scss'  scoped>
.warpper {
  width: 100%;
  height: 200px;
  background-image: url(./../../assets/images/back1.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: -11vw;
  .warpper-img {
    width: 50px;
    display: block;
    margin: 0 auto;
    padding-top: 30px;
  }
  .text {
    margin: 10px auto;
    text-align: center;
    font-size: 18px;
    letter-spacing: 1px;
    font-weight: 700;
    color: #1ed5a0;
  }
  .warpper-text {
    font-size: 12px;
    color: #fff;
    margin: 0 auto;
    letter-spacing: 1px;
    text-align: center;
  }
}
.centre {
  width: 80%;
  height: 250px;
  background: #fff;
  margin: 0 auto;
  border-radius: 10px;
  margin-top: -33px;
  .centre-p {
    letter-spacing: 1px;
    font-size: 14px;
    height: 60px;
    line-height: 60px;
    color: #000;
    text-align: center;
  }
  .centre-img {
    width: 120px;
    display: block;
    margin: 0 auto;
  }
  .centre-text {
    font-size: 10px;
    height: 40px;
    text-align: center;
    line-height: 40px;
  }
}
.registerArr-text {
  font-size: 10px;
  height: 40px;
  text-align: center;
  line-height: 40px;
}
</style>
