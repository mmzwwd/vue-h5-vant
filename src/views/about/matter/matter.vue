<template>
  <div class='matter'>
    <div class="content" v-for="(item,index) in list" :key="index">
      <div class="title">{{item.title}}</div>
      <div :class='["content-list", {"hide-over":!item.openShow}]' v-html="item.content">
      </div>
      <div class="collapse" @click="collapse(index)">
        <span v-show="!openShow">展开</span>
        <span v-show="openShow">收起</span>
        <span id="three" :class="[item.openShow?'show':'hide']"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'matter',
  data() {
    return {
      openShow: true,
      list: [
        {
          title: '申请流程常见问题',
          content:
            '【待查询】目前平台自动结算的银行，不用查询进度，达到结算规则后3个工作日左右可回来查看返佣。 <br>  <br>其余银行一般达到结算规则后3个工作日左右，客户或者合伙人需要到平台上进行进度查询，各家银行审核进度不同，状态更新也有延迟；【待查询】目前平台自动结算的银行，不用查询进度，达到结算规则后3个工作日左右可回来查看返佣。【待查询】目前平台自动结算的银行，不用查询进度，达到结算规则后3个工作日左右可回来查看返佣。 <br>  <br>其余银行一般达到结算规则后3个工作日左右，客户或者合伙人需要到平台上进行进度查询，各家银行审核进度不同，状态更新也有延迟；【待查询】目前平台自动结算的银行，不用查询进度，达到结算规则后3个工作日左右可回来查看返佣。'
        },
        {
          title: '申请流程常见问题',
          content:
            '【待查询】目前平台自动结算的银行，不用查询进度，达到结算规则后3个工作日左右可回来查看返佣。 <br>  <br>其余银行一般达到结算规则后3个工作日左右，客户或者合伙人需要到平台上进行进度查询，各家银行审核进度不同，状态更新也有延迟；【待查询】目前平台自动结算的银行，不用查询进度，达到结算规则后3个工作日左右可回来查看返佣。【待查询】目前平台自动结算的银行，不用查询进度，达到结算规则后3个工作日左右可回来查看返佣。 <br>  <br>其余银行一般达到结算规则后3个工作日左右，客户或者合伙人需要到平台上进行进度查询，各家银行审核进度不同，状态更新也有延迟；【待查询】目前平台自动结算的银行，不用查询进度，达到结算规则后3个工作日左右可回来查看返佣。'
        },
        {
          title: '申请流程常见问题',
          content:
            '【待查询】目前平台自动结算的银行，不用查询进度，达到结算规则后3个工作日左右可回来查看返佣。 <br>  <br>其余银行一般达到结算规则后3个工作日左右，客户或者合伙人需要到平台上进行进度查询，各家银行审核进度不同，状态更新也有延迟；【待查询】目前平台自动结算的银行，不用查询进度，达到结算规则后3个工作日左右可回来查看返佣。【待查询】目前平台自动结算的银行，不用查询进度，达到结算规则后3个工作日左右可回来查看返佣。 <br>  <br>其余银行一般达到结算规则后3个工作日左右，客户或者合伙人需要到平台上进行进度查询，各家银行审核进度不同，状态更新也有延迟；【待查询】目前平台自动结算的银行，不用查询进度，达到结算规则后3个工作日左右可回来查看返佣。'
        },
        {
          title: '申请流程常见问题',
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
.matter {
  padding: 20px;
}
.content {
  padding: 28px 20px;
  margin: 0 auto;
  margin-bottom: 16px;
  border-radius: 6px;
  background: #fff;
  .title {
    font-size: 15px;
    line-height: 18px;
    color: #333;
    margin-bottom: 10px;
  }
  .content-list {
    font-size: 12px;
    line-height: 20px;
    color: #999;
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
    .hide {
      transform: rotate(135deg);
      margin-bottom: 3px;
      margin-left: 4px;
    }
    .show  {
      transform: rotate(-45deg);
      margin-bottom: -1px;
      margin-left: 4px;
    }
  }
}
</style>
