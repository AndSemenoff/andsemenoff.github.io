const ingredients = [egg, sugar, salt, vanillaExtract, vegetableOil, milk, flour, bakingРowder, ];
egg.amount = 1;
flour.amount = 135;
milk.amount = 90;
salt.amount = 3;
sugar.amount = 75;
bakingРowder.amount = 6;
vegetableOil.amount = 40;
vanillaExtract.amount = 5;

const instructions = [
"Яйцо, сахар, соль и ванильный экстракт хорошо перемешиваем. Смесь должна немного посветлеть.",
"Добавляем растительное масто. Хорошо перемешиваем.",
"Добавляем молоко комнатной температуры. Хорошо перемешиваем.",
"Муку просеиваем и соединяем с разрыхлителем и добавляем в жидкую смесь. Замешиваем жидкое тесто. Хорошо перемешиваем до однородности.",
"Раскладываем по формочкам. Можно добавлять любые начинки: изюм, цедру лимона, цукаты и т.п.",
"Выпекайте в разогретой духовке на режиме 'верх и низ' 30-35 минут при температуре 180°С (356°F).",
];

const recipe = new Recipe("Кексы. Базовый рецепт", "", ingredients, instructions)

try {
	let my_recipe = document.getElementById("recipe");
	my_recipe.innerHTML = recipe.toString();
} catch (error) {
	console.log(error);
}