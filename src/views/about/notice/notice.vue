<template>
  <div class='notice'>
    <div class="content" v-for="(item,index) in list" :key="index">
      <div class="title"><span class="top">置顶</span> {{item.title}}</div>
      <div class="time">{{item.tiem}}</div>
      <div class="content-list" v-if="item.openShow" v-html="item.content"></div>
      <div class="content-list" v-if="item.openShow && item.img">
        <img class="content-img" :src="item.img" alt="">

      </div>
      <div class="collapse" @click="collapse(index)">
        <span v-show="!item.openShow">展开</span>
        <span v-show="item.openShow">收起</span>
        <span id="three" :class="[item.openShow?'show':'hide']"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'notice',
  data() {
    return {
      openShow: true,
      list: [
        {
          title: '全自动结算银行-日期通知（每天10:10分更新）',
          tiem: '2020-09-09 20:19',
          content:
            '【待查询】目前平台自动结算的银行，不用查询进度，达到结算规则后3个工作日左右可回来查看返佣。 <br>  <br>其余银行一般达到结算规则后3个工作日左右，客户或者合伙人需要到平台上进行进度查询，各家银行审核进度不同，状态更新也有延迟；【待查询】目前平台自动结算的银行，不用查询进度，达到结算规则后3个工作日左右可回来查看返佣。【待查询】目前平台自动结算的银行，不用查询进度，达到结算规则后3个工作日左右可回来查看返佣。 <br>  <br>其余银行一般达到结算规则后3个工作日左右，客户或者合伙人需要到平台上进行进度查询，各家银行审核进度不同，状态更新也有延迟；【待查询】目前平台自动结算的银行，不用查询进度，达到结算规则后3个工作日左右可回来查看返佣。'
        },
        {
          title: '申请流程常见问题',
          tiem: '2020-09-09 20:19',
          img: 'https://static.rong360.com/cimg/93/93c18ec7be4008a4197328d9ccd97dfc21eb2105.png',
          content:
            '【待查询】目前平台自动结算的银行，不用查询进度，达到结算规则后3个工作日左右可回来查看返佣。 <br>  <br>其余银行一般达到结算规则后3个工作日左右，客户或者合伙人需要到平台上进行进度查询，各家银行审核进度不同，状态更新也有延迟；【待查询】目前平台自动结算的银行，不用查询进度，达到结算规则后3个工作日左右可回来查看返佣。【待查询】目前平台自动结算的银行，不用查询进度，达到结算规则后3个工作日左右可回来查看返佣。 <br>  <br>其余银行一般达到结算规则后3个工作日左右，客户或者合伙人需要到平台上进行进度查询，各家银行审核进度不同，状态更新也有延迟；【待查询】目前平台自动结算的银行，不用查询进度，达到结算规则后3个工作日左右可回来查看返佣。'
        },
        {
          title: '申请流程常见问题',
          tiem: '2020-09-09 20:19',
          content:
            '【待查询】目前平台自动结算的银行，不用查询进度，达到结算规则后3个工作日左右可回来查看返佣。 <br>  <br>其余银行一般达到结算规则后3个工作日左右，客户或者合伙人需要到平台上进行进度查询，各家银行审核进度不同，状态更新也有延迟；【待查询】目前平台自动结算的银行，不用查询进度，达到结算规则后3个工作日左右可回来查看返佣。【待查询】目前平台自动结算的银行，不用查询进度，达到结算规则后3个工作日左右可回来查看返佣。 <br>  <br>其余银行一般达到结算规则后3个工作日左右，客户或者合伙人需要到平台上进行进度查询，各家银行审核进度不同，状态更新也有延迟；【待查询】目前平台自动结算的银行，不用查询进度，达到结算规则后3个工作日左右可回来查看返佣。'
        },
        {
          title: '申请流程常见问题',
          tiem: '2020-09-09 20:19',
          content:
            '【待查询】目前平台自动结算的银行，不用查询进度，达到结算规则后3个工作日左右可回来查看返佣。 <br>  <br>其余银行一般达到结算规则后3个工作日左右，客户或者合伙人需要到平台上进行进度查询，各家银行审核进度不同，状态更新也有延迟；【待查询】目前平台自动结算的银行，不用查询进度，达到结算规则后3个工作日左右可回来查看返佣。【待查询】目前平台自动结算的银行，不用查询进度，达到结算规则后3个工作日左右可回来查看返佣。 <br>  <br>其余银行一般达到结算规则后3个工作日左右，客户或者合伙人需要到平台上进行进度查询，各家银行审核进度不同，状态更新也有延迟；【待查询】目前平台自动结算的银行，不用查询进度，达到结算规则后3个工作日左右可回来查看返佣。'
        }
      ]
    }
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    datalist() {
      this.list.forEach((item, index) => {
        item.openShow = false
      })
    },
    collapse(inde) {
      console.log(inde)
      //   this.list[inde].openShow = !this.list[inde].openShow
      console.log(this.list[inde].openShow)
      this.$set(this.list[inde], 'openShow', !this.list[inde].openShow)
      console.log(this.list[inde].openShow)
    }
  }
}
</script>
<style lang="scss" scoped>
.notice {
  padding: 20px;
}
.content {
  padding: 28px 20px;
  margin: 0 auto;
  margin-bottom: 16px;
  border-radius: 6px;
  background: #fff;
  .title {
    font-size: 16px;
    line-height: 20px;
    color: #606266;
    margin-bottom: 10px;
    .top {
      color: #fff;
      font-size: 10px;
      padding: 4px 4px 2px 4px;
      border-radius: 4px;
      background-image: linear-gradient(90deg, #ff634c, #ff3737);
    }
  }
  .time {
    color: #909399;
  }
  .content-list {
    font-size: 12px;
    line-height: 20px;
    color: #999;
  }
  .content-img {
    width: 100%;
  }
  .hide-over {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    max-height: 40px;
    line-height: 20px;
  }
  .collapse {
    float: right;
    margin-top: 6px;
    font-size: 12px;
    color: #3880f9;
    #three {
      display: inline-block;
      width: 6px;
      height: 6px;
      border: #3880f9 solid;
      border-width: 1px 1px 0 0;
    }
    .show {
      transform: rotate(135deg);
      margin-bottom: 3px;
      margin-left: 4px;
    }
    .hide {
      transform: rotate(-45deg);
      margin-bottom: -1px;
      margin-left: 4px;
    }
  }
}
</style>
