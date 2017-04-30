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
				new Product('Product 1.1'),
				new Product('Product 1.2'),
				new Product('Product 1.3')]),
			new Category('Category 2', [
				new Product('Product 2.1'),
				new Product('Product 2.2'),
				new Product('Product 2.3')]),
			new Category('Category 3', [
				new Product('Product 3.1'),
				new Product('Product 3.2'),
				new Product('Product 3.3')]),
			new Category('Category 4', [
				new Product('Product 4.1'),
				new Product('Product 4.2'),
				new Product('Product 4.3')]),
			new Category('Category 5', [
				new Product('Product 5.1'),
				new Product('Product 5.2'),
				new Product('Product 5.3')])
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