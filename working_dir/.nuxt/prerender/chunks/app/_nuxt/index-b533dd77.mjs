import { _ as __nuxt_component_0 } from './nuxt-link-0d39ff03.mjs';
import { withCtx, createTextVNode, useSSRContext } from 'file://C:/Users/thomasgauvin/work/2023/PROJECTS-Q3-Q4/nuxt-on-swa/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file://C:/Users/thomasgauvin/work/2023/PROJECTS-Q3-Q4/nuxt-on-swa/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from '../server.mjs';
import 'file://C:/Users/thomasgauvin/work/2023/PROJECTS-Q3-Q4/nuxt-on-swa/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/thomasgauvin/work/2023/PROJECTS-Q3-Q4/nuxt-on-swa/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Users/thomasgauvin/work/2023/PROJECTS-Q3-Q4/nuxt-on-swa/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/thomasgauvin/work/2023/PROJECTS-Q3-Q4/nuxt-on-swa/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/thomasgauvin/work/2023/PROJECTS-Q3-Q4/nuxt-on-swa/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/thomasgauvin/work/2023/PROJECTS-Q3-Q4/nuxt-on-swa/node_modules/@unhead/ssr/dist/index.mjs';
import 'file://C:/Users/thomasgauvin/work/2023/PROJECTS-Q3-Q4/nuxt-on-swa/node_modules/unhead/dist/index.mjs';
import 'file://C:/Users/thomasgauvin/work/2023/PROJECTS-Q3-Q4/nuxt-on-swa/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/Users/thomasgauvin/work/2023/PROJECTS-Q3-Q4/nuxt-on-swa/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/Users/thomasgauvin/work/2023/PROJECTS-Q3-Q4/nuxt-on-swa/node_modules/defu/dist/defu.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file://C:/Users/thomasgauvin/work/2023/PROJECTS-Q3-Q4/nuxt-on-swa/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file://C:/Users/thomasgauvin/work/2023/PROJECTS-Q3-Q4/nuxt-on-swa/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/thomasgauvin/work/2023/PROJECTS-Q3-Q4/nuxt-on-swa/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/Users/thomasgauvin/work/2023/PROJECTS-Q3-Q4/nuxt-on-swa/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/thomasgauvin/work/2023/PROJECTS-Q3-Q4/nuxt-on-swa/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/thomasgauvin/work/2023/PROJECTS-Q3-Q4/nuxt-on-swa/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/thomasgauvin/work/2023/PROJECTS-Q3-Q4/nuxt-on-swa/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/thomasgauvin/work/2023/PROJECTS-Q3-Q4/nuxt-on-swa/node_modules/unstorage/drivers/fs.mjs';
import 'file://C:/Users/thomasgauvin/work/2023/PROJECTS-Q3-Q4/nuxt-on-swa/node_modules/radix3/dist/index.mjs';

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

export { index as default };
//# sourceMappingURL=index-b533dd77.mjs.map
