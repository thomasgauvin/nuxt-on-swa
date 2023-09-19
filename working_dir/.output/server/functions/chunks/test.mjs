import { defineEventHandler, getRequestHeaders } from 'h3';

const test = defineEventHandler((event) => {
  const headers = getRequestHeaders(event);
  return {
    message: "hello world",
    headers
  };
});

export { test as default };
//# sourceMappingURL=test.mjs.map
