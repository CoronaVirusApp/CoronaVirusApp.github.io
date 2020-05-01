function myFunction() {
	//	if (document.getElementById("night").src == "assets/night-light.svg")
	document.body.style.backgroundColor = "var(--bg-dark)";
	
	document.getElementById("top").style.backgroundColor = "var(--bg-dark)";
	document.getElementById("card").style.backgroundColor = "var(--card-dark)";
	
	
	document.getElementById("night").src = "assets/night-dark.svg";
	document.getElementById("notification").src = "assets/notification-dark.svg";

}