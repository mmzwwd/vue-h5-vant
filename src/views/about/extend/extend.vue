<template>
  <div class='extend'>
    <div class="banner">
      <div class="banner-div">
        <div class="banner-box" v-for="(item, index) in bannerList" :style="{ backgroundImage:'url('+ item.image+')'}">
          <p class="p1">{{item.title}}</p>
          <p class="p2">{{item.subtitle}}</p>
        </div>
      </div>
    </div>
    <div class="title">单银行海报</div>
    <div class="posterList">
      <div class="list-contain" v-for="posterItem in posterList ">
        <p class="list-img"><span><img src="https://m.rong360.com/static/img/credit/bank/3.png" alt=""></span></p>
        <p class="list-name">{{posterItem.name}}</p>
        <div class="num">
          <span class="num-span1"></span>
          <span class="num-span2"> 1张 </span>
          <span class="num-span3"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'extend',
  data() {
    return {
      posterList: [
        {
          name: '光大银行'
        },
        {
          name: '光大银行'
        },
        {
          name: '光大银行'
        },
        {
          name: '光大银行'
        },
        {
          name: '光大银行'
        },
        {
          name: '光大银行'
        },
        {
          name: '光大银行'
        }
      ],
      bannerList: [
        {
          image: require('../../../assets/images/extend.png'),
          title: '理事招募海报',
          subtitle: '扫码完成招募'
        },
        {
          image: require('../../../assets/images/extend1.png'),
          title: '全银行海报',
          subtitle: '直接办理全银行信用卡'
        },
        {
          image: require('../../../assets/images/extend3.png'),
          title: '自动结算银行海报',
          subtitle: '无需手动查询自动结算'
        }
      ]
    }
  },
  components: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style lang="scss" scoped>
.extend {
  color: #3b3453;
  .banner {
    width: 98%;
    height: 70px;
    margin-top: 22px;
    overflow: hidden;
    .banner-div::-webkit-scrollbar {
      display: none;
    }
    .banner-div {
      overflow: scroll;
      overflow-x: scroll;
      white-space: nowrap;
      .banner-box {
        width: 132px;
        height: 70px;
        margin-left: 20px;
        border-radius: 8px;
        background-size: cover;
        background-repeat: no-repeat;
        display: inline-block;
        text-indent: 8px;
        overflow: hidden;
        .p1 {
          margin-top: 10px;
          font-weight: 700;
          line-height: 30px;
          font-size: 14px;
          color: #fff;
        }
        .p2 {
          font-weight: 700;
          font-size: 12px;
          color: #fff;
        }
      }
    }
  }
  .title {
    font-size: 20px;
    line-height: 30px;
    font-weight: 700;
    padding: 20px;
  }
  .posterList {
    margin: 14px;
    flex-wrap: wrap;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    .list-contain {
      width: 30%;
      height: 100px;
      background: #fff;
      border-radius: 8px;
      margin: 0 5px 10px 5px;
      .list-img {
        width: 30px;
        height: 30px;
        border: 1px solid #dcdbe9;
        border-radius: 50%;
        margin: 0 auto;
        span {
          width: 80%;
          text-align: center;
          margin: 8px 0 0 4px;
        }
        img {
          width: 80%;
        }
      }
      .list-name {
        font-size: 14px;
        font-weight: 700;
        color: #3b3453;
        margin: 6px 0;
        text-align: center;
      }
      .num {
        text-align: center;
        .num-span1 {
          width: 14px;
          height: 1px;
          overflow: hidden;
          background: linear-gradient(90deg, #f3f3f3, #9a99a3);
          display: inline-block;
          vertical-align: middle;
        }
        .num-span2 {
          color: #9a99a3;
          font-size: 12px;
        }
        .num-span3 {
          width: 14px;
          height: 1px;
          overflow: hidden;
          background: linear-gradient(-90deg, #f3f3f3, #9a99a3);
          display: inline-block;
          vertical-align: middle;
        }
      }
    }
  }
}
</style>
