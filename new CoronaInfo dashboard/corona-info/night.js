function myFunction() {

	if (localStorage.getItem('Dark') == 1) {
		
		localStorage.setItem('Dark',0);

		document.body.style.backgroundColor = "var(--bg-light)";

		document.getElementById("top").style.backgroundColor = "var(--bg-light)";
		document.getElementById("card").style.backgroundColor = "var(--card-light)";


		document.getElementById("night").src = "assets/night-light.svg";
		document.getElementById("notification").src = "assets/notification-light.svg";


	} else {

		localStorage.setItem('Dark',1);

		document.body.style.backgroundColor = "var(--bg-dark)";

		document.getElementById("top").style.backgroundColor = "var(--bg-dark)";
		document.getElementById("card").style.backgroundColor = "var(--card-dark)";


		document.getElementById("night").src = "assets/night-dark.svg";
		document.getElementById("notification").src = "assets/notification-dark.svg";
	}

}