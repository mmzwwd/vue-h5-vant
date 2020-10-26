<template>
  <div class='singleposter'>
    <div class="poster-lists" ref="qrmain" v-show="show">
      <img class="poster-img" :src="require('./../assets/images/sing.png')" alt="">
      <div class="poster-div">
        <div class="poster-div-t">
          <div ref='imgss'></div>
          <!-- <img class="poster-div-img" :src="require('./../assets/images/eem.png')" alt=""> -->
        </div>
        <div class="poster-ts">
          <div>
            扫描二维码 申请信用卡
          </div>
        </div>
      </div>
    </div>
    <img class="poster-listimg" src='' ref='img' v-show="!show" alt="">
  </div>
</template>

<script>
import { qrcanvas } from 'qrcanvas'
import html2canvas from 'html2canvas'
export default {
  name: 'singleposter',
  data() {
    return {
      show: true
    }
  },
  components: {},
  created() {},
  mounted() {
    this.generateQrcode()
  },
  methods: {
    async generateQrcode() {
      this.showQr = true
      let canvas1 = qrcanvas({
        data: decodeURIComponent('http://daoshi.yingheit.com/'),
        size: 80
      })
      setTimeout(() => {
        this.$refs.imgss.appendChild(canvas1)
        html2canvas(this.$refs.qrmain).then(canvas => {
          this.$refs.imgss.innerHTML = ''
          console.log(canvas.toDataURL())
          this.$refs.img.src = canvas.toDataURL()
          this.show = false
        })
      }, 100)
    }
  }
}
</script>
<style>
.poster-div-t canvas {
  width: 100%;
}
</style>
<style lang="scss"  scoped>
.singleposter {
  // width: 76%;
  width: 100%;
  margin: 0 auto;
  padding-top: 10px;
  .poster-listimg {
    width: 280px;
    margin: 0 auto;
    position: relative;
    display: block;
  }
  .poster-lists {
    width: 280px;
    margin: 0 auto;
    position: relative;
  }
  .poster-img {
    width: 100%;
  }
  .poster-div {
    position: absolute;
    bottom: 25px;
    right: 15px;
    width: 87.5555px;
    // height: 92px;
    z-index: 111;
    overflow: hidden;
    .poster-div-t {
      width: 76px;
      padding: 4px 4px 2px 4px;
      background: #fff;
    }
    .poster-div-img {
      width: 100%;
      height: 76px;
      display: block;
    }
    .poster-ts {
      width: 100%;
      // zoom: 0.7;
      // letter-spacing: 1px;
      color: #fff;
      height: 12px;
      line-height: 16px;
      div {
        width: 176px;
        font-size: 10px;
        margin-left: -26px;
        transform: scale(0.7);
      }
    }
  }
}
</style>
