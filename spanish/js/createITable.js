// https://stackoverflow.com/questions/23720988/how-to-filter-json-data-in-javascript-or-jquery
function tableInfoCreate(tag) {
	var data = base.filter(element => element.tags == tag)
	//id reference 
	var body = document.getElementById("myITable");

	// create elements <table> and a <tbody>
	var tbl = document.createElement("table");
	var tblBody = document.createElement("tbody");

	// cells creation
	for (var j = 0; j < data.length; j++) {
		// table row creation
		var row = document.createElement("tr");
		// cell 1
		var cell1 = document.createElement("td");
		var cellText1 = document.createTextNode(data[j].russian );
		cell1.appendChild(cellText1);
		row.appendChild(cell1);
		// cell 2
		var cell2 = document.createElement("td");
		var cell2Text2 = document.createTextNode(data[j].spanish);
		cell2.appendChild(cell2Text2);
		row.appendChild(cell2);
		// cell 3
		var cell3 = document.createElement("td");
		var cell3Text3 = document.createTextNode("[" + data[j].transcription + "]");
		cell3.appendChild(cell3Text3);
		row.appendChild(cell3);

		//row added to end of table body
		tblBody.appendChild(row);
	}
	
	// append the <tbody> inside the <table>
	tbl.appendChild(tblBody);
	// put <table> in the <body>
	body.appendChild(tbl);
	// tbl border attribute to 
	tbl.setAttribute("class", "table-test");
}