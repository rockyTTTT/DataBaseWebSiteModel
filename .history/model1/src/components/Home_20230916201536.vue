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
      <router-link to="/browse" class="nav-router" active-class="router-active"
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
      <router-link to="/contact" class="nav-router" active-class="router-active"
        ><li class="nav-names">Contact</li></router-link
      >
      <a href="https://genomicmedicine.github.io/website" target="_blank"
        ><li class="nav-names">ZhangLab</li></a
      >
    </ul>
    <router-view />
  </div>
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section section1">

        <transition name="fade-and-zoom" appear>
          <h1 class="title">DATABASE</h1>
        </transition>

        <transition name="slide-in" appear>
          <h1 class="secondTitle">
            A comprehensive database for xxxxxxxxxxx <br />
            in xxxxxxxxxxxxxxx
          </h1>
        </transition>

        <transition name="fade-and-zoom-search" appear>
          <div class="search-box">
            <el-dropdown @command="handleDropdownCommand">
              <el-button type="primary">
                {{ selectedValue
                }}<i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item
                  :command="createCommand('Peptide ID', 'SPENP000622,SPENP016900')"
                  >Peptide ID</el-dropdown-item
                >
                <el-dropdown-item
                  :command="createCommand('Transcript ID', 'SPENPT001949,SPENPT003526')"
                  >Transcript ID</el-dropdown-item
                >
                <el-dropdown-item
                  :command="createCommand('Gene ID', 'SPENG00433,SPENG003173')"
                  >Gene ID</el-dropdown-item
                >
                <el-dropdown-item
                  :command="createCommand('RNAcentral ID', 'URS0000D5E20F_9606')"
                  >RNAcentral ID</el-dropdown-item
                >
                <el-dropdown-item
                  :command="createCommand('Gene Name', 'Inc-EVX-8,Inc-MYO18A-4')"
                  >Gene Name</el-dropdown-item
                >
                <el-dropdown-item
                  :command="createCommand('Cancer', 'Breast cancer')"
                  >Cancer</el-dropdown-item
                >
                <el-dropdown-item :command="createCommand('Tissue', 'Breast')"
                  >Tissue</el-dropdown-item
                >
              </el-dropdown-menu>
            </el-dropdown>

            <el-input
              v-model="input"
              :placeholder="inputPlaceholder"
            ></el-input>

            <el-button type="primary"
              >Search<i class="el-icon-search el-icon--right"></i
            ></el-button>
          </div>
        </transition>
      </div>
      <div class="section section2">Second Section</div>
      <div class="section section3">Third Section</div>
      <div class="section section4">Fourth Section</div>
    </full-page>
    <!-- 右侧小圆圈 -->
    <div class="circle-container">
      <div class="circle" @click="scrollToPage(0)"></div>
      <div class="circle" @click="scrollToPage(1)"></div>
      <div class="circle" @click="scrollToPage(2)"></div>
      <div class="circle" @click="scrollToPage(3)"></div>
    </div>

    <p>1rem 等于 {{ remToPx }}px</p>

  </div>
</template>

<script>

