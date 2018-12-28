import Worker from './test.worker.js';

// 创建 worker 实例
var worker = new Worker(); // 传入 worker 脚本文件的路径即可
 
worker.postMessage("123456")

worker.onmessage=function(e){
	console.log(e.data)
}
 
