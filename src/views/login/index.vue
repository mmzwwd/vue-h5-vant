<template>
  <div class='login'>
    <div class="center">
      <img class="center-img" :src="require('./../../assets/img/logo.png')" alt="">
      <van-form @submit="onSubmit">
        <van-field v-model="tel" type="tel" label="手机号" :rules="[{ required: true, message: '请填写用户名' }]" placeholder="请输入手机号" />
        <van-field v-model="sms" center clearable label="短信验证" :rules="[{ required: true, message: '请填写短信验证码' }]" placeholder="请输入短信验证码">
          <template #button>
            <van-button color="#F78400" plain type="primary" v-show="show" @click="getCode" round size="small">获取验证码</van-button>
            <van-button color="#F78400" plain type="primary" v-show="!show" round size="small">{{count}} s</van-button>
          </template>
        </van-field>
        <div class="login-button">
          <van-button round block type="info" color="#ff5f16" native-type="submit">
            登陆
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import { constants } from 'crypto'
export default {
  data() {
    return {
      show: true,
      count: '',
      timer: null,
      phone: '13800000000',
      smsCode: '123456'
    }
  },
  methods: {
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
    },
    login() {
      // 发送请求,用post方式
      let url = '/login'
      // 请求参数
      let data = {
        phone: this.phone,
        smsCode: this.smsCode
      }
      this.$axios
        .post(url, data)
        .then(res => {
          // 修改登陆状态
          this.$store.commit('updateLogin', true)
          // 把token存入store
          this.$store.commit('updateToken', res.user.token)
          // 把用户名存入store
          this.$store.commit('updateUsername', res.user.phone)
          this.$router.push('/my')
        })
        .catch(err => {
          console.log('登陆失败')
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.logo {
  font-size: 100px !important;
  margin-bottom: 150px;
}
/* 本页公共样式 */
.login {
  height: 100vh;
  background-color: #fff;
  // display: flex;
  .center {
    padding-top: 100px;
    // align-self: center;
    .center-img {
      display: block;
      margin: auto;
      width: 20%;
      margin-bottom: 20px;
    }
    .login-button {
      margin: 40px 16px 16px 16px;
    }
  }
}
</style>

