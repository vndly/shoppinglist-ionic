import { Component } from '@angular/core'
import { Platform } from 'ionic-angular'
import { StatusBar, Splashscreen } from 'ionic-native'
import { SocialSharing } from '@ionic-native/social-sharing'
import { CartPage } from '../pages/cart/cart'
import { ToastService } from './services/toast'
import { DialogService } from './services/dialog'
import { DatabaseService } from './services/database'
import { ApiService } from './services/api'
import { Storage } from '@ionic/storage'

@Component({
	templateUrl: 'app.html',
	providers: [ToastService, DialogService, DatabaseService, ApiService, SocialSharing, Storage]
})
export class MyApp
{
	rootPage = CartPage

	constructor(platform: Platform)
	{
		platform.ready().then(() => {
			// Okay, so the platform is ready and our plugins are available.
			// Here you can do any higher level native things you might need.
			StatusBar.styleDefault()
			Splashscreen.hide()
		})
	}
}