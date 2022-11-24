export interface ICategoryItem {
  id: string;
  name: string;
}

export interface IProductItem {
  id: string;
  image: string;
  name: string;
  price: string;
  off: string;
  rating: number;
  new: boolean;
  isFav: boolean;
  out_of_stock: boolean;
  reviewCount: number;
  size: [],
  description: string;
}
