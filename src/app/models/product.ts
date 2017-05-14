import { Category } from './category'

export class Product
{
    constructor(public category: string, public name: string, public image: string)
	{
    }

	// Beverages
	public static PRODUCT_BEER: Product = new Product(Category.CATEGORY_BEVERAGES.name, 'Beer', 'http://i.imgur.com/WmfEenJ.png')
	public static PRODUCT_COFFEE: Product = new Product(Category.CATEGORY_BEVERAGES.name, 'Coffee', 'http://i.imgur.com/aGiXxjf.png')
	public static PRODUCT_ICE_TEA: Product = new Product(Category.CATEGORY_BEVERAGES.name, 'Ice Tea', 'http://i.imgur.com/Spi8duE.png')
	public static PRODUCT_SODA: Product = new Product(Category.CATEGORY_BEVERAGES.name, 'Soda', 'http://i.imgur.com/jybjFMf.png')
	public static PRODUCT_WATER: Product = new Product(Category.CATEGORY_BEVERAGES.name, 'Water', 'http://i.imgur.com/h34kKfv.png')

	// Bread & Grain Products
	public static PRODUCT_BAGUETTE: Product = new Product(Category.CATEGORY_BREAD_AND_GRAIN_PRODUCTS.name, 'Baguette', 'http://i.imgur.com/6tf1nXp.png')
	public static PRODUCT_CEREALS: Product = new Product(Category.CATEGORY_BREAD_AND_GRAIN_PRODUCTS.name, 'Cereals', 'http://i.imgur.com/cjxBkMd.png')
	public static PRODUCT_PASTA: Product = new Product(Category.CATEGORY_BREAD_AND_GRAIN_PRODUCTS.name, 'Pasta', 'http://i.imgur.com/VV4Z96m.png')
	public static PRODUCT_RICE: Product = new Product(Category.CATEGORY_BREAD_AND_GRAIN_PRODUCTS.name, 'Rice', 'http://i.imgur.com/wOJ6XaT.png')
	public static PRODUCT_RISOTTO: Product = new Product(Category.CATEGORY_BREAD_AND_GRAIN_PRODUCTS.name, 'Risotto', 'http://i.imgur.com/7dpAjjm.png')
	public static PRODUCT_SLICED_BREAD: Product = new Product(Category.CATEGORY_BREAD_AND_GRAIN_PRODUCTS.name, 'Sliced bread', 'http://i.imgur.com/Si3TyUt.png')

	// Condiments & Others
	public static PRODUCT_COFFEE_CREAM: Product = new Product(Category.CATEGORY_CONDIMENTS_AND_OTHERS.name, 'Coffee cream', 'http://i.imgur.com/uPn1oTB.png')
	public static PRODUCT_CORN: Product = new Product(Category.CATEGORY_CONDIMENTS_AND_OTHERS.name, 'Corn', 'http://i.imgur.com/oZol6zV.png')
	public static PRODUCT_OIL: Product = new Product(Category.CATEGORY_CONDIMENTS_AND_OTHERS.name, 'Oil', 'http://i.imgur.com/Us8YBF8.png')
	public static PRODUCT_SALT: Product = new Product(Category.CATEGORY_CONDIMENTS_AND_OTHERS.name, 'Salt', 'http://i.imgur.com/NzU28LS.png')
	public static PRODUCT_SOUP: Product = new Product(Category.CATEGORY_CONDIMENTS_AND_OTHERS.name, 'Soup', 'http://i.imgur.com/lrUCxbM.png')
	public static PRODUCT_SUGAR: Product = new Product(Category.CATEGORY_CONDIMENTS_AND_OTHERS.name, 'Sugar', 'http://i.imgur.com/h1jCQQH.png')
	public static PRODUCT_TOMATO_SAUCE: Product = new Product(Category.CATEGORY_CONDIMENTS_AND_OTHERS.name, 'Tomato sauce', 'http://i.imgur.com/WQYeED4.png')

	// Frozen
	public static PRODUCT_FISH_STICKS: Product = new Product(Category.CATEGORY_FROZEN.name, 'Fish sticks', 'http://i.imgur.com/HpCxIrW.png')
	public static PRODUCT_FRENCH_FRIES: Product = new Product(Category.CATEGORY_FROZEN.name, 'French fries', 'http://i.imgur.com/KsWRC0d.png')
	public static PRODUCT_ICE_CREAM: Product = new Product(Category.CATEGORY_FROZEN.name, 'Ice cream', 'http://i.imgur.com/Jku9Mjy.png')
	public static PRODUCT_LASAGNA: Product = new Product(Category.CATEGORY_FROZEN.name, 'Lasagna', 'http://i.imgur.com/yizvszE.png')
	public static PRODUCT_NUGGETS: Product = new Product(Category.CATEGORY_FROZEN.name, 'Nuggets', 'http://i.imgur.com/uzuI4UK.png')
	public static PRODUCT_PIZZA: Product = new Product(Category.CATEGORY_FROZEN.name, 'Pizza', 'http://i.imgur.com/Kc7PiH9.png')

