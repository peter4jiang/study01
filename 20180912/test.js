window.onload = function() {
	// JavaScript 能够改变页面中的所有 HTML 元素
	// JavaScript 能够改变页面中的所有 HTML 属性
	// JavaScript 能够改变页面中的所有 CSS 样式
	// JavaScript 能够对页面中的所有事件做出反应
	// var x=document.getElementById("intro");
	// var y=x.getElementsByTagName("p");
	var oMain = document.getElementById('main')
	var op = oMain.getElementsByTagName('p')

	//console.log(op.length)
	// var x=document.getElementsByClassName("intro");
	// document.getElementsByTagName
	// document.getElementById
	// document.getElementsByClassName
	// op[0].style.color = 'red'
	// op[1].style.fontSize = '20px'
	// var flag = false
	// oMain.onmouseover = function() {
	// 	op[0].innerHTML = 'Thank You'
	// }
	// oMain.onmouseout = function() {
	// 	op[0].innerHTML = 'Mouse Over Me'
	// }
	// op[0].onclick = function() {
	// 	if (flag) {
	// 		this.style.color = 'white'
	// 		flag = false
	// 	} else {
	// 		this.style.color = 'black'
	// 		flag = true
	// 	}
	// }
	// onload onunload 在用户进入或离开页面时触发，一般用于处理cookie
	// onmousedown onmouseup事件
	// oMain.onmousedown = function() {
	// 	this.style.backgroundColor = '#ececec'
	// }
	// oMain.onmouseup = function() {
	// 	this.style.backgroundColor = 'red'
	// }
	// oMain.onmouseover = function() {
	// 	op[0].innerHTML = 'Thank You'
	// }
	// oMain.onmouseout = function() {
	// 	op[0].innerHTML = 'Mouse Over Me'
	// }
	// addEventListener添加事件监听器
	oMain.addEventListener('mouseover', function() {
		op[0].innerHTML = '0.' + parseInt(Math.random()*100)
	})

}

// $(function() {
// 	$('#main p').mouseover(function() {
// 		$(this).css('background-color', '#ccc')
// 	})
// 	$('#main p').mouseout(function() {
// 		$(this).css('background-color', '#fff')
// 	})
// })