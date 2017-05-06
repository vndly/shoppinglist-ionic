import { Category } from './category'

export class Product
{
    constructor(public category: Category, public name: string, public image: string)
	{
    }

	// Beverages
	public static PRODUCT_BEER: Product = new Product(Category.CATEGORY_BEVERAGES, 'Beer', 'http://i.imgur.com/WmfEenJ.png')
	public static PRODUCT_COFFEE: Product = new Product(Category.CATEGORY_BEVERAGES, 'Coffee', 'http://i.imgur.com/aGiXxjf.png')
	public static PRODUCT_SODA: Product = new Product(Category.CATEGORY_BEVERAGES, 'Soda', 'http://i.imgur.com/jybjFMf.png')
	public static PRODUCT_WATER: Product = new Product(Category.CATEGORY_BEVERAGES, 'Water', 'http://i.imgur.com/h34kKfv.png')
	public static PRODUCT_ICE_TEA: Product = new Product(Category.CATEGORY_BEVERAGES, 'Ice Tea', 'http://i.imgur.com/Spi8duE.png')

	// Bread & Grain Products
	public static PRODUCT_BAGUETTE: Product = new Product(Category.CATEGORY_BREAD_AND_GRAIN_PRODUCTS, 'Baguette', 'http://i.imgur.com/6tf1nXp.png')
	public static PRODUCT_CEREALS: Product = new Product(Category.CATEGORY_BREAD_AND_GRAIN_PRODUCTS, 'Cereals', 'http://i.imgur.com/cjxBkMd.png')
	public static PRODUCT_PASTA: Product = new Product(Category.CATEGORY_BREAD_AND_GRAIN_PRODUCTS, 'Pasta', 'http://i.imgur.com/VV4Z96m.png')
	public static PRODUCT_RICE: Product = new Product(Category.CATEGORY_BREAD_AND_GRAIN_PRODUCTS, 'Rice', 'http://i.imgur.com/wOJ6XaT.png')
	public static PRODUCT_RISOTTO: Product = new Product(Category.CATEGORY_BREAD_AND_GRAIN_PRODUCTS, 'Risotto', 'http://i.imgur.com/7dpAjjm.png')
	public static PRODUCT_SLICED_BREAD: Product = new Product(Category.CATEGORY_BREAD_AND_GRAIN_PRODUCTS, 'Sliced bread', 'http://i.imgur.com/Si3TyUt.png')

	// Condiments & Others
	public static PRODUCT_COFFEE_CREAM: Product = new Product(Category.CATEGORY_CONDIMENTS_AND_OTHERS, 'Coffee cream', 'http://i.imgur.com/uPn1oTB.png')
	public static PRODUCT_CORN: Product = new Product(Category.CATEGORY_CONDIMENTS_AND_OTHERS, 'Corn', 'http://i.imgur.com/oZol6zV.png')
	public static PRODUCT_OIL: Product = new Product(Category.CATEGORY_CONDIMENTS_AND_OTHERS, 'Oil', 'http://i.imgur.com/Us8YBF8.png')
	//public static PRODUCT_RICOLA: Product = new Product(Category.CATEGORY_CONDIMENTS_AND_OTHERS, 'Ricola', '')
	public static PRODUCT_SALT: Product = new Product(Category.CATEGORY_CONDIMENTS_AND_OTHERS, 'Salt', 'http://i.imgur.com/NzU28LS.png')
	public static PRODUCT_SOUP: Product = new Product(Category.CATEGORY_CONDIMENTS_AND_OTHERS, 'Soup', 'http://i.imgur.com/lrUCxbM.png')
	public static PRODUCT_SUGAR: Product = new Product(Category.CATEGORY_CONDIMENTS_AND_OTHERS, 'Sugar', 'http://i.imgur.com/h1jCQQH.png')
	public static PRODUCT_TOMATO_SAUCE: Product = new Product(Category.CATEGORY_CONDIMENTS_AND_OTHERS, 'Tomato sauce', 'http://i.imgur.com/WQYeED4.png')

