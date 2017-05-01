function showPic (whichpic) {
	if(!document.getElementById("placeholder")) {
		return false;
	}

	//获取对应图片的属性
	var source = whichpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");

	if(placeholder.nodeName != "IMG") return false;
	placeholder.setAttribute("src",source);

	if (document.getElementById("description")){
		var text = whichpic.getAttribute("title")? whichpic.getAttribute("title"):"";
		var description = document.getElementById("description");
		if(description.firstChild.nodeType == 3){
			description.firstChild.nodeValue = text;			
		}
	}
	return true;
}	


function prepareGallery() {
	if (!document.getElementsByTagName) return false;
	if (!document.getElementById) return false;
	if (!document.getElementById("imagegallery")) return false;

	var gallery = document.getElementById("imagegallery");
	var links = gallery.getElementsByTagName("a");

	for(var i=0; i < links.length; i++){
		links[i].onclick = function(){
			return !showPic(this);	
		}
	}
}

function insertAfter(newElement,targetElement){
	var parent = targetElement.parentNode;
	if(parent.lastChild == targetElement){
		parent.appendChild(newElement);
	}else{
		parent.inserBefore(targetElement.nextSibling);
	}
}

function preparePlaceholder(){
	if (!document.creatElement) return false;
	if (!document.createTextNode) return false;
	if (!document.getElementById) return false;
	if (!document.getElementById("imagegallery")) return false;
	
	var placeholder = document.createElement("img");
	var description = document.createElement("p");
	var desctext = document.createTextNode("choose an image"); 
	var gallery = document.getElementById("imagegallery");
	//给占位的图片添加属性
	placeholder.setAttribute("id","placeholder");
	placeholder.setAttribute("src","images/placeholder.jpg");
	placeholder.setAttribute("alt","my image gallery");
	//给用来描述图片的段落添加属性
	description.setAttribute("id","description");

	description.appendChild(desctext);

	document.getElementsByTagName("body")[0].appendChild(placeholder);
	document.getElementsByTagName("body")[0].appendChild(description);
	insertAfter(placeholder,gallery);
	insertAfter(description,placeholder);
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

//增加preparGallery函数
addLoadEvent(prepareGallery);
//增加preparePlaceholder函数
addLoadEvent(preparePlaceholder);







