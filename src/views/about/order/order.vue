<template>
  <div class='order'>
    <van-search v-model="value" shape="round" background="#4fc08d" placeholder="请输入搜索关键词" />
    <van-tabs v-model="active" :title-active-color="'#3b3453'" :title-inactive-color="'#3b3453'" :color="'#f78400'" @click='activeClick'>
      <van-tab v-for="item in activeList" :title="item.title" :name="item.title">
        <!-- <van-empty class="custom-image" :image="require('../../../assets/images/static.png')" description="暂无数据" /> -->
        <div class="orderlist">
          <div class="orderHead">
            <div class="orderBottom">
              <img class="orderImg" :src="require('../../../assets/images/static.png')" alt="">
              <div class="orderText">℃●⊙█▂♂James</div>
              <div class="orderApply">本人申请</div>
              <img class="orderAsh" :src="require('../../../assets/images/ash.png')" alt="">
            </div>
          </div>
          <div class="orderCard">
            <div class="orderApply">面签版</div>
            <div class="orderText">光大抖音联名信用卡</div>
            <div class="orderAsh">带查询</div>
          </div>
          <div class="orderTime"> 申请时间：2020-10-23 20:56:39</div>
          <div class="orderTime">申卡码： 77redja</div>
          <div class="orderButton">
            <van-button class="but receive" color="#ccc" round plain hairline type="primary" @click="receiveClick()">联系推荐人</van-button>
            <van-button class="but details" color="#f78400" round plain hairline type="primary" @click="detailsClick()">订单详情</van-button>
            <van-button class="but query" @click="queryClick()" round type="info">进度查询</van-button>
            <van-button class="but details" color="#409EFF" round plain hairline type="primary" v-if="false">还原</van-button>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Vue from 'vue'
import { Tab, Tabs } from 'vant'
Vue.use(Tab)
Vue.use(Tabs)
export default {
  name: 'order',
  data() {
    return {
      value: '',
      active: '',
      activeList: [
        { title: '待查询' },
        { title: '待再查' },
        { title: '待激活' },
        { title: '已完成' },
        { title: '未通过' },
        { title: '失效订单' },
        { title: '回收站' }
      ]
    }
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    receiveClick() {
      this.$router.push('/contacts')
    },
    detailsClick() {
      this.$router.push('/details')
    },
    queryClick() {
      this.$router.push('/schedule')
    },
    activeClick() {
      this.$toast.loading({
        duration: 3,
        message: '加载中...',
        forbidClick: true
      })
      console.log(this.active)
    }
  }
}
</script>
<style>
.order .van-tab--active {
  font-weight: 600;
  font-size: 17px;
}
</style>
<style lang='scss'  scoped>
.order {
  .orderlist {
    width: 92%;
    margin: 10px auto;
    background: #fff;
    .orderHead {
      padding: 5px 14px;
      .orderBottom {
        width: 100%;
        overflow: hidden;
        border-bottom: 1px solid #ccc;
      }
      .orderImg {
        width: 45px;
        height: 45px;
        display: block;
        float: left;
      }
      .orderText {
        font-size: 14px;
        line-height: 45px;
        color: #3b3453;
        font-weight: 600;
        float: left;
      }
      .orderApply {
        font-size: 12px;
        line-height: 45px;
        color: #ccc;
        margin-left: 10px;
        float: left;
      }
      .orderAsh {
        width: 20px;
        height: 20px;
        display: block;
        float: right;
        margin: 12px;
      }
    }
    .orderCard {
      padding: 0 14px;
      overflow: hidden;
      .orderText {
        font-size: 14px;
        line-height: 35px;
        color: #3b3453;
        font-weight: 600;
        margin-left: 10px;
        float: left;
      }
      .orderApply {
        font-size: 12px;
        line-height: 35px;
        color: #ccc;
        float: left;
      }
      .orderAsh {
        float: right;
        color: #f78400;
        margin: 7px;
      }
    }
    .orderTime {
      padding: 2px 14px;
      font-size: 12px;
      color: #ccc;
    }
    .orderButton {
      padding: 10px 14px;
      .but {
        width: auto;
        height: 26px;
        margin: 0 5px;
        font-size: 10px;
        line-height: 26px;
      }

      .query {
        background: #f78400;
        border: 1px solid #f78400;
      }
    }
  }
}
</style>
