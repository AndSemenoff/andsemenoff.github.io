const ingredients = [yeast, salt, sugar, water, flour, olive_oil, cheese,];
yeast.amount=25;
salt.amount=3;
sugar.amount=3;
water.amount=220;
flour.amount=450;
cheese.amount=150;
olive_oil.amount=8;
const instructions = ["Вода теплая 40°С. Сыр натираем на мелкой терке.", "Время отстойки 45-60 минут.", "Выпекать в духовке при режиме 'верх и низ' при температуре 200°С около 25 минут."];

const recipe = new Recipe("Французский сырный хлеб", "Описание", ingredients, instructions)

try {
	let my_recipe = document.getElementById("recipe");
	my_recipe.innerHTML = recipe.toString();
} catch (error) {
	console.log(error);
}