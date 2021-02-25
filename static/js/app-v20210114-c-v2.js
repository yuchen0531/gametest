webpackJsonp([0],{

/***/ "8Ba4":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "991W":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "9q15":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGsAAABqAQMAAACBLT3qAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAANQTFRF////p8QbyAAAABVJREFUeJxjYBgFo2AUjIJRMAqIBQAGNgAB0as6AgAAAABJRU5ErkJggg=="

/***/ }),

/***/ "Alvz":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Jmt5":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "NHnr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm.js
var vue_esm = __webpack_require__("7+uW");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/App.vue
//
//
//
//
//
//

/* harmony default export */ var App = ({
  name: 'App'
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-05dc1ed8","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/App.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('router-view')],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_src_App = (esExports);
// CONCATENATED MODULE: ./src/App.vue
function injectStyle (ssrContext) {
  __webpack_require__("o8nZ")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  App,
  selectortype_template_index_0_src_App,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_App = (Component.exports);

// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm.js
var vue_router_esm = __webpack_require__("/ocq");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/Home.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Home = ({
  name: 'game',
  data: function data() {
    return {
      score: 0,
      timer: null,
      timer2: null,
      alltimer: null,
      countdown: null,
      time: 30,
      playing: false,
      finished: false,
      level: 'normal',
      disappearspeed: 500,
      addspeed: 400,
      countplay: null,
      counttime: 3,
      counttimetimer: null,
      count: false,
      changetimer: null,
      clicknum: '',
      disarray: []
    };
  },
  created: function created() {},
  mounted: function mounted() {},

  watch: {
    time: function time() {
      var _this = this;

      if (this.time === 0) {
        clearInterval(this.countdown);
        clearInterval(this.timer);
        clearTimeout(this.timer2);
        console.log(this.time);
        document.querySelectorAll('.game-click-item').forEach(function (item) {
          item.classList.remove('movein');
          item.classList.remove('moveout');
        });
        this.alltimer = setTimeout(function () {
          _this.finished = true;
        }, 1000);
      }
    }
  },
  methods: {
    getScore: function getScore(index) {
      this.score += 1;
      this.$nextTick(function () {
        // document.querySelector(`#game_item_${index}`).classList.add('small')
        document.querySelector('#game_item_' + index).classList.add('movesoonout');
        // document.querySelector(`#game_item_img_${index}`).classList.remove('d-none')
      });
      // this.changetimer = setTimeout(() => {
      //   document.querySelector(`#game_item_img_${index}`).classList.add('d-none')
      //   // document.querySelector(`#game_item_${index}`).classList.add('d-none')
      // }, 200)
    },
    gamefinish: function gamefinish() {
      this.playing = false;
      this.finished = false;
      this.score = 0;
    },
    start: function start() {
      var _this2 = this;

      if (this.playing) return;
      this.count = true;
      this.playing = true;
      this.time = 30;
      this.counttime = 3;
      // 倒數３秒
      this.counttimetimer = setInterval(function () {
        _this2.counttime -= 1;
        if (_this2.counttime === 0) {
          _this2.count = false;
        }
      }, 1000);
      // 倒數3秒後開始
      this.countplay = setTimeout(function () {
        clearInterval(_this2.counttimetimer);
        // 倒數30秒
        _this2.countdown = setInterval(function () {
          _this2.time -= 1;
        }, 1000);
        var i = Math.floor(Math.random() * 9);
        var j = void 0;
        var t = 0;
        _this2.$nextTick(function () {
          _this2.timer = setInterval(function () {
            do {
              i = Math.floor(Math.random() * 9);
            } while (i === j);
            j = i;
            document.querySelector('#game_item_' + i).classList.remove('moveout');
            document.querySelector('#game_item_' + i).classList.add('movein');
            // if (document.querySelector(`#game_item_${i}`).classList.contains('d-none')) {
            //   document.querySelector(`#game_item_${i}`).classList.remove('d-none')
            // }
            _this2.disarray.push(i);
            _this2.timer2 = setTimeout(function () {
              if (document.querySelector('#game_item_' + _this2.disarray[t]).classList.contains('movein')) {
                document.querySelector('#game_item_' + _this2.disarray[t]).classList.remove('movein');
              }
              document.querySelector('#game_item_' + _this2.disarray[t]).classList.add('moveout');
              // document.querySelector(`#game_item_${this.disarray[t]}`).classList.add('d-none')
              t++;
            }, 1000);
          }, 500);
        });
      }, 3500);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-f227e402","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/Home.vue
var Home_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"game d-flex align-items-center"},[_c('div',[_c('div',{staticClass:"text-white h8 text-center mb-2"},[_vm._v("Time: "+_vm._s(_vm.time)+" Score: "+_vm._s(_vm.score)+" version3")]),_vm._v(" "),_c('div',{staticClass:"game-content d-flex flex-wrap w-85 mx-auto mb-3"},_vm._l((9),function(items,index){return _c('div',{key:index,staticClass:"game-items m-2 bg-white position-relative"},[_c('div',{staticClass:"position-absolute game-click-item",attrs:{"id":("game_item_" + index)},on:{"click":function($event){return _vm.getScore(index)}}},[_c('img',{attrs:{"src":__webpack_require__("bcBx"),"width":"100%","alt":""}})]),_vm._v(" "),_vm._m(0,true)])}),0),_vm._v(" "),_c('div',{staticClass:"start-btn p-3 text-white mx-auto",on:{"click":_vm.start}},[_vm._v("start")])]),_vm._v(" "),(_vm.finished)?_c('div',{staticClass:"model d-flex align-items-center justify-content-center"},[_c('div',[_c('div',{staticClass:"text-white h8 text-center mb-5"},[_vm._v("Your Score : "+_vm._s(_vm.score))]),_vm._v(" "),_c('div',{staticClass:"start-btn p-3 text-white mx-auto",on:{"click":_vm.gamefinish}},[_vm._v("close")])])]):_vm._e(),_vm._v(" "),(_vm.count)?_c('div',{staticClass:"model d-flex align-items-center justify-content-center"},[_c('div',[_c('div',{staticClass:"text-white h8 text-center mb-5"},[_vm._v(_vm._s(_vm.counttime))])])]):_vm._e()])}
var Home_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{},[_c('img',{attrs:{"src":__webpack_require__("9q15"),"width":"100%","alt":""}})])}]
var Home_esExports = { render: Home_render, staticRenderFns: Home_staticRenderFns }
/* harmony default export */ var views_Home = (Home_esExports);
// CONCATENATED MODULE: ./src/views/Home.vue
function Home_injectStyle (ssrContext) {
  __webpack_require__("qvDK")
}
var Home_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var Home___vue_template_functional__ = false
/* styles */
var Home___vue_styles__ = Home_injectStyle
/* scopeId */
var Home___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Home___vue_module_identifier__ = null
var Home_Component = Home_normalizeComponent(
  Home,
  views_Home,
  Home___vue_template_functional__,
  Home___vue_styles__,
  Home___vue_scopeId__,
  Home___vue_module_identifier__
)

