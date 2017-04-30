import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);

declare global {
	interface Array<T> {
		remove(elem: T): Array<T>;
	}
}

if (!Array.prototype.remove) {
	Array.prototype.remove = function <T>(elem: T): T[] {
		var index = this.indexOf(elem, 0);
		
		if (index > -1) {
			this.splice(index, 1);
		}

		return this;
	}
}