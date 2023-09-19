import { defineEventHandler, getRequestHeaders } from 'h3';

const hello = defineEventHandler((event) => {
  const headers = getRequestHeaders(event);
  return {
    message: "hello world",
    headers
  };
});

export { hello as default };
//# sourceMappingURL=hello.mjs.map
