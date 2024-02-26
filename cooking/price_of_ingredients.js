let milk = 45;
let flour = 45;
let yeast = 30;
let salt = 60;
let sugar = 60;
let cheese = 330;
let sum = 0;
let olive_oil = 500;

let summa = Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "UYU",
  maximumSignificantDigits: 2,
});
try {
	let my_flour = document.getElementById("flour");
	my_flour.textContent = Number(my_flour.textContent)/1000*flour;
	sum += Number(my_flour.textContent);
} catch (error) {
	console.log(error);
}
try {
	let my_milk = document.getElementById("milk");
	my_milk.textContent = Number(my_milk.textContent)/1000*milk;
	sum += Number(my_milk.textContent);
} catch (error) {
	console.log(error);
}

try {
	let my_yeast = document.getElementById("yeast");
	my_yeast.textContent = Number(my_yeast.textContent)/30*yeast;
	sum += Number(my_yeast.textContent);
} catch (error) {
	console.log(error);
}

try {
	let my_cheese = document.getElementById("cheese");
	my_cheese.textContent = Number(my_cheese.textContent)/1000*cheese;
	sum += Number(my_cheese.textContent);
} catch (error) {
	console.log(error);
}

try {
	let my_sugar = document.getElementById("sugar");
	my_sugar.textContent = Number(my_sugar.textContent)/1000*sugar;
	sum += Number(my_sugar.textContent);
} catch (error) {
	console.log(error);
}
try {
	let my_salt = document.getElementById("salt");
	my_salt.textContent = Number(my_salt.textContent)/1000*salt;
	sum += Number(my_salt.textContent);
} catch (error) {
	console.log(error);
}
try {
	let my_olive_oil = document.getElementById("olive_oil");
	my_olive_oil.textContent = Number(my_olive_oil.textContent)/1000*olive_oil;
	sum += Number(my_olive_oil.textContent);
} catch (error) {
	console.log(error);
}

let my_sum = document.getElementById("sum");
my_sum.textContent = summa.format(sum);