import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CreatePage } from '../create/create';

@Component({
	selector: 'page-add',
	templateUrl: 'add.html'
})
export class AddPage {

	constructor(public navCtrl: NavController) {

	}

	createProduct()
	{
		this.navCtrl.push(CreatePage);
	}
}