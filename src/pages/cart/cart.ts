import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AddPage } from '../add/add';
import { Item } from '../../app/models/item';

@Component({
	selector: 'page-cart',
	templateUrl: 'cart.html'
})
export class CartPage {

	public cart: Item[];

	constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

		this.cart = [
			new Item('Bread', false),
			new Item('Milk', false),
			new Item('Cheese', false),
			new Item('Snacks', false),
			new Item('Apples', false),
			new Item('Bananas', false),
			new Item('Peanut Butter', false),
			new Item('Chocolate', false),
			new Item('Avocada', false),
			new Item('Vegemite', false),
			new Item('Muffins', false),
			new Item('Paper towels', false)
		];
	}

	toggleItem(item: Item) {
		item.complete = !item.complete;

		this.refreshItems();
	}

	private refreshItems() {
		var incompleted: Item[] = this.cart.filter((item: Item) => !item.complete);
		var completed: Item[] = this.cart.filter((item: Item) => item.complete);

		this.cart = incompleted.concat(completed);
	}

	addProduct() {
		this.navCtrl.push(AddPage);
	}

	removeItem(item: Item) {
		let prompt = this.alertCtrl.create({
			title: 'Remove "' + item.title + '" from cart?',
			buttons: [
				{
					text: 'Cancel'
				},
				{
					text: 'Remove',
					handler: data => {
						this.removeItemFromCart(item);
					}
				}
			]
		});
		prompt.present();
	}

	removeItemFromCart(item: Item) {
		this.cart.remove(item);
	}
}