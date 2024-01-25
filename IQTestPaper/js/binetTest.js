WIDTH = 180;
HEIGHT = 180;
RADIUS = 6;
DELTA = 3*RADIUS;
COLOR = "grey";
LINEW = 4;
let GLOBALCOUNT = 0;

let answerCirclesTemplate = [
			{cx:  DELTA, cy: DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH/2 - DELTA, cy: DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH/2 + DELTA, cy: DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH - DELTA, cy: DELTA, radius: RADIUS, color: COLOR},
			
			{cx:  DELTA, cy: HEIGHT/2 -DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH/2 - DELTA, cy: HEIGHT/2 - DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH/2 + DELTA, cy: HEIGHT/2 - DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH - DELTA, cy: HEIGHT/2 - DELTA, radius: RADIUS, color: COLOR},
			
			{cx:  DELTA, cy: HEIGHT/2 + DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH/2 - DELTA, cy: HEIGHT/2 + DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH/2 + DELTA, cy: HEIGHT/2 + DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH - DELTA, cy: HEIGHT/2 + DELTA, radius: RADIUS, color: COLOR},

			{cx:  DELTA, cy: HEIGHT - DELTA, radius: RADIUS, color: COLOR}, 
			{cx:  WIDTH/2 - DELTA, cy: HEIGHT - DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH/2 + DELTA, cy: HEIGHT - DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH - DELTA, cy: HEIGHT - DELTA, radius: RADIUS, color: COLOR}, 
		]

