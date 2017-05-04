// window.onload = function(){
// 	var testdiv = document.getElementById("testdiv");
// 	testdiv.innerHTML = "<p>This is <em>my</em> content.</p>";
// }


// window.onload = function(){
// 	var para = document.createElement("p");
// 	var info = "nodeName: ";
// 	info += para.nodeName;
// 	info += " nodeType: ";
// 	info += para.nodeType;
// 	alert(info);
// }


 function para1(){
	var para = document.createElement("p");
	var testdiv = document.getElementById("testdiv");
	testdiv.appendChild(para);
	var txt = document.createTextNode("Hellow world!");
	para.appendChild(txt);
}
s
 function para2(){
	var para = document.createElement("p");
	var txt = document.createTextNode("Hellow world!");
	para.appendChild(txt);
	var testdiv = document.getElementById("testdiv");
	testdiv.appendChild(para);
}


window.onload = function(){
	para1();
	para2();
}