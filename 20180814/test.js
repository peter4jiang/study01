window.onload = function() {
	// var s = "i love you"
	// console.log(s.toUpperCase())
	// 任何都是对象
	// var obj = new Object()
	// obj.name = 'dog'
	// obj.age = 20
	// obj.say = function() {
	// 	alert('i spark')
	// }
	// // console.log(obj)
	// obj.say()
	// JavaScript 基于 prototype，而不是基于类的。
	// javascript数字均为64位
	// var num = 128
	// console.log(num.toString(2))
	// Infinity isNaN NaN - 非数字值
	// if (isNaN('s')) {
	// 	console.log(1)
	// } else {
	// 	console.log(2)
	// }
	// var n = new Object(1)
	// console.log(n.valueOf())
	// function time() {
	// 	var today = new Date()
	// 	// console.log(today)
	// 	var h = today.getHours()
	// 	var m = today.getMinutes()
	// 	var s = today.getSeconds()
	// 	m = addZero(m)
	// 	s = addZero(s)
	// 	// document.write(h + ':' + m + ':' + s)
	// 	document.getElementById('time').innerHTML = h + ':' + m + ':' + s

	// 	setTimeout(time, 1000)
	// }

	// function addZero(i) {
	// 	if (i<10) {
	// 		i = '0' + i
	// 	}
	// 	return i
	// }

	
	// time()

	// console.log(Math.round(1.53, 2))
	// console.log(Math.max(1, 3, 3, 5))
	// console.log(Math.min(1, 3, 3, 5))
	var f = Math.random()
	console.log(Math.floor(f*100)/100)
}