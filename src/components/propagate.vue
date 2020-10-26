<template>
  <div class='singleposter'>
    <van-swipe class="my-swipe" :loop="false" :width="288" :show-indicators="false" :swipeTo="3">
      <van-swipe-item v-for="(item,index) in propaglists" :key="index">
        <div class="poster-lists">
          <img class="poster-img" :src="require('./../assets/images/sing.png')" alt="">
          <div class="poster-div">
            <img class="poster-div-img" :src="require('./../assets/images/eem.png')" alt="">
            <div class="poster-ts">扫一扫 0元创业</div>
            <!-- <div class="poster-ts">扫描二维码 申请信用卡</div> -->
          </div>
          <div class="poster-news">
            <div class="news-div">
              <img class="news-img" :src="item" alt="">
              <div class="news-span">
                <div class="news-span2">圥忈</div>
                <div class="news-span3">电话:18810563078</div>
              </div>
            </div>
            <div class="service-title">我是您的专属客服,您有任何关于信用卡</div>
            <div class="service-title">申请的相关问题都可以随时向我咨询</div>
          </div>
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: 'singleposter',
  props: {
    propaglist: Array
  },
  data() {
    return {
      propaglists: this.propaglist
    }
  },
  watch: {
    propaglist(val) {
      this.propaglists = val
    }
  },
  components: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style>
.my-swipe .van-swipe-item {
  width: 300px;
}
</style>
<style lang="scss"  scoped>
.singleposter {
  width: 100%;
  margin: 0 auto;
  padding-top: 10px;
  .poster-lists {
    width: 93%;
    margin: 0 auto;
    position: relative;
  }
  .poster-img {
    width: 100%;
  }
  .poster-div {
    position: absolute;
    bottom: 20px;
    right: 15px;
    width: 75px;
    height: 88px;
    background: #fff;
    .poster-div-img {
      width: 68px;
      height: 68px;
      display: block;
      margin: 4px auto;
    }
    .poster-ts {
      zoom: 0.7;
      font-size: 10px;
      letter-spacing: 1px;
      color: #000;
      height: 12px;
      line-height: 13px;
      text-align: center;
    }
  }
  .poster-news {
    width: 180px;
    height: 88px;
    // background: chartreuse;
    position: absolute;
    bottom: 20px;
    left: 15px;
    .news-div {
      width: 100%;
      height: 52px;
      overflow: hidden;
      .news-img {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        float: left;
      }
      .news-span {
        width: 120px;
        float: right;
        .news-span2 {
          height: 26px;
          line-height: 26px;
          font-size: 18px;
          color: #fff;
          zoom: 0.8;
        }
        .news-span3 {
          height: 26px;
          line-height: 26px;
          font-size: 14px;
          color: #fff;
          zoom: 0.8;
        }
      }
    }
    .service-title {
      text-align: center;
      font-size: 10px;
      zoom: 0.7;
      letter-spacing: 1px;
      color: #fff;
    }
  }
}
</style>
