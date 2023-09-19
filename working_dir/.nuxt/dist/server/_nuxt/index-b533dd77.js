import { _ as __nuxt_component_0 } from "./nuxt-link-0d39ff03.js";
import { withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ufo";
import "hookable";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "devalue";
import "h3";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "destr";
import "defu";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)}><h1>Comparing static, dynamic routes, and API routes</h1>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/static" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Static`);
      } else {
        return [
          createTextVNode("Static")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<br>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/dynamic" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Dynamic`);
      } else {
        return [
          createTextVNode("Dynamic")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<br><a href="/api/hello">API</a></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index-b533dd77.js.map
