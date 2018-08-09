window.onload = function() {
	// alert(3.14)
	// alert(1001)
	// alert(123e5)
	// var str = '123'
	// alert(str.length)
	// var length = 16
	// var points = x * 10
	// var lastName = "Johnson"
	// var cars = ["Saab", "Volvo", "bmw"]
	// var person = {firname: "John", lastName: "Doe"}
	// var x = true
	// var y = false
	// var cars = new Array()
	// cars[0] = 'a'
	// cars[1] = 'b'
	// cars[2] = 'c'
	
	// var person = {
	// 	firstName: 'John',
	// 	lastName: 'Doe',
	// 	age: '30',
	// 	eyeColor: 'white',
	// 	say: function() {
	// 		console.log('say something to me')
	// 	}
	// }

	// person.say()

	// var person = {
	// 	firstName: 'John',
	// 	lastName: 'Doe',
	// 	age: '30',
	// 	eyeColor: 'white',
	// }
	// for (x in person) {
	// 	console.log(x)
	// }

	// var person = undefined
	// console.log(typeof person)
	// js有5种基本数据类型 number string boolean object function
	// 3种对象类型 Object Date Array
	// 2种不包含任何值的类型 undefined null
	// 类型转化 Number String Boolean

	// var a = String(12)
	// console.log(typeof a)

	// try {

	// } catch (err) {

	// }
	// throw execption

	// "use strict"

	// myFunction()

	// function myFunction() {
	// 	y = 1.2
	// }

	var oBtn = document.getElementById('btn')
	oBtn.onclick = function() {
		var cont = document.forms['myForm']['fname'].value
		if (cont == null || cont == '') {
			alert('请输入内容')
		}
	}

}