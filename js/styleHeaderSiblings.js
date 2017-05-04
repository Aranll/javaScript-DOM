// function styleHeaderSiblings() {
// 	if (!document.getElementsByTagName('h1')) return false;
// 	var headers = document.getElementsByTagName("h1");
// 	var elem;
// 	for (var i=0; i<headers.length; i++){
// 		elem = getNextElement(headers[i].nextSibling);
// 		elem.style.fontWeight = "bold";
// 		elem.style.fontSize = "2em";
// 	}
// }

function styleHeaderSibling(){
	if (!document.getElementsByTagName) return false;
	var headers = getElementsByTagName("h1");
	var elem;
	for (var i=0; i<headers.length; i++) {
		elem = getNextElement(headers[i].nextSibling);
		elem.className = "intro";
	}
}



function getNextElement(node){
	if(node.nodeType == 1) {
		return node;
	}
	if (node.nextSibling){
		return getNextElement(node.nextSibling);
	}
	return null;
}


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


addLoadEvent(styleHeaderSiblings);