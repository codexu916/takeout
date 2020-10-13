<template>
  <div>
    <router-view></router-view>
    <footer-guide />
  </div>
</template>

<script>
import FooterGuide from "./components/FooterGuide";
export default {
  components: {
    FooterGuide,
  },
  template: "<footer-guide/>",
};
</script>

<style lang="stylus"  rel="stylesheet/stylus">
@import './common/stylus/mixins.styl';
</style>
