<template>
  <div class="home" v-title data-title="首页">
    <headerBar></headerBar>
    <h2>Essential Links</h2>
    <a class="btn" :href="'#/media'">media</a>
  </div>
</template>
<script>
  import headerBar from './header.vue'
  export default {
    components: { headerBar },
    name: 'home'
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import '../assets/style.styl'
  h2
    color:$h_color
</style>
<!--<style lang="less">
  .home {
    border: 1px solid red;

  h2 {
    color: red;
  }

  }
</style>-->
<!-- Add "scoped" attribute to limit CSS to this component only -->

