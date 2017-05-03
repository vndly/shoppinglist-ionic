import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { Product } from '../models/product';
import { Item } from '../models/item';

@Injectable()
export class DatabaseService
{
	constructor()
	{
	}

	categories(): Category[]
	{
		return [
			new Category('Beverages'),
			new Category('Bread & Grain Products'),
			new Category('Condiments & Others'),
			new Category('Frozen'),
			new Category('Fruits & Vegetables'),
			new Category('Household'),
			new Category('Meat & Fish'),
			new Category('Milk & Cheese')
		];
	}

	categoriesFilled(): Category[]
	{
		return [
			new Category('Beverages', [
				Product.PRODUCT_BEER,
				Product.PRODUCT_COFFEE,
				Product.PRODUCT_SODA,
				Product.PRODUCT_WATER,
				Product.PRODUCT_ICE_TEA
			]),

			new Category('Bread & Grain Products', [
				Product.PRODUCT_BAGUETTE,
				Product.PRODUCT_CEREALS,
				Product.PRODUCT_PASTA,
				Product.PRODUCT_RICE,
				Product.PRODUCT_RISOTTO,
				Product.PRODUCT_SLICED_BREAD
			]),

			new Category('Condiments & Others', [
				Product.PRODUCT_COFFEE_CREAM,
				Product.PRODUCT_CORN,
				Product.PRODUCT_OIL,
				Product.PRODUCT_RICOLA,
				Product.PRODUCT_SALT,
				Product.PRODUCT_SOUP,
				Product.PRODUCT_SUGAR,
				Product.PRODUCT_TOMATO_SAUCE
			]),

			new Category('Frozen', [
				Product.PRODUCT_FISH_STICKS,
				Product.PRODUCT_LASAGNA,
				Product.PRODUCT_NUGGETS,
				Product.PRODUCT_PIZZA
			]),

			new Category('Fruits & Vegetables', [
				Product.PRODUCT_BANANAS,
				Product.PRODUCT_CARROTS,
				Product.PRODUCT_ONION,
				Product.PRODUCT_POTATOES
			]),

			new Category('Household', [
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
				Product.PRODUCT_SWIFFER,
				Product.PRODUCT_TOILET_PAPER,
				Product.PRODUCT_TOOTHBRUSH,
				Product.PRODUCT_TOOTHPASTE
			]),

			new Category('Meat & Fish', [
				Product.PRODUCT_CHICKEN,
				Product.PRODUCT_FISH,
				Product.PRODUCT_HAM,
				Product.PRODUCT_MEAT,
				Product.PRODUCT_PORK,
				Product.PRODUCT_TUNA
			]),

			new Category('Milk & Cheese', [
				Product.PRODUCT_CHEESE,
				Product.PRODUCT_EGGS,
				Product.PRODUCT_GRATED_CHEESE,
				Product.PRODUCT_MILK,
				Product.PRODUCT_YOGURT
			])
		];
	}

	items(): Item[]
	{
		return [
			new Item('Bread', 'http://i.imgur.com/t70eCC1.png', false),
			new Item('Milk', 'http://i.imgur.com/t70eCC1.png', false),
			new Item('Cheese', 'http://i.imgur.com/t70eCC1.png', false),
			new Item('Snacks', 'http://i.imgur.com/t70eCC1.png', false),
			new Item('Apples', 'http://i.imgur.com/t70eCC1.png', false),
			new Item('Bananas', 'http://i.imgur.com/t70eCC1.png', false),
			new Item('Peanut Butter', 'http://i.imgur.com/t70eCC1.png', false),
			new Item('Chocolate', 'http://i.imgur.com/t70eCC1.png', false),
			new Item('Avocada', 'http://i.imgur.com/t70eCC1.png', false),
			new Item('Vegemite', 'http://i.imgur.com/t70eCC1.png', false),
			new Item('Muffins', 'http://i.imgur.com/t70eCC1.png', false),
			new Item('Paper towels', 'http://i.imgur.com/t70eCC1.png', false)
		];
	}
}