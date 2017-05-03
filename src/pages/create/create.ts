import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CategoriesPage } from '../categories/categories';
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

	createProduct()
	{
		alert('CREATE PRODUCT')
	}

	manageCategories()
	{
		this.navCtrl.push(CategoriesPage);
	}
}