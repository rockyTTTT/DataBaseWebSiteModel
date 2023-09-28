<template>
  <div>
    <div class="fixed-nav">
      <ul class="nav-titles">
        <li class="nav-logo">Database</li>
        <router-link
          to="/home"
          class="nav-router"
          active-class="router-active"
          @click.native="scrollToPage(0)"
          ><li class="nav-names">Home</li></router-link
        >
        <router-link
          to="/browse"
          class="nav-router"
          active-class="router-active"
          ><li class="nav-names">Browse</li></router-link
        >
        <router-link to="search" class="nav-router" active-class="router-active"
          ><li class="nav-names">Search</li></router-link
        >
        <router-link to="/blast" class="nav-router" active-class="router-active"
          ><li class="nav-names">Blast</li></router-link
        >
        <router-link
          to="/download"
          class="nav-router"
          active-class="router-active"
          ><li class="nav-names">Download</li></router-link
        >
        <router-link to="/help" class="nav-router" active-class="router-active"
          ><li class="nav-names">Help</li></router-link
        >
        <router-link
          to="/citation"
          class="nav-router"
          active-class="router-active"
          ><li class="nav-names">Citation</li></router-link
        >
        <router-link
          to="/contact"
          class="nav-router"
          active-class="router-active"
          ><li class="nav-names">Contact</li></router-link
        >
        <a href="https://genomicmedicine.github.io/website" target="_blank"
          ><li class="nav-names">ZhangLab</li></a
        >
      </ul>
      <router-view />
    </div>

    <el-card class="box-card">
      <div class="el-card__body search_card">
        <i class="el-icon-search"></i>
        Search
      </div>
      
        <div v-for="o in 4" :key="o" class="text item">
          {{ "列表内容 " + o }}
        </div>
    </el-card>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppFooter from "@/components/Footer.vue"; // 根据实际路径导入页尾组件

export default {
  name: "browse",
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  components: {
    AppFooter,
  },
};
</script>

<style lang="scss" scoped>
.fixed-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(65, 184, 131, 1); /* 设置导航栏背景颜色 */
  color: #fff; /* 设置导航栏文本颜色 */
  /* 添加其他导航栏样式 */
  z-index: 1000; /* 使导航栏位于最顶层 */
  border: 0.5px solid #000;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  ul {
    padding: 0;
    margin: 0;
  }
}
.nav-titles {
  list-style-type: none; /* 移除列表样式 */
  color: #fff;
  padding: 0; /* 移除内边距 */
  display: flex;
  align-items: center;
}
.nav-logo {
  font-size: 30px;
  margin-left: 20px;
  margin-right: 30px;
  font-family: "Crimson Text", serif;
  font-style: italic;
  font-weight: bold;
  cursor: pointer;
}
.nav-names {
  font-size: 18px;
  font-weight: bold;
  padding: 25px 30px;
  transition: background-color 0.3s; /* 添加背景颜色变化的过渡效果 */
  color: #fff;
}
.nav-names:hover {
  color: #f6903d;
  background-color: #ccc; /* 鼠标经过时的背景颜色 */
  height: 100%; /* 设置高度占据整个 <ul> 的高度 */
}
.router-active {
  .nav-names {
    border-bottom: 2px solid #f6903d;
  }
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 800px;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.el-card__body {
  height: 42px;
  padding: 10px;
}
.search_card {
  text-align: left;
  font-size: 22px;
  width: 100%;
  line-height: 42px;
  background-color: rgb(65, 184, 131);
  color: #f0f8ff;
  margin: 0 0 20px -20px;
  border-left: 6px solid #f6903d;
  border-radius: 2px;
  font-family: Roboto, sans-serif !important;
  padding-left: 20px;
  font-weight: 700;
}
</style>
