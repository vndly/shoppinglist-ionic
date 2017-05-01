export class Product {
    constructor(public title: String, public imageUrl: String){
    }

	public static PRODUCT_BEER: Product = new Product('Beer', 'http://i.imgur.com/WmfEenJ.png');
	public static PRODUCT_COFFEE: Product = new Product('Coffee', 'http://i.imgur.com/aGiXxjf.png');
	public static PRODUCT_SODA: Product = new Product('Soda', 'http://i.imgur.com/jybjFMf.png');
	public static PRODUCT_WATER: Product = new Product('Water', 'http://i.imgur.com/h34kKfv.png');
	public static PRODUCT_ICE_TEA: Product = new Product('Ice Tea', 'http://i.imgur.com/Spi8duE.png');
}