//
//https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API
//
function comparePhrases(phrase1, phrase2) {
  // Преобразуем строки в массивы слов
  const phrase1Words = phrase1.split(" ");
  const phrase2Words = phrase2.split(" ");

  // Сравниваем массивы слов
  const differences = [];
  for (let i = 0; i < phrase1Words.length; i++) {
    if (phrase1Words[i] !== phrase2Words[i]) {
      differences.push(phrase2Words[i]);
    }
  }

	return differences;
}

function mySpeechRecognition(msg, id){
	if ("webkitSpeechRecognition" in window) 
	{

		// Speech Recognition Stuff goes here
		//console.log("Speech Recognition Here!")
		const temp = document.querySelector("#interim" + id);
		temp.style.color = "grey";
		//temp.style.backgroundColor = "grey";
		const error = document.querySelector("#error");
		error.style.color = "red";
		const result = document.querySelector("#final" + id);
		
		let speechRecognition = new webkitSpeechRecognition();
		// String for the Final Transcript
		let final_transcript = "";
		speechRecognition.continuous = true;
		speechRecognition.interimResults = true;
		speechRecognition.lang = "en-US";

		// Set the onClick property of the start button
		document.querySelector("#start" + id).onclick = () => {
			// Start the Speech Recognition
			speechRecognition.start();
			//console.log("speech Recognition start");
			document.getElementById("start" + id).hidden = true;
			document.getElementById("stop" + id).hidden = false;
		};
		// Set the onClick property of the stop button
		document.querySelector("#stop" + id).onclick = () => {
			// Stop the Speech Recognition
			speechRecognition.stop();
			//console.log("speech Recognition stop");
			final_transcript = "";
			document.getElementById("start" + id).hidden = false;
			document.getElementById("stop" + id).hidden = true;
			result.innerHTML = "";
			error.innerHTML = "";
		};

		speechRecognition.onresult = (event) => {
			// Create the interim transcript string locally because we don't want it to persist like final transcript
			let interim_transcript = "";

			// Loop through the results from the speech recognition object.
			for (let i = event.resultIndex; i < event.results.length; ++i) {
				// If the result item is Final, add it to Final Transcript, Else add it to Interim transcript
				if (event.results[i].isFinal) {
					final_transcript += event.results[i][0].transcript;
					if (final_transcript == msg){
						speechRecognition.stop();
						//console.log("speech Recognition stop");
						temp.innerHTML = "";
						result.innerHTML = " Done!";
						result.style.color = "green";
						document.getElementById("stop" + id).hidden = true;
						return true;
					} else {
						const differences = comparePhrases(final_transcript, msg);
						//console.log(differences);
						let my_error = "";
						for (const diff of differences) my_error += diff + " ";
						error.innerHTML = my_error;
					}
				} else {
					interim_transcript += event.results[i][0].transcript;
				}
			}
			
			// Set the Final transcript and Interim transcript.
			result.innerHTML = final_transcript;
			temp.innerHTML = interim_transcript;
		}
	} else {
		console.log("Speech Recognition Not Available")
	}
}

let names = ["Mike", "Jack"];
let mike = [
	"Hello, Jack. Why the rush? Where are you going? ", 
	"Do you often go to the theatre? ",
	"Yes, but I don't often find time these days. There are so many other things to do. ",
	"Listen, perhaps Janet and I can arrange to meet you and Joyce one Saturday evening. We can have dinner together and go on to a theatre. ",
	"All right. I'm meeting Janet later this evening so I can make sure that she's free next Saturday. I'll ring you tomorrow to confirm if we are coming. ",
	"I'll phone you tomorrow then. Give my regards to Joyce. Have a good evening. ",
]
let mike_recognition = [
	"hello Jack why the rush where are you going", 
	"do you often go to the theater",
	"yes but I don't often find time these days there are so many other things to do",
	"listen perhaps Janet and I can arrange to meet you and Joyce one Saturday evening we can have dinner together and go on to a theater",
	"all right I'm meeting Janet later this evening so I can make sure that she's free next Saturday I'll ring you tomorrow to confirm if we are coming",
	"I'll phone you tomorrow then give my regards to Joyce have a good evening",
];

let jack = [
	"Hello, Mike. I'm on my way to meet Joyce at the station. We're having dinner at a Chinese restaurant and then we're off to the theatre. ",
	"Yes, Joyce and I usually go at least once a fortnight; sometimes more. Do you ever go? ",
	"True, true. ",
	"That's a good idea. Look, I forget the name of the play, but there's a good comedy on at the Theatre Royal next week. If you like, I can book four seats for next Saturday. ",
	"Fine. I must fly now. It's six o'clock already and Joyce's bus arrives at ten past. She hates waiting around and I don't want to spoil everything by upsetting her before we start our evening. ",
	""
]

