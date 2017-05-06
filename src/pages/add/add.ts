import { Component, ViewChild } from '@angular/core'
import { NavController, AlertController, ActionSheetController } from 'ionic-angular'
import { CreatePage } from '../create/create'
import { Slides } from 'ionic-angular'
import { Category } from '../../app/models/category'
import { Product } from '../../app/models/product'
import { ToastService } from '../../app/services/toast'
import { DatabaseService } from '../../app/services/database'

@Component({
	selector: 'page-add',
	templateUrl: 'add.html',
	providers: [ToastService, DatabaseService]
})
export class AddPage
{
	public categoryName: String = ''
	public categories: Category[]
	public products: Product[]

	@ViewChild(Slides) slides: Slides

	constructor(public navCtrl: NavController,
				public alertCtrl: AlertController,
				public actionSheetCtrl: ActionSheetController,
				public database: DatabaseService,
				public toast: ToastService,)
	{
		this.categories   = this.database.categories()
		this.products     = this.database.products()
		this.categoryName = this.categories[0].name
	}

	slideChanged()
	{
		let currentIndex = this.slides.getActiveIndex()

		if (currentIndex < this.categories.length)
		{
			this.categoryName = this.categories[currentIndex].name
		}
	}

	showProductOptions(product: Product)
	{
		let actionSheet = this.actionSheetCtrl.create(
		{
			title: '' + product.name,
			buttons: [
				{
					text: 'Edit',
					handler: () => {
						console.log('Archive clicked');
					}
				},
				{
					text: 'Remove',
					role: 'destructive',
					handler: () => {
						console.log('Destructive clicked');
					}
				},
				{
					text: 'Cancel',
					role: 'cancel'
				}
			]
		});
		actionSheet.present();
	}

	addProduct(product: Product)
	{
		this.products.remove(product)
	}

	editProduct(product: Product)
	{
		this.toast.show('EDIT: ' + product.name);
	}

	removeProduct(product: Product)
	{
		let alert = this.alertCtrl.create(
		{
			message: 'Do you want to remove <b>' + product.name + '</b>?',
			buttons: [
				{
					text: 'Cancel',
					role: 'cancel'
				},
				{
					text: 'Delete',
					handler: () => {
						this.deleteProduct(product)
					}
				}
			]
		})
		alert.present()
	}

	deleteProduct(product: Product)
	{
		this.toast.show('DELETE: ' + product.name);
	}

	createProduct()
	{
		this.navCtrl.push(CreatePage)
	}
}