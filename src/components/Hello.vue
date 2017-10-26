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
<!--<style lang="stylus" rel="stylesheet/stylus">-->
  <!--@import '../assets/style.styl'-->
  <!--h2-->
    <!--color:h_color-->
<!--</style>-->
<style scoped>
  h2{
    color:firebrick;
  }
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->

