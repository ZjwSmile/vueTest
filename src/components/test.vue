<template>
  <div class="media" v-title  data-title="media">
          <headerBar></headerBar>
 <div class="row">
        <div  class="col-sm-6 col-md-4" v-for="(media,index) in mediaInfo.object" v-bind:id="media.id" v-on:click="viewDetails(media.id,index)">
          <div  class="thumbnail">
            <img style="width: 100%;height: 200px;" v-bind:src="media.thumbnailUrl+'/height/500'">
            <div class="caption">
              <h3 v-if="media.mediaType==1">{{media.name}}(视频)</h3>
              <h3 v-else-if="media.mediaType==2">{{media.name}}(图片)</h3>
              <h3 v-else>{{media.name}}(音频)</h3>
            </div>
          </div>
        </div>
      </div>
  </div>
  </template>
<script>
  import headerBar from './header.vue'
  import globle_ from './globle.vue'
  import axios from 'axios'
  export default {
    components: { headerBar },
    name: 'media',
    data () {
      return {
        mediaInfo: {
          url: 'http://media.o2tmt.com/api_v3/',
          object: globle_.objectArr
        }
      }
    },
    mounted: function () {
      if (globle_.loginStatu) {
        var that = this
        axios.post(this.mediaInfo.url, 'format=1&service=media&action=list&ks=' + globle_.ks)
          .then(function (response) {
            globle_.objectArr = response.data.objects
            that.mediaInfo.object = response.data.objects
          }).catch(function (error) {
            console.log(error)
          })
      } else {
        alert('请登录')
        this.$router.push('/login')
      }
    },
    methods: {
      viewDetails: function (id, index) {
        alert(this.mediaInfo.object[index])
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
