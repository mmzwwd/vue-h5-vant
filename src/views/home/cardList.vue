<template>
  <div class='cardList'>
    <div class="header">
      <div class="logo"><img class="logo-img" src="https://m.rong360.com/static/img/credit/bank/3.png" alt=""></div>
      <div class="info">
        <div class="name">光大银行</div>
        <div class="desc" style="color:#cdcddf;"> 星巴克专享送满40减20</div>
      </div>
    </div>
    <van-notice-bar mode="closeable">
      技术是开发它的人的共同灵魂。
    </van-notice-bar>
    <van-collapse v-model="activeNames">
      <van-collapse-item title="热门活动" title-class="title-wrap" :border="false" :value="'热门活动'" name="1" @change="">
        <div class="activity">
          <div class="tag">28元首卡奖励</div>
          <div class="text">8月和9月未获得光大下卡奖且10月获得光大下卡奖，或10月新注册理事首次获得光大下卡奖励，可得28元首卡奖励 </div>
        </div>
        <div class="activity">
          <div class="tag">28元首卡奖励</div>
          <div class="text">10月申请且10月结算光大张数超过9月，即可获得38奖励。注：10月注册或9月下卡张数为0的理事，起步档位为1张；每人可获得奖励1次 </div>
        </div>
        <div class="activity">
          <div class="tag">28元首卡奖励</div>
          <div class="text">8月和9月未获得光大下卡奖且10月获得光大下卡奖，或10月新注册理事首次获得光大下卡奖励，可得28元首卡奖励 </div>
        </div>
      </van-collapse-item>
      <van-collapse-item title="结算规则" title-class="title-wrap" :border="false" :value="'结算规则'" name="2" @change="">
        <div class="sub-title">
          <div class="text">支持城市</div>
          <div class="text" style="margin-bottom: 20px;">无城市限制</div>
          <div class="text">结算规则</div>
          <div class="text">结算周期：<br> 终审通过后T+2自动结算。<br>首次申请光大银行信用卡，终审通过算成功办理此业务；没有通过审批则不会发放奖金。<br> 【光大极客最新流程】：
            <br> 1、进件：提交5要素信息进件；<br>2、预审：收到预审和客户经理上门短信；<br> 3、初审：客户经理上门补全表单并提交，初审通过；<br>4、终审：终审通过邮寄卡片（终审结算点）<br>5、激活：可在阳光惠生活APP和网点激活使用；
            <br> 锁定期说明：状态为“待查询”订单，锁定期30天，状态为“待再查”订单，锁定期90天。查到进度（审核中、待面签、待激活等），锁定期延长为90天。锁定期内未查到符合结算标准的进度，订单将出锁定期，变为失效订单无法结算。
          </div>
        </div>
      </van-collapse-item>
    </van-collapse>
    <div class="text-area">
      <div class="text-span">推荐银行</div>
      <div class="text-span-one" @click="courseClick">推广教程</div>
    </div>
    <div class="body-list">
      <div class="item" v-for="item in list" @click="creditClick">
        <div class="card-img"><img src="https://img.rong360.com/0/a446a/cimg/39/396e22f3632e1b305d43200bd8332ec66414cb55_200x124.jpeg" alt=""></div>
        <div class="info">
          <div class="card-name">光大阳光本草岐黄菁英信用卡</div>
          <div class="desc">世界中医药日当月多倍积分</div>
          <div class="tags">
            <span class="tags-span" style="margin-right:5px;">特色主题卡</span>
            <span class="tags-span">免年费</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { NoticeBar } from 'vant';
Vue.use(NoticeBar);
import {recommendBankretrieve} from '../../api/user';

export default {
  name: 'cardList',
  data() {
    return {
      activeNames: ['1'],
      list: [{ id: 123 }, { id: 123 }, { id: 123 }, { id: 123 }]
    }
  },
  components: {},
  created() {},
  mounted() {
    this.recommendBankretrieve()
  },
  methods: {
    recommendBankretrieve(){
      let Data={
        id:2
      }
      recommendBankretrieve(Data).then(res => {   
        this.list=  res.data
      })
    },
    courseClick() {
      this.$router.push('/pushTutorial')
    },
    creditClick() {
      this.$router.push('/creditCard')
    }
  }
}
</script>
<style>
.cardList .title-wrap {
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  color: #3b3453;
}
</style>
<style lang="scss"  scoped>
.cardList {
  background: #fff;
  .header {
    width: 100%;
    height: 48px;
    padding: 20px 0 20px 0px;
    background-image: url('./../../assets/img/image/upload.png');
    background-size: cover;
    background-repeat: no-repeat;
    .logo {
      width: 48px;
      height: 48px;
      background: #fff;
      border-radius: 50%;
      margin-left: 20px;
      float: left;
      .logo-img {
        width: 30px;
        margin: 9px;
      }
    }
    .info {
      height: 100%;
      float: left;
      margin-left: 8px;
      margin-top: 3px;
      color: #fff;
      .name {
        font-size: 20px;
        font-weight: 700;
        line-height: 26px;
        margin-bottom: 2px;
      }
    }
  }
  .activity {
    .tag {
      align-items: center;
      font-size: 12px;
      color: #f43;
      background-color: rgba(255, 68, 51, 0.05);
      line-height: 20px;
      box-sizing: border-box;
      border-radius: 20px 1px 1px 20px;
      border: 1px solid rgba(255, 68, 51, 0.4);
      padding: 4px 4px 1px 8px;
      background-size: 5px 4px;
      background-repeat: no-repeat;
      background-position: 1.333vw;
      margin-bottom: 2.667vw;
      display: inline-flex;
      -webkit-box-align: center;
    }
    .text {
      color: #605f6b;
      font-size: 14px;
      line-height: 20px;
      margin-bottom: 20px;
    }
  }
  .sub-title {
    color: #605f6b;
    font-size: 14px;
    line-height: 20px;
    .text {
      margin-bottom: 10px;
    }
  }
  .text-area {
    margin: 16px;
    margin-top: 15px;
    display: block;
    height: 30px;

    .text-span {
      font-size: 20px;
      font-weight: 700;
      line-height: 30px;
      color: #3b3453;
      float: left;
    }
    .text-span-one {
      color: #f78400;
      font-size: 14px;
      line-height: 30px;
      float: right;
    }
  }
  .body-list {
    margin: 0 20px;
    .item {
      display: flex;
      -webkit-box-align: center;
      padding: 18px 0;
      box-sizing: border-box;
      .card-img {
        width: 100px;
        height: 62px;
        border-radius: 4px;
        margin-right: 15px;
        overflow: hidden;
        img {
          width: 100%;
        }
      }
      .info {
        padding: 2px 0;
        box-sizing: border-box;
        -webkit-box-flex: 1;
        flex: 1;
        width: 0;
        .card-name {
          color: #3b3453;
          font-size: 16px;
          line-height: 20px;
          font-weight: 700;
          margin-bottom: 5px;
          word-break: break-all;
        }
        .desc {
          color: #9a99a3;
          font-size: 12px;
          line-height: 16px;
          margin-bottom: 5px;
          width: 100%;
          white-space: nowrap;
          overflow: hidden;
        }
        .tags {
          color: #f78400;
          font-size: 10px;
          .tags-span {
            border: 1px solid rgba(247, 132, 0, 0.5);
            height: 14px;
            padding: 2px 4px;
            border-radius: 4px;
          }
        }
      }
    }
  }
}
</style>
