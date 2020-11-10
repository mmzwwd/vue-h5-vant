<template>
  <div class='creditCard'>
    <img style="width: 100%;" src="https://static.rong360.com/upload/jpg/bb/c7/bbc76ab8875b86a82674a14be1c36e21.jpg" alt="">
    <div class="btn-container">
     <van-row type="flex" justify="space-around">
        <van-col span="7">
          <van-button color="#f78400" plain class="orange-btn" @click="shoveClick">进度查询</van-button>
        </van-col>
        <van-col span="9">
          <van-button color="#f78400"  plain class="orange-btn" @click="shoveClick">推荐亲友申请</van-button>
        </van-col>
        <van-col span="7">
            <van-button class="orange-btnty" @click="showPopup">本人申请</van-button>
        </van-col>
      </van-row>
    </div>
    <van-popup v-model="show" round closeable>
      <div class="modal">
        <div class="title">申请人信息</div>
        <div class="tip">后续填写申卡表单须 <span style='color: #ff3737;'>与您注册平台信息保持一致</span>，否则无法查询订单 </div>
        <ul class="tip-ul">
          <li>手机号 <span>188****3078</span></li>
          <li>身份证 <span>411081*****0858</span></li>
          <li>申卡码 <span>682sdsw</span></li>
        </ul>
        <div class="btn">确认申请</div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import Vue from 'vue';
import { Col, Row } from 'vant';
Vue.use(Col);
Vue.use(Row);
export default {
  name: 'creditCard',
  data() {
    return { show: false }
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    showPopup() {
      this.show = true
    },
    shoveClick() {
      this.$router.push('/applyforother')
    },
    scheduleClick() {
      this.$router.push('/schedule')
    }
  }
}
</script>
<style>
.btn-container .van-cell__value--alone {
  text-align: center;
}
.btn-container .van-cell__value--alone {
  /* color: #fff; */
}
.van-popup--center.van-popup--round {
  border-radius: 6px;
}
.modal {
  width: 230px;
  padding: 30px 20px 20px;
}
.modal .title {
  font-size: 22px;
  color: #3b3453;
  text-align: center;
  line-height: 30px;
  font-weight: 700;
  margin-bottom: 15px;
}
.modal .tip {
  color: #605f6b;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 20px;
}
.tip-ul {
  margin-bottom: 30px;
}
.tip-ul li {
  margin-bottom: 14px;
  font-size: 12px;
  color: #9a99a3;
  line-height: 17px;
}
.tip-ul li span {
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  margin-left: 10px;
  color: #3b3453;
}
.modal .btn {
  height: 34px;
  line-height: 34px;
  font-size: 16px;
  background: linear-gradient(90deg, #f98400, #ffa347);
  border-radius: 20px;
  text-align: center;
  color: #fff;
}
</style>
<style   lang="scss" scoped>
.creditCard {
  width: 100%;
  padding-bottom: 65px;
}
.btn-container {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 12px 10px;
  background: hsla(0, 0%, 100%, 0.9);
  // display: flex;
  .orange-btn{
    width: 100%;
    color: #f78400;
    border-radius: 22px;
    border: 1px solid #f78400;
  }
  .orange-btnty {
    width: 100%;
    background: #f78400;
    border: 1px solid #f78400;
    border-radius: 22px;
    color: #fff;
  }
}
</style>
