<template>
  <div class='infoabout'>
    <img class="infoabout-img" src="https://static.rong360.com/upload/png/a9/b5/a9b59c378f325c9e4fe8875464bd7b1c.png" alt="">
    <img class="infoabout-img" src="https://static.rong360.com/upload/png/6a/67/6a67b3ef520c96612bc553c423a2485e.png" alt="">
    <div class="register_btn">
      <img class="infoabout-img" src="https://static.rong360.com/upload/png/be/88/be88bfe546ce8f125e6576821a0cef6a.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'infoabout',
  data() {
    return {}
  },
  components: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style lang='scss' scoped>
.infoabout {
  width: 100%;
  .infoabout-img {
    width: 100%;
    display: block;
  }
  .register_btn {
    display: block;
    position: fixed;
    z-index: 999;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 66px;
  }
}
</style>
