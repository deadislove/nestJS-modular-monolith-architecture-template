import { UserResponseModel } from "@modules/user/dto/responses";
import { ProductResponseModel } from "./responses";

export class UserWithProductDTO {
    user: UserResponseModel
    products: ProductResponseModel[]
}