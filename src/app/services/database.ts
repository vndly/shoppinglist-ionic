import { Injectable } from '@angular/core'
import { Storage } from '@ionic/storage'
import { Category } from '../models/category'
import { Product } from '../models/product'
import { Item } from '../models/item'

@Injectable()
export class DatabaseService
{
	private categoriesList: Category[] = []
	private productsList: Product[] = []
	private itemsList: Item[] = []

	private static KEY_CATEGORIES: string = 'categories'
	private static KEY_PRODUCTS: string = 'products'
	private static KEY_ITEMS: string = 'item'

	private static KEY_FLAT_INITIALIZED: string = 'flag.initialized'
	private static KEY_FLAT_TIP_CART: string = 'flag.tip.cart'
	private static KEY_FLAT_TIP_ADD: string = 'flag.tip.add'
	private static KEY_FLAT_TIP_CREATE: string = 'flag.tip.create'
	private static KEY_FLAT_TIP_CATEGORIES: string = 'flag.tip.categories'

	constructor(private storage: Storage)
	{
	}

	public start(callback: () => any)
	{
		this.storage.get(DatabaseService.KEY_FLAT_INITIALIZED).then((initialized) => {
        	if (!initialized)
			{
				this.storage.set(DatabaseService.KEY_FLAT_INITIALIZED, true)
				this.initializeDatabase()
				this.updateDatabase(callback)
			}
			else
			{
				this.storage.get(DatabaseService.KEY_CATEGORIES).then((json) => {
					this.categoriesList = JSON.parse(json)

					this.storage.get(DatabaseService.KEY_PRODUCTS).then((json) => {
						this.productsList = JSON.parse(json)

						this.storage.get(DatabaseService.KEY_ITEMS).then((json) => {
							this.itemsList = JSON.parse(json)

							callback()
						})
					})
				})
			}
		})
	}

	private initializeDatabase()
	{
		this.categoriesList = [
			Category.CATEGORY_BEVERAGES,
			Category.CATEGORY_BREAD_AND_GRAIN_PRODUCTS,
			Category.CATEGORY_CONDIMENTS_AND_OTHERS,
			Category.CATEGORY_FROZEN,
			Category.CATEGORY_FRUITS_AND_VEGETABLES,
			Category.CATEGORY_HOUSEHOLD,
			Category.CATEGORY_MEAT_AND_FISH,
			Category.CATEGORY_MILK_AND_CHEESE
		]

		this.productsList = [
			Product.PRODUCT_BEER,
			Product.PRODUCT_COFFEE,
			Product.PRODUCT_ICE_TEA,
			Product.PRODUCT_SODA,
			Product.PRODUCT_WATER,

			Product.PRODUCT_BAGUETTE,
			Product.PRODUCT_CEREALS,
			Product.PRODUCT_PASTA,
			Product.PRODUCT_RICE,
			Product.PRODUCT_RISOTTO,
			Product.PRODUCT_SLICED_BREAD,

			Product.PRODUCT_COFFEE_CREAM,
			Product.PRODUCT_CORN,
			Product.PRODUCT_OIL,
			Product.PRODUCT_SALT,
			Product.PRODUCT_SOUP,
			Product.PRODUCT_SUGAR,
			Product.PRODUCT_TOMATO_SAUCE,

			Product.PRODUCT_FISH_STICKS,
			Product.PRODUCT_FRENCH_FRIES,
			Product.PRODUCT_ICE_CREAM,
			Product.PRODUCT_LASAGNA,
			Product.PRODUCT_NUGGETS,
			Product.PRODUCT_PIZZA,

			Product.PRODUCT_APPLES,
			Product.PRODUCT_BANANAS,
			Product.PRODUCT_CARROTS,
			Product.PRODUCT_LEMONS,
			Product.PRODUCT_LETTUCE,
			Product.PRODUCT_TOMATOES,
			Product.PRODUCT_POTATOES,

			Product.PRODUCT_AIR_FRESHENER,
			Product.PRODUCT_BLEACH,
			Product.PRODUCT_BULB,
			Product.PRODUCT_CLEANING_SUPPLIES,
			Product.PRODUCT_COTTON_SWABS,
			Product.PRODUCT_DEODORANT,
			Product.PRODUCT_DISHWASHING_LIQUID,
			Product.PRODUCT_GARBAGE_BAGS,
			Product.PRODUCT_HAIR_REMOVER,
			Product.PRODUCT_KITCHEN_RAGS,
			Product.PRODUCT_LAUNDRY_DETERGENT,
			Product.PRODUCT_PAPER_TOWELS,
			Product.PRODUCT_RAZOR,
			Product.PRODUCT_SHAMPOO,
			Product.PRODUCT_SHAVING_FOAM,
			Product.PRODUCT_SHOWER_GEL,
			Product.PRODUCT_SOAP,
			Product.PRODUCT_SPONGE,
			Product.PRODUCT_SPONGE_METAL,
			Product.PRODUCT_TOILET_PAPER,
			Product.PRODUCT_TOOTHBRUSH,
			Product.PRODUCT_TOOTHPASTE,

			Product.PRODUCT_CHICKEN,
			Product.PRODUCT_FISH,
			Product.PRODUCT_HAM,
			Product.PRODUCT_MEAT,
			Product.PRODUCT_PORK,
			Product.PRODUCT_SALAMI,
			Product.PRODUCT_SARDINES,
			Product.PRODUCT_TUNA,

			Product.PRODUCT_BUTTER,
			Product.PRODUCT_CHEESE,
			Product.PRODUCT_EGGS,
			Product.PRODUCT_GRATED_CHEESE,
			Product.PRODUCT_MILK,
			Product.PRODUCT_YOGURT
		]

		this.itemsList = [
		]
	}

