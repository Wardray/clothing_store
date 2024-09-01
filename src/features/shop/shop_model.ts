export interface Products {
  products: Product[];
}

export interface Product {
  id: string;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  colors: Color[];
  sizes: string[];
  price: number;
  name: string;
  grade: number;
  isSales: boolean;
  isTrading: boolean;
  quality?: number;
}

export enum Color {
  Gray = "GRAY",
  Red = "RED",
  White = "WHITE",
}
