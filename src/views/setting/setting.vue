<template>
  <div class='setting'>
    <van-cell title="隐私政策" is-link to="agreement" />
    <van-cell title="关于" is-link to="infoabout" />
  </div>
</template>

<script>
export default {
  name: 'setting',
  data() {
    return {
      list: []
    }
  },
  components: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style  scoped>
.setting {
  height: 100%;
}
</style>