	// Frozen
	public static PRODUCT_FISH_STICKS: Product = new Product(Category.CATEGORY_FROZEN, 'Fish sticks', 'http://i.imgur.com/HpCxIrW.png')
	public static PRODUCT_LASAGNA: Product = new Product(Category.CATEGORY_FROZEN, 'Lasagna', 'http://i.imgur.com/yizvszE.png')
	public static PRODUCT_NUGGETS: Product = new Product(Category.CATEGORY_FROZEN, 'Nuggets', 'http://i.imgur.com/uzuI4UK.png')
	public static PRODUCT_PIZZA: Product = new Product(Category.CATEGORY_FROZEN, 'Pizza', 'http://i.imgur.com/Kc7PiH9.png')

	// Fruits & Vegetables
	public static PRODUCT_BANANAS: Product = new Product(Category.CATEGORY_FRUITS_AND_VEGETABLES, 'Bananas', 'http://i.imgur.com/edf83Ow.png')
	public static PRODUCT_CARROTS: Product = new Product(Category.CATEGORY_FRUITS_AND_VEGETABLES, 'Carrots', 'http://i.imgur.com/rEUNdI0.png')
	public static PRODUCT_TOMATOES: Product = new Product(Category.CATEGORY_FRUITS_AND_VEGETABLES, 'Tomatoes', 'http://i.imgur.com/We5LRdn.png')
	public static PRODUCT_POTATOES: Product = new Product(Category.CATEGORY_FRUITS_AND_VEGETABLES, 'Potatoes', 'http://i.imgur.com/by3SaCG.png')

	// Household
	public static PRODUCT_AIR_FRESHENER: Product = new Product(Category.CATEGORY_HOUSEHOLD, 'Air freshener', 'http://i.imgur.com/kLBRUMh.png')
	public static PRODUCT_BLEACH: Product = new Product(Category.CATEGORY_HOUSEHOLD, 'Bleach', 'http://i.imgur.com/CxdYGWK.png')
	public static PRODUCT_BULB: Product = new Product(Category.CATEGORY_HOUSEHOLD, 'Bulb', 'http://i.imgur.com/bp64U2i.png')
	public static PRODUCT_CLEANING_SUPPLIES: Product = new Product(Category.CATEGORY_HOUSEHOLD, 'Cleaning supplies', 'http://i.imgur.com/dyhc3o4.png')
	public static PRODUCT_COTTON_SWABS: Product = new Product(Category.CATEGORY_HOUSEHOLD, 'Cotton swabs', 'http://i.imgur.com/tJ3oyEL.png')
	public static PRODUCT_DEODORANT: Product = new Product(Category.CATEGORY_HOUSEHOLD, 'Deodorant', 'http://i.imgur.com/14gYHs0.png')
	public static PRODUCT_DISHWASHING_LIQUID: Product = new Product(Category.CATEGORY_HOUSEHOLD, 'Dishwashing liquid', 'http://i.imgur.com/AcIzH1s.png')
	public static PRODUCT_GARBAGE_BAGS: Product = new Product(Category.CATEGORY_HOUSEHOLD, 'Garbage bags', 'http://i.imgur.com/ZYQK4Tm.png')
	public static PRODUCT_HAIR_REMOVER: Product = new Product(Category.CATEGORY_HOUSEHOLD, 'Hair remover', 'http://i.imgur.com/bS6cyo1.png')
	public static PRODUCT_KITCHEN_RAGS: Product = new Product(Category.CATEGORY_HOUSEHOLD, 'Kitchen rags', 'http://i.imgur.com/mvlB34z.png')
	public static PRODUCT_LAUNDRY_DETERGENT: Product = new Product(Category.CATEGORY_HOUSEHOLD, 'Laundry detergent', 'http://i.imgur.com/6GQ3TgM.png')
	public static PRODUCT_PAPER_TOWELS: Product = new Product(Category.CATEGORY_HOUSEHOLD, 'Paper towels', 'http://i.imgur.com/ZiYsOOA.png')
	public static PRODUCT_RAZOR: Product = new Product(Category.CATEGORY_HOUSEHOLD, 'Razor', 'http://i.imgur.com/QYMgdEt.png')
	public static PRODUCT_SHAMPOO: Product = new Product(Category.CATEGORY_HOUSEHOLD, 'Shampoo', 'http://i.imgur.com/1NWMm5T.png')
	public static PRODUCT_SHAVING_FOAM: Product = new Product(Category.CATEGORY_HOUSEHOLD, 'Shaving foam', 'http://i.imgur.com/n7w8V2b.png')
	public static PRODUCT_SHOWER_GEL: Product = new Product(Category.CATEGORY_HOUSEHOLD, 'Shower gel', 'http://i.imgur.com/FZTkxdb.png')
	public static PRODUCT_SOAP: Product = new Product(Category.CATEGORY_HOUSEHOLD, 'Soap', 'http://i.imgur.com/mB6oVNU.png')
	public static PRODUCT_SPONGE: Product = new Product(Category.CATEGORY_HOUSEHOLD, 'Sponge', 'http://i.imgur.com/JijYcgb.png')
	public static PRODUCT_SPONGE_METAL: Product = new Product(Category.CATEGORY_HOUSEHOLD, 'Sponge metal', 'http://i.imgur.com/BU63SGw.png')
	//public static PRODUCT_SWIFFER: Product = new Product(Category.CATEGORY_HOUSEHOLD, 'Swiffer', '')
	public static PRODUCT_TOILET_PAPER: Product = new Product(Category.CATEGORY_HOUSEHOLD, 'Toilet paper', 'http://i.imgur.com/XFk0mUh.png')
	public static PRODUCT_TOOTHBRUSH: Product = new Product(Category.CATEGORY_HOUSEHOLD, 'Toothbrush', 'http://i.imgur.com/oyAW8CW.png')
	public static PRODUCT_TOOTHPASTE: Product = new Product(Category.CATEGORY_HOUSEHOLD, 'Toothpaste', 'http://i.imgur.com/JUHf50H.png')

