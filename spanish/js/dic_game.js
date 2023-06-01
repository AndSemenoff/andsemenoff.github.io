let player1Count = 0;
let player2Count = 0;

function buttonCreate(data, dataIndex, tag, cl, id){
	var input = document.createElement("input");
	input.setAttribute("class", "text-center button action " + cl);
	//input.setAttribute("onclick", "test()");
	input.setAttribute("id", id);
	input.setAttribute("value", String(data[dataIndex].russian));
	return input
}
function tableGameCreate(tag) {
	var data = base.filter(element => element.tags == tag)
	let r = [];
	r[0] = Math.floor(Math.random() * data.length);
	//console.log("r[0]=", r[0]);
	r[1] = r[0];
	while (r[0] == r[1]) { 
		r[1] = Math.floor(Math.random() * data.length);
	}
	//console.log("r[1]=", r[1]);
	r[2] = r[1];
	while (r[0] == r[2] || r[1] == r[2]) 
	{
		r[2] = Math.floor(Math.random() * data.length);
	}
	//console.log("r[2]=", r[2]);
	
	let correct = r[Math.floor(Math.random() * 3)];
	
	let answerCorrect = String(data[correct].russian);
	//id reference 
	var body = document.getElementById("myGame");

	// create elements <table> and a <tbody>
	var tbl = document.createElement("table");
	var tblBody = document.createElement("tbody");

	// cells creation
	// table row creation

	
	// next button
	var row = document.createElement("tr");
	// cell 1
	var cell1 = document.createElement("td");
	var cellText1 = document.createTextNode(player1Count + " : " + player2Count);
	cell1.setAttribute("class", "text-center rotated");
	cell1.appendChild(cellText1);
	row.appendChild(cell1);
	// cell 2
	var cell2 = document.createElement("td");
	cell2.setAttribute("colspan", "2");
	cell2.setAttribute("class", "text-center");
	var cellNext = document.createElement("input");
	cellNext.setAttribute("value", "Next");
	cellNext.setAttribute("disabled", "disabled");
	cellNext.setAttribute("class", "next button rotated ");
	cellNext.setAttribute("onclick", "next('"+ String(tag) +"')");
	cell2.appendChild(cellNext);
	row.appendChild(cell2);
	tblBody.appendChild(row);
	
	// ROW PLAYER1
	var row = document.createElement("tr");
	for (let i=0; i < 3; i++){
		var input1 = buttonCreate(data, r[i], tag, "rotated", i);
		var cell1 = document.createElement("td");
		cell1.appendChild(input1);
		row.appendChild(cell1);
	}

	//row added to end of table body
	tblBody.appendChild(row);
	// END ROW PLAYER1
	// row question for player1
	var row = document.createElement("tr");
	// cell 1
	var cell1 = document.createElement("td");
	cell1.setAttribute("colspan", "3");
	cell1.setAttribute("class", "rotated text-center");
	var cellText1 = document.createTextNode(data[correct].spanish);
	cell1.appendChild(cellText1);
	row.appendChild(cell1);

	//row added to end of table body
	tblBody.appendChild(row);
	// end row question for player1
	
	// row question for player2
	var row = document.createElement("tr");
	// cell 1
	var cell1 = document.createElement("td");
	cell1.setAttribute("colspan", "3");
	cell1.setAttribute("class", "text-center");
	var cellText1 = document.createTextNode(data[correct].spanish);
	cell1.appendChild(cellText1);
	row.appendChild(cell1);

	//row added to end of table body
	tblBody.appendChild(row);
	// end row question for player2
	
	// ROW PLAYER2
	var row = document.createElement("tr");
	for (let i=0; i < 3; i++){
		var input1 = buttonCreate(data, r[i], tag, "", i+3);
		var cell1 = document.createElement("td");
		cell1.appendChild(input1);
		row.appendChild(cell1);
	}

	//row added to end of table body
	tblBody.appendChild(row);
	// END ROW PLAYER2
	
	// next button
	var row = document.createElement("tr");
	// cell 1
	var cell1 = document.createElement("td");
	var cellText1 = document.createTextNode(player1Count + " : " + player2Count);
	cell1.setAttribute("class", "text-center");
	cell1.appendChild(cellText1);
	row.appendChild(cell1);
	// cell 2
	var cell2 = document.createElement("td");
	cell2.setAttribute("colspan", "2");
	cell2.setAttribute("class", "text-center");
	var cellNext = document.createElement("input");
	cellNext.setAttribute("value", "Next");
	cellNext.setAttribute("disabled", "disabled");
	cellNext.setAttribute("class", "next button");
	cellNext.setAttribute("onclick", "next('"+ String(tag) +"')");
	cell2.appendChild(cellNext);
	row.appendChild(cell2);
	tblBody.appendChild(row);
	
	
	// append the <tbody> inside the <table>
	tbl.appendChild(tblBody);
	// put <table> in the <body>
	body.appendChild(tbl);
	// tbl border attribute to 
	//tbl.setAttribute("class", "table-test");
	
	const buttons = document.getElementsByClassName("button");
	for (var i = 0 ; i < buttons.length; i++) {
		buttons[i].addEventListener('click' , t); 
		//buttons[i].addEventListener('click' , ); 
	}

	return answerCorrect

}
function t(event){
	//console.log(event.target);
	//console.log(event.target.value);
	//console.log(answerCorrect);
	//console.log(event.target.id);
	if (answerCorrect == event.target.value) {
		if (event.target.id < 3) {
			console.log("Player 1 WIN!");
			player1Count += 1;
		}
		else {
			console.log("Player 2 WIN!");
			player2Count += 1;
		}
		const buttons = document.getElementsByClassName("action");
		for (var i = 0 ; i < buttons.length; i++) {
			buttons[i].setAttribute("disabled", "disabled");
		}
		const next = document.getElementsByClassName("next");
		for (var i = 0 ; i < next.length; i++) {
			next[i].removeAttribute("disabled");
		}
	}
}

function tableGameClear(){
	const element = document.getElementById("myGame");
	element.removeChild(element.firstElementChild);
}

function next(tag){
	tableGameClear();
	answerCorrect = tableGameCreate(tag);
}

function gameLoop(tag){
	answerCorrect = tableGameCreate(tag);
}