export default {
  name: "home",
  data() {
    return {
      options: {
        licenseKey: "test",
        // menu: '#menu',
        menu: ".nav",
        controlArrows: true,
        afterLoad: this.updateCircles,
        remToPx: 0
      },
      input: "",
      selectedValue: "Peptide ID",
      inputPlaceholder: "SPENP000622,SPENP016900",
    };
  },
  methods: {
    updateCircles(origin, destination, direction) {
      // 获取当前活动的 section 的索引
      const activeSectionIndex = destination.index;
      // 重置所有小圆圈的样式
      const circles = document.querySelectorAll(".circle");
      circles.forEach((circle, index) => {
        circle.style.opacity = index === activeSectionIndex ? "1" : "0.2";
        circle.style.width = index === activeSectionIndex ? "1rem" : "0.58rem";
        circle.style.height = index === activeSectionIndex ? "1rem" : "0.58rem";
      });
    },

    scrollToPage(pageIndex) {
      // 使用 FullPage.js 的 moveSection 方法来滚动到指定页面
      fullpage_api.moveTo(pageIndex + 1); // FullPage.js 页面索引从 1 开始
    },

    createCommand(param1, param2) {
      // 合并多个参数成一个字符串，使用逗号分隔或其他分隔符
      return `${param1},${param2}`;
    },

    handleDropdownCommand(command) {
      const params = command.split(",");
      const selectedValue = params[0];
      const inputPlaceholder = params[1];
      // 处理下拉菜单选项的点击事件
      this.selectedValue = selectedValue;
      this.inputPlaceholder = inputPlaceholder;
    },
  },
  mounted() {
    this.scrollToPage(0);
    this.remToPx = parseFloat(getComputedStyle(document.documentElement).fontSize);
    console.log(this.remToPx);
  },
  components: {  },
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
  border: 0.04rem solid #000;
  box-shadow: 0rem 0.16rem 0.33rem rgba(0, 0, 0, 0.2);
  ul {
    padding: 0;
    margin: 0;
  }
}
.section {
  text-align: center;
}
.section1 {
  background-image: url("../assets/img/intro.svg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-color: #41b883;
  //   background-size: cover;
  //   background-position: center;
}
.section2 {
  //   background-image: url("../assets/img/black.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-color: #ff5f45;
}
.section3 {
  //   background-image: url("../assets/img/black.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-color: #0798ec;
}
.circle-container {
  position: fixed;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 999; /* 确保在最顶层显示 */
}
.circle {
  width: 0.58rem;
  height: 0.58rem;
  background-color: #000;
  border-radius: 50%;
  margin: 0.42rem 0;
  opacity: 0.5;
  transition: opacity 0.3s ease-in-out;
  cursor: pointer;
}
.circle:hover {
  transform: scale(1.7); /* 鼠标经过时放大效果 */
}
.section.active + .circle-container .circle {
  opacity: 1;
}
.nav-titles {
  list-style-type: none; /* 移除列表样式 */
  color: #fff;
  padding: 0; /* 移除内边距 */
  display: flex;
  align-items: center;
}
.nav-logo {
  font-size: 45rem;
  margin-left: 30rem;
  margin-right: 30rem;
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
.title {
  font-size: 84px;
  text-align: center;
  position: relative;
  top: 20%;
  font-family: "Crimson Text", serif;
  font-style: italic;
  font-weight: bold;
  opacity: 1;
  color: #fff;
  font-weight: bold;
}
.secondTitle {
  font-size: 32px;
  text-align: center;
  position: relative;
  top: 10%;
  font-weight: bold;
  opacity: 1;
  color: #fff;
  font-weight: bold;
  font-family: "Roboto Slab", serif, sans-serif, Times New Roman;
}

.search-box {
  font-size: 32px;
  position: relative;
  top: 10%;
  color: #fff;
  font-weight: bold;
  font-family: "Roboto Slab", serif, sans-serif, Times New Roman;
}
.el-button {
  font-size: 18px;
  border-radius: 5px;
  height: 45px;
  width: 180px;
}
.el-button--primary,
.el-button--primary:active,
.el-button--primary:focus,
.el-button--primary.is-active {
  background-color: #f6903d;
}
.el-button--primary:hover {
  background-color: #f6903d;
  opacity: 0.7;
}

.el-input {
  width: 350px;
  margin-left: 5px;
  margin-right: 5px;
  position: relative;
  top: -2px;
}
::v-deep .el-input__inner {
  font-size: 18px;
  height: 45px;
}
::v-deep el-input__inner::placeholder {
  opacity: 0.5;
}

.fade-and-zoom-enter-active,
.fade-and-zoom-leave-active {
  transition: opacity 3s, transform 1s; /* 过渡动画的时间 */
  opacity: 1;
}
.fade-and-zoom-enter {
  opacity: 0;
}
.fade-and-zoom-leave-to {
  opacity: 1;
}
.slide-in-enter-active,
.slide-in-leave-active {
  transition: transform 1s ease-in-out;
  opacity: 1;
}
.slide-in-enter, .slide-in-leave-to /* .slide-in-leave-active in <2.1.8 */ {
  transform: translateX(-100%);
  opacity: 0;
}

.fade-and-zoom-search-enter-active,
.fade-and-zoom-search-leave-active {
  transition: opacity 5s, transform 5s; /* 过渡动画的时间 */
  opacity: 1;
}
.fade-and-zoom-search-enter {
  opacity: 0;
}
.fade-and-zoom-search-leave-to {
  opacity: 1;
}
</style>
