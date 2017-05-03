import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Category } from '../../app/models/category';

@Component({
	selector: 'page-categories',
	templateUrl: 'categories.html'
})
export class CategoriesPage {

	public categories: Category[];

	constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

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

	createCategory() {
		alert('CREATE CATEGORY')
	}

	editCategory(category: Category) {
		alert('EDIT CATEGORY: ' + category.name)
	}

	removeCategory(category: Category) {
		alert('REMOVE CATEGORY: ' + category.name)
	}

	selectCategory(category: Category) {
		this.navCtrl.pop();
	}
}