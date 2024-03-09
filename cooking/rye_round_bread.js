const ingredients = [wholeWheatFlour, wholeWheatRyeFlour, water, salt, yeast];
wholeWheatFlour.amount = 300;
wholeWheatRyeFlour.amount = 100;
water.amount = 350;
salt.amount = 7;
yeast.amount = 1;

const instructions = [
"Перемешиваем сухие ингредиенты. Добавляем воду. Хорошо перемешиваем.",
"Закрываем миску пищевой пленкой и оставляем на 8-10 часов в темном теплом месте.",
"Вывалите тесто на посыпанный мукой стол. Посыпте тесто мукой сверху. Сделайте предформовку подварачивая тесто внутрь.",
"Накройте миской и дайте постоять 15 минут.",
"Сложите тесто стандартным образом. Округлите его. Оставьте на расстойку на 2-3 часа.",
"Прогрейте духовку до 250°С вместе с казаном с крышкой. На бумаге положите хлеб в разогретую кастрюлю. Накройте крышкой и выпекайте при температуре 220°С 20 минут.", 
"Снимите крышку и выпекайте еще 20-25 минут при температуре 200°С.",
];

const recipe = new Recipe("Ржаной (1:3) круглый без замеса на дрожжах", "", ingredients, instructions)

try {
	let my_recipe = document.getElementById("recipe");
	my_recipe.innerHTML = recipe.toString();
} catch (error) {
	console.log(error);
}