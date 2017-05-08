import { Pipe, PipeTransform } from '@angular/core'
import { Category } from '../models/category'
import { Product } from '../models/product'

@Pipe({
	name: 'productFilter',
	pure: false
})
export class ProductFilter implements PipeTransform
{
	public transform(products: Product[], category: Category): any
	{
		if (!products || !category)
		{
			return products
		}
		
		return products.filter(p => p.category == category.name)
	}
}