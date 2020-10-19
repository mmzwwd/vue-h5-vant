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
      ]
    }
  },

  computed: {},

  mounted() {},

  methods: {}
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
    height: 100px;
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
}
</style>
