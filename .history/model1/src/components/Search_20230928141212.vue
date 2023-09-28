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
      <div class="search_card">
        <i class="el-icon-search"></i>
        Search
      </div>

      <el-button type="primary" class="search-button" icon="el-icon-refresh"
        >Reset</el-button
      >
      <el-dropdown class="search-dropdown" :trigger="dropdownTrigger">
        <el-button type="primary" class="search-button">
          Add New Builder<i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>Cancer</el-dropdown-item>
          <el-dropdown-item>Tissue</el-dropdown-item>
          <el-dropdown-item>Gene Name</el-dropdown-item>
          <el-dropdown-item>Gene ID</el-dropdown-item>
          <el-dropdown-item>Transcript ID</el-dropdown-item>
          <el-dropdown-item>Peptide ID</el-dropdown-item>
          <el-dropdown-item>Location</el-dropdown-item>
          <el-dropdown-item>RNAcentral ID</el-dropdown-item>
          <el-dropdown-item>External ID</el-dropdown-item>
          <el-dropdown-item>PMID</el-dropdown-item>
          <el-dropdown-item>Expression Group</el-dropdown-item>
          <el-dropdown-item>Immunogenicity</el-dropdown-item>
          <el-dropdown-item>Status</el-dropdown-item>
          <el-dropdown-item>Simultaneous Expression</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <div class="builder-details">
        <span class="select-label">Cancer</span>

        <el-input
          v-model="input"
          :placeholder="inputPlaceHolder"
          class="select-options"
          readonly
        >
          <template slot="prefix">
            <el-tag
              v-for="(tag, index) in selected"
              :key="index"
              closable
              effect="plain"
              class="search-tag"
              @close="handleClose(index)"
            >
              {{ tag }}
            </el-tag>
          </template>

          <span slot="append">
            <el-dropdown
              class="search-dropdown"
              :trigger="dropdownTrigger"
              :hide-on-click="false"
              @command="handleCommand"
              ref="dropdown"
            >
              <el-button type="primary" class="input-button">
                <i class="el-icon-arrow-down el-icon-arrow-down"></i>
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item
                  v-for="item in list"
                  :key="item.value"
                  :command="item.value"
                  class="item"
                >
                  {{ item.label }}
                  <i
                    class="el-icon-check"
                    :class="{ active: selected.includes(item.value) }"
                  ></i>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </span>
        </el-input>
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
    return {
      input: "",
      inputPlaceHolder: "Please select cancer(s)",
      dropdownTrigger: "click",
      list: [
        { value: "Anal canal cancer", label: "Anal canal cancer" },
        { value: "Bladder cancer", label: "Bladder cancer" },
        { value: "Bile duct cancer", label: "Bile duct cancer" },
        { value: "Breast cancer", label: "Breast cancer" },
        { value: "Colon cancer", label: "Colon cancer" },
        { value: "Gastric cancer", label: "Gastric cancer" },
        { value: "Kidney cancer", label: "Kidney cancer" },
      ],
      selected: [],
    };
  },
  methods: {
    handleDropdownCommand(command) {
      console.log("选中的选项标识符：", command);
      // 在这里处理选项的标识符
      // 例如，你可以根据标识符执行不同的操作
      if (command === "item1") {
        // 执行选项1的操作
      } else if (command === "item2") {
        // 执行选项2的操作
      } else if (command === "item3") {
        // 执行选项3的操作
      }
    },

    handleCommand(command) {
      // 如果点击的是已选中的值，则取消选中并从selected数组中移除
      if (this.selected.includes(command)) {
        this.selected = this.selected.filter((item) => item !== command);
      } else {
        // 否则添加到selected数组中，并显示勾号
        this.selected.push(command);
        // 这里添加一行代码，让勾号一直显示，不会因为下拉菜单关闭而隐藏
        this.$refs.dropdown.show();
      }
      if (this.selected.length != 0) {
        this.inputPlaceHolder = "";
        let searchTags = document.getElementsByClassName("search-tag");
        let inputs = document.getElementsByClassName("select-options");
        // 取上一个tag
        let lastTag = searchTags[searchTags.length - 1];
        let input = inputs[0].querySelector('input');
        let inputHeight = inputs[0].clientHeight;
        console.log('input',input);
        console.log('lastTag',lastTag);
        if (lastTag != null) {
          let lastTagBound = lastTag.getBoundingClientRect();
          let inputBound = input.getBoundingClientRect();
          console.log('lastTagBound,inputBound',lastTagBound,inputBound);
          if(lastTagBound.x + lastTagBound.width  > inputBound.x + inputBound.width){
            console.log('x > width');
            let newHeight = inputHeight + 40;
            inputs[0].style.height = '${newHeight}px';
            console.log('inputs[0].style.height',inputs[0]);
          }
        }
      } else {
        this.inputPlaceHolder = "Please select cancer(s)";
      }
    },

    handleClose(index) {
      this.selected.splice(index, 1);
      console.log("selected", this.selected.length);
      if (this.selected.length === 0) {
        this.inputPlaceHolder = "Please select cancer(s)";
      }
    },
  },
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
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.el-card__body {
  // height: 42px;
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

.search-button {
  background-color: rgb(65, 184, 131);
  font-size: 16px;
  font-weight: 700;
}

.search-button,
.search-button:active,
.search-button:focus,
.search-button.is-active {
  background-color: rgb(65, 184, 131);
}
.search-button:hover {
  background-color: rgb(65, 184, 131);
  opacity: 0.7;
}

.search-dropdown {
  float: right;
}
.el-dropdown-menu__item {
  font-size: 12px;
  line-height: 36px;
  padding: 0 20px;
  min-width: 140px;
}

// #span {
//   .el-dropdown-menu__item {
//     font-size: 10px;
//     line-height: 36px;
//   }
// }
.builder-details {
  margin: 15px 0;
}

.select-label {
  font-weight: 700;
  margin-left: 7%;
  color: #2a2a33;
  font-size: 18px;
  width: 160px;
  display: inline-block;
}

.select-options {
  width: 60%;
}

.input-button {
  background-color: rgba(0, 0, 0, 0);
  border: none;
}

.el-icon-check {
  color: green;
  display: none; // 默认隐藏图标
}
.active {
  display: inline-block; // 当被选中时显示图标
}

.item {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.search-tag {
  height: 40px;
  line-height: 40px;
  font-size: 10px;
  margin-left: 5px;
}
</style>
