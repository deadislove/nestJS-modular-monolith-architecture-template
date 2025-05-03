import { Expose } from "class-transformer"

export class CreateUserRequestModel {
    @Expose()
    public name: string
    @Expose()
    public email: string
}