importScripts("./plus.js");

var t = 0;

this.onmessage = function(msg){
	var data = new Uint32Array(msg.data);
	data[0] = plus(data[0],t);
	t = data[0];
	// console.log(data[0]);
	postMessage(data.buffer);
}

// try{
// 	console.log(document);
// }catch(e){}
// try{
// 	console.log(XMLHttpRequest);
// }catch(e){}
// try{
// 	console.log(navigator);
// }catch(e){}
// try{
// 	console.log(Math);
// }catch(e){}
// try{
// 	console.log(Date);
// }catch(e){}

