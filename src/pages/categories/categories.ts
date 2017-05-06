import { Component } from '@angular/core'
import { NavController } from 'ionic-angular'
import { Category } from '../../app/models/category'
import { ToastService } from '../../app/services/toast'
import { DialogService } from '../../app/services/dialog'
import { DatabaseService } from '../../app/services/database'

@Component({
	selector: 'page-categories',
	templateUrl: 'categories.html'
})
export class CategoriesPage
{
	public categories: Category[]

	constructor(public navCtrl: NavController,
				public toast: ToastService,
				public dialog: DialogService,
				public database: DatabaseService)
	{
		this.categories = this.database.categories()
	}

	public createCategory()
	{
		this.toast.show('CREATE CATEGORY')
	}

	public editCategory(category: Category, item)
	{
		this.dialog.prompt(
			'Rename',
			[
				{
					name: 'name',
					value: category.name
				}
			],
			'Rename',
			(data) => {
				item.close()
				this.renameCategory(category, data.name)
			}
		)
	}

	private renameCategory(category: Category, name: string)
	{
		category.name = name

		this.toast.show('Category edited')
	}

	public removeCategory(category: Category)
	{
		this.dialog.confirmation(
			'Do you want to remove <b>' + category.name + '</b>?',
			'Remove',
			() => {
				this.deleteCategory(category)
			}
		)
	}

	private deleteCategory(category: Category)
	{
		this.categories.remove(category)
	}

	public selectCategory(category: Category)
	{
		this.navCtrl.pop()
	}
}