<template>
  <div class='search'>
<van-search
  v-model="value"
  show-action
  placeholder="输入用户手机号或银行名"
  @search="onSearch"
  clearable
>
  <template #action>
    <div @click="onSearch">搜索</div>
  </template>
</van-search>
   <div class="hot">
       <p>热门搜索</p>
       <div class="hot-item">
         <van-tag  v-for="(item,index) in list" :key="index" class="tag" plain  type="primary">{{item.name}}</van-tag>
       </div>
   </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Tag } from 'vant';
Vue.use(Tag);
export default {
  name: 'search',
  data(){
    return {
      value:'',
      list:[
        {name:"浦发银行"},
        {name:"浦发银行"},
        {name:"浦发银行"},
        {name:"浦发银行"},
        {name:"浦发银行"},


      ]
    }
  },
  components: {},
  created(){},
  mounted(){},
  methods: {
    onSearch(val) {
      Toast(val);
    },
  }
}
</script>
<style lang='scss'  scoped>
.search{
  background: #fff;
  min-height: 100%;
.hot{
  width: 90%;
  margin: 10px auto;
  p{
    line-height: 20px;
    font-size: 14px;
  }
  .hot-item{
    width: 100%;
    margin-top: 10px;
    flex-wrap: wrap;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    .tag{
      padding:4px 8px;
      margin: 5px 5px;
    }
  }
}
}

</style>
