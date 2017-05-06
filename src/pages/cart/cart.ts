import { Component } from '@angular/core'
import { NavController } from 'ionic-angular'
import { SocialSharing } from '@ionic-native/social-sharing'
import { AddPage } from '../add/add'
import { Item } from '../../app/models/item'
import { ToastService } from '../../app/services/toast'
import { DialogService } from '../../app/services/dialog'
import { DatabaseService } from '../../app/services/database'

@Component({
	selector: 'page-cart',
	templateUrl: 'cart.html'
})
export class CartPage
{
	public items: Item[]

	constructor(public navCtrl: NavController,
				public socialSharing: SocialSharing,
				public toast: ToastService,
				public dialog: DialogService,
				public databsae: DatabaseService)
	{
		this.items = this.databsae.items()
	}

	shareCart()
	{
		let message = ''

		for (let item of this.items) {
			message += item.product.name + '\n'
		}

		this.socialSharing.share(message)
	}

	toggleItem(item: Item)
	{
		item.completed = !item.completed

		this.refreshItems()
	}

	refreshItems()
	{
		var incompleted: Item[] = this.items.filter((item: Item) => !item.completed)
		var completed: Item[] = this.items.filter((item: Item) => item.completed)

		this.items = incompleted.concat(completed)
	}

	addProduct()
	{
		this.navCtrl.push(AddPage)
	}

	removeItem(item: Item)
	{
		this.dialog.confirmation(
			'Do you want to remove <b>' + item.product.name + '</b> from the cart?',
			'Remove',
			() => {
				this.removeItemFromCart(item)
			}
		)
	}

	removeItemFromCart(item: Item)
	{
		this.items.remove(item)
	}
}