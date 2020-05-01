//s1 = state name (rank 1)
//t1 = total cases (in rank 1 state)
//r1 = total recovered (in rank 1 state)
//d1 = total deaths (in rank 1 state)


var api_url2 = 'https://api.covid19india.org/data.json';

async function getData() {
	const response = await fetch(api_url);
	const data = await response.json();


	/******************/

	//rank1

	document.getElementById("s1-name").innerHTML = (data.statewise[1].state).toUpperCase();
	//  console.log(data.statewise[1].state);
	document.getElementById("s1-total").innerHTML = (data.statewise[1].confirmed);
	//  console.log(data.statewise[1].confirmed);
	document.getElementById("s1-deaths").innerHTML = (data.statewise[1].deaths);
	//	console.log(data.statewise[1].deaths);
	
	
	/******************/

	//rank2

	document.getElementById("s2-name").innerHTML = (data.statewise[2].state).toUpperCase();
	//  console.log(data.statewise[2].state);
	document.getElementById("s2-total").innerHTML = (data.statewise[2].confirmed);
	//  console.log(data.statewise[2].confirmed);
	document.getElementById("s2-deaths").innerHTML = (data.statewise[2].deaths);
	//	console.log(data.statewise[2].deaths);




}




getData(); //showing the data


var interval = setInterval(function () {
	getData();
}, 120000);
