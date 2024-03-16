const ingredients = [milk, yeast, sugar, salt, vegetableOil, flour, cheese, egg];
milk.amount = 220;
yeast.amount = 5;
salt.amount = 6;
sugar.amount = 5;
vegetableOil.amount = 20;
flour.amount = 350;
cheese.amount = 400;
egg.amount = 2;
const instructions = [
"В молоко добавляем сахар, дрожжи, малую часть муки и перемешиваем. Даем дрожжам активироваться 5-10 минут.",
"Добавляем соль и оставшуюся муку. Замешиваем тесто. Вконце добавляем растительное масло.",
"Даем тесту дойти 1-2 часа в теплом месте.",
"Делаем сырную начинку: натераем сыр и добавляем два белка, всё хорошо перемешиваем.",
"Формируем лодочкиэ.",
"Выпекайте в разогретой духовке на режиме 'верх и низ' 12-15 минут при максимальной температуре.",
"Добавляем в углубление желток и сливочное масло."
];

const recipe = new Recipe("Хачапури по аджарски", "", ingredients, instructions)

try {
	let my_recipe = document.getElementById("recipe");
	my_recipe.innerHTML = recipe.toString();
} catch (error) {
	console.log(error);
}