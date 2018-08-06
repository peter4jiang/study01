// document.write('javascript hello world')
// document.write('<h1>javascript</h1>')


var oBtn = document.getElementById('btn')


oBtn.onclick = function() {
	var oInput = document.getElementById('demo').value
	
	if (oInput == '' || isNaN(oInput)) {
		alert('非数字')
	} else {
		alert('数字')
	}
}




	