let jack_recognition = [
	"hello Mike I'm on my way to meet Joyce at the station we're having dinner at a Chinese restaurant and then we're off to the theater",
	"yes Joyce and I usually go at least once a fortnight sometimes more do you ever go",
	"true true",
	"that's a good idea look I forget the name of the play but there's a good comedy on at the theater Royal next week if you like I can book four seats for next Saturday",
	"fine I must fly now it's 6:00 already and Joyce's bus arrives at 10 past she hates waiting around and I don't want to spoil everything by upsetting her before we start our evening",
	""
]



function btnStartRecognition(id){
	const btn = document.createElement("button");
	btn.setAttribute("id", "start" + id);
	const btnIcon = document.createElement("icon");
	btnIcon.classList.add("fa-solid");
	btnIcon.classList.add("fa-microphone");
	btn.appendChild(btnIcon);
	return btn;
}

function btnStopRecognition(id){
	const btn = document.createElement("button");
	btn.setAttribute("id", "stop" + id);
	btn.setAttribute("hidden", "true");
	const btnIcon = document.createElement("icon");
	btnIcon.classList.add("fa-solid");
	btnIcon.classList.add("fa-microphone-slash");
	btn.appendChild(btnIcon);

	return btn;
}

function iconVolume(){
	const iconVolume = document.createElement("icon");
	iconVolume.classList.add("fa-solid");
	iconVolume.classList.add("fa-volume-high");
	iconVolume.classList.add("speech");
	return iconVolume;
}

function spanRec(id){
		const finalSpan = document.createElement("span");
		finalSpan.setAttribute("id", "final" + id);
		const interimSpan = document.createElement("span");
		interimSpan.setAttribute("id", "interim" + id);
}

function createDialog(){
	const result = document.querySelector("#dialog");
	const div = document.createElement("div");
	const span = document.createElement("span");

	for (let r = 0; r < mike.length; r++){
		const div1 = document.createElement("div");
		let id1 = names[0] + r;

		const nameSpan = document.createElement("span");
		nameSpan.textContent = names[0]+": ";
		const finalSpan = document.createElement("span");
		finalSpan.setAttribute("id", "final" + id1);
		const interimSpan = document.createElement("span");
		interimSpan.setAttribute("id", "interim" + id1);
		const span1 = document.createElement("span");
		span1.appendChild(iconVolume());
		span1.classList.add("speech");
		const newContent = document.createTextNode(" " + mike[r]);
		span1.appendChild(newContent);
		//span1.textContent = " " + mike[r];


		
		div1.appendChild(nameSpan);
		//div1.appendChild(iconVolume());
		div1.appendChild(span1);
		div1.appendChild(btnStartRecognition(id1));
		div1.appendChild(finalSpan);
		div1.appendChild(interimSpan);
		div1.appendChild(btnStopRecognition(id1));
		result.appendChild(div1);
		
		let id2 = names[1] + r;
		const div2 = document.createElement("div");
		const name2 = document.createElement("span");
		name2.textContent = names[1]+": ";
		const span2 = document.createElement("span");
		span2.classList.add("speech");
		span2.textContent = " " + jack[r];
		
		const finalSpan2 = document.createElement("span");
		finalSpan2.setAttribute("id", "final" + id2);
		const interimSpan2 = document.createElement("span");
		interimSpan2.setAttribute("id", "interim" + id2);
		
		div2.appendChild(name2);
		div2.appendChild(iconVolume());
		div2.appendChild(span2);
		
		div2.appendChild(btnStartRecognition(id2));
		div2.appendChild(finalSpan2);
		div2.appendChild(interimSpan2);
		div2.appendChild(btnStopRecognition(id2));
		
		result.appendChild(div2);
	}
}


function createRecognition(){
	for (let r = 0; r < mike.length; r++){
		id = names[0] + r;
		mySpeechRecognition(mike_recognition[r], id);
		id = names[1] + r;
		mySpeechRecognition(jack_recognition[r], id);
	}
}

function removePunctuationAndLowercase(string) {
  return string.replace(/[,.!?;:]/g, "").toLowerCase();
}

function dialogStart(){
	for (let r = 0; r < mike.length; r++){
		msg = removePunctuationAndLowercase(mike[r]);
		console.log(msg);
		sRec(msg);
		myTalk(jack[r]);
	}
}

createDialog();
createRecognition();


