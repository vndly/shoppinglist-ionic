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
	templateUrl: 'add.html'
})
export class AddPage
{
	private categoryName: string = ''
	private categories: Category[]
	private products: Product[]

	@ViewChild(Slides) slides: Slides

	constructor(private navCtrl: NavController,
				private actionSheetCtrl: ActionSheetController,
				private toast: ToastService,
				private dialog: DialogService,
				private database: DatabaseService)
	{
		this.categories   = this.database.categories()
		this.products     = this.database.products()
		this.categoryName = this.categories[0].name
	}

	private slideChanged()
	{
		let currentIndex = this.slides.getActiveIndex()

		if (currentIndex < this.categories.length)
		{
			this.categoryName = this.categories[currentIndex].name
		}
	}

	private showProductOptions(product: Product, $event)
	{
		$event.stopPropagation()

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
		})
		actionSheet.present()
	}

	private addProduct(product: Product)
	{
		this.database.addItem(product)
		this.refreshProducts()
	}

	private refreshProducts()
	{
		this.products = this.database.products()
	}

	private editProduct(product: Product)
	{
		// TODO
		this.toast.show('EDIT: ' + product.name)
		this.navCtrl.push(CreatePage)
	}

	private removeProduct(product: Product)
	{
		this.dialog.confirmation(
			'Do you want to remove <b>' + product.name + '</b>?',
			'Remove',
			() => {
				this.deleteProduct(product)
			}
		)
	}

	private deleteProduct(product: Product)
	{
		this.database.removeProduct(product)
		this.refreshProducts()
	}

	private createProduct()
	{
		this.navCtrl.push(CreatePage)
	}

	public ionViewWillEnter()
	{
		this.refreshProducts()
	}
}