import { Component } from '@angular/core'
import { NavController, NavParams } from 'ionic-angular'
import { CategoriesPage } from '../categories/categories'
import { ImagePage } from '../image/image'
import { Category } from '../../app/models/category'
import { Product } from '../../app/models/product'
import { ToastService } from '../../app/services/toast'
import { DialogService } from '../../app/services/dialog'
import { DatabaseService } from '../../app/services/database'

@Component({
	selector: 'page-create',
	templateUrl: 'create.html'
})
export class CreatePage
{
	private title: string = ''
	private button: string = ''
	private categories: Category[]
	private inputCategory: string = ''
	private inputName: string  = ''
	private inputImage: string = ''
	private defaultImage: string = 'http://i.imgur.com/OkHEj66.png'
	private editProduct: Product
	private addToCart: boolean = true

	constructor(private navCtrl: NavController,
				private navParams: NavParams,
				private toast: ToastService,
				private dialog: DialogService,
				private database: DatabaseService)
	{
		this.categories  = this.database.categories()
		this.editProduct = this.navParams.get('product')

		if (this.editProduct)
		{
			this.title  = 'Edit product'
			this.button = 'Edit'

			this.inputCategory = this.editProduct.category
			this.inputName = this.editProduct.name
			this.inputImage = this.editProduct.image
		}
		else
		{
			this.title  = 'Create product'
			this.button = 'Create'

			this.inputCategory = this.navParams.get('category')
		}
	}

	public ionViewDidEnter()
	{
		this.database.tipCreate(() => {
			this.toast.help('Click on the blue picture icon to search for an image')
		})
	}

	public searchImage()
	{
		let callback = (imageUrl) => {
			return new Promise((resolve, reject) => {
				resolve()
				
				this.inputImage = imageUrl
			})
		}

		this.navCtrl.push(ImagePage, {
			keywords: this.inputName,
			callback: callback
		})
	}

	public createProduct()
	{
		if (this.formValid(this.inputCategory.trim(), this.inputName.trim(), this.inputImage.trim()))
		{
			if (this.editProduct)
			{
				this.updateProduct(this.editProduct, this.inputCategory.trim(), this.inputName.trim(), this.inputImage.trim())
			}
			else
			{
				this.addProduct(this.inputCategory.trim(), this.inputName.trim(), this.inputImage.trim())
			}
		}
	}
	
	private formValid(category: string, name: string, image: string): boolean
	{
		if (!category)
		{
			this.toast.show('Invalid category')

			return false
		}
		else if (!name)
		{
			this.toast.show('Invalid name')

			return false
		}
		else if (!image)
		{
			this.inputImage = this.defaultImage

			return true
		}

		return true
	}

	private updateProduct(product: Product, category: string, name: string, image: string)
	{
		if (this.database.updateProduct(product, category, name, image))
		{
			this.navCtrl.pop()
		}
		else
		{
			this.dialog.error('Cannot update product', 'There is another product with the same name')
		}
	}

	private addProduct(category: string, name: string, image: string)
	{
		var createdProduct:Product = this.database.createProduct(category, name, image)

		if (createdProduct != null)
		{
			if (this.addToCart)
			{
				this.database.addItem(createdProduct)
			}
		
			this.navCtrl.pop()
		}
		else
		{
			this.dialog.error('Cannot create product', 'There is another product with the same name')
		}
	}

	public imageError()
	{
		let img: any = document.getElementById('pewviewImageTag')
		img.src = this.defaultImage
	}

	public openCategoryDialog()
	{
		this.dialog.selectCategory(
			this.categories,
			this.inputCategory,
			(data) => {
				this.inputCategory = data
			},
			() => {
				this.manageCategories()
			})
	}

	public manageCategories()
	{
		let callbackSelect = (category) => {
			return new Promise((resolve, reject) => {
				resolve()
				
				this.inputCategory = category.name
			})
		}

		let callbackRename = (oldName, newName) => {
			return new Promise((resolve, reject) => {
				resolve()
				
				if (this.inputCategory == oldName)
				{
					this.inputCategory = newName
				}
			})
		}

		let callbackRemove = (category) => {
			return new Promise((resolve, reject) => {
				resolve()
				
				if (this.inputCategory == category)
				{
					this.inputCategory = ''
				}
			})
		}

		this.navCtrl.push(CategoriesPage, {
			callbackSelect: callbackSelect,
			callbackRename: callbackRename,
			callbackRemove: callbackRemove
		})
	}
}