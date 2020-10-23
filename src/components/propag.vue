<template>
  <div class='singleposter'>
    <div class="poster-lists">
      <img class="poster-img" :src="require('./../assets/images/sing.png')" alt="">
      <div class="poster-div">
        <div class="poster-div-t">
          <img class="poster-div-img" :src="require('./../assets/images/eem.png')" alt="">
        </div>
        <div class="poster-ts">扫描二维码 申请信用卡</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'singleposter',
  data() {
    return {}
  },
  components: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style lang="scss"  scoped>
.singleposter {
  width: 76%;
  margin: 0 auto;
  padding-top: 10px;
  .poster-lists {
    position: relative;
  }
  .poster-img {
    width: 100%;
  }
  .poster-div {
    position: absolute;
    bottom: 25px;
    right: 15px;
    width: 84x;
    height: 88px;
    .poster-div-t {
      padding: 4px;
      background: #fff;
    }
    .poster-div-img {
      width: 76px;
      height: 76px;
      display: block;
    }
    .poster-ts {
      zoom: 0.7;
      font-size: 11px;
      //   letter-spacing: 1px;
      color: #fff;
      height: 12px;
      line-height: 16px;
    }
  }
}
</style>
