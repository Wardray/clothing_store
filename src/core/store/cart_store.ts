import { makeAutoObservable } from "mobx";
import { Product } from "../../features/shop/shop_model";
import { CartLocalStorageRepository } from "../repository/cart_local_storage_repository";
export class CartStore {
  products: Product[] = [];
  cartLocalStorageRepository = new CartLocalStorageRepository();
  constructor() {
    makeAutoObservable(this);
    this.products = this.cartLocalStorageRepository.getAll();
  }
  getTotalAmount = (): number =>
    this.products.reduce((acc, el) => {
      const quality = el.quality ?? 1;
      acc += quality * el.price;
      return acc;
    }, 0);
  addProduct = (product: Product) => {
    this.products.push(product);
    this.cartLocalStorageRepository.create(product);
  };
  removeProduct = (product: Product) => {
    this.products = this.products.filter((el) => el.name !== product.name);
    this.cartLocalStorageRepository.delete((el) => el.name !== product.name);
  };
  removeProductQuality(product: Product) {
    this.products = this.products.map((el) => {
      if (el.name === product.name) {
        if (el.quality) {
          el.quality = el.quality - 1;
        } else {
          el.quality = 1;
        }
      }
      return el;
    });
    this.products.forEach((el) => {
      if (el.quality === 0) {
        this.removeProduct(product);
      }
    });
  }
  addProductQuality(product: Product) {
    this.products = this.products.map((el) => {
      if (el.name === product.name) {
        if (el.quality) {
          el.quality = el.quality + 1;
        } else {
          el.quality = 1;
        }
      }
      return el;
    });
  }
}
