import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CreatePage } from '../create/create';
import { Slides } from 'ionic-angular';
import { Category } from '../../app/models/category';
import { Product } from '../../app/models/product';

@Component({
	selector: 'page-add',
	templateUrl: 'add.html'
})
export class AddPage {

	public categoryName: String = "";

	public categories: [Category];

	@ViewChild(Slides) slides: Slides;

	constructor(public navCtrl: NavController) {

		this.categories = [
			new Category('Category 1', [
				new Product('Product 1.1', 'http://i.imgur.com/t70eCC1.png'),
				new Product('Product 1.2', 'http://i.imgur.com/t70eCC1.png'),
				new Product('Product 1.3', 'http://i.imgur.com/t70eCC1.png')]),
			new Category('Category 2', [
				new Product('Product 2.1', 'http://i.imgur.com/t70eCC1.png'),
				new Product('Product 2.2', 'http://i.imgur.com/t70eCC1.png'),
				new Product('Product 2.3', 'http://i.imgur.com/t70eCC1.png')]),
			new Category('Category 3', [
				new Product('Product 3.1', 'http://i.imgur.com/t70eCC1.png'),
				new Product('Product 3.2', 'http://i.imgur.com/t70eCC1.png'),
				new Product('Product 3.3', 'http://i.imgur.com/t70eCC1.png')]),
			new Category('Category 4', [
				new Product('Product 4.1', 'http://i.imgur.com/t70eCC1.png'),
				new Product('Product 4.2', 'http://i.imgur.com/t70eCC1.png'),
				new Product('Product 4.3', 'http://i.imgur.com/t70eCC1.png')]),
			new Category('Category 5', [
				new Product('Product 5.1', 'http://i.imgur.com/t70eCC1.png'),
				new Product('Product 5.2', 'http://i.imgur.com/t70eCC1.png'),
				new Product('Product 5.3', 'http://i.imgur.com/t70eCC1.png')])
		];

		this.categoryName = this.categories[0].name;
	}

	slideChanged() {
		let currentIndex = this.slides.getActiveIndex();
		if (currentIndex < this.categories.length) {
			this.categoryName = this.categories[currentIndex].name;
		}
	}

	addProduct(category: Category, product: Product) {
		var elem = this.categories[this.categories.indexOf(category)];
		elem.products.remove(product);
	}

	createProduct() {
		this.navCtrl.push(CreatePage);
	}
}