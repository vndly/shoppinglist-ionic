import { Injectable } from '@angular/core';
import { Category } from '../models/category';

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
}