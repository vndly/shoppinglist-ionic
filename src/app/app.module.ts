import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { CartPage } from '../pages/cart/cart';
import { AddPage } from '../pages/add/add';
import { CreatePage } from '../pages/create/create';
import { CategoriesPage } from '../pages/categories/categories';
import { ProductFilter } from '../app/filters/productFilter';

@NgModule({
	declarations: [
		MyApp,
		CartPage,
		AddPage,
		CreatePage,
		CategoriesPage,
		ProductFilter
	],
	imports: [
		IonicModule.forRoot(MyApp)
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		CartPage,
		AddPage,
		CreatePage,
		CategoriesPage
	],
	providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }