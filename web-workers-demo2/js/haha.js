 

 function fabonacci(n){
 	return n<2?n:arguments.callee(n-1)+arguments.callee(n-2)
 }

this.onmessage = function(msg){
 		let a=fabonacci(msg.data)
 	 
	postMessage(a);
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

