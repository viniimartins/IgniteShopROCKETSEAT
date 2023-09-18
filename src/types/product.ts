export interface ProductType {
  id: string;
  name: string;
  imageUrl: string;
  price: string | null;
  description?: string | null;
  defaultPriceId?: string;
}
