import { makeAutoObservable, observable } from "mobx";
import { ProductHttpRepository } from "./product_http_repository";
import { Product } from "../shop/shop_model";
import { cartStore } from "../..";

export class ProductStore {
  productHttpRepository = new ProductHttpRepository();
  product?: Product;

  constructor() {
    makeAutoObservable(this);
  }
  checkout = () => cartStore.addProduct(this.product!);
  init = async (id: string) =>
    (await this.productHttpRepository.getProduct(id)).map((model) => {
      this.product = model;
    });
}
