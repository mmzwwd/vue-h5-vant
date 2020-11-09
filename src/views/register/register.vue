<template>
  <div class='register'>
    <div class="box">
      <van-form @submit="onSubmit">
        <van-field v-model="tel" type="tel" label="邀请码" :rules="[{ required: true }]" placeholder="请输入邀请码" />
        <van-field v-model="tel" type="tel" label="身份证" :rules="[{ required: true }]" placeholder="请输入身份证" />
        <van-field v-model="tel" type="tel" label="微信号" :rules="[{ required: true }]" placeholder="请输入微信号" />
        <van-field v-model="tel" type="tel" label="手机号" :rules="[{ required: true }]" placeholder="请输入手机号" />
        <van-field v-model="sms" center clearable label="短信验证" :rules="[{ required: true}]" placeholder="请输入短信验证码">
          <template #button>
            <van-button color="#F78400" plain type="primary" v-show="show" @click="getCode" round size="small">获取验证码</van-button>
            <van-button color="#F78400" plain type="primary" v-show="!show" round size="small">{{count}} s</van-button>
          </template>
        </van-field>
        <div class="note">个人信息将影响审核及收入提现，请确保信息真实有效</div>
        <div class="agree">
          <img v-if="!activeClass" :src="require('./../../assets/img/image/wxz.svg')" id="checkbox" @click="getItem()"></img>
          <img v-else :src="require('./../../assets/img/image/xz.svg')" id="checkbox" @click="getItem()"></img>
          <span class="agree-text"> 我同意 <span @click="agreeClick('user')">《用户注册协议》</span> <span @click="agreeClick('privacy')">《用户隐私保护政策》</span> <span @click="agreeClick('information')">《个人身份信息使用授权书》</span></span>
        </div>
        <div class="login-button">
          <van-button round block type="info" color="#ffa347" native-type="submit">
            提交
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'register',
  data() {
    return {
      activeClass: false,
      show: true,
      count: '',
      timer: null
    }
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    getItem() {
      this.activeClass = !this.activeClass
    },
    agreeClick(types) {
      console.log(types)
      if (types == 'user') {
        this.$router.push('/registration')
      } else if (types == 'privacy') {
        this.$router.push('/agreement')
      } else if (types == 'information') {
        this.$router.push('/information')
      }
    },
    getCode() {
      const TIME_COUNT = 60
      if (!this.timer) {
        this.count = TIME_COUNT
        this.show = false
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count--
          } else {
            this.show = true
            clearInterval(this.timer)
            this.timer = null
          }
        }, 1000)
      }
    }
  }
}
</script>
<style lang='scss'>
.van-cell {
  padding: 20px;
  font-size: 16px;
  .van-cell__title {
    font-size: 14px;
  }
}
</style>
<style lang='scss'  scoped>
.register {
  background: #fff;
  height: 100%;
  .box {
    padding-top: 20px;
    .login-button {
      width: 80%;
      margin: 0 auto;
    }
    .note {
      padding-top: 8px;
      display: block;
      line-height: 16px;
      font-size: 12px;
      color: #9a99a3;
      text-align: left;
      margin: 10px;
    }
    .agree {
      width: 94%;
      height: 60px;
      margin: 0 auto;
      margin-top: 18px;
      position: relative;
      #checkbox {
        position: absolute;
        width: 16px;
        height: 16px;
        margin-right: 10px;
        background-repeat: no-repeat;
        line-height: 16px;
        top: 3px;
        left: 4px;
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
}
</style>
