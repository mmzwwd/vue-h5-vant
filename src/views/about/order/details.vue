<template>
  <div class='details'>
    <div class="warpper">
      <div class="text">光大抖音联名信用卡</div>
      <ul class="warpperUl">
        <li> . 结算节点：终审通过</li>
        <li> . 结算方式：T+2工作日自动结算</li>
        <li> . 结算数据更新至：2020-10-21</li>
      </ul>
    </div>
    <div class="content">
      <van-steps direction="vertical" :active="0" :active-color="'#605f6b'" :inactive-color="'#909399'">
        <van-step v-for="item in detailsList" :key="item.title">
          <h5>{{item.title}} <span v-if="item.title=='终审通过'" class="calculate">结算奖励</span></h5>
          <h6>{{item.content}} </h6>
        </van-step>
      </van-steps>
    </div>
    <div class="news">
      <div class="newsTitle">申请人信息</div>
      <ul class="newsUl">
        <li>姓名：马田田</li>
        <li> 手机号：1882938475</li>
        <li>申请时间：2020-09-09</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'details',
  data() {
    return {
      detailsList: [
        { title: '已进件', content: '如未成功提交申请，请忽略该订单' },
        { title: '审核中', content: '请客户在收到卡员上门短信后30天内完成卡员上门面签（不会切单）' },
        { title: '初审通过', content: '请客户在收到卡员上门短信后30天内完成卡员上门面签（不会切单）' },
        { title: '终审通过', content: '请客户在收到卡员上门短信后30天内完成卡员上门面签（不会切单）' }
      ]
    }
  },
  components: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style  lang='scss' scoped>
.details {
  width: 100%;
  .warpper {
    width: 100%;
    height: 200px;
    background-image: url(../../../assets/images/back1.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: -11vw;
    .text {
      padding: 20px 20px 20px 30px;
      text-align: left;
      font-size: 16px;
      letter-spacing: 2px;
      font-weight: 700;
      color: #fff;
    }
    .warpperUl {
      padding: 0 20px 0 30px;
      li {
        line-height: 30px;
        letter-spacing: 1px;
        color: #fff;
      }
    }
  }
  .content {
    width: 80%;
    border-radius: 4px;
    margin: 0 auto;
    padding: 10px;
    font-size: 12px;
    background: #fff;
    margin-top: -40px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    .calculate {
      padding: 3px 4px;
      border-radius: 4px;
      font-size: 10px;
      color: #fff;
      background: #909399;
    }
  }
  .news {
    width: 80%;
    border-radius: 4px;
    margin: 10px auto;
    padding: 10px;
    background: #fff;
    .newsTitle {
      padding: 6px 4px;
      font-size: 15px;
      color: #3b3453;
      font-weight: 600;
    }
    .newsUl {
      font-size: 11px;
      line-height: 20px;
      padding: 3px 4px;
    }
  }
}
</style>
