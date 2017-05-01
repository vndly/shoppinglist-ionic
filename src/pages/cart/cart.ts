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

	shareCart() {
		alert('SHARE CART');
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