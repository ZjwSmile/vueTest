<template>
  <div id="login" class="login" v-title data-title="登录">
     <div class="row">
        <div class="col-md-6">
          <form id="loginForm" @submit.prevent="submit">
            <div class="form-group">
              <label for="exampleInputEmail1">用户名</label>
              <input required v-model="userInfo.loginId" :value="userInfo.loginId" type="text" class="form-control" id="exampleInputEmail1" placeholder="用户名"></div>
            <div class="form-group">
              <label for="exampleInputPassword1">密码</label>
              <input required :value="userInfo.password" type="password" class="form-control" id="exampleInputPassword1" placeholder="密码"></div>
            <button type="submit" class="btn btn-default">登录</button></form>
        </div>
      </div>
  </div>
</template>

<script>
  // import router from '../router/index.js'
  import axios from 'axios'
  import globle_ from './globle.vue'

export default {
    name: 'login',
    data () {
      return {
        userInfo: {
          url: 'http://media.o2tmt.com/api_v3/',
          loginId: 'zhangjingwen@dccgo.com',
          password: 'Aa123.com!'
        }
      }
    },
    methods: {
      submit: function () {
        const that = this
        axios.post(this.userInfo.url, 'format=1&service=user&action=loginByLoginId&loginId=' + this.userInfo.loginId + '&password=' + this.userInfo.password)
          .then(function (response) {
            globle_.ks = response.data
            alert('登录成功！')
            axios.post(that.userInfo.url, 'format=1&service=user&action=get&ks=' + globle_.ks)
              .then(function (response) {
                globle_.userName = response.data.fullName
                globle_.loginStatu = true
                that.$router.push('/media')
                console.log(globle_.userName)
              }).catch(function (error) {
                console.log(error)
              })
          }).catch(function (error) {
            console.log(error)
          })
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
