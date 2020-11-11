<template>
<div class="cashOut">
    <div class="cash">
       <van-steps direction="vertical" :active="0" :active-color="'#f78400'" :inactive-color="'#909399'">
        <van-step v-for="item in detailsList" :key="item.title">
          <div class="h5">{{item.title}}</div>
          <div>{{item.content}} </div>
          <div>{{item.times}} </div>
        </van-step>
      </van-steps>
    </div>
    <div class="content">
        <van-cell-group>
            <van-cell title="提现到" value="招商银行(3553)" />
            <van-cell title="提现金额" value="￥300.00"  />
            <!-- <van-field v-model="value" label="提现金额"   input-align="right" placeholder="请输入提现金额" /> -->
        </van-cell-group>
        <div class="button">
            <van-button @click="goBack" color="#ffa347" round block type="info" native-type="submit">
                完成
            </van-button>
        </div>
    </div>
</div>
</template>

<script>
import Vue from 'vue';
import { CellGroup } from 'vant';
Vue.use(CellGroup);
export default {
    //import引入的组件
    components: {},
    data() {
    return {
      detailsList: [
        { title: '提交成功', content: '提现请求已提交',times:'2020-10-19 17:55:09' },
        { title: '审核中', content: '将在1-3个工作日内返回处理结果',times:'2020-10-19 17:55:09'  },
        { title: '提现到账', content: '',times:'2020-10-19 17:55:09'  },
      ]
    };
    },
    //方法集合
    methods: {

    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {

    },
    methods:{
       goBack(){
        this.$router.go(-1)
       } 
    }
    
}
</script>
<style lang="scss" scoped>
.cashOut{
    height: 100%;
    overflow: hidden;
     .cash {
    width: 80%;
    border-radius: 4px;
    margin: 0 auto;
    padding: 10px;
    margin-top: 10px;
    font-weight:400;
    background: #fff;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    div{
    font-size: 10px;
    }
    .h5{
    font-size: 14px;
    line-height: 22px;
    }
  }
  .content{
    padding: 10px;
    margin-top: 10px;
    height: calc( 100% - 30px);
    background: #fff;
  }
  .button{
      padding: 20px  30px;
  }
}
</style>