import { Component } from '@angular/core'
import { NavController } from 'ionic-angular'
import { CategoriesPage } from '../categories/categories'
import { Category } from '../../app/models/category'
import { ToastService } from '../../app/services/toast'
import { DatabaseService } from '../../app/services/database'

@Component({
	selector: 'page-create',
	templateUrl: 'create.html'
})
export class CreatePage
{
	public image: string = ''
	public categorySelected: Category
	public categories: Category[]

	constructor(public navCtrl: NavController,
				public toast: ToastService,
				public database: DatabaseService)
	{
		this.categories = this.database.categories()
	}

	createProduct()
	{
		this.toast.show('CREATE PRODUCT')
	}

	manageCategories()
	{
		this.navCtrl.push(CategoriesPage)
	}
}