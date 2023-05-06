var answers = [
/*1*/ 	"visto", 
/*2*/	"estado", 
/*3*/	"sido", 
/*4*/	"viajado", 
/*5*/	"salido", 
/*6*/	"entendido", 
/*7*/	"puesto", 
/*8*/	"querido", 
/*9*/	"escrito", 
/*10*/	"esperado",
/*11*/	"cubierto",
/*12*/	"leído",
/*13*/	"jugado",
/*14*/	"oído",
/*15*/	"muerto",
/*16*/	"vivido",
/*17*/	"ido",
/*18*/	"perdido",
/*19*/	"roto",
/*20*/	"abierto",
];

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