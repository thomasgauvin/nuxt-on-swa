import { _ as __nuxt_component_0 } from './nuxt-link-0d39ff03.mjs';
import { withAsyncContext, withCtx, createTextVNode, unref, useSSRContext } from 'file://C:/Users/thomasgauvin/work/2023/PROJECTS-Q3-Q4/nuxt-on-swa/node_modules/vue/index.mjs';
import { u as useFetch } from './fetch-e0698407.mjs';
import { ssrRenderComponent, ssrInterpolate } from 'file://C:/Users/thomasgauvin/work/2023/PROJECTS-Q3-Q4/nuxt-on-swa/node_modules/vue/server-renderer/index.mjs';
import 'file://C:/Users/thomasgauvin/work/2023/PROJECTS-Q3-Q4/nuxt-on-swa/node_modules/ufo/dist/index.mjs';
import '../server.mjs';
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

const _sfc_main = {
  __name: "static",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/hello", {
      server: false
    }, "$1A8xmca7SE")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<!--[--><div>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Home`);
          } else {
            return [
              createTextVNode("Home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div> test static </div>`);
      if (!!unref(data)) {
        _push(`<div>${ssrInterpolate(unref(data).message)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/static.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=static-95c641ac.mjs.map
