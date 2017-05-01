//在页面加载完成后，增加要执行的函数
function addLoadEvent(func){
	var oldOnload = window.onload;
	if(typeof window.onload != "function"){
		window.onload = func;
	}else{
		window.onload = function(){
			oldOnload();
			func();
		}
	}
}