/* harmony default export */ var src_views_Home = (Home_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Loading.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Loading = ({
  name: 'Loading'
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-62b4e13e","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Loading.vue
var Loading_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var Loading_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"loading"},[_c('div',{staticClass:"d-flex h-100 justify-content-center align-items-center"},[_c('div',{staticClass:"position-relative"},[_c('div',{staticClass:"circle position-absolute"}),_vm._v(" "),_c('div',{staticClass:"circle position-absolute"}),_vm._v(" "),_c('div',{staticClass:"circle position-absolute"}),_vm._v(" "),_c('div',{staticClass:"circle position-absolute"}),_vm._v(" "),_c('div',{staticClass:"circle position-absolute"}),_vm._v(" "),_c('div',{staticClass:"circle position-absolute"})])])])}]
var Loading_esExports = { render: Loading_render, staticRenderFns: Loading_staticRenderFns }
/* harmony default export */ var components_Loading = (Loading_esExports);
// CONCATENATED MODULE: ./src/components/Loading.vue
function Loading_injectStyle (ssrContext) {
  __webpack_require__("zQN0")
}
var Loading_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var Loading___vue_template_functional__ = false
/* styles */
var Loading___vue_styles__ = Loading_injectStyle
/* scopeId */
var Loading___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Loading___vue_module_identifier__ = null
var Loading_Component = Loading_normalizeComponent(
  Loading,
  components_Loading,
  Loading___vue_template_functional__,
  Loading___vue_styles__,
  Loading___vue_scopeId__,
  Loading___vue_module_identifier__
)