var test = [
// №1	
	{
		questions: [
			{
				question:[
					{x:LINEW/2, y: HEIGHT - HEIGHT/2, line: "normal"}, 
					{x:LINEW/2, y: LINEW/2, line: "normal"},
					{x:WIDTH - LINEW/2, y: LINEW/2, line: "normal"},
					{x:WIDTH - LINEW/2, y:HEIGHT - LINEW/2, line: "normal"},
					{x:WIDTH - WIDTH/2, y:HEIGHT - LINEW/2, line: "normal"},
					{x:WIDTH - WIDTH/2, y:HEIGHT - HEIGHT/2, line: "normal"},
					{x:LINEW/2, y: HEIGHT - HEIGHT/2, line: "normal"},
					{x:WIDTH - WIDTH/2, y: HEIGHT, line: "normal"},
					{x:0,  y: HEIGHT, line: "dash"},
					{x:0,  y: HEIGHT/2, line: "dash"},
					]
			},
		],
		questionCircles: [{cx:  WIDTH/2 - DELTA, cy: HEIGHT/2 + DELTA, radius: RADIUS, color: COLOR}],
		answer: [9, 12],
		circles: [
			{cx:  DELTA, cy: DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH/2 - DELTA, cy: DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH/2 + DELTA, cy: DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH - DELTA, cy: DELTA, radius: RADIUS, color: COLOR},
			
			{cx:  DELTA, cy: HEIGHT/2 -DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH/2 - DELTA, cy: HEIGHT/2 - DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH/2 + DELTA, cy: HEIGHT/2 - DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH - DELTA, cy: HEIGHT/2 - DELTA, radius: RADIUS, color: COLOR},
			
			{cx:  DELTA, cy: HEIGHT/2 + DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH/2 - DELTA, cy: HEIGHT/2 + DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH/2 + DELTA, cy: HEIGHT/2 + DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH - DELTA, cy: HEIGHT/2 + DELTA, radius: RADIUS, color: COLOR},

			{cx:  DELTA, cy: HEIGHT - DELTA, radius: RADIUS, color: COLOR}, 
			{cx:  WIDTH/2 - DELTA, cy: HEIGHT - DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH/2 + DELTA, cy: HEIGHT - DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH - DELTA, cy: HEIGHT - DELTA, radius: RADIUS, color: COLOR}, 
		],
	},
// №2	
	{
		questions: [
			{question:[
				{x:0, y: HEIGHT/2, line: "normal"}, 
				{x:WIDTH - LINEW/2, y: HEIGHT/2, line: "normal"},
				{x:WIDTH - LINEW/2, y: HEIGHT - LINEW/2, line: "normal"},
				{x:LINEW/2, y: HEIGHT - LINEW/2, line: "normal"},
				{x:LINEW/2, y: HEIGHT/2, line: "normal"}, 
				{x:LINEW/2, y: LINEW/2, line: "dash"},
				{x:WIDTH - LINEW/2, y: LINEW/2, line: "dash"},
				{x:WIDTH - LINEW/2, y: HEIGHT/2 + LINEW/2, line: "dash"},
			]},
			{question:[
				{x:WIDTH - LINEW/2, y: HEIGHT/2, line: "normal"}, 
				{x:WIDTH - LINEW/2, y: HEIGHT - LINEW/2, line: "normal"},
				{x:WIDTH/2, y: HEIGHT - LINEW/2, line: "normal"},
				{x:WIDTH/2, y: HEIGHT/2, line: "normal"},
				{x:WIDTH - LINEW/2, y: HEIGHT/2, line: "normal"}, 
				{x:WIDTH - LINEW/2, y: LINEW/2, line: "dash"}, 
				{x: LINEW/2, y: LINEW/2, line: "dash"}, 
				{x: LINEW/2, y: HEIGHT - LINEW/2 , line: "dash"}, 
				{x: WIDTH/2 + LINEW/2, y: HEIGHT - LINEW/2 , line: "dash"}, 
			]},
		],
		questionCircles: [{cx:  WIDTH - DELTA, cy: HEIGHT/2 + DELTA, radius: RADIUS, color: COLOR}],
		answer: [4, 7, 8, 11],
		circles: [
			{cx:  DELTA, cy: DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH/2 - DELTA, cy: DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH/2 + DELTA, cy: DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH - DELTA, cy: DELTA, radius: RADIUS, color: COLOR},
			
			{cx:  DELTA, cy: HEIGHT/2 -DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH/2 - DELTA, cy: HEIGHT/2 - DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH/2 + DELTA, cy: HEIGHT/2 - DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH - DELTA, cy: HEIGHT/2 - DELTA, radius: RADIUS, color: COLOR},
			
			{cx:  DELTA, cy: HEIGHT/2 + DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH/2 - DELTA, cy: HEIGHT/2 + DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH/2 + DELTA, cy: HEIGHT/2 + DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH - DELTA, cy: HEIGHT/2 + DELTA, radius: RADIUS, color: COLOR},

			{cx:  DELTA, cy: HEIGHT - DELTA, radius: RADIUS, color: COLOR}, 
			{cx:  WIDTH/2 - DELTA, cy: HEIGHT - DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH/2 + DELTA, cy: HEIGHT - DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH - DELTA, cy: HEIGHT - DELTA, radius: RADIUS, color: COLOR}, 
		],
	},
// №3	
	{
		questions: [
			{question:[
				{x: LINEW/2, y: 2*HEIGHT/3, line: "normal"}, 
				{x: LINEW/2, y: LINEW/2, line: "normal"}, 
				{x: WIDTH - LINEW/2, y: LINEW/2, line: "normal"}, 
				{x: WIDTH - LINEW/2, y: 2*HEIGHT/3 + LINEW/2, line: "normal"}, 
				{x: LINEW/2, y: 2*HEIGHT/3, line: "normal"}, 
				{x: LINEW/2, y: HEIGHT/3, line: "normal"}, 
				{x: WIDTH - LINEW/2, y: HEIGHT/3, line: "normal"}, 
				{x: WIDTH - LINEW/2, y: 2*HEIGHT/3, line: "normal"},
				{x: WIDTH - LINEW/2, y: HEIGHT - LINEW/2, line: "dash"},
				{x: LINEW/2, y: HEIGHT - LINEW/2, line: "dash"},
				{x: LINEW/2, y: 2*HEIGHT/3  - LINEW/2, line: "dash"},
			]},
			{question:[
				{x: WIDTH/2, y: LINEW/2, line: "normal"}, 
				{x: WIDTH - LINEW/2, y: LINEW/2, line: "normal"}, 
				{x: WIDTH - LINEW/2, y: 2*HEIGHT/3 + LINEW/2, line: "normal"}, 
				{x: WIDTH/2, y: 2*HEIGHT/3 + LINEW/2, line: "normal"}, 
				{x: WIDTH/2, y: 0, line: "normal"},
				{x: LINEW/2, y: LINEW/2, line: "dash"},
				{x: LINEW/2, y: HEIGHT - LINEW/2 , line: "dash"},
				{x: WIDTH - LINEW/2, y: HEIGHT - LINEW/2 , line: "dash"},
				{x: WIDTH - LINEW/2, y: 2*HEIGHT/3 - LINEW/2, line: "dash"},
			]},
		],
		questionCircles: [{cx:  WIDTH - DELTA, cy: DELTA, radius: RADIUS, color: COLOR},],
		answer: [0, 3],
		circles: [
			{cx:  DELTA, cy: DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH/2 - DELTA, cy: DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH/2 + DELTA, cy: DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH - DELTA, cy: DELTA, radius: RADIUS, color: COLOR},
			
			{cx:  DELTA, cy: HEIGHT/2 -DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH/2 - DELTA, cy: HEIGHT/2 - DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH/2 + DELTA, cy: HEIGHT/2 - DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH - DELTA, cy: HEIGHT/2 - DELTA, radius: RADIUS, color: COLOR},
			
			{cx:  DELTA, cy: HEIGHT/2 + DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH/2 - DELTA, cy: HEIGHT/2 + DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH/2 + DELTA, cy: HEIGHT/2 + DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH - DELTA, cy: HEIGHT/2 + DELTA, radius: RADIUS, color: COLOR},

			{cx:  DELTA, cy: HEIGHT - DELTA, radius: RADIUS, color: COLOR}, 
			{cx:  WIDTH/2 - DELTA, cy: HEIGHT - DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH/2 + DELTA, cy: HEIGHT - DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH - DELTA, cy: HEIGHT - DELTA, radius: RADIUS, color: COLOR}, 
		],
	},
// №4	
	{
		questions: [
			{question:[
				{x: LINEW/2, y: LINEW/2, line: "normal"}, 
				{x: WIDTH - LINEW/2, y: HEIGHT - LINEW/2, line: "normal"}, 
				{x: LINEW/2, y: HEIGHT - LINEW/2, line: "normal"},
				{x: LINEW/2, y: LINEW/2, line: "normal"},
				{x: WIDTH - LINEW/2, y: LINEW/2, line: "dash"},
				{x: WIDTH - LINEW/2, y: HEIGHT - LINEW/2, line: "dash"},
			]},
			{question:[
				{x: LINEW/2, y: HEIGHT, line: "normal"}, 
				{x: WIDTH/2 - LINEW/2, y: HEIGHT/2, line: "normal"}, 
				{x: WIDTH - LINEW/2, y: HEIGHT - LINEW/2, line: "normal"},
				{x: LINEW/2, y: HEIGHT - LINEW/2, line: "normal"}, 
				{x: LINEW/2, y: LINEW/2, line: "dash"},
				{x: WIDTH - LINEW/2, y: LINEW/2, line: "dash"},
				{x: WIDTH - LINEW/2, y: HEIGHT - LINEW/2, line: "dash"},
			]},
		],
		questionCircles: [{cx:  WIDTH/2 + DELTA, cy: HEIGHT - DELTA, radius: RADIUS, color: COLOR},],
		answer: [1, 4, 11, 14],
		circles: [
			{cx:  DELTA, cy: DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH/2 - DELTA, cy: DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH/2 + DELTA, cy: DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH - DELTA, cy: DELTA, radius: RADIUS, color: COLOR},
			
			{cx:  DELTA, cy: HEIGHT/2 -DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH/2 - DELTA, cy: HEIGHT/2 - DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH/2 + DELTA, cy: HEIGHT/2 - DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH - DELTA, cy: HEIGHT/2 - DELTA, radius: RADIUS, color: COLOR},
			
			{cx:  DELTA, cy: HEIGHT/2 + DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH/2 - DELTA, cy: HEIGHT/2 + DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH/2 + DELTA, cy: HEIGHT/2 + DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH - DELTA, cy: HEIGHT/2 + DELTA, radius: RADIUS, color: COLOR},

			{cx:  DELTA, cy: HEIGHT - DELTA, radius: RADIUS, color: COLOR}, 
			{cx:  WIDTH/2 - DELTA, cy: HEIGHT - DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH/2 + DELTA, cy: HEIGHT - DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH - DELTA, cy: HEIGHT - DELTA, radius: RADIUS, color: COLOR}, 
		],
	},
// №5	
	{
		questions: [
			{question:[
				{x: LINEW/2, y: HEIGHT/2 + LINEW/2, line: "normal"}, 
				{x: WIDTH - LINEW/2, y: HEIGHT/2 + LINEW/2, line: "normal"}, 
				{x: WIDTH - LINEW/2, y: LINEW/2, line: "normal"},
				{x: LINEW/2, y: LINEW/2, line: "normal"},
				{x: LINEW/2, y: HEIGHT/2 + LINEW/2, line: "normal"},
				{x: LINEW/2, y: HEIGHT - LINEW/2, line: "dash"},
				{x: WIDTH - LINEW/2, y: HEIGHT - LINEW/2, line: "dash"},
				{x: WIDTH - LINEW/2, y: HEIGHT/2 - LINEW/2, line: "dash"},
			]},
			{question:[
				{x: LINEW/2, y: HEIGHT/2 - LINEW/2, line: "normal"},
				{x: WIDTH - LINEW/2, y: HEIGHT/2 - LINEW/2, line: "normal"},
				{x: WIDTH/2, y: LINEW/2, line: "normal"}, 
				{x: LINEW/2, y: LINEW/2, line: "normal"}, 
				{x: LINEW/2, y: HEIGHT/2 - LINEW/2, line: "normal"},
				{x: WIDTH/2, y: HEIGHT/2 - LINEW/2, line: "normal"},
				{x: WIDTH/2, y: LINEW/2, line: "normal"},
				{x: WIDTH - LINEW/2, y: LINEW/2, line: "dash"},
				{x: WIDTH - LINEW/2, y: HEIGHT - LINEW/2, line: "dash"},
				{x: LINEW/2, y: HEIGHT - LINEW/2, line: "dash"},
				{x: LINEW/2, y: HEIGHT/2 - LINEW/2, line: "dash"},

			]},
		],
		questionCircles: [{cx:  WIDTH/2 + DELTA, cy: HEIGHT/2 - DELTA, radius: RADIUS, color: COLOR},],
		answer: [3, 6, 10, 15],
		circles: [
			{cx:  DELTA, cy: DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH/2 - DELTA, cy: DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH/2 + DELTA, cy: DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH - DELTA, cy: DELTA, radius: RADIUS, color: COLOR},
			
			{cx:  DELTA, cy: HEIGHT/2 -DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH/2 - DELTA, cy: HEIGHT/2 - DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH/2 + DELTA, cy: HEIGHT/2 - DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH - DELTA, cy: HEIGHT/2 - DELTA, radius: RADIUS, color: COLOR},
			
			{cx:  DELTA, cy: HEIGHT/2 + DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH/2 - DELTA, cy: HEIGHT/2 + DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH/2 + DELTA, cy: HEIGHT/2 + DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH - DELTA, cy: HEIGHT/2 + DELTA, radius: RADIUS, color: COLOR},

			{cx:  DELTA, cy: HEIGHT - DELTA, radius: RADIUS, color: COLOR}, 
			{cx:  WIDTH/2 - DELTA, cy: HEIGHT - DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH/2 + DELTA, cy: HEIGHT - DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH - DELTA, cy: HEIGHT - DELTA, radius: RADIUS, color: COLOR}, 
		],
	},
// №6	
	{
		questions: [
			{question:[
				{x: WIDTH/2 - LINEW/2, y: LINEW/2, line: "normal"}, 
				{x: LINEW/2, y: LINEW/2, line: "normal"}, 
				{x: LINEW/2, y: HEIGHT - LINEW/2, line: "normal"},
				{x: WIDTH - LINEW/2, y: HEIGHT - LINEW/2, line: "normal"},
				{x: WIDTH - LINEW/2, y: HEIGHT/2 - LINEW/2, line: "normal"},
				{x: WIDTH/2 - LINEW/2, y: HEIGHT/2 - LINEW/2, line: "normal"},
				{x: WIDTH/2 - LINEW/2, y: LINEW/2, line: "normal"}, 
				{x: WIDTH - LINEW/2, y: HEIGHT/2 - LINEW/2, line: "normal"},
				{x: WIDTH - LINEW/2, y: LINEW/2, line: "dash"},
				{x: WIDTH/2 - LINEW/2, y: LINEW/2, line: "dash"},
			]},
			{question:[
				{x: WIDTH/2 - LINEW/2, y: LINEW/2, line: "normal"}, 
				{x: LINEW/2, y: HEIGHT/2 - LINEW/2, line: "normal"}, 
				{x: WIDTH/2 - LINEW/2, y: HEIGHT/2 - LINEW/2, line: "normal"},
				{x: LINEW/2, y: HEIGHT/2 - LINEW/2, line: "normal"},
				{x: LINEW/2, y: HEIGHT - LINEW/2, line: "normal"},
				{x: WIDTH - LINEW/2, y: HEIGHT - LINEW/2, line: "normal"},
				{x: WIDTH - LINEW/2, y: HEIGHT/2 - LINEW/2, line: "normal"},
				{x: WIDTH/2 - LINEW/2, y: HEIGHT/2 - LINEW/2, line: "normal"},
				{x: WIDTH/2 - LINEW/2, y: LINEW/2, line: "normal"}, 
				{x: WIDTH - LINEW/2, y: HEIGHT/2 - LINEW/2, line: "normal"},
				{x: WIDTH - LINEW/2, y: LINEW/2, line: "dash"},
				{x: WIDTH/2 - LINEW/2, y: LINEW/2, line: "dash"},
				{x: LINEW/2, y: LINEW/2, line: "dash"}, 
				{x: LINEW/2, y: HEIGHT/2 - LINEW/2, line: "dash"}, 
			]},
			{question:[
				{x: WIDTH - LINEW/2, y: HEIGHT/2 - LINEW/2, line: "normal"}, 
				{x: WIDTH/2 - LINEW/2, y: LINEW/2, line: "normal"}, 
				{x: WIDTH/2 - LINEW/2, y: HEIGHT - LINEW/2, line: "normal"},
				{x: WIDTH - LINEW/2, y: HEIGHT - LINEW/2, line: "normal"},
				{x: WIDTH - LINEW/2, y: HEIGHT/2 - LINEW/2, line: "normal"},
				{x: WIDTH - LINEW/2, y: LINEW/2, line: "dash"}, 
				{x: LINEW/2, y: LINEW/2, line: "dash"}, 
				{x: LINEW/2, y: HEIGHT - LINEW/2, line: "dash"}, 
				{x: WIDTH/2 - LINEW/2, y: HEIGHT - LINEW/2, line: "dash"},
			]},
		],
		questionCircles: [{cx:  WIDTH/2 + DELTA, cy: HEIGHT/2 + DELTA, radius: RADIUS, color: COLOR},],
		answer: [9, 10],
		circles: [
			{cx:  DELTA, cy: DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH/2 - DELTA, cy: DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH/2 + DELTA, cy: DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH - DELTA, cy: DELTA, radius: RADIUS, color: COLOR},
			
			{cx:  DELTA, cy: HEIGHT/2 -DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH/2 - DELTA, cy: HEIGHT/2 - DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH/2 + DELTA, cy: HEIGHT/2 - DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH - DELTA, cy: HEIGHT/2 - DELTA, radius: RADIUS, color: COLOR},
			
			{cx:  DELTA, cy: HEIGHT/2 + DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH/2 - DELTA, cy: HEIGHT/2 + DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH/2 + DELTA, cy: HEIGHT/2 + DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH - DELTA, cy: HEIGHT/2 + DELTA, radius: RADIUS, color: COLOR},

			{cx:  DELTA, cy: HEIGHT - DELTA, radius: RADIUS, color: COLOR}, 
			{cx:  WIDTH/2 - DELTA, cy: HEIGHT - DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH/2 + DELTA, cy: HEIGHT - DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH - DELTA, cy: HEIGHT - DELTA, radius: RADIUS, color: COLOR}, 
		],
	},
// №7	
	{
		questions: [
			{question:[
				{x: LINEW/2, y: LINEW/2, line: "normal"}, 
				{x: WIDTH - LINEW/2, y: HEIGHT - LINEW/2, line: "normal"}, 
				{x: LINEW/2, y: HEIGHT - LINEW/2, line: "normal"},
				{x: LINEW/2, y: LINEW/2, line: "normal"},
				{x: WIDTH - LINEW/2, y: LINEW/2, line: "dash"},
				{x: WIDTH - LINEW/2, y: HEIGHT - LINEW/2, line: "dash"},
			]},
			{question:[
				{x: LINEW/2, y: HEIGHT, line: "normal"}, 
				{x: WIDTH/2 - LINEW/2, y: HEIGHT/2, line: "normal"}, 
				{x: WIDTH - LINEW/2, y: HEIGHT - LINEW/2, line: "normal"},
				{x: LINEW/2, y: HEIGHT - LINEW/2, line: "normal"}, 
				{x: LINEW/2, y: HEIGHT/2 - LINEW/2, line: "normal"},
				{x: WIDTH/2 - LINEW/2, y: HEIGHT/2 - LINEW/2, line: "normal"},
				{x: LINEW/2, y: HEIGHT/2 - LINEW/2, line: "normal"},
				{x: LINEW/2, y: LINEW/2, line: "dash"},
				{x: WIDTH - LINEW/2, y: LINEW/2, line: "dash"},
				{x: WIDTH - LINEW/2, y: HEIGHT - LINEW/2, line: "dash"},
			]},
		],
		questionCircles: [{cx:  DELTA, cy: HEIGHT/2 + DELTA, radius: RADIUS, color: COLOR},],
		answer: [1, 2, 4, 8],
		circles: [
			{cx:  DELTA, cy: DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH/2 - DELTA, cy: DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH/2 + DELTA, cy: DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH - DELTA, cy: DELTA, radius: RADIUS, color: COLOR},
			
			{cx:  DELTA, cy: HEIGHT/2 -DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH/2 - DELTA, cy: HEIGHT/2 - DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH/2 + DELTA, cy: HEIGHT/2 - DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH - DELTA, cy: HEIGHT/2 - DELTA, radius: RADIUS, color: COLOR},
			
			{cx:  DELTA, cy: HEIGHT/2 + DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH/2 - DELTA, cy: HEIGHT/2 + DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH/2 + DELTA, cy: HEIGHT/2 + DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH - DELTA, cy: HEIGHT/2 + DELTA, radius: RADIUS, color: COLOR},

			{cx:  DELTA, cy: HEIGHT - DELTA, radius: RADIUS, color: COLOR}, 
			{cx:  WIDTH/2 - DELTA, cy: HEIGHT - DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH/2 + DELTA, cy: HEIGHT - DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH - DELTA, cy: HEIGHT - DELTA, radius: RADIUS, color: COLOR}, 
		],
	},
// №8	
	{
		questions: [
			{question:[
				{x: LINEW/2, y: HEIGHT/2 - LINEW/2, line: "normal"}, 
				{x: LINEW/2, y: HEIGHT - LINEW/2, line: "normal"}, 
				{x: WIDTH - LINEW/2, y: HEIGHT - LINEW/2, line: "normal"},
				{x: WIDTH - LINEW/2, y: LINEW/2, line: "normal"},
				{x: WIDTH/2 - LINEW/2, y: LINEW/2, line: "normal"},
				{x: WIDTH/2 - LINEW/2, y: HEIGHT/2 - LINEW/2, line: "normal"},
				{x: LINEW/2, y: HEIGHT/2 - LINEW/2, line: "normal"},
				{x: WIDTH/2 - LINEW/2, y: LINEW/2, line: "normal"},
				{x: LINEW/2, y: LINEW/2, line: "dash"},
				{x: LINEW/2, y: HEIGHT/2 - LINEW/2, line: "dash"},
			]},
			{question:[
				{x: LINEW/2, y: HEIGHT/2 - LINEW/2, line: "normal"}, 
				{x: LINEW/2, y: HEIGHT - LINEW/2, line: "normal"}, 
				{x: WIDTH/2 - LINEW/2, y: HEIGHT - LINEW/2, line: "normal"},
				{x: WIDTH/2 - LINEW/2, y: HEIGHT/2 - LINEW/2, line: "normal"},
				{x: WIDTH - LINEW/2, y: HEIGHT/2 - LINEW/2, line: "normal"},
								{x: WIDTH/2 - LINEW/2, y: HEIGHT - LINEW/2, line: "normal"},
								{x: WIDTH - LINEW/2, y: HEIGHT/2 - LINEW/2, line: "normal"},
				{x: WIDTH - LINEW/2, y: LINEW/2, line: "normal"},
				{x: WIDTH/2 - LINEW/2, y: LINEW/2, line: "normal"},
				{x: WIDTH/2 - LINEW/2, y: HEIGHT/2 - LINEW/2, line: "normal"},
				
				{x: LINEW/2, y: HEIGHT/2 - LINEW/2, line: "normal"},
				{x: WIDTH/2 - LINEW/2, y: LINEW/2, line: "normal"},
				{x: LINEW/2, y: LINEW/2, line: "dash"},
				{x: LINEW/2, y: HEIGHT - LINEW/2, line: "dash"}, 
				{x: WIDTH - LINEW/2, y: HEIGHT - LINEW/2, line: "dash"}, 
				{x: WIDTH - LINEW/2, y: LINEW/2, line: "dash"}, 
			]},
			{question:[
				{x: 0, y: HEIGHT - LINEW/2, line: "normal"}, 
				{x: WIDTH - LINEW/2, y: LINEW/2, line: "normal"}, 
				{x: WIDTH - LINEW/2, y: HEIGHT/2 + LINEW/2, line: "normal"}, 
				{x: WIDTH/2, y: HEIGHT - LINEW/2, line: "normal"}, 
				{x: LINEW/2, y: HEIGHT - LINEW/2, line: "normal"},
				{x: LINEW/2, y: LINEW/2, line: "dash"},
				{x: WIDTH - LINEW/2, y: LINEW/2, line: "dash"},
				{x: WIDTH - LINEW/2, y: HEIGHT - LINEW/2, line: "dash"},
				{x: LINEW/2, y: HEIGHT - LINEW/2, line: "dash"},
			]},
		],
		questionCircles: [{cx:  WIDTH/2 + DELTA, cy: HEIGHT/2 + DELTA, radius: RADIUS, color: COLOR},],
		answer: [0, 5, 10, 15],
		circles: [
			{cx:  DELTA, cy: DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH/2 - DELTA, cy: DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH/2 + DELTA, cy: DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH - DELTA, cy: DELTA, radius: RADIUS, color: COLOR},
			
			{cx:  DELTA, cy: HEIGHT/2 -DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH/2 - DELTA, cy: HEIGHT/2 - DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH/2 + DELTA, cy: HEIGHT/2 - DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH - DELTA, cy: HEIGHT/2 - DELTA, radius: RADIUS, color: COLOR},
			
			{cx:  DELTA, cy: HEIGHT/2 + DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH/2 - DELTA, cy: HEIGHT/2 + DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH/2 + DELTA, cy: HEIGHT/2 + DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH - DELTA, cy: HEIGHT/2 + DELTA, radius: RADIUS, color: COLOR},

			{cx:  DELTA, cy: HEIGHT - DELTA, radius: RADIUS, color: COLOR}, 
			{cx:  WIDTH/2 - DELTA, cy: HEIGHT - DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH/2 + DELTA, cy: HEIGHT - DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH - DELTA, cy: HEIGHT - DELTA, radius: RADIUS, color: COLOR}, 
		],
	},
// №9	
	{
		questions: [
			{question:[
				{x: LINEW/2, y: LINEW/2, line: "normal"}, 
				{x: WIDTH - LINEW/2, y: HEIGHT - LINEW/2, line: "normal"}, 
				{x: LINEW/2, y: HEIGHT - LINEW/2, line: "normal"},
				{x: LINEW/2, y: LINEW/2, line: "normal"},
				{x: WIDTH - LINEW/2, y: LINEW/2, line: "dash"},
				{x: WIDTH - LINEW/2, y: HEIGHT - LINEW/2, line: "dash"},
			]},
			{question:[
				{x: WIDTH, y: LINEW/2, line: "normal"}, 
				{x: WIDTH/2 - LINEW/2, y: HEIGHT/2, line: "normal"}, 
				{x: WIDTH/2 - LINEW/2, y: HEIGHT - LINEW/2, line: "normal"}, 
				{x: WIDTH - LINEW/2, y: HEIGHT - LINEW/2, line: "normal"},
				{x: WIDTH - LINEW/2, y: LINEW/2, line: "normal"},
				{x: LINEW/2, y: LINEW/2, line: "dash"},
				{x: LINEW/2, y: HEIGHT - LINEW/2, line: "dash"},
				{x: WIDTH/2 - LINEW/2, y: HEIGHT - LINEW/2, line: "dash"},
			]},
		],
		questionCircles: [{cx:  WIDTH - DELTA, cy: HEIGHT/2 - DELTA, radius: RADIUS, color: COLOR},],
		answer: [1, 4],
		circles: [
			{cx:  DELTA, cy: DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH/2 - DELTA, cy: DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH/2 + DELTA, cy: DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH - DELTA, cy: DELTA, radius: RADIUS, color: COLOR},
			
			{cx:  DELTA, cy: HEIGHT/2 -DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH/2 - DELTA, cy: HEIGHT/2 - DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH/2 + DELTA, cy: HEIGHT/2 - DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH - DELTA, cy: HEIGHT/2 - DELTA, radius: RADIUS, color: COLOR},
			
			{cx:  DELTA, cy: HEIGHT/2 + DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH/2 - DELTA, cy: HEIGHT/2 + DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH/2 + DELTA, cy: HEIGHT/2 + DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH - DELTA, cy: HEIGHT/2 + DELTA, radius: RADIUS, color: COLOR},

			{cx:  DELTA, cy: HEIGHT - DELTA, radius: RADIUS, color: COLOR}, 
			{cx:  WIDTH/2 - DELTA, cy: HEIGHT - DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH/2 + DELTA, cy: HEIGHT - DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH - DELTA, cy: HEIGHT - DELTA, radius: RADIUS, color: COLOR}, 
		],
	},
// №10	
	{
		questions: [
			{question:[
				{x: WIDTH/2 - LINEW/2, y: LINEW/2, line: "normal"}, 
				{x: LINEW/2, y: LINEW/2, line: "normal"}, 
				{x: LINEW/2, y: HEIGHT - LINEW/2, line: "normal"},
				{x: WIDTH - LINEW/2, y: HEIGHT - LINEW/2, line: "normal"},
				{x: WIDTH - LINEW/2, y: HEIGHT/2 - LINEW/2, line: "normal"},
				{x: WIDTH/2 - LINEW/2, y: HEIGHT/2 - LINEW/2, line: "normal"},
				{x: WIDTH/2 - LINEW/2, y: LINEW/2, line: "normal"}, 
				{x: WIDTH - LINEW/2, y: HEIGHT/2 - LINEW/2, line: "normal"},
				{x: WIDTH - LINEW/2, y: LINEW/2, line: "dash"},
				{x: WIDTH/2 - LINEW/2, y: LINEW/2, line: "dash"},
			]},
			{question:[
				{x: LINEW/2, y: LINEW/2, line: "normal"}, 
				{x: LINEW/2, y: HEIGHT - LINEW/2, line: "normal"}, 
				{x: WIDTH/2 - LINEW/2, y: HEIGHT - LINEW/2, line: "normal"}, 
				{x: LINEW/2, y: HEIGHT/2 - LINEW/2, line: "normal"},
				{x: WIDTH/2 - LINEW/2, y: HEIGHT - LINEW/2, line: "normal"},
				{x: WIDTH - LINEW/2, y: HEIGHT - LINEW/2, line: "normal"},
				{x: LINEW/2, y: LINEW/2, line: "normal"}, 
				{x: WIDTH - LINEW/2, y: LINEW/2, line: "dash"}, 
				{x: WIDTH - LINEW/2, y: HEIGHT - LINEW/2, line: "dash"},
			]},

		],
		questionCircles: [{cx:  WIDTH/2 - DELTA, cy: HEIGHT/2 + DELTA, radius: RADIUS, color: COLOR},],
		answer: [3, 6, 9],
		circles: [
			{cx:  DELTA, cy: DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH/2 - DELTA, cy: DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH/2 + DELTA, cy: DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH - DELTA, cy: DELTA, radius: RADIUS, color: COLOR},
			
			{cx:  DELTA, cy: HEIGHT/2 -DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH/2 - DELTA, cy: HEIGHT/2 - DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH/2 + DELTA, cy: HEIGHT/2 - DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH - DELTA, cy: HEIGHT/2 - DELTA, radius: RADIUS, color: COLOR},
			
			{cx:  DELTA, cy: HEIGHT/2 + DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH/2 - DELTA, cy: HEIGHT/2 + DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH/2 + DELTA, cy: HEIGHT/2 + DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH - DELTA, cy: HEIGHT/2 + DELTA, radius: RADIUS, color: COLOR},

			{cx:  DELTA, cy: HEIGHT - DELTA, radius: RADIUS, color: COLOR}, 
			{cx:  WIDTH/2 - DELTA, cy: HEIGHT - DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH/2 + DELTA, cy: HEIGHT - DELTA, radius: RADIUS, color: COLOR},
			{cx:  WIDTH - DELTA, cy: HEIGHT - DELTA, radius: RADIUS, color: COLOR}, 
		],
	},
]
function getMousePosition(canvas, event, test) {

	let rect = canvas.getBoundingClientRect();
	let mouseX = event.clientX - rect.left;
	let mouseY = event.clientY - rect.top;
	for (let i = 0; i < test.circles.length; i++) {
		dx = mouseX - test.circles[i].cx;
		dy = mouseY - test.circles[i].cy;
		if (dx * dx + dy * dy <= test.circles[i].radius * test.circles[i].radius) {
			if (test.circles[i].color == "black") {
				test.circles[i].color = "grey";
				circle("answer", test.circles[i].cx, test.circles[i].cy, test.circles[i].radius, test.circles[i].color);
			}
			else {
				test.circles[i].color = "black";
				circle("answer", test.circles[i].cx, test.circles[i].cy, test.circles[i].radius, test.circles[i].color);
			}
		}
	}
}

