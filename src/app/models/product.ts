export class Product
{
    constructor(public title: String, public imageUrl: String)
	{
    }

	// Beverages
	public static PRODUCT_BEER: Product = new Product('Beer', 'http://i.imgur.com/WmfEenJ.png');
	public static PRODUCT_COFFEE: Product = new Product('Coffee', 'http://i.imgur.com/aGiXxjf.png');
	public static PRODUCT_SODA: Product = new Product('Soda', 'http://i.imgur.com/jybjFMf.png');
	public static PRODUCT_WATER: Product = new Product('Water', 'http://i.imgur.com/h34kKfv.png');
	public static PRODUCT_ICE_TEA: Product = new Product('Ice Tea', 'http://i.imgur.com/Spi8duE.png');

	// Bread & Grain Products
	public static PRODUCT_BAGUETTE: Product = new Product('Baguette', '');
	public static PRODUCT_CEREALS: Product = new Product('Cereals', '');
	public static PRODUCT_PASTA: Product = new Product('Pasta', '');
	public static PRODUCT_RICE: Product = new Product('Rice', '');
	public static PRODUCT_RISOTTO: Product = new Product('Risotto', '');
	public static PRODUCT_SLICED_BREAD: Product = new Product('Sliced bread', '');

	// Condiments & Others
	public static PRODUCT_COFFEE_CREAM: Product = new Product('Coffee cream', '');
	public static PRODUCT_CORN: Product = new Product('Corn', '');
	public static PRODUCT_OIL: Product = new Product('Oil', '');
	public static PRODUCT_RICOLA: Product = new Product('Ricola', '');
	public static PRODUCT_SALT: Product = new Product('Salt', '');
	public static PRODUCT_SOUP: Product = new Product('Soup', '');
	public static PRODUCT_SUGAR: Product = new Product('Sugar', '');
	public static PRODUCT_TOMATO_SAUCE: Product = new Product('Tomato sauce', '');

	// Frozen
	public static PRODUCT_FISH_STICKS: Product = new Product('Fish sticks', '');
	public static PRODUCT_LASAGNA: Product = new Product('Lasagna', '');
	public static PRODUCT_NUGGETS: Product = new Product('Nuggets', '');
	public static PRODUCT_PIZZA: Product = new Product('Pizza', '');

	// Fruits & Vegetables
	public static PRODUCT_BANANAS: Product = new Product('Bananas', '');
	public static PRODUCT_CARROTS: Product = new Product('Carrots', '');
	public static PRODUCT_ONION: Product = new Product('Onion', '');
	public static PRODUCT_POTATOES: Product = new Product('Potatoes', '');

	// Household
	public static PRODUCT_AIR_FRESHENER: Product = new Product('Air freshener', '');
	public static PRODUCT_BLEACH: Product = new Product('Bleach', '');
	public static PRODUCT_BULB: Product = new Product('Bulb', '');
	public static PRODUCT_CLEANING_SUPPLIES: Product = new Product('Cleaning supplies', '');
	public static PRODUCT_COTTON_SWABS: Product = new Product('Cotton swabs', '');
	public static PRODUCT_DEODORANT: Product = new Product('Deodorant', '');
	public static PRODUCT_DISHWASHING_LIQUID: Product = new Product('Dishwashing liquid', '');
	public static PRODUCT_GARBAGE_BAGS: Product = new Product('Garbage bags', '');
	public static PRODUCT_HAIR_REMOVER: Product = new Product('Hair remover', '');
	public static PRODUCT_KITCHEN_RAGS: Product = new Product('Kitchen rags', '');
	public static PRODUCT_LAUNDRY_DETERGENT: Product = new Product('Laundry detergent', '');
	public static PRODUCT_PAPER_TOWELS: Product = new Product('Paper towels', '');
	public static PRODUCT_RAZOR: Product = new Product('Razor', '');
	public static PRODUCT_SHAMPOO: Product = new Product('Shampoo', '');
	public static PRODUCT_SHAVING_FOAM: Product = new Product('Shaving foam', '');
	public static PRODUCT_SHOWER_GEL: Product = new Product('Shower gel', '');
	public static PRODUCT_SOAP: Product = new Product('Soap', '');
	public static PRODUCT_SPONGE: Product = new Product('Sponge', '');
	public static PRODUCT_SPONGE_METAL: Product = new Product('Sponge metal', '');
	public static PRODUCT_SWIFFER: Product = new Product('Swiffer', '');
	public static PRODUCT_TOILET_PAPER: Product = new Product('Toilet paper', '');
	public static PRODUCT_TOOTHBRUSH: Product = new Product('Toothbrush', '');
	public static PRODUCT_TOOTHPASTE: Product = new Product('Toothpaste', '');

	// Meat & Fish
	public static PRODUCT_CHICKEN: Product = new Product('Chicken', '');
	public static PRODUCT_FISH: Product = new Product('Fish', '');
	public static PRODUCT_HAM: Product = new Product('Ham', '');
	public static PRODUCT_MEAT: Product = new Product('Meat', '');
	public static PRODUCT_PORK: Product = new Product('Pork', '');
	public static PRODUCT_TUNA: Product = new Product('Tuna', '');

	// Milk & Cheese
	public static PRODUCT_CHEESE: Product = new Product('Cheese', '');
	public static PRODUCT_EGGS: Product = new Product('Eggs', '');
	public static PRODUCT_GRATED_CHEESE: Product = new Product('Grated cheese', '');
	public static PRODUCT_MILK: Product = new Product('Milk', '');
	public static PRODUCT_YOGURT: Product = new Product('Yogurt', '');
}