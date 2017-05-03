import { Component } from '@angular/core';
import { NavController, AlertController, ToastController } from 'ionic-angular';
import { Category } from '../../app/models/category';

@Component({
	selector: 'page-categories',
	templateUrl: 'categories.html'
})
export class CategoriesPage {

	public categories: Category[];

	constructor(public navCtrl: NavController, public alertCtrl: AlertController, public toastCtrl: ToastController) {

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

	editCategory(category: Category, item) {
		let alert = this.alertCtrl.create({
			title: 'Login',
			inputs: [
				{
					name: 'name',
					value: "" + category.name
				}
			],
			buttons: [
				{
					text: 'Cancel',
					role: 'cancel'
				},
				{
					text: 'Rename',
					handler: data => {
						item.close();
						this.renameCategory(category, data.name);
					}
				}
			]
		});
		alert.present();
	}

	renameCategory(category: Category, name: String) {
		category.name = name;

		let toast = this.toastCtrl.create({
			message: 'Category edited',
			duration: 3000,
			position: 'bottom'
		});
		toast.present();
	}

	removeCategory(category: Category) {
		let alert = this.alertCtrl.create({
			title: 'Remove category',
			message: "Do you want to remove <b>" + category.name + "</b>?",
			buttons: [
				{
					text: 'Cancel',
					role: 'cancel'
				},
				{
					text: 'Delete',
					handler: () => {
						this.deleteCategory(category);
					}
				}
			]
		});
		alert.present();
	}

	deleteCategory(category: Category) {
		this.categories.remove(category);
	}

	selectCategory(category: Category) {
		this.navCtrl.pop();
	}
}