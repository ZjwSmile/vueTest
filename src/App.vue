<template>
    <div id="app">
      <div class="row">
        <div class="col-md-2">
          <router-link to="/"><img src="./assets/logo.png"></router-link>
          <div class="list-group">
            <router-link class="list-group-item" active-class=" active" to="/">Home</router-link>
            <router-link class="list-group-item" active-class=" active" to="/media">Media</router-link>
            <router-link class="list-group-item" active-class=" active" to="/login">Login</router-link>
          </div>
        </div>
        <div class="col-md-10">
          <div class="panel">
            <div class="panel-body">
              <router-view></router-view>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
    export default {
      name: 'app'
    }
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
#app .panel{
  margin-top: 40px;
}
</style>
