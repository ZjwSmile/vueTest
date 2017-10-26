<template>
      <div>
        <a :href="'#/login'" class="btn pull-right">{{ msg }}</a>
      <div class="clear"></div>
      </div>
</template>
<script>
  import globle_ from './globle.vue'
  export default {
    name: 'header',
    data () {
      return {
        msg: globle_.userName
      }
    }
  }
</script>
<style>
  .clear{
    clear: both;
  }
</style>
