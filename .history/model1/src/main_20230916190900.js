// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import lang from 'element-ui/lib/locale/lang/en'  // 默认位English
import locale from 'element-ui/lib/locale'
import 'amfe-flexible'
import { Button, Menu, Submenu, MenuItem, MenuItemGroup, Card, Row, Col, Select, Option, Input,
  Table, TableColumn, Pagination, Loading, Popover, Backtop, Dropdown, DropdownMenu, DropdownItem,
  Tooltip, Progress, Upload, Radio, RadioGroup, Message, InfiniteScroll, Image } from 'element-ui';
  // import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
// import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true
// import './fullpage.scrollHorizontally.min' // Optional. When using fullpage extensions
import VueFullPage from 'vue-fullpage.js'
// import ORF from './components/ORF.vue';
// import Builder from './components/Builder.vue';

Vue.config.productionTip = false
locale.use(lang)
Vue.use(Button);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Card);
Vue.use(Row);
Vue.use(Col);
Vue.use(Select);
Vue.use(Option);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Pagination);
Vue.use(Loading.directive);
Vue.use(Popover);
Vue.use(Backtop);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Tooltip);
Vue.use(Input);
Vue.use(Progress);
Vue.use(Upload);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(InfiniteScroll);
Vue.use(Image);

Vue.use(VueFullPage);

Vue.prototype.$message = Message;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
