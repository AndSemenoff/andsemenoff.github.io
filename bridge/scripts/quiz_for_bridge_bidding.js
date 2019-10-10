bidding_str = { 
	"one_of_clubs" : "1C", 
	"one_of_diamonds" : "1D",
	"one_of_hearts": "1H",
	"one_of_spades": "1S",
	"one_of_no_trump": "1N",
	"two_of_clubs" : "2C", 
	"two_of_diamonds" : "2D",
	"two_of_hearts": "2H",
	"two_of_spades": "2S",
	"two_of_no_trump": "2N",
	"three_of_clubs" : "3C", 
	"three_of_diamonds" : "3D",
	"three_of_hearts": "3H",
	"three_of_spades": "3S",
	"three_of_no_trump": "3N",
	"four_of_clubs" : "4C", 
	"four_of_diamonds" : "4D",
	"four_of_hearts": "4H",
	"four_of_spades": "4S",
	"four_of_no_trump": "4N",
	"five_of_clubs" : "5C", 
	"five_of_diamonds" : "5D",
	"five_of_hearts": "5H",
	"five_of_spades": "5S",
	"five_of_no_trump": "5N",
	"six_of_clubs" : "6C", 
	"six_of_diamonds" : "6D",
	"six_of_hearts": "6H",
	"six_of_spades": "6S",
	"six_of_no_trump": "6N",
	"seven_of_clubs" : "7C", 
	"seven_of_diamonds" : "7D",
	"seven_of_hearts": "7H",
	"seven_of_spades": "7S",
	"seven_of_no_trump": "7N",
	"double": "X",
	"redouble": "XX",
	"pass": "P",
}

function str_compile_to_html(number){
	str_number = number; // раньше хотел выводить не снуля, потом решил не заморачиваться
	var html_bidding = "<bidding>" + base[number]["bidding"] + "</bidding>";
	var html_hand = "<hand>" + base[number]["hand"] + "</hand>";
	var html_question = "<div class='main'>Номер вопроса: <span id='NumberQuestion'>" + str_number + "</span> " + base[number]["question"] + "</div>";
	return html_bidding + "<br>" + html_hand + html_question;
}

function NewQuestion(number){
	var str = document.getElementById("main")
	str.innerHTML = str_compile_to_html(number);
}

function clickNewQuestion(event){
	var NumberQuestion = parseInt(document.getElementById("NumberQuestion").innerText);
	NumberQuestion = NumberQuestion + 1;
	if (NumberQuestion == base.length){
		NumberQuestion = 0;
	}
	console.log("New question", NumberQuestion, base.length)
	var str_tip = document.getElementById("tip");
	str_tip.innerHTML = "";
	var str_result = document.getElementById("result");
	str_result.innerHTML = "";


	NewQuestion(NumberQuestion)
	find_and_replace("hand")
	show_bidding_history("bidding")
}


function clickTipShow(event){
	var str_tip = document.getElementById("tip");
	var NumberQuestion = parseInt(document.getElementById("NumberQuestion").innerText);
	console.log("Tip Show, Question: ", NumberQuestion);
	str_tip.innerHTML = base[NumberQuestion]["tip"] 
	

}


function clickButton(event){
	var str_result = document.getElementById("result");
	answer = event.path["0"].id;
	var NumberQuestion = parseInt(document.getElementById("NumberQuestion").innerText);
	console.log(answer, NumberQuestion);
	right_answer = base[NumberQuestion]["answer"]
	if (bidding_str[answer] == right_answer){
		answer_str = "Правильно! Отлично!"
	}
	else {
		answer_str = "Ваш ответ: " + bidding_str[answer] + " Ответ не верный. Правильный ответ: " + right_answer;
	}
	str_result.innerHTML = answer_str

}

document.addEventListener("DOMContentLoaded", function(event) { 
	//console.log("start!")
	var parsedUrl = new URL(window.location.href);
	NumberQuestion = parsedUrl.searchParams.get("q")
	if (NumberQuestion == undefined || NumberQuestion == ""){
		NumberQuestion = 0;
	}
	NewQuestion(NumberQuestion)
	console.log("script start q:", NumberQuestion)
});

