<template>
  <div class="center">
    <!-- 头部 -->
    <header>
      <div class="beijin"></div>
      <div class="flex aic users pixed" style="width:50%;">
        <img :src="require('../../../assets/img/personal/tx.jpg')" class="imege" />
        <router-link v-if="!isLogin" to="/login" class="f16 fff ml-20">立即登录</router-link>
        <span v-else class="f16 fff ml-20">用户 {{username.slice(-4)}}</span>
      </div>
    </header>

    <!-- 主体 -->
    <main class="mt-10">
      <div class="bg-fff">
        <van-cell title="我的订单" isLink to="/order"></van-cell>
        <van-cell title="优惠卡" isLink></van-cell>
        <van-cell title="钱包" isLink></van-cell>
        <van-cell title="设置" isLink to="/my/set"></van-cell>
      </div>
    </main>

    <!-- <Footer page="my" /> -->
  </div>
</template>

<script>
import Footer from '@/components/Footer'
import { mapGetters } from 'vuex'
export default {
  components: {
    Footer
  },

  computed: {
    ...mapGetters(['username', 'isLogin'])
  }
}
</script>

<style lang="scss" scoped>
/* 本页公共样式 */
.gray {
  color: #797d82;
}

.bott0 {
  bottom: 0;
}

.orange {
  color: #ff5f16;
}

.yellow {
  color: #ffb232;
}

.bd-gray {
  border-bottom: 1px solid #f5f5f5;
}

// 头部图片
.beijin {
  background: url(../../../assets/img/personal/beij.png) repeat-y center center;
  height: 200px;
  background-size: cover;
  margin-top: -44px;
}

// 用户名和头像
.users {
  top: 55px;
  left: 22px;
  position: absolute;

  // 头像
  .imege {
    height: 65px;
    border: 1px solid #fff;
    border-radius: 50%;
  }
}

// 导航
.nav {
  height: 75px;

  .iconfont {
    font-weight: bold;
  }

  .cit {
    height: 26px;
  }
}

// 主体
main {
  .list {
    height: 50px;

    .image {
      height: 20px;
    }
  }

  .foun {
    font-size: 12px;
  }
}

/* 底部 */
.footer {
  height: 50px;
}
</style>
