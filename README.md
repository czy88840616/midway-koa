# Midway-koa

这是一个 midway 直接应用在 koa 场景的代码框架，未经过实践，请不要直接应用在线上环境。

支持 @controller/@get/@post 等装饰器。

示例请看测试用例。

## Usage

和 koa 基本相同，方法一致。只是增加了 midway 的 ioc 用法，可以自动加载任意目录的 controller 文件。

```ts
const app = new MidwayApplication();
app.listen(3000);
```