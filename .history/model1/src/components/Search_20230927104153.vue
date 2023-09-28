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

    <!-- <el-card class="box-card">
      <div class="el-card__body search_card">
        <i class="el-icon-search"></i>
        Search
      </div>
      
        <div v-for="o in 4" :key="o" class="text item">
          {{ "列表内容 " + o }}
        </div>
    </el-card> -->

    <div class="el-card basic-card is-always-shadow">
      <div class="el-card__body">
        <div class="card-title-bar">
          <i class="el-icon-search"></i> Search Builder
        </div>
        <button
          type="button"
          class="el-button builder-btn reset-btn el-button--primary"
        >
          <span>Reset <i class="el-icon-refresh"></i></span>
        </button>
        <div class="dropdown-area el-dropdown">
          <button
            type="button"
            class="el-button builder-btn el-button--primary el-dropdown-selfdefine"
            aria-haspopup="list"
            aria-controls="dropdown-menu-2025"
            role="button"
            tabindex="0"
          >
            <span>
              Add New Builder<i class="el-icon-arrow-down el-icon--right"></i
            ></span>
          </button>
          <ul
            class="el-dropdown-menu el-popper"
            id="dropdown-menu-2025"
            style="display: none"
          >
            <li tabindex="-1" class="el-dropdown-menu__item">
              <span>Cancer</span>
            </li>
            <li tabindex="-1" class="el-dropdown-menu__item">
              <span>Tissue</span>
            </li>
            <li tabindex="-1" class="el-dropdown-menu__item">
              <span>Gene Name</span>
            </li>
            <li tabindex="-1" class="el-dropdown-menu__item">
              <span
                class="el-tooltip menu-tip"
                aria-describedby="el-tooltip-4880"
                tabindex="0"
                >Gene ID</span
              >
            </li>
            <li tabindex="-1" class="el-dropdown-menu__item">
              <span
                class="el-tooltip menu-tip"
                aria-describedby="el-tooltip-7916"
                tabindex="0"
                >Transcript ID</span
              >
            </li>
            <li tabindex="-1" class="el-dropdown-menu__item">
              <span
                class="el-tooltip menu-tip"
                aria-describedby="el-tooltip-7879"
                tabindex="0"
                >Peptide ID</span
              >
            </li>
            <li tabindex="-1" class="el-dropdown-menu__item">
              <span data-v-e7863510="">Location</span>
              
            </li>
            <li tabindex="-1" class="el-dropdown-menu__item">
              <span data-v-e7863510="">RNAcentral ID</span>
              
            </li>
            <li tabindex="-1" class="el-dropdown-menu__item">
              <span
                class="el-tooltip menu-tip"
                aria-describedby="el-tooltip-7426"
                tabindex="0"
                >External ID</span
              >
            </li>
            <li tabindex="-1" class="el-dropdown-menu__item">
              <span data-v-e7863510="">PMID</span>
              
            </li>
            <li tabindex="-1" class="el-dropdown-menu__item">
              <span>Expression Group</span>
            </li>
            <li tabindex="-1" class="el-dropdown-menu__item">
              <!----><span>Immunogenicity</span>
              <!---->
            </li>
            <li tabindex="-1" class="el-dropdown-menu__item">
              <span>Status</span>
              
            </li>
            <li tabindex="-1" class="el-dropdown-menu__item">
              <span>Simultaneous Expression</span>
              
            </li>
          </ul>
        </div>
        <div class="builder-content">
          
          <div class="builder-detail">
            <span class="select-label">Cancer: </span>
            <div class="el-select select-option">
              <div
                class="el-select__tags"
                style="width: 100%; max-width: 699.25px"
              >
                <span
                ></span
                >
              </div>
              <div class="el-input el-input--suffix">
                <input
                  type="text"
                  readonly="readonly"
                  autocomplete="off"
                  placeholder="Please select cancer(s)"
                  class="el-input__inner"
                  style="height: 40px"
                /><span class="el-input__suffix"
                  ><span class="el-input__suffix-inner"
                    ><i
                      class="el-select__caret el-input__icon el-icon-arrow-up"
                    ></i
                    ></span
                  ></span
                >
              </div>
              <div
                class="el-select-dropdown el-popper is-multiple"
                style="display: none; min-width: 731.25px"
              >
                <div class="el-scrollbar" style="">
                  <div
                    class="el-select-dropdown__wrap el-scrollbar__wrap"
                    style="margin-bottom: -19px; margin-right: -19px"
                  >
                    <ul class="el-scrollbar__view el-select-dropdown__list">
                      <!---->
                      <li class="el-select-dropdown__item">
                        <span>Anal canal cancer</span>
                      </li>
                      <li class="el-select-dropdown__item">
                        <span>Bladder cancer</span>
                      </li>
                      <li class="el-select-dropdown__item">
                        <span>Bile duct cancer</span>
                      </li>
                      <li class="el-select-dropdown__item">
                        <span>Breast cancer</span>
                      </li>
                      <li class="el-select-dropdown__item">
                        <span>Colon cancer</span>
                      </li>
                      <li class="el-select-dropdown__item">
                        <span>Gastric cancer</span>
                      </li>
                      <li class="el-select-dropdown__item">
                        <span>Kidney cancer</span>
                      </li>
                      <li class="el-select-dropdown__item">
                        <span>Leukemia</span>
                      </li>
                      <li class="el-select-dropdown__item">
                        <span>Liver cancer</span>
                      </li>
                      <li class="el-select-dropdown__item">
                        <span>Lung cancer</span>
                      </li>
                      <li class="el-select-dropdown__item">
                        <span>Ovary cancer</span>
                      </li>
                      <li class="el-select-dropdown__item">
                        <span>Prostate cancer</span>
                      </li>
                      <li class="el-select-dropdown__item">
                        <span>Skin cancer</span>
                      </li>
                      <li class="el-select-dropdown__item">
                        <span>Thyroid cancer</span>
                      </li>
                    </ul>
                  </div>
                  <div class="el-scrollbar__bar is-horizontal">
                    <div
                      class="el-scrollbar__thumb"
                      style="transform: translateX(0%)"
                    ></div>
                  </div>
                  <div class="el-scrollbar__bar is-vertical">
                    <div
                      class="el-scrollbar__thumb"
                      style="transform: translateY(0%)"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <button
              type="button"
              class="el-button el-tooltip remove-btn el-button--info el-button--mini is-circle"
              aria-describedby="el-tooltip-1668"
              tabindex="0"
            >
              <i class="el-icon-minus"></i>
            </button>
          </div>
        </div>
        <button type="button" class="el-button search-btn el-button--warning">
          <span>Search <i class="el-icon-search"></i></span>
        </button>
      </div>
    </div>
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
  height: 42px;
}
</style>
