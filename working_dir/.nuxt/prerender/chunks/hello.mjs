import { defineEventHandler, getRequestHeaders } from 'file://C:/Users/thomasgauvin/work/2023/PROJECTS-Q3-Q4/nuxt-on-swa/node_modules/h3/dist/index.mjs';

const hello = defineEventHandler((event) => {
  const headers = getRequestHeaders(event);
  return {
    message: "hello world",
    headers
  };
});

export { hello as default };
//# sourceMappingURL=hello.mjs.map
