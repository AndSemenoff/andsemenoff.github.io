class IName{
	constructor(name, nameRU = ""){
		this.name = name;
		this.nameRU = nameRU;

	}
	getName(local="US"){
		if (local=="US") return this.name;
		else if (local=="RU") return this.nameRU;

	}
}

class Link{
  constructor(shopName, link) {
    this.shopName = shopName;
    this.link = link;
  }
  getLink() {
	return this.link;
  }
}
// 1 oz = 28.3495 gr
// 1 GL = 128 oz
// 1 GL = 3.7 L
// 1 LB = 453.592 gr

class Ingredient{
	constructor(name, price, unit, currency, link){
		this.name = name;
		this.amount = 0;
		this.price = price; 
		this.unit = unit;
		this.currency = currency;
		this.link = link;
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
		else if (this.unit == 'oz') {
			
		}
		if (format) return summa.format(sum);
		return sum;
	}
	
	toTableRow(){
		return `<td>${this.name.getName("RU")}(${this.name.getName()})</td><td>${this.amount}</td><td>${this.unit}</td><td>${this.getPrice(true)}</td><td><a href='${this.link.getLink()}'>>></a></td>`;
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
<thead><tr><td>ингредиент</td><td>кол-во</td><td>ед.изм.</td><td>цена</td><td>ссылка</td></tr></thead>
${this.getIngredients()}
</table>
<div>Общая стоимость блюда: ${this.getPrice()}</div>
<div> Процес приготовления:
	<ol>${this.getInstructions()}</ol>
</div>`;
  }
}


//let milk = new Ingredient(new IName("milk", "молоко"), 45, "ml", "UYU");
let milk = new Ingredient(new IName("milk", "молоко"), 1, "ml", "USD", new Link("walmart", "https://www.walmart.com/ip/Great-Value-Milk-Whole-Vitamin-D-Gallon-Plastic-Jug/10450114" ));
let water = new Ingredient(new IName("water", "вода"), 0, "ml", "USD", new Link("walmart", "" ));
let flour = new Ingredient(new IName("flour", "мука пшеничная"), 2.5, "gr", "USD", new Link("walmart", "https://www.walmart.com/ip/seot/10535108" ));
let wholeWheatFlour = new Ingredient(new IName("whole wheat flour", "мука пшеничная цельнозерновая"), 100, "gr", "UYU", new Link("walmart", "" ));
let wholeWheatRyeFlour = new Ingredient(new IName("whole wheat rye flour", "мука рженая цельнозерновая"), 250, "gr", "UYU", new Link("walmart", "" ));
let liveYeast = new Ingredient(new IName("live yeast", "живые дрожжи"), 40, "gr", "USD", new Link("walmart", "" ));
let yeast = new Ingredient(new IName("yeast", "cухие дрожжи"), 25, "gr", "USD", new Link("walmart", "https://www.walmart.com/ip/LeSaffre-Saf-Instant-Yeasts-Leaveners-16-Oz/31059831" ));
let salt = new Ingredient(new IName("salt", "соль"), 4.3, "gr", "USD", new Link("walmart", "https://www.walmart.com/ip/Morton-Salt-Sea-Salt-Natural-All-Purpose-26-Ounce/17283321" ));
let sugar = new Ingredient(new IName("sugar", "сахар"), 2, "gr", "USD", new Link("walmart", "https://www.walmart.com/ip/Great-Value-Pure-Granulated-Sugar-4-lb/10315162" ));
let vanillaSugar = new Ingredient(new IName("vanilla sugar", "ванильный сахар"), 600, "gr", "UYU", new Link("walmart", "" ));
let vanillaExtract = new Ingredient(new IName("vanilla extract", "ванильный экстракт"), 40, "ml", "USD", new Link("walmart", "https://www.walmart.com/ip/Watkins-Baking-Vanilla-8-fl-oz-Plastic-Container/54807050" ));
let cheese = new Ingredient(new IName("cheese", "сыр"), 10, "gr", "USD", new Link("walmart", "https://www.walmart.com/ip/Great-Value-Block-Sharp-Cheddar-Cheese-16-oz/10452385" ));
let olive_oil = new Ingredient(new IName("olive oil", "оливковое масло"), 5, "ml", "USD", new Link("walmart", "" ));
let butter = new Ingredient(new IName("butter", "сливочное масло"), 10, "gr", "USD", new Link("walmart", "" ));
let vegetableOil = new Ingredient(new IName("vegetable oil", "растительное масло"), 3, "ml", "USD", new Link("walmart", "https://www.walmart.com/ip/Great-Value-Vegetable-Oil-48-fl-oz/10451002" ));
let egg = new Ingredient(new IName("egg", "яйцо куриное"), 0.36, "piece", "USD", new Link("walmart", "https://www.walmart.com/ip/Great-Value-Large-White-Eggs-18-Count/172844767" )); 
let bakingРowder = new Ingredient(new IName("baking powder", "разрыхлитель"), 9, "gr", "USD", new Link("walmart", "https://www.walmart.com/ip/Great-Value-Double-Acting-Baking-Powder-8-1-oz/16627955" )); 
let apple = new Ingredient(new IName("apple", "яблоки"), 90, "gr", "UYU", new Link("walmart", "" )); 


