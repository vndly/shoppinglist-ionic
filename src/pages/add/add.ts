import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
	selector: 'page-add',
	templateUrl: 'add.html'
})
export class AddPage {

	constructor(public navCtrl: NavController) {

	}

	createProduct()
	{
		alert('CREATE PRODUCT')	
	}
}