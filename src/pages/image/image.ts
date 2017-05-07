import { Component } from '@angular/core'
import { NavController, NavParams, LoadingController } from 'ionic-angular'
import { ApiService } from '../../app/services/api'

@Component({
	selector: 'page-image',
	templateUrl: 'image.html'
})
export class ImagePage
{
	private rows: string[][]

	constructor(private navCtrl: NavController,
				private navParams: NavParams,
				private loadingCtrl: LoadingController,
				private api: ApiService)
	{
		/*let editProduct: Product = this.navParams.get('product')

		if (editProduct)
		{
			this.inputCategory = editProduct.category
			this.inputName = editProduct.name
			this.inputImage = editProduct.image
		}*/

		this.searchImages('')
	}

	private searchImages(keywords: string)
	{
		if (keywords.trim().length == 0)
		{
			this.rows = []
		}
		else
		{
			let loader = this.loadingCtrl.create({
				content: "Please wait..."
			})
			loader.present()

			this.api.loadImages(keywords).then((data: string[][]) =>
			{
				this.rows = data
				loader.dismiss()
			})
		}
	}

	public imageSelected(imageUrl: string)
	{
		console.log(imageUrl)
	}
}