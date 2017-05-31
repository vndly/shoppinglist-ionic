import { Injectable } from '@angular/core'
import { AlertController } from 'ionic-angular'
import { Category } from '../models/category'

@Injectable()
export class DialogService
{
	constructor(public alertCtrl: AlertController)
	{
	}

	public confirmation(message: string, button: string, callback: () => any)
	{
		let prompt = this.alertCtrl.create(
		{
			message: message,
			buttons: [
				{
					text: 'Cancel'
				},
				{
					text: button,
					handler: () => {
						callback()
					}
				}
			]
		})
		prompt.present()
	}

	public selectCategory(categories: Category[], selected, callbackOk: (data) => any, callbackCreate: () => any = null)
	{
		let alert = this.alertCtrl.create()

		alert.setTitle('Category')

		for (let category of categories)
		{
			alert.addInput({
				type: 'radio',
				label: category.name,
				value: category.name,
				checked: category.name == selected
			})
		}

		alert.addButton('Cancel')

		if (callbackCreate != null)
		{
			alert.addButton({
				text: 'Manage categories',
				handler: data => {
					callbackCreate()
				}
			})
		}

		alert.addButton({
			text: 'OK',
			handler: data => {
				callbackOk(data)
			}
		})

		alert.present()
  	}

	public prompt(title: string, inputs, button: string, callback: (data) => any)
	{
		let prompt = this.alertCtrl.create(
		{
			title: title,
			inputs: inputs,
			buttons: [
				{
					text: 'Cancel',
					role: 'cancel'
				},
				{
					text: button,
					handler: data => {
						callback(data)
					}
				}
			]
		})
		prompt.present()
	}

	public error(title: string, subtitle: string)
	{
		let alert = this.alertCtrl.create({
			title: title,
			subTitle: subtitle,
			buttons: ['OK']
		})
		alert.present()
	}
}