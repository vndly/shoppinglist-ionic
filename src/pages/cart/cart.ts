import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddPage } from '../add/add';

@Component({
	selector: 'page-cart',
	templateUrl: 'cart.html'
})
export class CartPage {

	constructor(public navCtrl: NavController) {

	}

	addProduct()
	{
		this.navCtrl.push(AddPage);
	}
}