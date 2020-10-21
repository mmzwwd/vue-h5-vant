<template>
  <div class='applyforother'>
    <div class="padding-to">
      <p class="title">更换申请信息</p>
      <van-field v-model="tel" type="tel" placeholder="请输入申请人真实姓名" label="姓名" />
      <van-field v-model="tel" type="tel" placeholder="请输入申请人真实身份证号" label="身份证号" />
      <van-field v-model="tel" type="tel" placeholder="请输入申请人手机号" label="手机号" />
      <van-field v-model="sms" center clearable label="短信验证码" placeholder="请输入短信验证码">
        <template #button>
          <verification></verification>
        </template>
      </van-field>
      <div class="note">个人信息将影响审核及收入提现，请确保信息真实有效</div>
      <div class="footer_view">
        <div class="protocol">
          <div class="agree">
            <img v-if="!activeClass" :src="require('./../../assets/img/image/wxz.svg')" id="checkbox" @click="getItem()"></img>
            <img v-else :src="require('./../../assets/img/image/xz.svg')" id="checkbox" @click="getItem()"></img>
            <span class="agree-text"> 我同意 <span @click="agreeClick('user')">《用户注册协议》</span> <span @click="agreeClick('privacy')">《用户隐私保护政策》</span> <span @click="agreeClick('information')">《个人身份信息使用授权书》</span></span>
          </div>
          <div class="btn">确认申请</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import verification from '@/components/verification'
export default {
  name: 'applyforother',
  data() {
    return {
      activeClass: false,
      checked: true,
      text: '',
      tel: '',
      digit: '',
      sms: ''
    }
  },
  components: { verification },
  created() {},
  mounted() {},
  methods: {
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
    getItem() {
      this.activeClass = !this.activeClass
    }
  }
}
</script>
<style>
.protocol-checked {
  margin-left: 10px;
}
.applyforother .van-cell {
  padding-top: 16px;
  padding-bottom: 16px;
}
</style>
<style lang="scss"  scoped>
.applyforother {
  background: #fff;
  height: 100%;
  .padding-to {
    padding: 20px 0 20px 20px;
    .title {
      font-size: 20px;
      color: #3b3453;
    }
    .note {
      padding-top: 8px;
      display: block;
      line-height: 16px;
      font-size: 12px;
      color: #9a99a3;
      text-align: left;
      margin-left: 9px;
      margin-top: 10px;
    }
    .footer_view {
      display: block;
      background-color: #fff;
      margin-bottom: 15px;
      .protocol {
        margin-top: 10px;
        line-height: 18px;
        .agree {
          width: 94%;
          height: 30px;
          margin: 0 auto;
          margin-top: 18px;
          position: relative;
          #checkbox {
            position: absolute;
            width: 16px;
            height: 16px;
            margin-right: 10px;
            background-repeat: no-repeat;
            line-height: 12px;
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
        .btn {
          width: 80%;
          height: 34px;
          line-height: 34px;
          margin: 0 auto;
          font-size: 16px;
          background: linear-gradient(90deg, #f98400, #ffa347);
          border-radius: 20px;
          text-align: center;
          color: #fff;
          margin-top: 40px;
        }
      }
    }
  }
}
</style>
