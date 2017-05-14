import { Component } from '@angular/core'
import { NavController, LoadingController } from 'ionic-angular'
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
				private loadingCtrl: LoadingController,
				private socialSharing: SocialSharing,
				private toast: ToastService,
				private dialog: DialogService,
				private database: DatabaseService)
	{
		let loader = this.loadingCtrl.create({
			content: 'Loading...'
		})
		loader.present()

		let callback = () => {
			this.refreshItems()
			loader.dismiss()
		}

		this.database.start(callback)

		this.database.tipCart(() => {
			this.toast.help('Press the plus icon on the top-right corner to add a product to the cart')
		})
	}

	public shareCart()
	{
		let message = ''

		for (let item of this.items)
		{
			message += item.product + '\n'
		}

		this.socialSharing.share(message)
	}

	public toggleItem(item: Item)
	{
		item.completed = !item.completed

		this.refreshItems()
	}

	private refreshItems()
	{
		let itemList = this.database.items()

		var incompleted: Item[] = itemList.filter((item: Item) => !item.completed)
		var completed: Item[] = itemList.filter((item: Item) => item.completed)

		this.items = incompleted.concat(completed)
	}

	public addProduct()
	{
		this.navCtrl.push(AddPage)
	}

	public removeItem(item: Item)
	{
		this.dialog.confirmation(
			'Do you want to remove <b>' + item.product + '</b> from the cart?',
			'Remove',
			() => {
				this.removeItemFromCart(item)
			}
		)
	}

	private removeItemFromCart(item: Item)
	{
		this.database.removeItem(item)
		this.refreshItems()
	}

	public ionViewWillEnter()
	{
		this.refreshItems()
	}

	public ionViewWillLeave()
	{
		for (let item of this.items)
		{
			if (item.completed)
			{
				this.database.removeItem(item)
			}
		}
	}
}