// function displayAbbreviations(){
// 	if(!document.getElementsByTagName) return false;
// 	if(!document.createElement) return false;
// 	if(!document.createTextNode) return false;
// 	var abbreviations = document.getElementsByTagName("abbr");
// 	var current_abbr;
// 	var definition;
// 	var key;
// 	var dlist = document.createElement("dl");
// 	var dtitle = document.createElement("dt");
// 	var ddesc = document.createElement("dd");
// 	var dtitle_text;
// 	var ddesc_text;
// 	var header = document.createElement("h2");
// 	var header_text = document.createTextNode("Abbreviations");
// 	header.appendChild(header_text);

// 	var defs = new Array();

// 	//当文档中没有缩略词时，返回false
// 	if(abbreviations.length < 1 ) return false;
// 	//获取缩略词及其定义
// 	for(var i=0; i<abbreviations.length; i++){
// 		//获取当前缩略词及缩略词的title和difinition
// 		current_abbr = abbreviations[i];
// 		definition = current_abbr.getAttribute("title");
// 		key = current_abbr.lastChild.nodeValue;
// 		//将definition加入数组
// 		defs[key] = definition;

// 	}
// 	//创建标记和连接标记
// 	for(key in defs){
// 		definition = defs[key];
// 		dtitle_text = document.createTextNode(key);
// 		dtitle.appendChild(dtitle_text);
// 		ddesc_text = document.createTextNode(definition);
// 		ddesc.appendChild(ddesc_text);
// 		dlist.appendChild(dtitle);
// 		dlist.appendChild(ddesc);
// 	}
// 	document.body.appendChild(header);
// 	document.body.appendChild(dlist);
// }



function displayAbbreviations(){
	if(!document.getElementsByTagName) return false;
	if(!document.createElement) return false;
	if(!document.createTextNode) return false;	
	
	var abbreviations = document.getElementsByTagName("abbr")
	if (abbreviations.length < 1) return false;

	var defs = new Array();
	for(var i=0; i<abbreviations.length; i++) {
		var current_abbr = abbreviations[i];
		if(current_abbr.childNodes.length<1) return false;
		var definition = current_abbr.getAttribute("title");
		var key = current_abbr.lastChild.nodeValue;
		defs[key] = definition;
	}

	var dlist = document.createElement("dl");
	for(key in defs){
		var definition = defs[key];
		var dtitle = document.createElement("dt");
		var dtitle_text = document.createTextNode(key);
		dtitle.appendChild(dtitle_text);
		var ddesc = document.createElement("dd");
		var ddesc_text = document.createTextNode(definition);
		ddesc.appendChild(ddesc_text);
		dlist.appendChild(dtitle);
		dlist.appendChild(ddesc);
	}
	if (dlist.childNodes.length < 1) return false;
	var header = document.createElement("h2");
	var header_text = document.createTextNode("Abbreviations");
	header.appendChild(header_text);
	document.body.appendChild(header);
	document.body.appendChild(dlist);
}



addLoadEvent(displayAbbreviations);
