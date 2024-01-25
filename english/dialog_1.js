//
//https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API
//
class Dialog {
	idStart = "start";
	idStop = "stop";
	idFinal = "final";
	idInterim = "interim";
	idError = "error";
	classSpeech = "speech";
	exceptions = [
		["i am", "i'm"],
		["there is", "there's"],
		//["6", "six"],
		["6:00", "six o'clock"],
		["do not", "don't"],
		["that is", "that's"],
		["we are", "we're"],
	];
  constructor(names = ["", ""], actor1 = [], actor2 = [], actor1_rec = [], actor2_rec = []) {
    this.names = names;
    this.actor1 = actor1;
		this.actor2 = actor2;
		this.actor1_rec = actor1_rec;
		this.actor2_rec = actor2_rec;
  }


	#btnStartRecognition(id){
		const btn = document.createElement("button");
		btn.setAttribute("id", this.idStart + id);
		const btnIcon = document.createElement("icon");
		btnIcon.classList.add("fa-solid");
		btnIcon.classList.add("fa-microphone");
		btn.appendChild(btnIcon);
		return btn;
	}

	#btnStopRecognition(id){
		const btn = document.createElement("button");
		btn.setAttribute("id", this.idStop + id);
		btn.setAttribute("hidden", "true");
		const btnIcon = document.createElement("icon");
		btnIcon.classList.add("fa-solid");
		btnIcon.classList.add("fa-microphone-slash");
		btn.appendChild(btnIcon);

		return btn;
	}

	#iconVolume(){
		const iconVolume = document.createElement("icon");
		iconVolume.classList.add("fa-solid");
		iconVolume.classList.add("fa-volume-high");
		return iconVolume;
	}

	#spanRec(id){
			const finalSpan = document.createElement("span");
			finalSpan.setAttribute("id", this.idFinal + id);
			const interimSpan = document.createElement("span");
			interimSpan.setAttribute("id", this.idInterim + id);
	}

	createDialog(){
		const result = document.querySelector("#dialog");
		const div = document.createElement("div");
		const span = document.createElement("span");

		for (let r = 0; r < this.actor1.length; r++){
			const div1 = document.createElement("div");
			let id1 = this.names[0] + r;

			const nameSpan = document.createElement("span");
			nameSpan.textContent = this.names[0]+": ";
			const finalSpan = document.createElement("span");
			finalSpan.setAttribute("id", this.idFinal + id1);
			const interimSpan = document.createElement("span");
			interimSpan.setAttribute("id", this.idInterim + id1);
			const span1 = document.createElement("span");
			span1.appendChild(this.#iconVolume());
			span1.classList.add(this.classSpeech);
			const newContent = document.createTextNode(" " + this.actor1[r]);
			span1.appendChild(newContent);
			//span1.textContent = " " + actor1[r];


			
			div1.appendChild(nameSpan);
			//div1.appendChild(iconVolume());
			div1.appendChild(span1);
			div1.appendChild(this.#btnStartRecognition(id1));
			div1.appendChild(finalSpan);
			div1.appendChild(interimSpan);
			div1.appendChild(this.#btnStopRecognition(id1));
			result.appendChild(div1);
			
			let id2 = this.names[1] + r;
			const div2 = document.createElement("div");
			const name2 = document.createElement("span");
			name2.textContent = this.names[1] + ": ";
			const span2 = document.createElement("span");
			span2.classList.add("speech");
			span2.textContent = " " + this.actor2[r];
			
			const finalSpan2 = document.createElement("span");
			finalSpan2.setAttribute("id", this.idFinal + id2);
			const interimSpan2 = document.createElement("span");
			interimSpan2.setAttribute("id", this.idInterim + id2);
			
			div2.appendChild(name2);
			div2.appendChild(this.#iconVolume());
			div2.appendChild(span2);
			
			div2.appendChild(this.#btnStartRecognition(id2));
			div2.appendChild(finalSpan2);
			div2.appendChild(interimSpan2);
			div2.appendChild(this.#btnStopRecognition(id2));
			
			result.appendChild(div2);
		}
	}
	
	/* Recognition */
	#repAll(msg){
		for (let count = 0; count < this.exceptions.length; count++){
			msg = msg.replaceAll(this.exceptions[count][0], this.exceptions[count][1]);
		}
		return msg;
	}

	#comparePhrases(phrase1, phrase2) {
		// Преобразуем строки в массивы слов
		const phrase1Words = phrase1.split(" ");
		const phrase2Words = phrase2.split(" ");

		// Сравниваем массивы слов
		const differences = [];
		for (let i = 0; i < phrase1Words.length; i++) {
			if (phrase1Words[i] !== phrase2Words[i]) {
				// Проверяем, не входит ли пара слов в список исключений
				const isException = this.exceptions.some((exception) => exception[0] === phrase1Words[i] && exception[1] === phrase2Words[i]);
				if (!isException) {
					differences.push(phrase2Words[i]);
				}
			}
		}

		return differences;
	}

	#mySpeechRecognition(msg, id){
		if ("webkitSpeechRecognition" in window) 
		{

			// Speech Recognition Stuff goes here
			//console.log("Speech Recognition Here!")
			const temp = document.querySelector("#" + this.idInterim + id);
			temp.style.color = "grey";
			//temp.style.backgroundColor = "grey";
			const error = document.querySelector("#" + this.idError);
			error.style.color = "red";
			const result = document.querySelector("#" + this.idFinal + id);
			
			let speechRecognition = new webkitSpeechRecognition();
			// String for the Final Transcript
			let final_transcript = "";
			speechRecognition.continuous = true;
			speechRecognition.interimResults = true;
			speechRecognition.lang = "en-US";

			// Set the onClick property of the start button
			document.querySelector("#" + this.idStart + id).onclick = () => {
				// Start the Speech Recognition
				speechRecognition.start();
				//console.log("speech Recognition start");
				document.getElementById(this.idStart + id).hidden = true;
				document.getElementById(this.idStop + id).hidden = false;
			};
			// Set the onClick property of the stop button
			document.querySelector("#" + this.idStop + id).onclick = () => {
				// Stop the Speech Recognition
				speechRecognition.stop();
				//console.log("speech Recognition stop");
				final_transcript = "";
				document.getElementById(this.idStart + id).hidden = false;
				document.getElementById(this.idStop + id).hidden = true;
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
						final_transcript = final_transcript.toLowerCase();
						final_transcript = this.#repAll(final_transcript);
						if (final_transcript == msg){
							speechRecognition.stop();
							//console.log("speech Recognition stop");
							temp.innerHTML = "";
							result.innerHTML = " Done!";
							result.style.color = "green";
							document.getElementById(this.idStop + id).hidden = true;
							return true;
						} else {
							const differences = this.#comparePhrases(final_transcript, msg);
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

	createRecognition(){
		for (let r = 0; r < this.actor1.length; r++){
			let id1 = this.names[0] + r;
			this.#mySpeechRecognition(this.actor1_rec[r], id1);
			let id2 = this.names[1] + r;
			this.#mySpeechRecognition(this.actor2_rec[r], id2);
		}
	}	
	
}



/* function removePunctuationAndLowercase(string) {
  return string.replace(/[,.!?;:]/g, "").toLowerCase();
}

function dialogStart(){
	for (let r = 0; r < actor1.length; r++){
		msg = removePunctuationAndLowercase(actor1[r]);
		console.log(msg);
		sRec(msg);
		myTalk(actor2[r]);
	}
} */


d = new Dialog(actor_names, actor1, actor2, actor1_recognition, actor2_recognition);
//d = new Dialog();
d.createDialog();
d.createRecognition();
