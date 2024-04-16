const ingredients = [water, flour, yeast, salt,];
yeast.amount=5;
water.amount=300;
flour.amount=450;
salt.amount=5;


const instructions = [
"Перемешиваем сухие ингредиенты.",
"Добавляем теплую воду 30-35 С. Замешиваем тесто 3-5 минут.",
"Оставляем на расстойку на 1.5-2 часа.", 
"Обминаем тесто. Делим на части. Оставляем на 10 минут.",
"Формируем багеты. Отправляем в расстойку на 1-2 часа.",
"Перед выпечкой смазываем водой.",
"Выпекаем при 200 С на режиме 'верх и низ' с добавлением пара.",
"Время выпечки 25-30 минут.",
];

const recipe = new Recipe("Французский багет", "Вариант без опары. Простейшее смешивание.", ingredients, instructions)

try {
	let my_recipe = document.getElementById("recipe");
	my_recipe.innerHTML = recipe.toString();
} catch (error) {
	console.log(error);
}