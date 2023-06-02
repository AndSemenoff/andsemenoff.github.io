const audio_click = new Audio("../audio/click_1.mp3"); // https://www.fesliyanstudios.com/
let player1Count = 0;
let player2Count = 0;
let questions = 3;

function scoreUpdate(){
	var score1 = document.getElementsByClassName("score1");
	for (var i = 0 ; i < score1.length; i++) {
		score1[i].innerHTML = player1Count;
	}
	var score2 = document.getElementsByClassName("score2");
	for (var i = 0 ; i < score2.length; i++) {
		score2[i].innerHTML = "" + player2Count + "";
	}
}

function questionUpdate(data, correct){
	var q1 = document.getElementById("question1");
	var q2 = document.getElementById("question2");
	q1.innerHTML = data[correct].spanish;
	q2.innerHTML = data[correct].spanish;
}

function buttonCreate(data, dataIndex, cl, id){
	var input = document.createElement("button");
	const textNode = document.createTextNode(String(data[dataIndex].russian));
	input.appendChild(textNode);
	input.setAttribute("class", "text-center button action large expanded " + cl);
	//input.setAttribute("onclick", "test()");
	input.setAttribute("id", id);
	input.setAttribute("value", String(data[dataIndex].russian));
	return input
}
function getRandom(data){
	let rendom_list = [];
	rendom_list[0] = Math.floor(Math.random() * data.length);
	rendom_list[1] = rendom_list[0];
	while (rendom_list[0] == rendom_list[1]) { 
		rendom_list[1] = Math.floor(Math.random() * data.length);
	}
	rendom_list[2] = rendom_list[1];
	while (rendom_list[0] == rendom_list[2] || rendom_list[1] == rendom_list[2]) 
	{
		rendom_list[2] = Math.floor(Math.random() * data.length);
	}
	
	return rendom_list
}

function tableGameCreate(tag) {
	var data = base.filter(element => element.tags == tag)
	let r = getRandom(data);
	let correct = r[Math.floor(Math.random() * questions)];
	let answerCorrect = String(data[correct].russian);

	// ROW PLAYER1
	var pl1 = document.getElementById("player1");
	for (let i=0; i < questions; i++){
		var input1 = buttonCreate(data, r[i], "rotated", i);
		var cell1 = document.createElement("div");
		cell1.setAttribute("class", "cell medium-4 large-4 text-center");
		cell1.appendChild(input1);
		pl1.appendChild(cell1);
	}
	
	questionUpdate(data, correct);

	// ROW PLAYER2
	var pl2 = document.getElementById("player2");
	for (let i=0; i < questions; i++){
		var input1 = buttonCreate(data, r[i], "", i+questions);
		var cell1 = document.createElement("div");
		cell1.setAttribute("class", "cell medium-4 large-4 text-center");
		cell1.appendChild(input1);
		pl2.appendChild(cell1);
	}
	
	scoreUpdate();
	
	const buttons = document.getElementsByClassName("action");
	for (var i = 0 ; i < buttons.length; i++) {
		buttons[i].addEventListener('click' , t); 
	}

	return answerCorrect

}
function t(event){
	//console.log(event.target);
	//console.log(event.target.value);
	//console.log(answerCorrect);
	//console.log(event.target.id);
	if (answerCorrect == event.target.value) {
		audio_click.play();
		if (event.target.id < questions) {
			//console.log("Player 1 WIN!");
			player1Count += 1;
		}
		else {
			//console.log("Player 2 WIN!");
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
	else {
		if (event.target.id < questions) {
			//console.log("Player 1 WRONG!");
			player1Count -= 2;
			const btn_wrong = document.getElementById(event.target.id);
			btn_wrong.setAttribute("class", "text-center button action large alert rotated");
		}
		else {
			//console.log("Player 2 WRONG!");
			player2Count -= 2;
			const btn_wrong = document.getElementById(event.target.id);
			btn_wrong.setAttribute("class", "text-center button action large alert");
		}
	}
}

function empty(element) {
	while(element.firstElementChild) {
		element.firstElementChild.remove();
	}
}

function infoClear(){
	const element1 = document.getElementById("player1");
	empty(element1);
	const element2 = document.getElementById("player2");
	empty(element2);
}

function next(tag){
	infoClear();
	answerCorrect = tableGameCreate(tag);
	const next = document.getElementsByClassName("next");
	for (var i = 0 ; i < next.length; i++) {
		next[i].setAttribute("disabled", "disabled");
	}
}

function gameLoop(tag){
	answerCorrect = tableGameCreate(tag);
}

