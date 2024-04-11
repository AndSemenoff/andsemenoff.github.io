const ingredients = [water, flour, yeast, sugar, salt, butter];
yeast.amount=2;
water.amount=225;
flour.amount=500;
sugar.amount=30;
salt.amount=5;
butter.amount=20;

const instructions = [
"Готовим опару - смотри подробные инструкции далее.",
"Замешиваем тесто - смотри подробные инструкции далее.",
"Выпекаем - смотри подробные инструкции далее.", 
];

const recipe = new Recipe("Батон 'Нарезной'", "Рецепт суммарно с опарой.", ingredients, instructions)

try {
	let my_recipe = document.getElementById("recipe");
	my_recipe.innerHTML = recipe.toString();
} catch (error) {
	console.log(error);
}