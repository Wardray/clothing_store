import { HttpRepository } from "../../core/repository/http_repository";
import { Product } from "../product/product_model";

export class ProductHttpRepository extends HttpRepository {
  getProduct = (id: string) =>
    this.authJsonRequest<Product>("/product/by/id?id=" + id);
}
