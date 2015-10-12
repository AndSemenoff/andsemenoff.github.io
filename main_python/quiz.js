(function() {
	var btn = document.getElementById("answer");
	var btn_clear = document.getElementById("clear");
	var btn_info = document.getElementById("info");	
	var elements = document.getElementsByTagName("input");
	var explanation = document.getElementsByClassName("explanation");
	var result = document.getElementsByClassName("result");	
	//console.log(btn);
	btn.addEventListener("click", explan);
	btn_clear.addEventListener("click", all_clear);
	btn_info.addEventListener("click", all_info);

	/* Показываем все разъяснения. Для этого отмечам все не правильные ответы.
	*/
	function all_info(){
		for (var i = 0; i < elements.length; i++) {
			var element = elements[i];
			var checked = element.checked;
			var value = element.value;
			value = Boolean(value)
			//console.log(typeof(value))			
			if (checked !== value) {
				explanation[i].classList.remove("content-hidden");
				explanation[i].classList.add("content-show");
			}
			else {
				element.checked = !checked;
				explanation[i].classList.remove("content-hidden");
				explanation[i].classList.add("content-show");				
			}
		}		
	}	

	// Скрываем все разъяснения
	function clear(){
		for (var i = 0; i < elements.length; i++) {
			explanation[i].classList.remove("content-show");
			explanation[i].classList.add("content-hidden");
		}
		result[0].classList.remove("content-show");
		result[0].classList.add("content-hidden");		
	}

	function all_clear(){
		clear();
		for (var i = 0; i < elements.length; i++) {
			elements[i].checked = false;
		}
	}

	function explan() 
	{
		clear();	
		var error = false;		

		for (var i = 0; i < elements.length; i++) {
			var element = elements[i];
			var checked = element.checked;
			var value = element.value;
			value = Boolean(value)
		
			if (checked !== value) {
				explanation[i].classList.remove("content-hidden");
				explanation[i].classList.add("content-show");				
				error = true;
			} 
		}
		if (!error) {
			result[0].classList.remove("content-hidden");
		}
		//console.log(result);
	}
	
})();