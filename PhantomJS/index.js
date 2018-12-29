/*get方法与服务器通信***********************************/
// var page=require('webpage').create()
// page.open('http://www.baidu.com',function(state){
//     console.log(state)
//     phantom.exit()
// })


/*get方法与服务器通信***********************************/
var page=require('webpage').create()
setInterval(function(){
    page.open('https://scm.nqtown.com/login',function(state){
        console.log(state)
         
    })
},1000)

