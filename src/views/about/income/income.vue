<template>
  <div class='income'>
    <div class="tabView">
      <div class="header-tab">
        <div :class='["tab", {"active":textShow}]' @click="tabClick(true)">收入记录</div>
        <div :class='["tab", {"active":!textShow}]' @click="tabClick(false)">提现记录</div>
      </div>
      <div class="search-btn" @click="bannerClick">搜索</div>
    </div>
    <div class="tab-view">
      <div :class='["tabview", {"active":tabviewShow}]' @click="tabviewClick(true)">推卡收入</div>
      <div :class='["tabview", {"active":!tabviewShow}]' @click="tabviewClick(false)">带货收入</div>
    </div>
    <!-- <van-empty class="custom-image" :image="require('../../../assets/images/static.png')" description="暂无数据" /> -->
    <div class="contentList">
      <div class="list">
        <div class="time">
          <div class="timeLeft">2020-09-07 20:55</div>
          <div class="timeRight">收入:$10.10</div>

        </div>
        <div class="content">
          <div class="contentLeft">
            <p>出事将</p>
            <div>**林 | 188****908</div>
            <div> 09.16 15：29</div>
          </div>
          <!-- <div class="contentRight">
            <div class="contentRight1">+10.00</div>
            <div class="contentRight2">提现成功</div>
            <div class="contentRight3">《</div>
          </div> -->
          <div class="contentRight">
            <div class="contentRight1 contentRight4">+10.00</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'income',
  data() {
    return {
      textShow: true,
      tabviewShow: true
    }
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    bannerClick() {
      this.$router.push('/search')
    },
    tabviewClick(type) {
      this.$toast.loading({
        // message: '加载中...',
        duration: 1000,
        forbidClick: true
      })
      // 手动清除 Toast
      this.tabviewShow = type
      // this.$toast.clear()
    },
    tabClick(type) {
      this.$toast.loading({
        // message: '加载中...',
        duration: 1000,
        forbidClick: true
      })
      console.log(11111111)
      // 手动清除 Toast
      this.textShow = type
      // this.$toast.clear()
      console.log(22222222222)
    },
    onSearch() {}
  }
}
</script>
<style lang='scss' scoped>
.income {
  .tabView {
    overflow: hidden;
    width: 92%;
    height: 36px;
    padding: 14px 15px 10px;
    margin: 0 auto;
    .header-tab {
      float: left;
      .tab {
        font-size: 16px;
        color: #3b3453;
        margin-right: 15px;
        line-height: 28px;
        float: left;
      }
      .active {
        font-size: 20px;
        font-weight: 700;
        position: relative;
      }
      .active:after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        right: 0;
        width: 100%;
        height: 3px;
        background-image: linear-gradient(90deg, #f98400, #ffa347);
      }
    }
    .search-btn {
      float: right;
      line-height: 28px;
      font-size: 14px;
      padding: 0 10px;
    }
  }
  .tab-view {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 10px;
    padding-left: 15px;
    width: 100%;
    height: 50px;
    background-image: linear-gradient(-90deg, #aab2c4, #979eaf);
    .tabview {
      margin-right: 15px;
      padding: 0 10px;
      height: 20px;
      border-radius: 8px;
      line-height: 20px;
      border: 1px solid hsla(0, 0%, 100%, 0.6);
      font-family: PingFangSC-Regular;
      font-size: 12px;
      color: #fff;
      letter-spacing: 0;
      text-align: center;
    }
    .active {
      color: #333;
      background-color: #fff;
    }
  }
  .contentList {
    width: 92%;
    margin: 0 auto;
    .list {
      margin: 10px auto;
      .time {
        width: 100%;
        height: 40px;
        color: #909399;
        line-height: 40px;
        font-size: 12px;
        .timeLeft {
          float: left;
        }
        .timeRight {
          float: right;
        }
      }
      .content {
        padding: 10px 18px;
        background: #fff;
        overflow: hidden;
        .contentLeft {
          float: left;
          p {
            font-size: 16px;
            line-height: 24px;
          }
          div {
            zoom: 0.8;
            font-size: 10px;
            line-height: 20px;
            color: #909399;
          }
        }
        .contentRight {
          float: right;
          width: 100px;
          text-align: center;
          height: 46px;
          margin: 4px 0;
          position: relative;
          .contentRight1 {
            font-size: 17px;
            line-height: 26px;
          }
          .contentRight2 {
            font-size: 14px;
            line-height: 20px;
            color: #67c23a;
          }
          .contentRight3 {
            position: absolute;
            top: 14px;
            right: 6px;
          }
          .contentRight4 {
            margin-top: 8px;
          }
        }
      }
    }
  }
}
</style>
