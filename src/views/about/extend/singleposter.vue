<template>
  <div class='singleposter'>
    <div class="propag">
      <propag> </propag>
    </div>
    <div class="code">
      <span class="span1">申卡码：682gbsl</span>
      <span class="span2">复制</span>
    </div>
    <div class='tip'>长按图片可保存海报</div>
    <div class="btn">
      <van-button class="btn-button" color="#ffa347" round block type="info" native-type="submit">
        复制链接
      </van-button>
    </div>
    <div class="protocol">
      <span>我已了解</span>
      <span class="light" @click="treatyClick()">《理事推广协议》</span>
    </div>
  </div>
</template>

<script>
import propag from '@/components/propag'
export default {
  name: 'singleposter',
  data() {
    return {}
  },
  components: { propag },
  created() {},
  mounted() {},
  methods: {
    treatyClick() {
      this.$router.push('/authorization')
    }
  }
}
</script>
<style lang="scss" scoped>
.singleposter {
  width: 100%;
  padding: 10px 0;
  margin: 0 auto;

  .propag {
    // margin: 0 auto;
  }
  .code {
    text-align: center;
    padding-top: 20px;
    .span1 {
      font-size: 16px;
      color: #3b3453;
    }
    .span2 {
      background: rgba(250, 100, 0, 0.1);
      color: #f78400;
      border: none;
      padding: 4px 5px;
      margin-left: 10px;
      border: 2px;
    }
  }
  .tip {
    text-align: center;
    color: #9a99a3;
    font-size: 12px;
    padding: 20px 0 20px;
  }
  .btn {
    width: 50%;
    height: 34px;
    line-height: 34px;
    margin: 0 auto;
    font-size: 16px;
    // background: linear-gradient(90deg, #f98400, #ffa347);
    // border-radius: 20px;
    text-align: center;
    color: #fff;
    .btn-button {
      height: 34px;
      line-height: 34px;
    }
  }
  .protocol {
    font-size: 12px;
    color: #666;
    margin-top: 10px;
    text-align: center;
    .light {
      color: #f78400;
    }
  }
}
</style>