/* harmony default export */ var src_components_Loading = (Loading_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/Record.vue
//
//
//
//
//
//
//
//

// import $ from 'jquery'

/* harmony default export */ var Record = ({
  name: 'Record',
  components: {
    Loading: src_components_Loading
  },
  data: function data() {
    return {};
  },
  created: function created() {},

  filters: {},
  watch: {},
  methods: {}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-7c6175be","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/Record.vue
var Record_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"record"},[_c('transition',{attrs:{"name":"fade"}},[(_vm.isLoading)?_c('loading'):_vm._e()],1)],1)}
var Record_staticRenderFns = []
var Record_esExports = { render: Record_render, staticRenderFns: Record_staticRenderFns }
/* harmony default export */ var views_Record = (Record_esExports);
// CONCATENATED MODULE: ./src/views/Record.vue
function Record_injectStyle (ssrContext) {
  __webpack_require__("Alvz")
}
var Record_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var Record___vue_template_functional__ = false
/* styles */
var Record___vue_styles__ = Record_injectStyle
/* scopeId */
var Record___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Record___vue_module_identifier__ = null
var Record_Component = Record_normalizeComponent(
  Record,
  views_Record,
  Record___vue_template_functional__,
  Record___vue_styles__,
  Record___vue_scopeId__,
  Record___vue_module_identifier__
)

/* harmony default export */ var src_views_Record = (Record_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/Reward.vue
//
//
//
//
//

/* harmony default export */ var Reward = ({
  name: 'Reward',
  components: {},
  data: function data() {
    return {};
  },
  created: function created() {},

  methods: {}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-5f3a8265","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/Reward.vue
var Reward_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"reward"})}
var Reward_staticRenderFns = []
var Reward_esExports = { render: Reward_render, staticRenderFns: Reward_staticRenderFns }
/* harmony default export */ var views_Reward = (Reward_esExports);
// CONCATENATED MODULE: ./src/views/Reward.vue
function Reward_injectStyle (ssrContext) {
  __webpack_require__("ae0T")
}
var Reward_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var Reward___vue_template_functional__ = false
/* styles */
var Reward___vue_styles__ = Reward_injectStyle
/* scopeId */
var Reward___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Reward___vue_module_identifier__ = null
var Reward_Component = Reward_normalizeComponent(
  Reward,
  views_Reward,
  Reward___vue_template_functional__,
  Reward___vue_styles__,
  Reward___vue_scopeId__,
  Reward___vue_module_identifier__
)

/* harmony default export */ var src_views_Reward = (Reward_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/Rule.vue
//
//
//
//
//

/* harmony default export */ var Rule = ({
  name: 'Rule',
  components: {},
  data: function data() {
    return {};
  },
  created: function created() {},

  methods: {}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-648a72d8","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/Rule.vue
var Rule_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"rule"})}
var Rule_staticRenderFns = []
var Rule_esExports = { render: Rule_render, staticRenderFns: Rule_staticRenderFns }
/* harmony default export */ var views_Rule = (Rule_esExports);
// CONCATENATED MODULE: ./src/views/Rule.vue
function Rule_injectStyle (ssrContext) {
  __webpack_require__("8Ba4")
}
var Rule_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var Rule___vue_template_functional__ = false
/* styles */
var Rule___vue_styles__ = Rule_injectStyle
/* scopeId */
var Rule___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Rule___vue_module_identifier__ = null
var Rule_Component = Rule_normalizeComponent(
  Rule,
  views_Rule,
  Rule___vue_template_functional__,
  Rule___vue_styles__,
  Rule___vue_scopeId__,
  Rule___vue_module_identifier__
)

