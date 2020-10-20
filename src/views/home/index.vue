<!-- home -->
<template>
  <div class="index-container">
    <div class="warpper">
      <div class="warpper-box">
        <van-swipe class="my-swipe" style="height: 120px;" :autoplay="5000" indicator-color="white">
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <img :src="image" alt="">
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
    <div class="banner">
      <div class="banner-div">
        <img class="banner-img" v-for="(image, index) in images" :key="index" :src="image" alt="">
      </div>
    </div>
    <div class="text">
      <div class="text-span">推荐银行</div>
      <div class="text-span-one" @click="policy">奖励政策</div>
    </div>
    <div class="bank-list">
      <div class="copartner" v-for="item in list" @click="cardListCliack(item.id)">
        <div class="logo"><img style="width: 100%;" src="https://m.rong360.com/static/img/credit/bank/3.png" alt=""></div>
        <div class="name">{{item.name}}</div>
        <div class="tags"><span style="background: rgba(250,100,0,.08);margin: 0 auto;">终审T+2自动结算</span></div>
        <div class="desc"><span>首刷赠送饿了么会员</span></div>
        <div class="red-btn">奖励￥170</div>
      </div>
    </div>
    <!-- <van-cell icon="success" v-for="item in list" :key="item" :title="item" /> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: './../../assets/img/image/backg.png',
      images: [
        require('./../../assets/img/MovieDetails/jz2.jpg'),
        require('./../../assets/img/MovieDetails/jz2.jpg'),
        require('./../../assets/img/MovieDetails/jz3.jpg'),
        require('./../../assets/img/MovieDetails/jz4.jpg')
      ],
      list: [
        { name: '光大银行', id: 123 },
        { name: '光大银行', id: 123 },
        { name: '光大银行', id: 123 },
        { name: '光大银行', id: 123 },
        { name: '光大银行', id: 123 },
        { name: '光大银行', id: 123 },
        { name: '光大银行', id: 123 },
        { name: '光大银行', id: 123 },
        { name: '光大银行', id: 123 },
        { name: '光大银行', id: 123 },
        { name: '光大银行', id: 123 },
        { name: '光大银行', id: 123 },
        { name: '光大银行', id: 123 },
        { name: '光大银行', id: 123 }
      ]
    }
  },

  computed: {},

  mounted() {},

  methods: {
    policy() {
      this.$router.push('/pricePolicy')
    },
    cardListCliack(ids) {
      this.$router.push({ path: '/cardList', query: { id: ids } })
    }
  }
}
</script>
<style>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  /* background-color: #39a9ed; */
}
.my-swipe .van-swipe-item img {
  width: 96%;
  height: 100%;
  margin: 0 auto;
  border-radius: 10px;
}
</style>
<style lang="scss" scoped>
.index-container {
  .warpper {
    width: 100%;
    height: 100px;
    background-image: url(./../../assets/img/image/backg.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: -6vw;
    .warpper-box {
      width: 90%;
      margin: 0 auto;
      height: 120px;
      padding-top: 20px;
    }
  }
  .banner {
    width: 98%;
    height: 70px;
    margin-top: 52px;
    overflow: hidden;
    .banner-div::-webkit-scrollbar {
      display: none;
    }
    .banner-div {
      overflow: scroll;
      overflow-x: scroll;
      white-space: nowrap;
      .banner-img {
        width: 140px;
        height: 70px;
        margin-left: 20px;
        border-radius: 8px;
        // float: left;
        text-align: center;
      }
    }
  }
  .text {
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
  .bank-list {
    margin: 16px;
    flex-wrap: wrap;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    .copartner {
      width: 31%;
      overflow: hidden;
      height: auto;
      background: #fff;
      border-radius: 10px;
      margin: 0 4px;
      margin-bottom: 10px;
      .logo {
        width: 20px;
        height: 20px;
        margin: 0 auto;
      }
      .name {
        text-align: center;
        font-size: 16px;
        color: #3b3453;
        font-weight: 700;
        margin: 10px 0;
      }
      .tags {
        color: #f78400;
        line-height: 20px;
        font-size: 10px;
        margin-bottom: 8px;
        padding: 0 2px;
        text-align: center;
        display: flex;
      }
      .desc {
        width: 90%;
        color: #9a99a3;
        display: flex;
        font-size: 10px;
        margin: 0 auto;
        margin-bottom: 8px;
        white-space: nowrap;
        overflow: hidden;
      }
      .red-btn {
        background: #ff3737;
        text-align: center;
        line-height: 24px;
        color: #fff;
      }
    }
  }
}
</style>
