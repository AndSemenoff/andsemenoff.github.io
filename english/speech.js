//
//https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API
//
function myTalk(msg){
		var synthesis = window.speechSynthesis;
		const utterThis = new SpeechSynthesisUtterance(msg);
		utterThis.pitch = 1;
		utterThis.rate = 1;
		utterThis.volume = 1;
		synthesis.speak(utterThis);
}

function mySpeech(){
	function handleClick(event) {
		// Получить кнопку, которая вызвала событие
		const elem = event.target;

		// Получить значение текста элемента
		const text = elem.textContent;
		myTalk(text);
	}
	if ('speechSynthesis' in window) {
		var synthesis = window.speechSynthesis;
		// Привязать обработчик события к всем кнопкам на странице
		const speechElements = document.querySelectorAll(".speech");
		speechElements.forEach(speechElement => speechElement.addEventListener("click", handleClick));
	}	else {
		console.log('Text-to-speech not supported.');
	}
}

/* const synth = window.speechSynthesis;
let myvoices = [];

myvoices = synth.getVoices();
for (const voice of myvoices) {
	console.log(voice.name, voice.lang);
}

if ('speechSynthesis' in window) {
  var synthesis = window.speechSynthesis;

  // Regex to match all English language tags e.g en, en-US, en-GB
  var langRegex = /^en(-[a-z]{2})?$/i;

  // Get the available voices and filter the list to only have English speakers
  var voices = synthesis
    .getVoices()
    .filter((voice) => langRegex.test(voice.lang));

  // Log the properties of the voices in the list
  voices.forEach(function (voice) {
    console.log({
      name: voice.name,
      lang: voice.lang,
      uri: voice.voiceURI,
      local: voice.localService,
      default: voice.default,
    });
  });
} else {
  console.log('Text-to-speech not supported.');
} */

mySpeech();
