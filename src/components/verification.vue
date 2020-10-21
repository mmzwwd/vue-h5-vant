<template>
  <div class='verification'>
    <van-button color="#F78400" plain type="default" v-show="show" @click="getCode" round size="small">获取验证码</van-button>
    <van-button color="#a6a9ad" plain type="default" disabled v-show="!show" round size="small">{{count}} s</van-button>
  </div>
</template>

<script>
export default {
  name: 'verification',
  data() {
    return { show: true, count: '', timer: null }
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    getCode() {
      const TIME_COUNT = 60
      if (!this.timer) {
        this.count = TIME_COUNT
        this.show = false
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count--
          } else {
            this.show = true
            clearInterval(this.timer)
            this.timer = null
          }
        }, 1000)
      }
    }
  }
}
</script>
<style  scoped>
.verification {
  width: 100px;
}
</style>