	// Meat & Fish
	public static PRODUCT_CHICKEN: Product = new Product(Category.CATEGORY_MEAT_AND_FISH, 'Chicken', 'http://i.imgur.com/hYKIUgB.png')
	public static PRODUCT_FISH: Product = new Product(Category.CATEGORY_MEAT_AND_FISH, 'Fish', 'http://i.imgur.com/aSl5rtZ.png')
	public static PRODUCT_HAM: Product = new Product(Category.CATEGORY_MEAT_AND_FISH, 'Ham', 'http://i.imgur.com/TSGTD5X.png')
	public static PRODUCT_MEAT: Product = new Product(Category.CATEGORY_MEAT_AND_FISH, 'Meat', 'http://i.imgur.com/NnvqpgY.png')
	public static PRODUCT_PORK: Product = new Product(Category.CATEGORY_MEAT_AND_FISH, 'Pork', 'http://i.imgur.com/GnjFKmN.png')
	public static PRODUCT_TUNA: Product = new Product(Category.CATEGORY_MEAT_AND_FISH, 'Tuna', 'http://i.imgur.com/M959WKh.png')

	// Milk & Cheese
	public static PRODUCT_CHEESE: Product = new Product(Category.CATEGORY_MILK_AND_CHEESE, 'Cheese', 'http://i.imgur.com/UvK6s35.png')
	public static PRODUCT_EGGS: Product = new Product(Category.CATEGORY_MILK_AND_CHEESE, 'Eggs', 'http://i.imgur.com/6gw4RrK.png')
	public static PRODUCT_GRATED_CHEESE: Product = new Product(Category.CATEGORY_MILK_AND_CHEESE, 'Grated cheese', 'http://i.imgur.com/VgN12fA.png')
	public static PRODUCT_MILK: Product = new Product(Category.CATEGORY_MILK_AND_CHEESE, 'Milk', 'http://i.imgur.com/2nAlaR1.png')
	public static PRODUCT_YOGURT: Product = new Product(Category.CATEGORY_MILK_AND_CHEESE, 'Yogurt', 'http://i.imgur.com/yn4F7xG.png')
}