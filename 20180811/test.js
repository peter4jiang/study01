window.onload = function() {
	//alert(myFunction(1, 2))

	// 函数表达式
	// var x = function(a, b) {
	// 	return a + b
	// }

	//alert(x(1, 2))

	// alert(x(1, 2))

	// var y = new Function('a', 'b', 'return a + b')
	// alert(y(2, 3))

	// 自调用函数
	// (function() {
	// 	alert('i call myself')
	// })()
	// alert('i call myself')
	// (function() {
	// 	alert()
	// })()

	// var myObject = {
	// 	firstName: 'John',
	// 	lastName: 'Doe',
	// 	fullName: function() {
	// 		return this.firstName + ' ' + this.lastName
	// 	}
	// }
	// console.log(myObject.fullName())

	// function myfunc(x) {
	// 	var sum = 0
	// 	for (b in x) {
	// 		sum += b
	// 	}
	// 	return sum
	// }
	// //var x = myfunc.call(x, 10, 2)
	// var x = myfunc.apply(x, [1, 2, 3, 4])
	// console.log(x)
	// function myfunc(x) {
	// 	var len = x.length
	// 	var sum = 0
	// 	for (var i=0; i<len; i++) {
	// 		sum += x[i]
	// 	}
	// 	return sum
	// }
	// console.log(myfunc([1, 2, 3, 3]))

	// 在web页面中全局变量属于 window 对象。
	// function func1() {
	// 	var a = 4
	// 	console.log(a * a)
	// }
	// var a = 4
	// function func1() {
	// 	console.log(a * a)
	// }
	// func1()
	// console.log(window.a)

	// var counter = 0
	// function add() {
	// 	counter ++
	// }

	// add()
	// add()
	// add()

	// console.log(counter)
	// 我们需要闭包。
	// function add() {
	// 	var counter = 0
	// 	function plus() { counter += 1 }
	// 	plus()
	// 	return counter
	// }
	// var x = null
	// x = add()
	// x = add()
	// x = add()
	// console.log(x)

	var add = (function() {
		var counter = 0
		return function() { return counter += 1 }
	})()
	var x = null
	x = add()
	x = add()
	x = add()
	console.log(x)
}

function myFunction(a, b) {
	return arguments.length
}