function submitAnswer(test){
	const result = document.getElementById("result");
	let myAnswer = [];
	for (let i = 0; i < test.circles.length; i++) {
		if (test.circles[i].color == "black") myAnswer.push(i);
	}
	console.log(test.answer, myAnswer);
	if (JSON.stringify(test.answer) === JSON.stringify(myAnswer)) {
		console.log("Right! You Win!");
		result.innerHTML = "Правильно!";
	}
	else 
	{
		result.innerHTML = "Не верно!";
		console.log("No!");
	}
}

function clickPrev(event){
	const result = document.getElementById("result");
	event.stopImmediatePropagation();
	console.log("GLOBALCOUNT:", GLOBALCOUNT);
	console.log("test.length:", test.length);
	if (GLOBALCOUNT > 0) {
		GLOBALCOUNT = GLOBALCOUNT - 1;
		deleteQuestion();
		result.innerHTML = "&nbsp;";
		makeQuestion(GLOBALCOUNT);
	}
}


function clickNext(event){
	const result = document.getElementById("result");
	//event.preventDefault();
	//event.stopPropagation();
	event.stopImmediatePropagation();
	console.log("GLOBALCOUNT:", GLOBALCOUNT);
	console.log("test.length:", test.length);
	if (GLOBALCOUNT < test.length - 1) {
		GLOBALCOUNT = GLOBALCOUNT + 1;
		deleteQuestion();
		result.innerHTML = "&nbsp;";
		makeQuestion(GLOBALCOUNT);
	}
}

