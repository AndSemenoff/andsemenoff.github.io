//
//https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API
//

function sRec(msg){
	let speechRecognition = new webkitSpeechRecognition();
	// String for the Final Transcript
	let final_transcript = "";
	speechRecognition.continuous = true;
	speechRecognition.interimResults = true;
	speechRecognition.lang = "en-US";
	speechRecognition.start();
	document.querySelector("#stop").onclick = () => {
	// Stop the Speech Recognition
	speechRecognition.stop();
	console.log("speech Recognition stop");
	final_transcript = "";
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
					console.log("speech Recognition stop");
					temp.innerHTML = "";
					result.innerHTML = "done";
					return true;
				} else {
					
				}
			} else {
				interim_transcript += event.results[i][0].transcript;
			}
		}
		
		// Set the Final transcript and Interim transcript.
		result.innerHTML = final_transcript;
		temp.innerHTML = interim_transcript;
	}
}
function mySpeechRecognition(msg, count){
	if ("webkitSpeechRecognition" in window) 
	{

		// Speech Recognition Stuff goes here
		console.log("Speech Recognition Here!")
		const temp = document.querySelector("#interim"+count);
		temp.style.color = "grey";
		//temp.style.backgroundColor = "grey";
		const result = document.querySelector("#final"+count);
		
		let speechRecognition = new webkitSpeechRecognition();
		// String for the Final Transcript
		let final_transcript = "";
		speechRecognition.continuous = true;
		speechRecognition.interimResults = true;
		speechRecognition.lang = "en-US";

		// Set the onClick property of the start button
		document.querySelector("#start"+count).onclick = () => {
			// Start the Speech Recognition
			speechRecognition.start();
			console.log("speech Recognition start");
		};
		// Set the onClick property of the stop button
		document.querySelector("#stop"+count).onclick = () => {
			// Stop the Speech Recognition
			speechRecognition.stop();
			console.log("speech Recognition stop");
			final_transcript = "";
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
						console.log("speech Recognition stop");
						temp.innerHTML = "";
						result.innerHTML = "done";
						return true;
					} else {
						
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



/* 	if (final_transcript=="nice to meet you") {
		document.querySelector("#final").innerHTML = "good";
	}
	else 
		{
			document.querySelector("#final").innerHTML = "Not recognice. You frase: " + final_transcript;
		} */
//let msg = "hello Jack";
//mySpeechRecognition(msg, 1);