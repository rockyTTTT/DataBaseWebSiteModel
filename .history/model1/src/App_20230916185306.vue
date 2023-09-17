<template>
  <div id="app">
    <!-- <v-header></v-header> -->
    <router-view/>
  </div>
</template>

<script>
// import Header from "@/components/Header.vue";

export default {
  name: 'App',
  components: {
    // "v-header": Header
  }
}
</script>

<style>
body {
  margin: 0;
}
html{
  font-size: 150px;
}

#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  font-family: Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans",Helvetica Neue,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
a {
    text-decoration: none;
}
#browse-content .el-select .el-tag{
  font-size: 16px;
  color: #334455;
}
</style>