/* harmony default export */ var src_views_Rule = (Rule_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/Game.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Game = ({
  name: 'game',
  data: function data() {
    return {
      score: 0,
      timer: null,
      timer2: null,
      alltimer: null,
      countdown: null,
      time: 30,
      playing: false,
      finished: false,
      level: 'normal',
      disappearspeed: 500,
      addspeed: 400,
      countplay: null,
      counttime: 3,
      counttimetimer: null,
      count: false,
      changetimer: null,
      clicknum: '',
      disarray: []
    };
  },
  created: function created() {},
  mounted: function mounted() {},

  watch: {
    time: function time() {
      var _this = this;

      if (this.time === 0) {
        clearInterval(this.countdown);
        clearInterval(this.timer);
        clearTimeout(this.timer2);
        console.log(this.time);
        document.querySelectorAll('.game-click-item').forEach(function (item) {
          item.classList.add('d-none');
        });
        this.alltimer = setTimeout(function () {
          _this.finished = true;
        }, 1000);
      }
    }
  },
  methods: {
    getScore: function getScore(index) {
      this.score += 1;
      this.$nextTick(function () {
        // document.querySelector(`#game_item_${index}`).classList.add('small')
        document.querySelector('#game_item_' + index).classList.add('d-none');
        document.querySelector('#game_item_img_' + index).classList.remove('d-none');
      });
      this.changetimer = setTimeout(function () {
        document.querySelector('#game_item_img_' + index).classList.add('d-none');
        // document.querySelector(`#game_item_${index}`).classList.add('d-none')
      }, 200);
    },
    gamefinish: function gamefinish() {
      this.playing = false;
      this.finished = false;
      this.score = 0;
    },
    start: function start() {
      var _this2 = this;

      if (this.playing) return;
      this.count = true;
      this.playing = true;
      this.time = 30;
      this.counttime = 3;
      // 倒數３秒
      this.counttimetimer = setInterval(function () {
        _this2.counttime -= 1;
        if (_this2.counttime === 0) {
          _this2.count = false;
        }
      }, 1000);
      // 倒數3秒後開始
      this.countplay = setTimeout(function () {
        clearInterval(_this2.counttimetimer);
        // 倒數30秒
        _this2.countdown = setInterval(function () {
          _this2.time -= 1;
        }, 1000);
        var i = Math.floor(Math.random() * 9);
        var j = void 0;
        var t = 0;
        _this2.$nextTick(function () {
          _this2.timer = setInterval(function () {
            do {
              i = Math.floor(Math.random() * 9);
            } while (i === j);
            j = i;
            if (document.querySelector('#game_item_' + i).classList.contains('d-none')) {
              document.querySelector('#game_item_' + i).classList.remove('d-none');
            }
            _this2.disarray.push(i);
            _this2.timer2 = setTimeout(function () {
              document.querySelector('#game_item_' + _this2.disarray[t]).classList.add('d-none');
              t++;
            }, 900);
          }, 500);
        });
      }, 3500);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-bebb0c26","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/Game.vue
var Game_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"game d-flex align-items-center"},[_c('div',[_c('div',{staticClass:"text-white h8 text-center mb-2"},[_vm._v("Time: "+_vm._s(_vm.time)+" Score: "+_vm._s(_vm.score)+" version2")]),_vm._v(" "),_c('div',{staticClass:"game-content d-flex flex-wrap w-85 mx-auto mb-3"},_vm._l((9),function(items,index){return _c('div',{key:index,staticClass:"game-items m-2 bg-white position-relative"},[_c('div',{staticClass:"d-none position-absolute game-click-item",attrs:{"id":("game_item_" + index)},on:{"click":function($event){return _vm.getScore(index)}}},[_c('img',{attrs:{"src":__webpack_require__("bcBx"),"width":"100%","alt":""}})]),_vm._v(" "),_c('div',{staticClass:"d-none small position-absolute",attrs:{"id":("game_item_img_" + index)}},[_c('img',{attrs:{"src":__webpack_require__("uR/t"),"width":"100%","alt":""}})]),_vm._v(" "),_vm._m(0,true)])}),0),_vm._v(" "),_c('div',{staticClass:"start-btn p-3 text-white mx-auto",on:{"click":_vm.start}},[_vm._v("start")])]),_vm._v(" "),(_vm.finished)?_c('div',{staticClass:"model d-flex align-items-center justify-content-center"},[_c('div',[_c('div',{staticClass:"text-white h8 text-center mb-5"},[_vm._v("Your Score : "+_vm._s(_vm.score))]),_vm._v(" "),_c('div',{staticClass:"start-btn p-3 text-white mx-auto",on:{"click":_vm.gamefinish}},[_vm._v("close")])])]):_vm._e(),_vm._v(" "),(_vm.count)?_c('div',{staticClass:"model d-flex align-items-center justify-content-center"},[_c('div',[_c('div',{staticClass:"text-white h8 text-center mb-5"},[_vm._v(_vm._s(_vm.counttime))])])]):_vm._e()])}
var Game_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{},[_c('img',{attrs:{"src":__webpack_require__("9q15"),"width":"100%","alt":""}})])}]
var Game_esExports = { render: Game_render, staticRenderFns: Game_staticRenderFns }
/* harmony default export */ var views_Game = (Game_esExports);
// CONCATENATED MODULE: ./src/views/Game.vue
function Game_injectStyle (ssrContext) {
  __webpack_require__("P1yF")
}
var Game_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var Game___vue_template_functional__ = false
/* styles */
var Game___vue_styles__ = Game_injectStyle
/* scopeId */
var Game___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Game___vue_module_identifier__ = null
var Game_Component = Game_normalizeComponent(
  Game,
  views_Game,
  Game___vue_template_functional__,
  Game___vue_styles__,
  Game___vue_scopeId__,
  Game___vue_module_identifier__
)

