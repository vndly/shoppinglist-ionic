import { Pipe, PipeTransform } from '@angular/core'
import { Category } from '../models/category'

@Pipe({
	name: 'productFilter',
	pure: false
})
export class ProductFilter implements PipeTransform
{
	public transform(products: any[], category: Category): any
	{
		if (!products || !category)
		{
			return products
		}
		
		return products.filter(product => product.category == category)
	}
}