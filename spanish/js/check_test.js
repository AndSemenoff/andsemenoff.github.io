function myclear()
  {
	  for(count = 0; count < answers.length; count++)
		  {
			element = document.getElementById('question' + count);
			element.value = "";
			element.style.color = 'black';
			color1.style.fontWeight = 'normal';
		  }
  }
function test()
 {
	for(count = 0; count < answers.length; count++)
	{
		answer1 = document.getElementById('question' + count).value;
		color1 = document.getElementById('question' + count);
		if (answer1 == answers[count]) color1.style.color = 'green';
		else 
			{
			color1.style.color = 'red';
			color1.style.fontWeight = 'bold';
			}
	}

 }