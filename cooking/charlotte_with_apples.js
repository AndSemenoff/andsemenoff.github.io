const ingredients = [egg, butter, flour, sugar, salt, bakingРowder, apple, vanillaExtract];
egg.amount = 4; 
bakingРowder.amount=10;
sugar.amount=250;
butter.amount=250;
flour.amount=270;
salt.amount=2;
apple.amount=600;
vanillaExtract.amount = 5;

const instructions = [
"Разрыхлитель перемешиваем с мукой.",
"Яйца взбиваем миксером с сахаром до побеления. Затем добавляем соль и ванилин.",
"Масло размораживаем то состояния мягкого крема. Масло добавляем к взбитой массе. Перемешиваем.", 
"Добавляем муку и хорошо перемешиваем до однородности.",
"Чистим и режем яблоки и добавляем их к тесту. Всё хорошо перемешиваем.",
"Выкладываем массу в форму для выпекания. Желательно чтобы толшина не была более 20мм.",
"Выпекаем в разогретой до 180С духовке на режиме 'верх и низ'.",
"Время выпекания 30-40 минут.",

];

const recipe = new Recipe("Шарлотка с яблоками.", ".", ingredients, instructions)

try {
	let my_recipe = document.getElementById("recipe");
	my_recipe.innerHTML = recipe.toString();
} catch (error) {
	console.log(error);
}