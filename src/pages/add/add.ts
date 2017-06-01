import { Component, ViewChild } from '@angular/core'
import { NavController, ActionSheetController } from 'ionic-angular'
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
	private selectedCategory: string = ''
	private categories: Category[]
	private products: Product[]
	private notFirst: boolean = false
	private notLast: boolean = false
	private selectOptions
	

	@ViewChild(Slides) slides: Slides

	constructor(private navCtrl: NavController,
				private actionSheetCtrl: ActionSheetController,
				private toast: ToastService,
				private dialog: DialogService,
				private database: DatabaseService)
	{
		this.categories = this.database.categories(true)
		this.products   = this.database.products()

		if (this.categories.length > 0)
		{
			this.selectedCategory = this.categories[0].name
		}

		this.selectOptions = {
			title: 'Category',
			mode: 'md'
		}
	}

	public ionViewDidEnter()
	{
		this.database.tipAdd(() => {
			this.toast.help('Swipe left and right to switch categories')
		})
	}

	public slideChanged()
	{
		let currentIndex = this.slides.getActiveIndex()

		this.notFirst = currentIndex > 0
		this.notLast  = currentIndex < (this.categories.length - 1)

		if (currentIndex < this.categories.length)
		{
			this.selectedCategory = this.categories[currentIndex].name
		}
	}

	public categorySelected($event)
	{
		for (var i = 0; i < this.categories.length; i++)
		{
			if (this.categories[i].name == $event)
			{
				this.slides.slideTo(i)
				break
			}
		}
	}

	public showProductOptions(product: Product, $event)
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

	public addProduct(product: Product)
	{
		this.database.addItem(product)
		this.refreshProducts()
	}

	private refreshProducts()
	{
		this.categories = this.database.categories(true)
		this.products   = this.database.products()
		this.slideChanged()
	}

	private editProduct(product: Product)
	{
		this.navCtrl.push(CreatePage, {
    		product: product
		})
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

	public createProduct()
	{
		this.navCtrl.push(CreatePage, {
			category: this.selectedCategory
		})
	}

	public ionViewWillEnter()
	{
		this.refreshProducts()
	}
}