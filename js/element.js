// https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements
// Create a class for the element

class RangeInfo extends HTMLElement {
  static observedAttributes = ["color", "size", "range", "model"];


  constructor(
	               game_type = "Tournament", 
                 players_max = "9max", 
                 effective_stack = "100BB", 
                 position = "",
								 range = "",
                 model = "ChipEV", 
                 ante = "12.5%", 
                 tags = {"author": "Absolem",  } , 
								 actions = [],
) {
    // Always call super first in constructor
    super();
		this.combos = [
			"AA", "AKs", "AQs", "AJs", "ATs", "A9s", "A8s", "A7s", "A6s", "A5s", "A4s", "A3s", "A2s",
			"AKo", "KK", "KQs", "KJs", "KTs", "K9s", "K8s", "K7s", "K6s", "K5s", "K4s", "K3s", "K2s",
			"AQo", "KQo", "QQ", "QJs", "QTs", "Q9s", "Q8s", "Q7s", "Q6s", "Q5s", "Q4s", "Q3s", "Q2s",
			"AJo", "KJo", "QJo", "JJ", "JTs", "J9s", "J8s", "J7s", "J6s", "J5s", "J4s", "J3s", "J2s",
			"ATo", "KTo", "QTo", "JTo", "TT", "T9s", "T8s", "T7s", "T6s", "T5s", "T4s", "T3s", "T2s",
			"A9o", "K9o", "Q9o", "J9o", "T9o", "99", "98s", "97s", "96s", "95s", "94s", "93s", "92s",
			"A8o", "K8o", "Q8o", "J8o", "T8o", "98o", "88", "87s", "86s", "85s", "84s", "83s", "82s",
			"A7o", "K7o", "Q7o", "J7o", "T7o", "97o", "87o", "77", "76s", "75s", "74s", "73s", "72s",
			"A6o", "K6o", "Q6o", "J6o", "T6o", "96o", "86o", "76o", "66", "65s", "64s", "63s", "62s",
			"A5o", "K5o", "Q5o", "J5o", "T5o", "95o", "85o", "75o", "65o", "55", "54s", "53s", "52s",
			"A4o", "K4o", "Q4o", "J4o", "T4o", "94o", "84o", "74o", "64o", "54o", "44", "43s", "42s",
			"A3o", "K3o", "Q3o", "J3o", "T3o", "93o", "83o", "73o", "63o", "53o", "43o", "33", "32s",
			"A2o", "K2o", "Q2o", "J2o", "T2o", "92o", "82o", "72o", "62o", "52o", "42o", "32o", "22",
		];
		this.game_type = this.getAttribute("type");
		this.players_max = this.getAttribute("max");
		this.effective_stack = this.getAttribute("efstack");
		this.position = this.getAttribute("position");
		this.model = this.getAttribute("model");
		this.ante = this.getAttribute("ante");
		this.tags = this.getAttribute("tags");
		this.tags = JSON.parse(this.tags);
		this.actions = this.getAttribute("actions");
		console.log("Actions: ", this.actions);
		this.actions = JSON.parse(this.actions);
		console.log("Actions: ", this.actions);
		this.range = this.getAttribute("range").split(";");
		console.log("Range: ", this.range);
		this.matrix = {};
		for (let key = 0; key < 169; key++) {
			this.matrix[this.combos[key]] = -1;
		}
		console.log(this.matrix)
  }
	
	makeTableHead(){
		const tbl_head = document.createElement("thead");
		var row = document.createElement("tr");
		var cell = document.createElement("th");
		cell.setAttribute("colspan", "3")
		cell.textContent = "Game type";
		row.appendChild(cell);
		var cell = document.createElement("th");
		cell.setAttribute("colspan", "2")
		cell.textContent = "Model";
		row.appendChild(cell);
		var cell = document.createElement("th");
		cell.setAttribute("colspan", "4")
		cell.textContent = "Effective stack";
		row.appendChild(cell);
		var cell = document.createElement("th");
		cell.setAttribute("colspan", "2")
		cell.textContent = "Antes";
		row.appendChild(cell);
		var cell = document.createElement("th");
		cell.setAttribute("colspan", "2")
		cell.textContent = "Position";
		row.appendChild(cell);
		tbl_head.appendChild(row);
		
		
		var row = document.createElement("tr");
		var cell = document.createElement("th");
		cell.setAttribute("colspan", "3")
		cell.textContent = this.game_type;
		row.appendChild(cell);
		var cell = document.createElement("th");
		cell.setAttribute("colspan", "2")
		cell.textContent = this.model;
		row.appendChild(cell);
		var cell = document.createElement("th");
		cell.setAttribute("colspan", "4")
		cell.textContent = this.effective_stack;
		row.appendChild(cell);
		var cell = document.createElement("th");
		cell.setAttribute("colspan", "2")
		cell.textContent = this.ante;
		row.appendChild(cell);
		var cell = document.createElement("th");
		cell.setAttribute("colspan", "2")
		cell.textContent = this.position;
		row.appendChild(cell);
		tbl_head.appendChild(row);
		
		for (let i=0; i<this.range.length; i++){
			
			var row = document.createElement("tr");
			var cell = document.createElement("th");
			cell.setAttribute("colspan", "9");
			//console.log("Range length: ", this.range[i].length);
			if (this.range[i].length > 60){
				cell.textContent = this.range[i].substring(0, 60);
				//cell.textContent += "<br>";
				cell.textContent += this.range[i].substring(60, this.range[i].length);
			}
			else {
				cell.textContent = this.range[i];
			}

			row.appendChild(cell);
			var cell = document.createElement("th");
			cell.setAttribute("colspan", "2");
			cell.textContent = this.actions[i].name;
			row.appendChild(cell);
			var cell = document.createElement("th");
			cell.setAttribute("colspan", "2");
			cell.textContent = this.statistic()[i] + "%";
			cell.style.color = "#e6e4e9";
			cell.style.backgroundColor = this.actions[i].color;
			row.appendChild(cell);
			tbl_head.appendChild(row);
		
		}
		return tbl_head
	}
	
