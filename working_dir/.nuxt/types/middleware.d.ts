import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "C:/Users/thomasgauvin/work/2023/PROJECTS-Q3-Q4/nuxt-on-swa/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}