/* harmony default export */ var src_views_Game = (Game_Component.exports);

// CONCATENATED MODULE: ./src/router/index.js








vue_esm["a" /* default */].use(vue_router_esm["a" /* default */]);

/* harmony default export */ var router = (new vue_router_esm["a" /* default */]({
  mode: 'hash',
  routes: [{
    path: '/home',
    name: 'Home',
    component: src_views_Home
  }, {
    path: '/',
    name: 'Game',
    component: src_views_Game
  }, {
    path: '/reward',
    name: 'Reward',
    component: src_views_Reward
  }, {
    path: '/record',
    name: 'Record',
    component: src_views_Record
  }, {
    path: '/rule',
    name: 'Rule',
    component: src_views_Rule
  }]
}));
// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.css
var bootstrap = __webpack_require__("Jmt5");
var bootstrap_default = /*#__PURE__*/__webpack_require__.n(bootstrap);

// EXTERNAL MODULE: ./src/assets/css/utility.scss
var utility = __webpack_require__("abM2");
var utility_default = /*#__PURE__*/__webpack_require__.n(utility);

// EXTERNAL MODULE: ./src/assets/css/reset.css
var css_reset = __webpack_require__("991W");
var reset_default = /*#__PURE__*/__webpack_require__.n(css_reset);

// CONCATENATED MODULE: ./src/main.js
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.







vue_esm["a" /* default */].config.productionTip = false;

/* eslint-disable no-new */
new vue_esm["a" /* default */]({
  el: '#app',
  router: router,
  components: { App: src_App },
  template: '<App/>'
});

/***/ }),

/***/ "P1yF":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "abM2":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "ae0T":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "bcBx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/u-money.28bf8d2.png";

/***/ }),

/***/ "o8nZ":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "qvDK":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "uR/t":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/u-money2click.7c0ec39.png";

/***/ }),

/***/ "zQN0":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},["NHnr"]);
//# sourceMappingURL=app-v20210114-c-v2.js.map