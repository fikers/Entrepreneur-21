if (document.documentElement.clientWidth < 790) {
	console.log("Screen is small")
	var nav = document.getElementById("navbar")
	console.log(nav)
	nav.classList.remove("navbar-fixed-top")	
}