	// Fruits & Vegetables
	public static PRODUCT_APPLES: Product = new Product(Category.CATEGORY_FRUITS_AND_VEGETABLES.name, 'Apples', 'http://i.imgur.com/hkNdwlF.png')
	public static PRODUCT_BANANAS: Product = new Product(Category.CATEGORY_FRUITS_AND_VEGETABLES.name, 'Bananas', 'http://i.imgur.com/edf83Ow.png')
	public static PRODUCT_CARROTS: Product = new Product(Category.CATEGORY_FRUITS_AND_VEGETABLES.name, 'Carrots', 'http://i.imgur.com/rEUNdI0.png')
	public static PRODUCT_LEMONS: Product = new Product(Category.CATEGORY_FRUITS_AND_VEGETABLES.name, 'Lemons', 'http://i.imgur.com/i8wwGmB.png')
	public static PRODUCT_LETTUCE: Product = new Product(Category.CATEGORY_FRUITS_AND_VEGETABLES.name, 'Lettuce', 'http://i.imgur.com/NIguQT1.png')
	public static PRODUCT_TOMATOES: Product = new Product(Category.CATEGORY_FRUITS_AND_VEGETABLES.name, 'Tomatoes', 'http://i.imgur.com/We5LRdn.png')
	public static PRODUCT_POTATOES: Product = new Product(Category.CATEGORY_FRUITS_AND_VEGETABLES.name, 'Potatoes', 'http://i.imgur.com/by3SaCG.png')

	// Household
	public static PRODUCT_AIR_FRESHENER: Product = new Product(Category.CATEGORY_HOUSEHOLD.name, 'Air freshener', 'http://i.imgur.com/kLBRUMh.png')
	public static PRODUCT_BLEACH: Product = new Product(Category.CATEGORY_HOUSEHOLD.name, 'Bleach', 'http://i.imgur.com/CxdYGWK.png')
	public static PRODUCT_BULB: Product = new Product(Category.CATEGORY_HOUSEHOLD.name, 'Bulb', 'http://i.imgur.com/bp64U2i.png')
	public static PRODUCT_CLEANING_SUPPLIES: Product = new Product(Category.CATEGORY_HOUSEHOLD.name, 'Cleaning supplies', 'http://i.imgur.com/dyhc3o4.png')
	public static PRODUCT_COTTON_SWABS: Product = new Product(Category.CATEGORY_HOUSEHOLD.name, 'Cotton swabs', 'http://i.imgur.com/tJ3oyEL.png')
	public static PRODUCT_DEODORANT: Product = new Product(Category.CATEGORY_HOUSEHOLD.name, 'Deodorant', 'http://i.imgur.com/14gYHs0.png')
	public static PRODUCT_DISHWASHING_LIQUID: Product = new Product(Category.CATEGORY_HOUSEHOLD.name, 'Dishwashing liquid', 'http://i.imgur.com/AcIzH1s.png')
	public static PRODUCT_GARBAGE_BAGS: Product = new Product(Category.CATEGORY_HOUSEHOLD.name, 'Garbage bags', 'http://i.imgur.com/ZYQK4Tm.png')
	public static PRODUCT_HAIR_REMOVER: Product = new Product(Category.CATEGORY_HOUSEHOLD.name, 'Hair remover', 'http://i.imgur.com/bS6cyo1.png')
	public static PRODUCT_KITCHEN_RAGS: Product = new Product(Category.CATEGORY_HOUSEHOLD.name, 'Kitchen rags', 'http://i.imgur.com/mvlB34z.png')
	public static PRODUCT_LAUNDRY_DETERGENT: Product = new Product(Category.CATEGORY_HOUSEHOLD.name, 'Laundry detergent', 'http://i.imgur.com/6GQ3TgM.png')
	public static PRODUCT_PAPER_TOWELS: Product = new Product(Category.CATEGORY_HOUSEHOLD.name, 'Paper towels', 'http://i.imgur.com/ZiYsOOA.png')
	public static PRODUCT_RAZOR: Product = new Product(Category.CATEGORY_HOUSEHOLD.name, 'Razor', 'http://i.imgur.com/QYMgdEt.png')
	public static PRODUCT_SHAMPOO: Product = new Product(Category.CATEGORY_HOUSEHOLD.name, 'Shampoo', 'http://i.imgur.com/1NWMm5T.png')
	public static PRODUCT_SHAVING_FOAM: Product = new Product(Category.CATEGORY_HOUSEHOLD.name, 'Shaving foam', 'http://i.imgur.com/n7w8V2b.png')
	public static PRODUCT_SHOWER_GEL: Product = new Product(Category.CATEGORY_HOUSEHOLD.name, 'Shower gel', 'http://i.imgur.com/FZTkxdb.png')
	public static PRODUCT_SOAP: Product = new Product(Category.CATEGORY_HOUSEHOLD.name, 'Soap', 'http://i.imgur.com/mB6oVNU.png')
	public static PRODUCT_SPONGE: Product = new Product(Category.CATEGORY_HOUSEHOLD.name, 'Sponge', 'http://i.imgur.com/JijYcgb.png')
	public static PRODUCT_SPONGE_METAL: Product = new Product(Category.CATEGORY_HOUSEHOLD.name, 'Sponge metal', 'http://i.imgur.com/BU63SGw.png')
	public static PRODUCT_TOILET_PAPER: Product = new Product(Category.CATEGORY_HOUSEHOLD.name, 'Toilet paper', 'http://i.imgur.com/XFk0mUh.png')
	public static PRODUCT_TOOTHBRUSH: Product = new Product(Category.CATEGORY_HOUSEHOLD.name, 'Toothbrush', 'http://i.imgur.com/oyAW8CW.png')
	public static PRODUCT_TOOTHPASTE: Product = new Product(Category.CATEGORY_HOUSEHOLD.name, 'Toothpaste', 'http://i.imgur.com/JUHf50H.png')

