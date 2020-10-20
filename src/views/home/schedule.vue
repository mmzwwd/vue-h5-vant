<template>
  <div class="schedule">
    <div class="header">
      <div class="logo"><img class="logo-img" src="https://m.rong360.com/static/img/credit/bank/3.png" alt=""></div>
      <div class="info"> 光大银行</div>
    </div>
    <div class="tip">建议在申请办卡后3到7个工作日查询进度</div>
    <van-field v-model="text" label="身份证" />
    <van-field v-model="tel" type="tel" label="手机号" />
    <van-field v-model="digit" type="digit" label="姓名" />
    <van-field v-model="sms" center clearable label="图片验证" placeholder="点击图片可刷新">
      <template #button>
        <van-button color="#d6d6e0" plain type="primary" round size="small">发送验证码</van-button>
      </template>
    </van-field> <!-- 输入密码 -->
    <van-field v-model="sms" center clearable label="短信验证" placeholder="请输入短信验证码">
      <template #button>
        <van-button color="#F78400" plain type="primary" round size="small">发送验证码</van-button>
      </template>
    </van-field>
    <div class="agree">
      <img v-if="!activeClass" :src="require('./../../assets/img/image/wxz.svg')" id="checkbox" @click="getItem()"></img>
      <img v-else :src="require('./../../assets/img/image/xz.svg')" id="checkbox" @click="getItem()"></img>
      <span class="agree-text"> 我同意 <span>《用户注册协议》</span> <span>《用户隐私保护政策》</span> <span>《个人身份信息使用授权书》</span></span>
    </div>
    <div class="btn">查询</div>

  </div>
</template>

<script>
export default {
  name: 'schedule',
  data() {
    return {
      activeClass: false,
      text: '',
      tel: '',
      digit: '',
      sms: ''
    }
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    getItem() {
      this.activeClass = !this.activeClass
    }
  }
}
</script>
<style lang="scss"  scoped>
.schedule {
  background: #fff;
  height: 100%;
  .header {
    width: 100%;
    height: 78px;
    background-image: url('./../../assets/img/image/upload1.png');
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
  .btn {
    width: 80%;
    margin: 0 auto;
    margin-top: 40px;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    background: linear-gradient(90deg, #f98400, #ffa347);
    border-radius: 20px;
    text-align: center;
    color: #fff;
  }
  .agree {
    width: 80%;
    height: 30px;
    margin: 0 auto;
    margin-top: 18px;
    position: relative;
    #checkbox {
      position: absolute;
      width: 20px;
      height: 20px;
      margin-right: 10px;
      background-repeat: no-repeat;
      line-height: 12px;
      background-repeat: no-repeat;
    }
    .agree-text {
      line-height: 22px;
      font-size: 12px;
      text-indent: 30px;
      display: block;
    }
    .agree-text span {
      color: #f78400;
    }
  }
}
</style>
