<template>
  <div class='unfoldandfoldu'>
    <div class="collapse" @click="collapse()" :style="{ color:show.colours}">
      <span v-show="!show.openShow">{{show.showText}}</span>
      <span v-show="show.openShow">{{show.hideText}}</span>
      <span id="three" :style="{ border: show.colours + ' solid',borderWidth:'1px 1px 0 0'}" :class="[show.openShow?'show':'hide']"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'unfoldandfoldu',
  props: {
    openShow: true,
    showText: String,
    hideText: String,
    ind: Number,
    colour: String
  },
  data() {
    return {
      show: {
        colours: this.colour,
        showText: this.showText,
        hideText: this.hideText,
        openShow: this.openShow
      }
    }
  },
  watch: {
    openShow: function (val) {
      this.show.openShow = val
      console.log(this.show.openShow)
    }
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    collapse() {
      //   this.list[inde].openShow = !this.list[inde].openShow
      this.$set(this.show, 'openShow', !this.show.openShow)
      console.log(this.show.openShow)
      this.$emit('toFather', this.show.openShow, this.ind)
    }
  }
}
</script>
<style  lang="scss" scoped>
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
</style>
