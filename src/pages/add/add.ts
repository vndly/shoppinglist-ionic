import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CreatePage } from '../create/create';
import { Slides } from 'ionic-angular';
import { Category } from '../../app/models/category';
import { Product } from '../../app/models/product';
import { DatabaseService } from '../../app/services/database';

@Component({
	selector: 'page-add',
	templateUrl: 'add.html',
	providers: [DatabaseService]
})
export class AddPage
{
	public categoryName: String = "";

	public categories: Category[];

	@ViewChild(Slides) slides: Slides;

	constructor(public navCtrl: NavController,
				public database: DatabaseService)
	{
		this.categories   = this.database.categoriesFilled();
		this.categoryName = this.categories[0].name;
	}

	slideChanged()
	{
		let currentIndex = this.slides.getActiveIndex();

		if (currentIndex < this.categories.length)
		{
			this.categoryName = this.categories[currentIndex].name;
		}
	}

	addProduct(category: Category, product: Product)
	{
		var elem = this.categories[this.categories.indexOf(category)];
		elem.products.remove(product);
	}

	createProduct()
	{
		this.navCtrl.push(CreatePage);
	}
}