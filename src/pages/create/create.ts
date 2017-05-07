import { Component } from '@angular/core'
import { NavController, NavParams } from 'ionic-angular'
import { CategoriesPage } from '../categories/categories'
import { ImagePage } from '../image/image'
import { Category } from '../../app/models/category'
import { Product } from '../../app/models/product'
import { ToastService } from '../../app/services/toast'
import { DatabaseService } from '../../app/services/database'

@Component({
	selector: 'page-create',
	templateUrl: 'create.html'
})
export class CreatePage
{
	private categories: Category[]
	private inputCategory: Category
	private inputName: string  = ''
	private inputImage: string = ''
	private defaultImage: string = '' //http://i.imgur.com/OkHEj66.png'

	constructor(private navCtrl: NavController,
				private navParams: NavParams,
				private toast: ToastService,
				private database: DatabaseService)
	{
		this.categories = this.database.categories()

		let editProduct: Product = this.navParams.get('product')

		if (editProduct)
		{
			this.inputCategory = editProduct.category
			this.inputName = editProduct.name
			this.inputImage = editProduct.image
		}
	}

	public createProduct()
	{
		//this.toast.show('CREATE PRODUCT')
		this.navCtrl.push(ImagePage, {
			keywords: this.inputName
		})
	}

	public imageError()
	{
		let img: any = document.getElementById('imageTag')
		img.src = this.defaultImage
	}

	public manageCategories()
	{
		this.navCtrl.push(CategoriesPage)
	}
}