export class Category
{
    constructor(public name: String)
	{
    }

	public static CATEGORY_BEVERAGES: Category = new Category('Beverages');
	public static CATEGORY_BREAD_AND_GRAIN_PRODUCTS: Category = new Category('Bread & Grain Products');
	public static CATEGORY_CONDIMENTS_AND_OTHERS: Category = new Category('Condiments & Others');
	public static CATEGORY_FROZEN: Category = new Category('Frozen');
	public static CATEGORY_FRUITS_AND_VEGETABLES: Category = new Category('Fruits & Vegetables');
	public static CATEGORY_HOUSEHOLD: Category = new Category('Household');
	public static CATEGORY_MEAT_AND_FISH: Category = new Category('Meat & Fish');
	public static CATEGORY_MILK_AND_CHEESE: Category = new Category('Milk & Cheese');
}