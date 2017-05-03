import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Category } from '../../app/models/category';
import { Product } from '../../app/models/product';

@Component({
	selector: 'page-create',
	templateUrl: 'create.html'
})
export class CreatePage {

	public imageUrl: String = "";
	public categorySelected: Category;
	public categories: [Category];

	constructor(public navCtrl: NavController) {

		this.categories = [
			new Category('Beverages',  Product[0]),
			new Category('Bread & Grain Products', Product[0]),
			new Category('Condiments & Others', Product[0]),
			new Category('Frozen', Product[0]),
			new Category('Fruits & Vegetables', Product[0]),
			new Category('Household', Product[0]),
			new Category('Meat & Fish', Product[0]),
			new Category('Milk & Cheese', Product[0])
		];
	}

	createProduct()
	{
		alert('CREATE PRODUCT')
	}

	manageCategories()
	{
		alert('MANAGE CATEGORIES')
	}
}