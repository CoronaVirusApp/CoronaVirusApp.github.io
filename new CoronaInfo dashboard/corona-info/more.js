localStorage.setItem('show', 1);

// 0 means true
// 1 means false

function more() {

	if (localStorage.getItem('show') == 1) {
		localStorage.setItem('show', 0);
		for (i = 11; i <= 37; i++) {
			document.getElementById("s" + i).style.display = "flex";
			document.getElementById("more-less").innerHTML = "SHOW LESS";
			document.getElementById("state-card").style.height = "173vh";
			document.getElementById("card").style.height = "251.5vh";
		}
	} else {
		localStorage.setItem('show', 1);
		for (i = 11; i <= 37; i++) {
			document.getElementById("s" + i).style.display = "none";
			document.getElementById("more-less").innerHTML = "SHOW MORE";
			document.getElementById("state-card").style.height = "58vh";
			document.getElementById("card").style.height = "136.5vh";


		}
	}

}