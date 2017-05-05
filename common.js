
function setCookie(key, val, expires){
	var now = new Date();
	now.setDate( now.getDate()+expires );
	document.cookie = key+"="+val+"; expires="+now;
}

function getCookie(key){
	var cookiestr = document.cookie;
	var list = cookiestr.split("; ");
	for(var attr in list){
		var kv = list[attr].split("=");
		if(kv[0] == key){
			return kv[1];
		}
	}
	return "";
}

/**

*/
function getpageCoord(ele){
	var totalX = 0;
	var totalY = 0;
	totalX += ele.offsetLeft;
	totalY += ele.offsetTop;
	while(ele.offsetParent){
		ele = ele.offsetParent;
		totalX += ele.offsetLeft;
		totalY += ele.offsetTop;
	}
	
	/*
	var obj = {
		x : totalX,
		y : totalY
	}
	*/
	return {
		x : totalX,
		y : totalY
	};
}


/**
	获取Style属性，解决兼容
*/
function getStyle(ele){
	//如果判断是IE？？
	if(ele.currentStyle){
		return ele.currentStyle;
	} else {
		return getComputedStyle(ele,null); // 
	}
}

/**
	获取该元素的所有元素节点
*/
function getChildElements(ele){
	var newlist = [];
	for(var i=0; i<ele.childNodes.length; i++){
		if( ele.childNodes[i].nodeType == 1){
			newlist.push(ele.childNodes[i]);
		}
	}
	return newlist;
}


/**
	根据指定范围，获取随机整数
*/
function randomInt(min, max){
	return Math.round(Math.random()*(max-min)) + min;
}

function randomColor(){
	var R = randomInt(0,255).toString(16);
	var G = randomInt(0,255).toString(16);
	var B = randomInt(0,255).toString(16);
	
	return "#" + (R.length<2?"0"+R:R) + (G.length<2?"0"+G:G) + (B.length<2?"0"+B:B);
}


/**
	将一个日期对象变成字符串
*/
function date2string(d, sep, yaobuyao){
	sep = sep || "-";
	var str = d.getFullYear()+sep+(d.getMonth()+1)+sep+d.getDate(); 
	if(yaobuyao){
		str += " "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
		return str;
	} else {
		return str;
	}
}

/**
	将一个字符串，变成日期对象
*/
function string2date(str, sep){
	str = str.replace(sep, "-");
	return new Date(str);
}

/**
	计算两个日期之间的差值
*/
function between(start, end, isfix){
	var totalsecs = Math.abs(start.getTime()-end.getTime())/1000;
	return isfix ? Math.round(total/(24*3600)) : total/(24*3600);
}
//between(new Date("2016-10-20"), new Date("2016-10-25"), true)

