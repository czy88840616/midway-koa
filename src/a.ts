(async () => {
  const app = new MidwayApplication();
  // 全局中间件
  app.use(require('koa-static')(root, opts));
  await app.ready();
  app.listen(3000);
})();
