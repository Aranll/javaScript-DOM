function positionMessage() {
	if(!document.getElementById) return false;
	if(!document.getElementById("message")) return false;
	var elem = document.getElementById("message");
	elem.style.position = "absolute";
	elem.style.left = "500px";
	elem.style.top = "100px";
	if(!document.getElementById("messages")) return false;
	var elems = document.getElementById("messages");
	elems.style.position = "absolute";
	elems.style.left = "100px";
	elems.style.top = "500px";
	moveElement("message",300,400,10);
	moveElement("messages",500,0,5);
}



// movement = setTimeout("moveMessage()",10);

// function moveMessage() {
// 	if(!document.getElementById) return false;
// 	if(!document.getElementById("message")) return false;

// 	var elem = document.getElementById("message");
// 	var xpos = parseInt(elem.style.left);
// 	var ypos = parseInt(elem.style.top);
// 	if (xpos === 200 && ypos ===100){
// 		return true;
// 	}
// 	if (xpos < 200){
// 		xpos++;
// 	}
// 	if (xpos > 200){
// 		xpos--;
// 	}
// 	if (ypos < 100){
// 		ypos++;
// 	}
// 	if (ypos > 100){
// 		ypos--;
// 	}
// 	elem.style.left = xpos + "px";
// 	elem.style.top = ypos + "px";
// 	movement = setTimeout("moveMessage()",100);
// }




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

addLoadEvent(positionMessage);
// addLoadEvent(moveMessage);