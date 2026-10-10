export interface Product {
  id: string;
  name: string;
  subtitle: string;
  price: number; // in TND
  frontImage: string;
  backImage: string;
  detailImages: string[];
  sizes: ('S' | 'M' | 'L' | 'XL')[];
  tag?: string;
  description: string;
  material: string;
  delivery: string;
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  size: 'S' | 'M' | 'L' | 'XL';
  quantity: number;
}

export interface OrderData {
  orderId: string;
  fullName: string;
  phone: string;
  governorate: string;
  city: string;
  address: string;
  notes?: string;
  items: CartItem[];
  subtotal: number;
  deliveryFee: number;
  total: number;
  createdAt: string;
}
