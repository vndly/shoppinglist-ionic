import { Product } from './product';

export class Category {
    constructor(public name: String, public products: [Product] = Product[0]){
    }
}