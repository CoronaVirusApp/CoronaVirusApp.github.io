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
	
	
	/******************/

	//rank3

	document.getElementById("s3-name").innerHTML = (data.statewise[3].state).toUpperCase();
	//  console.log(data.statewise[3].state);
	document.getElementById("s3-total").innerHTML = (data.statewise[3].confirmed);
	//  console.log(data.statewise[3].confirmed);
	document.getElementById("s3-deaths").innerHTML = (data.statewise[3].deaths);
	//	console.log(data.statewise[3].deaths);
	
	
	/******************/

	//rank4

	document.getElementById("s4-name").innerHTML = (data.statewise[4].state).toUpperCase();
	//  console.log(data.statewise[4].state);
	document.getElementById("s4-total").innerHTML = (data.statewise[4].confirmed);
	//  console.log(data.statewise[4].confirmed);
	document.getElementById("s4-deaths").innerHTML = (data.statewise[4].deaths);
	//	console.log(data.statewise[4].deaths);
	
	
	/******************/

	//rank5

	document.getElementById("s5-name").innerHTML = (data.statewise[5].state).toUpperCase();
	//  console.log(data.statewise[1].state);
	document.getElementById("s5-total").innerHTML = (data.statewise[5].confirmed);
	//  console.log(data.statewise[1].confirmed);
	document.getElementById("s5-deaths").innerHTML = (data.statewise[5].deaths);
	//	console.log(data.statewise[1].deaths);
	
	
	/******************/

	//rank6

	document.getElementById("s6-name").innerHTML = (data.statewise[6].state).toUpperCase();
	//  console.log(data.statewise[2].state);
	document.getElementById("s6-total").innerHTML = (data.statewise[6].confirmed);
	//  console.log(data.statewise[2].confirmed);
	document.getElementById("s6-deaths").innerHTML = (data.statewise[6].deaths);
	//	console.log(data.statewise[2].deaths);
	
	
	/******************/

	//rank7

	document.getElementById("s7-name").innerHTML = (data.statewise[7].state).toUpperCase();
	//  console.log(data.statewise[3].state);
	document.getElementById("s7-total").innerHTML = (data.statewise[7].confirmed);
	//  console.log(data.statewise[3].confirmed);
	document.getElementById("s7-deaths").innerHTML = (data.statewise[7].deaths);
	//	console.log(data.statewise[3].deaths);
	
	
	/******************/

	//rank8

	document.getElementById("s8-name").innerHTML = (data.statewise[8].state).toUpperCase();
	//  console.log(data.statewise[4].state);
	document.getElementById("s8-total").innerHTML = (data.statewise[8].confirmed);
	//  console.log(data.statewise[4].confirmed);
	document.getElementById("s8-deaths").innerHTML = (data.statewise[8].deaths);
	//	console.log(data.statewise[4].deaths);
	
	
	/******************/

	//rank9

	document.getElementById("s9-name").innerHTML = (data.statewise[9].state).toUpperCase();
	//  console.log(data.statewise[3].state);
	document.getElementById("s9-total").innerHTML = (data.statewise[9].confirmed);
	//  console.log(data.statewise[3].confirmed);
	document.getElementById("s9-deaths").innerHTML = (data.statewise[9].deaths);
	//	console.log(data.statewise[3].deaths);
	
	
	/******************/

	//rank10

	document.getElementById("s10-name").innerHTML = (data.statewise[10].state).toUpperCase();
	//  console.log(data.statewise[4].state);
	document.getElementById("s10-total").innerHTML = (data.statewise[10].confirmed);
	//  console.log(data.statewise[4].confirmed);
	document.getElementById("s10-deaths").innerHTML = (data.statewise[10].deaths);
	//	console.log(data.statewise[4].deaths);




}




getData(); //showing the data


var interval = setInterval(function () {
	getData();
}, 120000);
