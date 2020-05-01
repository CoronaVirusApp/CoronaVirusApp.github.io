//s1 = state name (rank 1)
//t1 = total cases (in rank 1 state)
//r1 = total recovered (in rank 1 state)
//d1 = total deaths (in rank 1 state)


const api_url = 'https://api.covid19india.org/data.json';

async function getData() {
	const response = await fetch(api_url);
	const data = await response.json();


	/******************/

	//rank1

	document.getElementById("s1").innerHTML = "1.&nbsp;&nbsp;" + (data.statewise[1].state);
	//  console.log(data.statewise[1].state);
	document.getElementById("t1").innerHTML = (data.statewise[1].confirmed);
	//  console.log(data.statewise[1].confirmed);
	document.getElementById("r1").innerHTML = (data.statewise[1].recovered);
	//	console.log(data.statewise[1].recovered);
	document.getElementById("d1").innerHTML = (data.statewise[1].deaths);
	//	console.log(data.statewise[1].deaths);



	
}




getData(); //showing the data


var interval = setInterval(function () {
	getData();
}, 120000);
