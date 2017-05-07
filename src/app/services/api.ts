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
		let headers = new Headers()
		headers.append('Ocp-Apim-Subscription-Key', '0bbdbc1008f4407cb6986fda5a2027d4')

		return new Promise(resolve => {
			this.http.get('https://api.cognitive.microsoft.com/bing/v5.0/images/search?q=' + keywords + '&mkt=en-us', {
      			headers: headers
    		})
			.map(res => res.json())
			.subscribe(data => {
				let list = data.value
				let result: string[][] = new Array()

				let size = 3

				for (var i = 0; i < list.length; i+=size)
				{
					if ((i + (size - 1)) < list.length)
					{
						var row = new Array();

						for (var j = 0; j < size; j++)
						{
							row.push(list[i+j].thumbnailUrl)
						}
						
						result.push(row)
					}
				}

				resolve(result)
			})
		})
	}
}