	// Meat & Fish
	public static PRODUCT_CHICKEN: Product = new Product(Category.CATEGORY_MEAT_AND_FISH.name, 'Chicken', 'http://i.imgur.com/hYKIUgB.png')
	public static PRODUCT_FISH: Product = new Product(Category.CATEGORY_MEAT_AND_FISH.name, 'Fish', 'http://i.imgur.com/aSl5rtZ.png')
	public static PRODUCT_HAM: Product = new Product(Category.CATEGORY_MEAT_AND_FISH.name, 'Ham', 'http://i.imgur.com/TSGTD5X.png')
	public static PRODUCT_MEAT: Product = new Product(Category.CATEGORY_MEAT_AND_FISH.name, 'Meat', 'http://i.imgur.com/NnvqpgY.png')
	public static PRODUCT_PORK: Product = new Product(Category.CATEGORY_MEAT_AND_FISH.name, 'Pork', 'http://i.imgur.com/GnjFKmN.png')
	public static PRODUCT_SALAMI: Product = new Product(Category.CATEGORY_MEAT_AND_FISH.name, 'Salami', 'http://i.imgur.com/Pddvg7H.png')
	public static PRODUCT_SARDINES: Product = new Product(Category.CATEGORY_MEAT_AND_FISH.name, 'Sardines', 'http://i.imgur.com/wU9AVs3.png')
	public static PRODUCT_TUNA: Product = new Product(Category.CATEGORY_MEAT_AND_FISH.name, 'Tuna', 'http://i.imgur.com/M959WKh.png')

	// Milk & Cheese
	public static PRODUCT_BUTTER: Product = new Product(Category.CATEGORY_MILK_AND_CHEESE.name, 'Butter', 'http://i.imgur.com/GgQnfPI.png')
	public static PRODUCT_CHEESE: Product = new Product(Category.CATEGORY_MILK_AND_CHEESE.name, 'Cheese', 'http://i.imgur.com/UvK6s35.png')
	public static PRODUCT_EGGS: Product = new Product(Category.CATEGORY_MILK_AND_CHEESE.name, 'Eggs', 'http://i.imgur.com/6gw4RrK.png')
	public static PRODUCT_GRATED_CHEESE: Product = new Product(Category.CATEGORY_MILK_AND_CHEESE.name, 'Grated cheese', 'http://i.imgur.com/VgN12fA.png')
	public static PRODUCT_MILK: Product = new Product(Category.CATEGORY_MILK_AND_CHEESE.name, 'Milk', 'http://i.imgur.com/2nAlaR1.png')
	public static PRODUCT_YOGURT: Product = new Product(Category.CATEGORY_MILK_AND_CHEESE.name, 'Yogurt', 'http://i.imgur.com/yn4F7xG.png')
}