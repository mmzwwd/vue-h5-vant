<template>
  <div class='query'>
    <div class="header">
      <div class="logo"><img class="logo-img" src="https://m.rong360.com/static/img/credit/bank/3.png" alt=""></div>
      <div class="info"> 光大银行</div>
    </div>
    <div class="tip">建议在申请办卡后3到7个工作日查询进度</div>
    <van-field v-model="text" label="身份证" placeholder="请输入身份证" />
    <van-field v-model="tel" type="tel" label="手机号" placeholder="请输入手机号" />
    <van-field v-model="digit" type="digit" label="姓名" placeholder="请输入姓名" />
    <van-field v-model="sms" center clearable label="图片验证" placeholder="点击图片可刷新">
      <template #button>
        <van-button color="#d6d6e0" plain type="primary" round size="small">发送验证码</van-button>
      </template>
    </van-field> <!-- 输入密码 -->
    <van-field v-model="sms" center clearable label="短信验证" placeholder="请输入短信验证码">
      <template #button>
        <!-- 获取验证码 -->
        <verification></verification>
      </template>
    </van-field>
  </div>
</template>

<script>
import verification from '@/components/verification'

export default {
  name: 'query',
  data() {
    return {
      show: true,
      count: '',
      timer: null,
      activeClass: false,
      text: '',
      tel: '',
      digit: '',
      sms: ''
    }
  },
  components: { verification },
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style lang='scss'  scoped>
.query {
  .header {
    width: 100%;
    height: 78px;
    background-image: url('../../../assets/img/image/upload1.png');
    background-size: cover;
    background-repeat: no-repeat;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-background-size: cover;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    .logo {
      width: 36px;
      height: 36px;
      background: #fff;
      border-radius: 50%;
      float: left;
      .logo-img {
        width: 18px;
        margin: 9px;
      }
    }
    .info {
      height: 40px;
      line-height: 40px;
      float: left;
      margin-left: 8px;
      margin-top: 3px;
      color: #fff;
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 2px;
    }
  }
  .tip {
    background-color: #fff7e2;
    color: #f78400;
    text-align: center;
    font-size: 10px;
    line-height: 30px;
    height: 30px;
  }
}
</style>
