import { Product } from './product'

export class Item
{
    constructor(public category: string, public product: string, public image: string, public completed: Boolean)
	{
    }
}