import { Component } from '@angular/core'
import { NavController, NavParams, LoadingController } from 'ionic-angular'
import { ApiService } from '../../app/services/api'

@Component({
	selector: 'page-image',
	templateUrl: 'image.html'
})
export class ImagePage
{
	private keywords: string = ''
	private rows: string[][]
	private callback

	constructor(private navCtrl: NavController,
				private navParams: NavParams,
				private loadingCtrl: LoadingController,
				private api: ApiService)
	{
		let keywordsParam: string = this.navParams.get('keywords')

		if (keywordsParam)
		{
			this.keywords = keywordsParam
		}

		this.callback = this.navParams.get('callback')

		this.searchImages()
	}

	public inputChanged(event)
	{
		if (event.which == 13)
		{
			this.searchImages()
		}
	}

	public searchImages()
	{
		if (this.keywords.trim().length == 0)
		{
			this.rows = []
		}
		else
		{
			let loader = this.loadingCtrl.create({
				content: 'Loading...'
			})
			loader.present()

			this.api.loadImages(this.keywords).then((data: string[][]) =>
			{
				this.rows = data
				loader.dismiss()
			})
		}
	}

	public imageSelected(imageUrl: string)
	{
		this.callback(imageUrl).then(() => {
			this.navCtrl.pop()
		})
	}
}