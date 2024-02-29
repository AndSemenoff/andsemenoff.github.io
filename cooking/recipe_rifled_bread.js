const ingredients = [water, flour, yeast, water, flour, yeast];
yeast.amount=25;
water.amount=220;
flour.amount=450;

const instructions = [
"Готовим опару. Берем первые три ингредиента и хорошо перемешиваем. Время брожения опары 3-4 часа.",
"Общее время подъема теста 1,5 - 2 часа. Обминка через 50 минут.", 
"Время выпечки 28-30 мин.", 
"Температура 190 градусов."];

const recipe = new Recipe("Батон 'Нарезной'", "Опара", ingredients, instructions)

try {
	let my_recipe = document.getElementById("recipe");
	my_recipe.innerHTML = recipe.toString();
} catch (error) {
	console.log(error);
}