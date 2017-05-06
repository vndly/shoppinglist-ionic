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
	private items: Item[]

	constructor(private navCtrl: NavController,
				private socialSharing: SocialSharing,
				private toast: ToastService,
				private dialog: DialogService,
				private databsae: DatabaseService)
	{
		this.refreshItems()
	}

	private shareCart()
	{
		let message = ''

		for (let item of this.items)
		{
			message += item.product.name + '\n'
		}

		this.socialSharing.share(message)
	}

	private toggleItem(item: Item)
	{
		item.completed = !item.completed

		this.refreshItems()
	}

	private refreshItems()
	{
		let itemList = this.databsae.items()

		var incompleted: Item[] = itemList.filter((item: Item) => !item.completed)
		var completed: Item[] = itemList.filter((item: Item) => item.completed)

		this.items = incompleted.concat(completed)
	}

	private addProduct()
	{
		this.navCtrl.push(AddPage)
	}

	private removeItem(item: Item)
	{
		this.dialog.confirmation(
			'Do you want to remove <b>' + item.product.name + '</b> from the cart?',
			'Remove',
			() => {
				this.removeItemFromCart(item)
			}
		)
	}

	private removeItemFromCart(item: Item)
	{
		this.databsae.removeItem(item)
		this.refreshItems()
	}

	public ionViewWillEnter()
	{
		this.refreshItems()
	}
}