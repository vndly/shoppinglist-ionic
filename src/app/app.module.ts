import { NgModule, ErrorHandler } from '@angular/core'
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular'
import { MyApp } from './app.component'
import { CartPage } from '../pages/cart/cart'
import { AddPage } from '../pages/add/add'
import { CreatePage } from '../pages/create/create'
import { CategoriesPage } from '../pages/categories/categories'
import { ImagePage } from '../pages/image/image'
import { ProductFilter } from '../app/filters/productFilter'
import { ToastService } from './services/toast'
import { DialogService } from './services/dialog'
import { DatabaseService } from './services/database'
import { ApiService } from './services/api'
import { SocialSharing } from '@ionic-native/social-sharing'
import { Storage } from '@ionic/storage'

@NgModule({
	declarations: [
		MyApp,
		CartPage,
		AddPage,
		CreatePage,
		CategoriesPage,
		ImagePage,
		ProductFilter
	],
	imports: [
		IonicModule.forRoot(MyApp)
	],
	bootstrap: [
		IonicApp
	],
	entryComponents: [
		MyApp,
		CartPage,
		AddPage,
		CreatePage,
		CategoriesPage,
		ImagePage
	],
	providers: [
		ToastService,
		DialogService,
		DatabaseService,
		ApiService,
		SocialSharing,
		Storage,
		{
			provide: ErrorHandler,
			useClass: IonicErrorHandler
		}
	]
})
export class AppModule { }