import { Component, ViewChild } from '@angular/core'
import { NavController } from 'ionic-angular'
import { CreatePage } from '../create/create'
import { Slides } from 'ionic-angular'
import { Category } from '../../app/models/category'
import { Product } from '../../app/models/product'
import { DatabaseService } from '../../app/services/database'

@Component({
	selector: 'page-add',
	templateUrl: 'add.html',
	providers: [DatabaseService]
})
export class AddPage
{
	public categoryName: String = ""

	public categories: Category[]
	public products: Product[]

	@ViewChild(Slides) slides: Slides

	constructor(public navCtrl: NavController,
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

	addProduct(product: Product)
	{
		this.products.remove(product)
	}

	createProduct()
	{
		this.navCtrl.push(CreatePage)
	}
}