function handleMouseMove(canvas, event, test) {
	let rect = canvas.getBoundingClientRect();
	let colorC = "grey";
	let mouseX = event.clientX - rect.left;
	let mouseY = event.clientY - rect.top;
	for (let i = 0; i < test.circles.length; i++) {
		dx = mouseX - test.circles[i].cx;
		dy = mouseY - test.circles[i].cy;
		if (dx * dx + dy * dy <= test.circles[i].radius * test.circles[i].radius) {
			if (test.circles[i].color == "grey"){
				circle("answer", test.circles[i].cx, test.circles[i].cy, test.circles[i].radius, "black")
			}
		}
		else {
			circle("answer", test.circles[i].cx, test.circles[i].cy, test.circles[i].radius, test.circles[i].color);
		}

	}

}


		
function answerDraw(id, width, height) {
	const canvas = document.getElementById(id);
	if (canvas.getContext) {
		const ctx = canvas.getContext("2d");
		ctx.lineWidth = 8;
		ctx.strokeRect(0, 0, width, height);
	}
}

function circle(id, x, y, radius, color){
	const canvas = document.getElementById(id);
	const circle = new Path2D();
	circle.arc(x, y, radius, 0, 2 * Math.PI);
	if (canvas.getContext) {
		const ctx = canvas.getContext("2d");
			ctx.fillStyle = color;
			ctx.fill(circle);
	}
}
function makeButton(bind, test){
	const body = document.getElementById(bind);
	const but = document.createElement("button");
	but.setAttribute("onclick", submitAnswer(test));
	but.textContent = "Submit Answer";
	
	body.appendChild(but);
}

