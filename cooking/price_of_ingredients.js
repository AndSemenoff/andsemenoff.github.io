class IName{
	constructor(name, nameRU = "", nameES = ""){
		this.name = name;
		this.nameRU = nameRU;
		this.nameES = nameES;
	}
	getName(local="US"){
		if (local=="US") return this.name;
		else if (local=="RU") return this.nameRU;
		else if (local=="ES") return this.nameES;
	}
}
class Ingredient{
	constructor(name, price, unit, currency){
		this.name = name;
		this.amount = 0;
		this.price = price; 
		this.unit = unit;
		this.currency = currency;
	}
	
	getPrice(format){
		
		let summa = Intl.NumberFormat("en-IN", {
			style: "currency",
			currency: this.currency,
			maximumSignificantDigits: 4,
		});
		let sum = 0;
		if (this.unit == 'gr' || this.unit == 'ml')	{
			sum = this.price * this.amount / 1000;
		}
		else if (this.unit == 'piece')	{
			sum = this.price * this.amount;
		}
		if (format) return summa.format(sum);
		return sum;
	}
	
	toTableRow(){
		return `<td>${this.name.getName("RU")}(${this.name.getName()})</td><td>${this.amount}</td><td>${this.unit}</td><td>${this.getPrice(true)}</td>`;
	}
	toString() {
    return `${this.name} ${this.amount} ${this.unit}`;
  }
}

class Recipe {
  constructor(name, description, ingredients, instructions) {
    this.name = name;
    this.description = description;
    this.ingredients = ingredients;
    this.instructions = instructions;
  }

  getIngredients() {
    return this.ingredients.map(ingredient => `<tr>${ingredient.toTableRow()}</tr>`).join('');
  }

  getInstructions() {
    return this.instructions.map(step => `<li>${step}</li>`).join('');;
  }
	
	getPrice(){
		let summa = Intl.NumberFormat("en-IN", {
			style: "currency",
			currency: this.ingredients[0].currency,
			maximumSignificantDigits: 5,
		});
		let sum = 0;
		this.ingredients.forEach((element) => sum += element.getPrice());
		return summa.format(sum);
	}

  toString() {
    return `<h3> ${this.name}</h3>
<div> ${this.description} </div> 
<div>Рецепт:</div>
<table class='table-test'>
<thead><tr><td>ингредиент</td><td>кол-во</td><td>ед.изм.</td><td>цена</td></tr></thead>
${this.getIngredients()}
</table>
<div>Общая стоимость блюда: ${this.getPrice()}</div>
<div> Процес приготовления:
	<ol>${this.getInstructions()}</ol>
</div>`;
  }
}
let milk = new Ingredient(new IName("milk", "молоко"), 45, "ml", "UYU");
let water = new Ingredient(new IName("water", "вода"), 0, "ml", "UYU");
let flour = new Ingredient(new IName("flour", "мука пшеничная"), 45, "gr", "UYU");
let wholeWheatFlour = new Ingredient(new IName("whole wheat flour", "мука пшеничная цельнозерновая"), 100, "gr", "UYU");
let wholeWheatRyeFlour = new Ingredient(new IName("whole wheat rye flour", "мука рженая цельнозерновая"), 250, "gr", "UYU");
let liveYeast = new Ingredient(new IName("live yeast", "живые дрожжи"), 1000, "gr", "UYU");
let yeast = new Ingredient(new IName("yeast", "cухие дрожжи"), 1000, "gr", "UYU");
let salt = new Ingredient(new IName("salt", "соль"), 60, "gr", "UYU");
let sugar = new Ingredient(new IName("sugar", "сахар"), 60, "gr", "UYU");
let vanillaSugar = new Ingredient(new IName("vanilla sugar", "ванильный сахар"), 600, "gr", "UYU");
let vanillaExtract = new Ingredient(new IName("vanilla extract", "ванильный экстракт"), 1300, "ml", "UYU");
let cheese = new Ingredient(new IName("cheese", "сыр"), 400, "gr", "UYU");
let olive_oil = new Ingredient(new IName("olive oil", "оливковое масло"), 500, "ml", "UYU");
let butter = new Ingredient(new IName("butter", "сливочное масло"), 500, "gr", "UYU");
let vegetableOil = new Ingredient(new IName("vegetable oil", "растительное масло"), 160, "ml", "UYU");
let egg = new Ingredient(new IName("egg", "яйцо куриное"), 12, "piece", "UYU"); 
let bakingРowder = new Ingredient(new IName("baking powder", "разрыхлитель"), 500, "gr", "UYU"); 


