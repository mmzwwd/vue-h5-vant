<template>
  <div>
    <!-- <mt-header fixed title="处方示例">
      <a slot="left" @click="$router.go(-1)">
        <mt-button icon="back"></mt-button>
      </a>
    </mt-header> -->
    <div class="examples">
      <div class="bannerTxt">
        <!-- {{bannerTxt}} -->
      </div>
      <div class="bannerBox">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in propaglists" :key="index">
                <div class="poster-lists" v-show="item.show"   :ref="`qrmain${index}`"  >
                    <img  class="poster-img" :src="item.url" alt="" >
                    <div class="poster-div">
                        <!-- <img :src="require('./../assets/images/eem.png')" alt=""> -->
                        <div :id="'id'+index" class="poster-div-img" :ref="`imgss${index}`" ></div>
                        <div class="poster-ts">扫一扫 0元创业</div>
                        <!-- <div class="poster-ts">扫描二维码 申请信用卡</div> -->
                    </div>
                    <div class="poster-news">
                        <div class="news-div">
                        <img class="news-img" :src="item.picture_path" alt="">
                        <div class="news-span">
                            <div class="news-span2">圥忈</div>
                            <div class="news-span3">电话:18810563078</div>
                        </div>
                        </div>
                        <div class="service-title"><span>我是您的专属客服,您有任何关于信用卡</span> </div>
                        <div class="service-title"><span>申请的相关问题都可以随时向我咨询</span></div>
                    </div>
                </div>
                 <img class="poster-listimg" v-show="!item.show"   src=''  :ref="`imgw${index}`"   alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="bannerIndex">
        <span>{{bannerIndex}}</span>/{{propaglist.length}}
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css'
import { qrcanvas } from 'qrcanvas'
import html2canvas from 'html2canvas'
export default {
    props: {
    propaglist: Array
  },
  data() {
    return {
      show:true,
      propaglists: this.propaglist,
      bannerIndex: 1,
      bannerTxt: '手写的处方',
    };
  },
  mounted() {
    let that = this;
    /* eslint-disable */
    let mySwiper = new Swiper('.swiper-container', {
      direction: 'horizontal', //滑动方向，可设置水平(horizontal)或垂直(vertical)。
      //loop: true, // 设置为true 则开启loop模式
      autoplay: 3000, // 自动切换时间
      slidesPerView: 'auto', // 设置slider容器能够同时显示的slides数量(carousel模式)。类型：number or auto
      centeredSlides: true, // 设定为true时，active slide会居中，而不是默认状态下的居左。
      spaceBetween: 10, // 在slide之间设置距离（单位px）。
      //loopAdditionaSlider: 0, // loop模式下会在slides前后复制若干个slide,，前后复制的个数不会大于原总个数。
      on: {
        slideChangeTransitionEnd: function(){
          console.log(this.activeIndex)
          if(this.activeIndex === 8 || this.activeIndex === 4 ) {
            that.bannerIndex = 1;
          } else  if(this.activeIndex >4 ) {
             that.bannerIndex = this.activeIndex-3;
          }else {
             that.bannerIndex = this.activeIndex+1;
          }
        },
      },
    });
      this.$nextTick(() => {
        this.generateQrcode()
      })
      this.toastloading()
  },
  methods: {
    toastloading(){
    const toast = this.$toast.loading({
      duration: 0, // 持续展示 toast
      forbidClick: true,
      message: '倒计时 3 秒',
    });

    let second = 3;
    const timer = setInterval(() => {
      second--;
      if (second) {
        toast.message = `倒计时 ${second} 秒`;
      } else {
        clearInterval(timer);
        // 手动清除 Toast
        this.$toast.clear();
      }
    }, 1000);
    },
     generateQrcode() {
      let then=this
      this.showQr = true
    for (let i = 0; i < this.propaglists.length; i++) {
     
      // console.log(this.$refs.qrmain1)
        (function(i){
           let canvas1 = qrcanvas({
        data: decodeURIComponent('http://daoshi.yingheit.com/'),
        size: 80
      })
           setTimeout(() => {
          //  console.log(canvas1)
          let refs=then.$refs
          // for(let key in refs){
            refs[`imgss${i}`][0].appendChild(canvas1)
            // refs[imgss][0].appendChild(canvas1)
            // console.log(i)
            // console.log(refs[`imgss${i}`][0])
            html2canvas(refs[`qrmain${i}`][0] ,{
            useCORS: true, // 【重要】开启跨域配置
              allowTaint: true,//允许跨域图片
              taintTest: false,//是否在渲染前测试图片
              }).then(canvas => {
              refs[`imgss${i}`][0].innerHTML = ''
              // console.log(canvas.toDataURL())
              // console.log( refs[`imgw${i}`])
              refs[`imgw${i}`][0].src = canvas.toDataURL()
            })
          // }     
           then.propaglists[i].show=false     
        }, 100*i)
        })(i)
      }
    }
  }
};
</script>
<style>
  .poster-div canvas {
  width: 100%;
}
</style>
<style lang="scss" scoped>
.examples{
   .poster-listimg {
    width: 280px;
    margin: 0 auto;
    position: relative;
    display: block;
    border-radius:8px !important;
  }
    .poster-lists {
    width: 93%;
    margin: 0 auto;
    height: 384px;
    // position: relative;
  }
  .poster-img {
     width:100%;
    height:100vh;
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
      width: 100%;
      transform: scale(0.9);
      font-size: 10px;
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
        transform: scale(0.8);
        }
        .news-span3 {
          height: 26px;
          line-height: 26px;
          font-size: 14px;
          color: #fff;
        transform: scale(0.8);
        }
      }
    }
    .service-title {
      text-align: center;
      font-size: 10px;
      transform: scale(0.8);
      letter-spacing: 1px;
      height: 16px;
      color: #fff;
      margin: 0;
      width:100%;
      // overflow: hidden;
      word-break:keep-all;/* 不换行 */
      white-space:nowrap;/* 不换行 */
      margin-left: -16px;
      span{
        text-align: center;
        margin:0 auto;
      }
    }
  }
}
.bannerTxt{
  height: 60px;
  line-height: 60px;
  text-align: center;
  color: #666666;
  font-size: 15px;
}
.bannerIndex{
  line-height: 40px;
  text-align: center;
  color: #666666;
  font-size: 15px;
  text-align: center;
  span{
    color: #b5654d;
  }
}
.bannerBox{
  position: relative;
  height: 380px;
}
.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-container .swiper-wrapper .swiper-slide {
  width: 80% !important;
  overflow: hidden;
  display: flex;
  align-items: center;
}
.swiper-container .swiper-wrapper .swiper-slide img {
  // width: 100%;
//   height: 380px;
  border-radius: 5px;
}
.swiper-container .swiper-wrapper .swiper-slide-prev,.swiper-container .swiper-wrapper .swiper-slide-next{
  height: 340px !important;
  margin-top: 20px;
}
.swiper-container .swiper-wrapper .swiper-slide-prev img,.swiper-container .swiper-wrapper .swiper-slide-next img{
  width: 100%;
  height: 100%;
}
</style>