	// -------------------------------------------------------------

	public categories(onlyNotEmpty: boolean = false): Category[]
	{
		let filtered: Category[]
		
		if (onlyNotEmpty)
		{
			filtered = this.categoriesList.filter((c) => 
				this.productsList.some((p) => (p.category == c.name) && 
				(!this.itemsList.some((i) => i.product == p.name)))
			)
		}
		else
		{
			filtered = this.categoriesList
		}

		return filtered.sort((c1, c2) => c1.name.localeCompare(c2.name))
	}

	public products(): Product[]
	{
		return this.productsList
					.filter((product) => !this.itemsList.some((item) => item.product == product.name))
					.sort((p1, p2) => p1.name.localeCompare(p2.name))
	}

	public items(): Item[]
	{
		return this.itemsList.sort((i1, i2) => i1.product.localeCompare(i2.product))
	}

	// -------------------------------------------------------------

	private updateDatabase(callback: () => any = null)
	{
		this.storage.set(DatabaseService.KEY_CATEGORIES, JSON.stringify(this.categoriesList)).then((result) => {
			this.storage.set(DatabaseService.KEY_PRODUCTS, JSON.stringify(this.productsList)).then((restult) => {
				this.storage.set(DatabaseService.KEY_ITEMS, JSON.stringify(this.itemsList)).then((result) => {
					if (callback)
					{
						callback()
					}
				})
			})
		})
	}

	// -------------------------------------------------------------

	private categoryByName(name: string): Category
	{
		return this.categoriesList.find((c) => c.name == name)
	}

	public addCategory(name: string): boolean
	{
		if (this.categoryByName(name))
		{
			return false
		}
		else
		{
			this.categoriesList.push(new Category(name))
			this.updateDatabase()

			return true
		}
	}

	public renameCategory(category: Category, name: string): boolean
	{
		if (this.categoryByName(name))
		{
			return false
		}
		else
		{
			let originalName = category.name

			let foundCategory: Category = this.categoryByName(category.name)
			foundCategory.name = name

			for (let product of this.productsList)
			{
				if (product.category == originalName)
				{
					product.category = name
				}
			}

			for (let item of this.itemsList)
			{
				if (item.category == originalName)
				{
					item.category = name
				}
			}

			this.updateDatabase()

			return true
		}
	}

	public removeCategory(category: Category): boolean
	{
		let productWithCategory = this.productsList.some((p) => p.category == category.name)
		let itemWithCategory = this.itemsList.some((i) => i.category == category.name)

		if (productWithCategory || itemWithCategory)
		{
			return false
		}
		else
		{
			this.categoriesList.remove(category)
			this.updateDatabase()

			return true
		}
	}

	// -------------------------------------------------------------

	public createProduct(category: string, name: string, image: string): Product
	{
		if (this.productsList.some((p) => p.name == name))
		{
			return null
		}
		else
		{
			var newProduct:Product = new Product(category, name, image)
			this.productsList.push(newProduct)

			return newProduct
		}
	}

	public updateProduct(product: Product, category: string, name: string, image: string): boolean
	{
		if ((product.name != name) && (this.productsList.some((p) => p.name == name)))
		{
			return false
		}
		else
		{
			let foundProduct: Product = this.productsList.find((p) => p.name == product.name)
			foundProduct.category = category
			foundProduct.name     = name
			foundProduct.image    = image

			return true
		}
	}

	public removeProduct(product: Product)
	{
		this.productsList.remove(product)
		this.updateDatabase()
	}

	// -------------------------------------------------------------

	public removeItem(item: Item)
	{
		this.itemsList.remove(item)
		this.updateDatabase()
	}

	public addItem(product: Product)
	{
		this.itemsList.push(new Item(product.category, product.name, product.image, false))
		this.updateDatabase()
	}

	// -------------------------------------------------------------

	public tipCart(callback: () => any)
	{
		this.checkFlag(DatabaseService.KEY_FLAT_TIP_CART, callback)
	}

	public tipAdd(callback: () => any)
	{
		this.checkFlag(DatabaseService.KEY_FLAT_TIP_ADD, callback)
	}

	public tipCreate(callback: () => any)
	{
		this.checkFlag(DatabaseService.KEY_FLAT_TIP_CREATE, callback)
	}

	public tipCategories(callback: () => any)
	{
		this.checkFlag(DatabaseService.KEY_FLAT_TIP_CATEGORIES, callback)
	}

	public checkFlag(key: string, callback: () => any)
	{
		this.storage.get(key).then((enabled) => {
			if (!enabled)
			{
				this.storage.set(key, true)
				callback()
			}
		})
	}
}