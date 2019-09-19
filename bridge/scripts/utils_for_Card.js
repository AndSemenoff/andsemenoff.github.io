/*
* Файл utils_for Card.js
* Файл с утилитами, которые используют Card.js
*
*/


function showPattern(hand){
	var pattern = PatternHand(hand);
	var inner = document.getElementById("pattern");
	inner.innerHTML = " Расклад: " + pattern[3] + "♠-" + pattern[2] + "<span class='red_card'>♥</span>-" + pattern[1] + "<span class='red_card'>♦</span>-" + pattern[0] + "♣ "
}

function show_bidding_history(tag)
/*
* Находим в html тексте tag, содержимое которого представляет историю торговли
* вида SP
* Обозначения: P - pass, SHDC - масти, SNWE - стороны, N - безкозыря, D - контра, R - реконтра;
* Например: -,-,-,P,1N,P,3N,P,P,P,-,-
* Табличка имеет вид: WNES
*/
{
	var history_array = document.getElementsByTagName(tag); /*Всегда несколько тегов на странице, поэтому массив HTMLCollection*/
	console.log(history_array)
	for (var i=0; i<history_array.length; i++){
		history_str = history_array[i].innerText; /* Конкретная строка истории торговли */
		console.log(history_str)
		history_str = history_str.split(",");
		console.log(history_str);
		html_str = "<table class = 'minitable'><tbody><tr><th>W</th><th>N</th><th>E</th><th>S</th></tr><tr>";
		html_str = "<table class = 'minitable'><tbody><tr><th>West</th><th>North</th><th>East</th><th>South</th></tr><tr>";
		for (var x=0; x < history_str.length; x++){
			switch (history_str[x][1]) 
			{
				case "S": html_str += "<td>"+ history_str[x][0] + "♠" +"</td>"; break;
				case "H": html_str += "<td>" + history_str[x][0] + "<span class='red_card'>♥</span></td>"; break;
				case "D": html_str += "<td>" + history_str[x][0] + "<span class='red_card'>♦</span></td>"; break;
				case "C": html_str += "<td>"+ history_str[x][0] + "♣" +"</td>"; break;
				case "D": html_str += "<td>"+ history_str[x][0] + "X" +"</td>"; break;
				case "R": html_str += "<td>"+ history_str[x][0] + "XX" +"</td>"; break;
				case "N": html_str += "<td>"+ history_str[x][0] + "NT" +"</td>"; break;
				default: html_str += "<td>"+ history_str[x] +"</td>"; break;
			}
			if ((x+1)%4 == 0)
			{
				if ( x != history_str.length -1) 
				{
					html_str += "</tr><tr>";
				}
			}
		}
		html_str += "</tr></tbody></table>";
		history_array[i].innerHTML = html_str;
	}
}


function find_and_replace(tag)
/*
* Находим в html тексте tag, содержимое которого представляет одну руку из 13 карты
* вида K5.Q742.QT8.T853
*/
{
	var str = document.getElementsByTagName(tag)
	//console.log("length:" + str.length);
	for (var i=0; i<str.length; i++){
		//console.log("i=" + i)
		new_str = str[i] //document.getElementsByTagName(tag)[i]
		hand = string_to_hand(str[i].innerText)
		//console.log("HAnd:" + hand);
		str1 = "<table class = 'hand'><tbody><tr>"
		for (var count = 0; count < hand.max; count++) {
			str1 = str1 + "<td><img class='cards_small' src='images/cards/" + hand[count].toString() + ".png'></td>"
			}
		str1 += "</tr></tbody></table>"
		new_str.innerHTML = str1;
	}
}

/* Преобразование строчного представления руки в формат hand */
/* Строка это карты по мастям в строгом порядке. */
/* Масти разделяются "." Например: K5.Q742.QT8.T853 */
function string_to_hand(str){

	playerCards = [];
	playerCards.max = 13;
	str1 = str.split(".")
	//console.log(str, str1);
	cards_counter = 0;
	for (var i=0; i<4; i++)
	{
		for (var count=0; count<str1[i].length; count++)
		{
			switch (str1[i][count]) 
			{
				case "2": playerCards[cards_counter] = new Card(1,4-i); break;
				case "3": playerCards[cards_counter] = new Card(2,4-i); break;
				case "4": playerCards[cards_counter] = new Card(3,4-i); break;
				case "5": playerCards[cards_counter] = new Card(4,4-i); break;
				case "6": playerCards[cards_counter] = new Card(5,4-i); break;
				case "7": playerCards[cards_counter] = new Card(6,4-i); break;
				case "8": playerCards[cards_counter] = new Card(7,4-i); break;
				case "9": playerCards[cards_counter] = new Card(8,4-i); break;
				case "T": playerCards[cards_counter] = new Card(9,4-i); break;
				case "J": playerCards[cards_counter] = new Card(10,4-i); break;
				case "Q": playerCards[cards_counter] = new Card(11,4-i); break;
				case "K": playerCards[cards_counter] = new Card(12,4-i); break;
				case "A": playerCards[cards_counter] = new Card(13,4-i); break;
				default: playerCards[cards_counter] = new Card(13,4-i); break;
			}
			cards_counter += 1;
		}
		
	}
	//console.log(playerCards);
	return playerCards
}

function showHand(hand, id)
/*
* Выводим руку в табличку. Обычными изображениями .png
*/
{
	inner = document.getElementById(id);
	str1 = ""
	for (var i = 0; i < hand.max; i++) {
		str1 = str1 + "<td><img class='cards_small' src='images/cards/" + hand[i].toString() + ".png'></td>"
		//console.log(playerCards[i].toString())
	}
	//console.log(str1);
	inner.innerHTML = str1;
	//console.log(inner.innerHTML);
}

function showHCP(hand, id){
	inner = document.getElementById(id);
	str1 = HCPHand(hand);
	//console.log(str1);
	inner.innerHTML = "HCP: " + str1;
}

function showEvaluate(hand, id){
	inner = document.getElementById(id);
	str1 = evaluateHand(hand);
	//console.log(str1);
	inner.innerHTML = "Evaluate: " + str1;

}

function clearEvaluate(id){
	inner = document.getElementById(id);
	str1 = "";
	//console.log(str1);
	inner.innerHTML = "Evaluate: " + str1;
}

