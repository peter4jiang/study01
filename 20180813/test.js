window.onload = function() {

	var para = document.createElement('p')
	var node = document.createTextNode('this is a new p')
	para.appendChild(node)

	var div = document.getElementById('div')
	div.appendChild(para)

	// var para = document.createElement("p");
	// var node = document.createTextNode("这是一个新的段落。");
	// para.appendChild(node);
	 
	// //var element = document.getElementById("div1");
	// //element.appendChild(para);
	// xx.insertBefore(a, b) 在xx中把a插入到b的前面
	// parent.removeChild(child) 必须知道父元素
	// parent.replaceChild(a, b) 用a替换b

	// getElementsByTagName 返回的是HTMLCollection对象
	/*HTMLCollection 不是一个数组！

	HTMLCollection 看起来可能是一个数组，但其实不是。

	你可以像数组一样，使用索引来获取元素。

	HTMLCollection 无法使用数组的方法： valueOf(), pop(), push(), 或 join() 。
	*/
	// 数组的一切
	var arr = new Array(1, 12, 3, 4, 5)
	arr.push(10)
	//arr = arr.join(' ')
	arr.reverse()
	arr.sort(function(a, b) {
		if (a < b) {
			return -1
		} else if (a > b) {
			return 1
		} else {
			return 0
		}
	})
	console.log(arr)
}