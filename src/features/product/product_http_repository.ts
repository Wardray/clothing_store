import { HttpRepository } from "../../core/repository/http_repository";
import { Product } from "../shop/shop_model";

export class ProductHttpRepository extends HttpRepository {
  getProduct = (id: string) =>
    this.authJsonRequest<Product>("/product/by/id?id=" + id);
}
