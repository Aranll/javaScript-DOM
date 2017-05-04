// var paras = document.getElementsByTagName("p");
// for(var i=0; i<paras.length; i++) {
// 	paras[i].onclick = function() {
// 		alert("This is a paragraph.");
// 	}
// }


var para = document.getElementById('example');
para.onclick = function(){
	// alert(para.style.color);
	// alert(para.style.fontFamily);
	alert(para.style.fontSize);
}