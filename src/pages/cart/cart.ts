import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AddPage } from '../add/add';
import { Item } from '../../app/models/item';
import { ToastService } from '../../app/services/toast';
import { DatabaseService } from '../../app/services/database';

@Component({
	selector: 'page-cart',
	templateUrl: 'cart.html',
	providers: [ToastService, DatabaseService]
})
export class CartPage
{
	public cart: Item[];

	constructor(public navCtrl: NavController,
				public alertCtrl: AlertController,
				public toast: ToastService,
				public databsae: DatabaseService)
	{
		this.cart = this.databsae.items();
	}

	shareCart()
	{
		this.toast.show('SHARE CART');
	}

	toggleItem(item: Item)
	{
		item.complete = !item.complete;

		this.refreshItems();
	}

	refreshItems()
	{
		var incompleted: Item[] = this.cart.filter((item: Item) => !item.complete);
		var completed: Item[] = this.cart.filter((item: Item) => item.complete);

		this.cart = incompleted.concat(completed);
	}

	addProduct()
	{
		this.navCtrl.push(AddPage);
	}

	removeItem(item: Item)
	{
		let prompt = this.alertCtrl.create(
		{
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

	removeItemFromCart(item: Item)
	{
		this.cart.remove(item);
	}
}