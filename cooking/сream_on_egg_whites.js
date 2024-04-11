const ingredients = [milk, sugar, ];

sugar.amount=200;
milk.amount=1000;

const instructions = [
"Молоко и сахар перемешиваем в кастрюле.", 
"Варим на среднем огне желательно часто помешивая до готовности. В зависимости от требуемой густоты.", 
"Можно варить очень долго до коричневого цвета и это получится вареная сгущенка.",
"Для обычной сгущенки приблизительное время варки 45-60 минут.",
];

const recipe = new Recipe("Сгущеное молоко с сахаром", "Описание", ingredients, instructions)

try {
	let my_recipe = document.getElementById("recipe");
	my_recipe.innerHTML = recipe.toString();
} catch (error) {
	console.log(error);
}