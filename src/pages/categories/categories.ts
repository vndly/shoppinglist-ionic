import { Component } from '@angular/core'
import { NavController, NavParams } from 'ionic-angular'
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
	private callbackSelect
	private callbackRename

	constructor(private navCtrl: NavController,
				private navParams: NavParams,
				private toast: ToastService,
				private dialog: DialogService,
				private database: DatabaseService)
	{
		this.categories     = this.database.categories()
		this.callbackSelect = this.navParams.get('callbackSelect')
		this.callbackRename = this.navParams.get('callbackRename')
	}

	public ionViewDidEnter()
	{
		this.database.tipCategories(() => {
			this.toast.help('Swipe a row to the left to see the options')
		})
	}

	public createCategory()
	{
		this.dialog.prompt(
			'Category name',
			[
				{
					name: 'name',
					value: ''
				}
			],
			'Create',
			(data) => {
				this.addCategory(data.name.trim())
			}
		)
	}

	private addCategory(name: string)
	{
		if (name)
		{
			if (this.database.addCategory(name))
			{
				this.refreshCategories()
			}
			else
			{
				this.dialog.error('Cannot create category', 'There is another category with the same name')
			}
		}
		else
		{
			this.toast.show('Invalid name')
		}
	}

	public editCategory(category: Category, item)
	{
		this.dialog.prompt(
			'Category name',
			[
				{
					name: 'name',
					value: category.name
				}
			],
			'Rename',
			(data) => {
				item.close()
				this.renameCategory(category, data.name.trim())
			}
		)
	}

	private renameCategory(category: Category, name: string)
	{
		if (category.name != name)
		{
			if (name)
			{
				var oldName = category.name
				var newName = name

				if (this.database.renameCategory(category, name))
				{
					this.callbackRename(oldName, newName)

					this.refreshCategories()
				}
				else
				{
					this.dialog.error('Cannot rename category', 'There is another category with the same name')
				}
			}
			else
			{
				this.toast.show('Invalid name')
			}
		}
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
		if (this.database.removeCategory(category))
		{
			this.refreshCategories()
		}
		else
		{
			this.dialog.error('Cannot remove category', 'There are products assigned to that category')
		}
	}

	public selectCategory(category: Category)
	{
		this.callbackSelect(category).then(() => {
			this.navCtrl.pop()
		})
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