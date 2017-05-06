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
	private categories: Category[]

	constructor(private navCtrl: NavController,
				private toast: ToastService,
				private dialog: DialogService,
				private database: DatabaseService)
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
		this.database.renameCategory(category, name)
		this.refreshCategories()
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
		this.database.removeCategory(category)
		this.refreshCategories()
	}

	public selectCategory(category: Category)
	{
		// TODO: select category in previous screen
		this.navCtrl.pop()
	}

	private refreshCategories()
	{
		this.categories = this.database.categories()
	}

	public ionViewWillEnter()
	{
		this.refreshCategories()
	}
}