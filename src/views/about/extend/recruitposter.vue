<template>
  <div class='recruitposter'>
    <div class="propag">
      <propagate :propaglist="propaglist"> </propagate>
    </div>
    <div class="code">
      <span class="span1">邀请码：{{invite}}</span>
      <span class="span2" @click="copyLink(invite,'.span2')">复制</span>
    </div>
    <div class='tip'>长按图片可保存海报</div>
    <div class="btn">
      <van-button class="btn-button" @click="copyLink(jumpLink,'.btn-button')" color="#ffa347" round block type="info" native-type="submit">
        复制链接
      </van-button>
    </div>
  </div>
</template>

<script>
import propagate from '@/components/att'
import Clipboard from 'clipboard'
import Vue from 'vue'
import { Dialog } from 'vant'
import u from "@/utils/publicMethod";
export default {
  name: 'recruitposter',
  data() {
    return {
      invite:'682gbsl',
      jumpLink:'https://www.baidu.com/',
      propaglist: [
        {
        url:require('../../../assets/images/sing.png'),
        picture_path:require('../../../assets/images/tx.jpg'),
        show:true,
        },
        {
        url:require('../../../assets/images/sing.png'),
        picture_path:require('../../../assets/images/tx.jpg'),
        show:true,
        },
        {
        url:require('../../../assets/images/sing.png'),
        picture_path:require('../../../assets/images/tx.jpg'),
        show:true,
        },
        {
        url:require('../../../assets/images/sing.png'),
        picture_path:require('../../../assets/images/tx.jpg'),
        show:true,
        },
        
      ]
    }
  },
  components: { propagate },
  created() {},
  mounted() {},
  methods: {
    copyLink(data,doms) {
      u.copyLink(data,doms)
    }
  }
}
</script>
<style lang='scss' scoped>
.code {
  text-align: center;
  padding-top: 20px;
  .span1 {
    font-size: 18px;
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
</style>
