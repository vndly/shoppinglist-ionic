import { Component, ViewChild } from '@angular/core'
import { NavController, AlertController, ActionSheetController } from 'ionic-angular'
import { CreatePage } from '../create/create'
import { Slides } from 'ionic-angular'
import { Category } from '../../app/models/category'
import { Product } from '../../app/models/product'
import { ToastService } from '../../app/services/toast'
import { DialogService } from '../../app/services/dialog'
import { DatabaseService } from '../../app/services/database'

@Component({
	selector: 'page-add',
	templateUrl: 'add.html',
	providers: [ToastService, DialogService, DatabaseService]
})
export class AddPage
{
	public categoryName: string = ''
	public categories: Category[]
	public products: Product[]

	@ViewChild(Slides) slides: Slides

	constructor(public navCtrl: NavController,
				public actionSheetCtrl: ActionSheetController,
				public toast: ToastService,
				public dialog: DialogService,
				public database: DatabaseService)
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
			title: product.name,
			buttons: [
				{
					text: 'Edit',
					handler: () => {
						this.editProduct(product)
					}
				},
				{
					text: 'Remove',
					role: 'destructive',
					handler: () => {
						this.removeProduct(product)
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
		this.dialog.confirmation(
			'Do you want to remove <b>' + product.name + '</b>?',
			'Remove',
			() => {
				this.deleteProduct(product)
			}
		)
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