	makeTableFoot(){
		const tbl_foot = document.createElement("tfoot");
		var row = document.createElement("tr");
		var cell = document.createElement("td");
		cell.setAttribute("colspan", "13");
		for (let i=0; i<this.tags.length; i++){
			//console.log("Tag:", this.tags[i]);
			cell.textContent += JSON.stringify(this.tags[i]) + "; ";
		}
		row.appendChild(cell);
		tbl_foot.appendChild(row);
		return tbl_foot
	}

	statistic(){
		let count = [];
		let procent = [];
		let max = this.actions.length;
		for (let i = 0; i < max; i++) {count[i] = 0;}
		
		for (let step=0; step <169; step++){
			let hand = this.combos[step];
			let value = this.matrix[hand];
			if (value!==-1){
				for (let i = 0; i < max; i++){
					if (value == i) {
						if (hand.length==2) count[i] += 6;
						if (hand.length==3 & hand[2]=='s') count[i] += 4;
						if (hand.length==3 & hand[2]=='o') count[i] += 12;
					}
				}
			}
		}
    //let procent = Math.round(((count/1326 + Number.EPSILON) * 100) / 100);
		for (let i = 0; i < max; i++) procent[i]=(count[i]/1326*100).toFixed(2);
    return procent;
	}

	parseRange(){
		let rank = "23456789TJQKA"
    let pair = ["22", "33", "44", "55", "66", "77", "88", "99", "TT", "JJ", "QQ", "KK", "AA"]
		// Take attribute content
		for (let r = 0; r < this.range.length; r++){
			
			console.log("Range:", this.range[r]);
			var data = this.range[r].split(",");
			for (let i = 0; i < data.length; i++) {
				data[i] = data[i].trim();
				if (!(data[i].includes("+") || data[i].includes("-"))) this.matrix[data[i]] = r;
				if (data[i].length > 2 & data[i][2] == '+'){
					let ind = pair.indexOf(data[i].slice(0,2));
					for (let i = ind; i < 13; i++) this.matrix[pair[i]] = r;
				}
				if (data[i].length>3 & data[i][3] == '+'){
					//console.log("Range with 3 +:", data[i]);
					let suit = data[i][2]
					let main_rank = data[i][0]
					let sec_rank = data[i][1]
					let ind = rank.indexOf(sec_rank)
					//console.log("Suit", suit, "main rank: ", main_rank, "sec rank: ", sec_rank)
					for (let i=ind; i<13; i++) this.matrix[main_rank + rank[i] + suit] = r;
				}
				if (data[i].includes("-")){
					let start = data[i].split("-")[1];
					let end = data[i].split("-")[0];
					//console.log(start, end)
						if (start.length>2){           
								let main_rank = start[0]
								let suit = start[2]
								let ind1 = rank.indexOf(start[1])
								let ind2 = rank.indexOf(end[1])
								for (let i=ind1; i<ind2+1; i++) this.matrix[main_rank + rank[i] + suit] = r;
						}
						else {
								let ind1 = rank.indexOf(start[1])
								let ind2 = rank.indexOf(end[1])
								for (let i=ind1; i<ind2+1; i++) this.matrix[rank[i]+rank[i]] = r;
						}							
				}
			}
		}
	}
	
	showRange(){
    // Create a shadow root
    const shadow = this.attachShadow({ mode: "open" });
		// Create table
		const tbl = document.createElement("table");
		tbl.setAttribute("class", "poker")

		const tbl_body = document.createElement("tbody");

		
		for (let r = 0; r < 13; r++) {
			// Create row
			const row = document.createElement("tr");

			for (let step = r*13; step < r*13+13; step++) {
				// Create cell
				const cell = document.createElement("td");
				for (let i = 0; i < this.range.length; i++){
					if (this.matrix[this.combos[step]] == i) cell.style.backgroundColor = this.actions[i].color;
				}
				cell.textContent = this.combos[step];
				row.appendChild(cell);
			}
			tbl_body.appendChild(row);
		}
		tbl.appendChild(this.makeTableHead());
		tbl.appendChild(tbl_body);
		tbl.appendChild(this.makeTableFoot());
		const style = document.createElement("style");
		style.textContent = `
			table {
				border-collapse: collapse;
				margin: 2px;
				padding: 0.3em;
				border: 0;
			}
			td, th{
				background-color: lightgrey;
				border: 2px solid black;
				margin: 2px;
				font-weight: bold;
				text-align:center;
				margin: 0;
				padding: 0.3em;
			}
			td.b1 {
				background-color: #73a0bb; 
			}
			td.r1 {
				background-color: red; 
			}

		`;
		shadow.appendChild(style);
    console.log(style.isConnected);		
		shadow.appendChild(tbl);	
	}
	
  connectedCallback() {
    console.log("Custom element added to page.");
		this.parseRange();
		this.showRange();
		this.statistic();
  }

  disconnectedCallback() {
    console.log("Custom element removed from page.");
  }

  adoptedCallback() {
    console.log("Custom element moved to new page.");
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`Attribute ${name} has changed.`);
  }
}
console.log("File element.js loaded.");
customElements.define("range-info", RangeInfo);


