import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { CartPage } from '../pages/cart/cart';
import { AddPage } from '../pages/add/add';

@NgModule({
	declarations: [
		MyApp,
		CartPage,
		AddPage
	],
	imports: [
		IonicModule.forRoot(MyApp)
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		CartPage,
		AddPage
	],
	providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }