import { Component } from '@angular/core'
import { NavController, AlertController } from 'ionic-angular'
import { Category } from '../../app/models/category'
import { ToastService } from '../../app/services/toast'
import { DatabaseService } from '../../app/services/database'

@Component({
	selector: 'page-categories',
	templateUrl: 'categories.html',
	providers: [ToastService, DatabaseService]
})
export class CategoriesPage
{
	public categories: Category[]

	constructor(public navCtrl: NavController,
				public alertCtrl: AlertController,
				public toast: ToastService,
				public database: DatabaseService)
	{
		this.categories = this.database.categories()
	}

	createCategory()
	{
		this.toast.show('CREATE CATEGORY')
	}

	editCategory(category: Category, item)
	{
		let alert = this.alertCtrl.create(
		{
			title: 'Rename',
			inputs: [
				{
					name: 'name',
					value: '' + category.name
				}
			],
			buttons: [
				{
					text: 'Cancel',
					role: 'cancel'
				},
				{
					text: 'Rename',
					handler: data => {
						item.close()
						this.renameCategory(category, data.name)
					}
				}
			]
		})
		alert.present()
	}

	renameCategory(category: Category, name: String)
	{
		category.name = name

		this.toast.show('Category edited')
	}

	removeCategory(category: Category)
	{
		let alert = this.alertCtrl.create(
		{
			title: 'Do you want to remove <b>' + category.name + '</b>?',
			buttons: [
				{
					text: 'Cancel',
					role: 'cancel'
				},
				{
					text: 'Delete',
					handler: () => {
						this.deleteCategory(category)
					}
				}
			]
		})
		alert.present()
	}

	deleteCategory(category: Category)
	{
		this.categories.remove(category)
	}

	selectCategory(category: Category)
	{
		this.navCtrl.pop()
	}
}