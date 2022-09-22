# koa-typescript-starter

之前用过express，这次试试koa。好像主要区别是中间件支持async,await了。配合官方的中间件使用起来和express感觉没啥区别

给自己用的小starter

# Features  

- Typescript, 配合ts-node-dev达到实时开发的效果
- 使用dotenv库,在.env文件中配置环境变量

# npm scripts


```
npm start
```
编译ts=>js至dist文件夹 并运行index.js

```
npm run dev 
```
实时监测ts文件,更改后自动编译并重启应用

```
npm run build
```
AKA. tsc. 编译ts=>js至dist文件夹



