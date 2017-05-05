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
	public items: Item[];

	constructor(public navCtrl: NavController,
				public alertCtrl: AlertController,
				public toast: ToastService,
				public databsae: DatabaseService)
	{
		this.items = this.databsae.items();
	}

	shareCart()
	{
		this.toast.show('SHARE CART');
	}

	toggleItem(item: Item)
	{
		item.completed = !item.completed;

		this.refreshItems();
	}

	refreshItems()
	{
		var incompleted: Item[] = this.items.filter((item: Item) => !item.completed);
		var completed: Item[] = this.items.filter((item: Item) => item.completed);

		this.items = incompleted.concat(completed);
	}

	addProduct()
	{
		this.navCtrl.push(AddPage);
	}

	removeItem(item: Item)
	{
		let prompt = this.alertCtrl.create(
		{
			title: 'Remove "' + item.product.name + '" from cart?',
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
		this.items.remove(item);
	}
}