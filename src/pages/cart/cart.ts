import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AddPage } from '../add/add';
import { Item } from '../../app/models/item';

@Component({
	selector: 'page-cart',
	templateUrl: 'cart.html'
})
export class CartPage {

	public cart: [Item];

	constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

		this.cart = [
			new Item('Bread'),
			new Item('Milk'),
			new Item('Cheese'),
			new Item('Snacks'),
			new Item('Apples'),
			new Item('Bananas'),
			new Item('Peanut Butter'),
			new Item('Chocolate'),
			new Item('Avocada'),
			new Item('Vegemite'),
			new Item('Muffins'),
			new Item('Paper towels')
		];
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
		var index = this.cart.indexOf(item, 0);
		
		if (index > -1) {
			this.cart.splice(index, 1);
		}
	}
}