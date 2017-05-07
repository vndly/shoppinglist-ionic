import { Injectable } from '@angular/core'
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService
{
	constructor(private http: Http)
	{
	}

	public loadImages(keywords: string)
	{
		let headers = new Headers();
		headers.append('Ocp-Apim-Subscription-Key', '0bbdbc1008f4407cb6986fda5a2027d4');

		return new Promise(resolve => {
			this.http.get('https://api.cognitive.microsoft.com/bing/v5.0/images/search?q=' + keywords + '&mkt=en-us', {
      			headers: headers
    		})
			.map(res => res.json())
			.subscribe(data => {
				let list = data.value
				let result: string[][] = new Array()

				for (var i = 0; i < list.length; i+=2)
				{
					if ((i+1) < list.length)
					{
						var element1 = list[i];
						var element2 = list[i+1];
						
						result.push([element1.thumbnailUrl, element2.thumbnailUrl])
					}
				}

				resolve(result)
			})
		})
	}
}