function make_canvas(bind, id){
	const body = document.getElementById(bind);
	const can = document.createElement("canvas");
	can.setAttribute("id", id);
	can.setAttribute("width", WIDTH);
	can.setAttribute("height", HEIGHT);
	const style = document.createElement("style");
	style.textContent = `
			canvas {
				margin: 10px;
			}
		`;
	body.appendChild(style);
	body.appendChild(can);
}

function testDraw(id, test){
	const canvas = document.getElementById(id);
	if (canvas.getContext) {
		const ctx = canvas.getContext("2d");
		ctx.lineWidth = LINEW;
		ctx.beginPath();
		ctx.moveTo(test.question[0].x, test.question[0].y);
		for (let i = 1; i < test.question.length; i++){
			if (test.question[i].line == "dash") ctx.setLineDash([2*LINEW, LINEW]);
			else ctx.setLineDash([0, 0]);
			ctx.lineTo(test.question[i].x, test.question[i].y);
			ctx.stroke();
		}
	}
}
function deleteQuestion(){
	const answer = document.getElementById("ans");
	answer.innerHTML = "";
	const question = document.getElementById("IQTest");
	question.innerHTML = "";
}

function makeQuestion(count){
	make_canvas("ans", "answer");

	
	document.getElementById("count").innerHTML = count + 1;
	
	let butAnswer = document.getElementById("buttonAnswer");
	butAnswer.addEventListener("click", function (e) {submitAnswer(test[count]);});
	
	let butNext = document.getElementById("buttonNext");
	butNext.addEventListener("click", function (e) {clickNext(e);});
	if (count<test.length-1) butNext.style.display="block";
	else butNext.style.display="none";

	let butPrev = document.getElementById("buttonPrev");
	butPrev.addEventListener("click", function (e) {clickPrev(e);});
	console.log(count);
	if (count>0){
		butPrev.style.display="block";
	}
	else butPrev.style.display="none";

	let canvasElem = document.getElementById("answer");
	
	canvasElem.addEventListener("mousedown", function (e) {
		getMousePosition(canvasElem, e, test[count]);
	});
	
	canvasElem.addEventListener("mousemove", function (e) {
		handleMouseMove(canvasElem, e, test[count]);
	});
	
	window.addEventListener("load", answerDraw("answer", WIDTH, HEIGHT));
	for (let i = 0; i < test[count].circles.length; i++) {
		window.addEventListener("load", circle("answer", test[count].circles[i].cx, test[count].circles[i].cy, test[count].circles[i].radius, "grey"));
	}
	for (let i = 0; i < test[count].questions.length; i++){
		make_canvas("IQTest", "question"+i);
		window.addEventListener("load", testDraw("question"+i, test[count].questions[i]));
	}
	let i = test[count].questions.length;
	make_canvas("IQTest", "question"+i);
	window.addEventListener("load", circle("question"+i, test[count].questionCircles[0].cx, test[count].questionCircles[0].cy, test[count].questionCircles[0].radius, "black"));
	window.addEventListener("load", testDraw("question"+i, test[count].questions[i-1]));
}


makeQuestion(GLOBALCOUNT);