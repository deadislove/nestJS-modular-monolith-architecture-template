import { UserResponseModel } from "@modules/user/dto/responses";
import { ProductResponseModel } from "./product.response";
import { Expose } from "class-transformer";

export class UserWithProductResponseModel {
    @Expose()
    user: UserResponseModel
    @Expose()
    products: ProductResponseModel[]
}