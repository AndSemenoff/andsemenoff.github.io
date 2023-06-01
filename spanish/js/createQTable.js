function tableQCreate(tag) {
	var data = base.filter( element => element.tags == tag)
	//id reference 
	var body = document.getElementById("myQTable");

	// create elements <table> and a <tbody>
	var tbl = document.createElement("table");
	var tblBody = document.createElement("tbody");

	// cells creation
	for (var j = 0; j < data.length; j++) {
		// table row creation
		var row = document.createElement("tr");
		// cell 1
		var cell1 = document.createElement("td");
		var cellText1 = document.createTextNode(data[j].russian);
		cell1.appendChild(cellText1);
		row.appendChild(cell1);
		// cell 2
		var cell2 = document.createElement("td");
		var cell2_input = document.createElement("input");
		cell2_input.setAttribute("id", "question"+j);
		cell2.appendChild(cell2_input);
		row.appendChild(cell2);
		// cell 3
		var cell3 = document.createElement("td");
		var cell3_span = document.createElement("span");
		cell3_span.setAttribute("onclick", "test('" + tag + "')");
		var cell3_icon = document.createElement("i");
		cell3_icon.setAttribute("class", "fa-solid fa-gears");
		cell3_span.appendChild(cell3_icon);
		cell3.appendChild(cell3_span);
		row.appendChild(cell3);

		//row added to end of table body
		tblBody.appendChild(row);
	}
	// last row with buttons
	var last_row = document.createElement("tr");
	var cell1 = document.createElement("td");
	cell1.setAttribute("colspan", "3");
	var input1 = document.createElement("input");
	input1.setAttribute("class", "button");
	input1.setAttribute("onclick", "test('" + tag + "')");
	input1.setAttribute("value", "Проверить");
	var input2 = document.createElement("input");
	input2.setAttribute("class", "button");
	input2.setAttribute("onclick", "myclear('" + tag + "')");
	input2.setAttribute("value", "Очистить");
	cell1.appendChild(input1);
	var cellText = document.createTextNode(" ");
	cell1.appendChild(cellText);
	cell1.appendChild(input2);
	last_row.appendChild(cell1);
	tblBody.appendChild(last_row);
	// append the <tbody> inside the <table>
	tbl.appendChild(tblBody);
	// put <table> in the <body>
	body.appendChild(tbl);
	// tbl border attribute to 
	tbl.setAttribute("class", "table-test");
}

function myclear(tag) {
	var data = base.filter( element => element.tags == tag);
	for(count = 0; count < data.length; count++){
		element = document.getElementById('question' + count);
		element.value = "";
		element.style.color = 'black';
		color1.style.fontWeight = 'normal';
	}
}
function test(tag){
	var data = base.filter( element => element.tags == tag);
	for(count = 0; count < data.length; count++){
		answer1 = document.getElementById('question' + count).value;
		color1 = document.getElementById('question' + count);
		if (answer1 == data[count].spanish) color1.style.color = 'green';
		else 
			{
			color1.style.color = 'red';
			color1.style.fontWeight = 'bold';
			}
	}

}