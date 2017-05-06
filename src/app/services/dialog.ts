import { Injectable } from '@angular/core'
import { AlertController } from 'ionic-angular'

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
}