function loadBigfoot() {
	document.getElementById("bigfoot").src = "bigfoot.png";
}

function moveBigfoot() {
	alert('You win! You found Bigfoot!')

	var picture = document.getElementById('bigfoot')

	var x = Math.random() * window.innerWidth
	var y = Math.random() * window.innerHeight

	picture.style.top = x + 'px'
	picture.style.left = y + 'px'
}
