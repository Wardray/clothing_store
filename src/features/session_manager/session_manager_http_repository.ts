import { HttpRepository } from "../../core/repository/http_repository";
import { AuthModel } from "./auth_model";

export class SessionManagerHttpRepository extends HttpRepository {
  auth = () => this.jsonRequest<AuthModel>("/auth");
}
