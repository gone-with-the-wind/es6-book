## 参考文献
[如何在webpack下使用sharedWorker](https://segmentfault.com/q/1010000013821300)
[worker-loader](https://github.com/webpack-contrib/worker-loader) 能支持Worker的使用。也可以用下这个[shared-worker-loader](https://github.com/mrtnbroder/shared-worker-loader)
[JavaScript 运行机制详解：再谈Event Loop](http://www.ruanyifeng.com/blog/2014/10/event-loop.html)
[Web Worker 详细介绍](https://segmentfault.com/a/1190000012528806)
[深入 HTML5 Web Worker 应用实践：多线程编程](https://www.ibm.com/developerworks/cn/web/1112_sunch_webworker/)


## 在react中使用webworker
```
# npm  install --save-dev worker-loader

# webpack增加配置 
rules: [
  {
    test: /\.worker\.js$/, //以.worker.js结尾的文件将被worker-loader加载
    use: { loader: 'worker-loader' }
  }
]

# test.worker.js文件如下
// 监听消息
onmessage = function(evt){
  // 工作线程收到主线程的消息
};
let msg = '工作线程向主线程发送消息'
postMessage(msg);

# app.js文件如下
import Worker from './test.worker.js';

// 创建 worker 实例
var worker = new Worker(); // 传入 worker 脚本文件的路径即可
worker.postMessage({ a: 1 });
worker.onmessage = function (event) {
    console.log(event.data)
};

worker.addEventListener("message", function (event) {});
```
