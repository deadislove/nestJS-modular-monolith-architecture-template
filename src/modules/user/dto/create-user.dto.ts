import { Expose } from "class-transformer"

export class CreateUserUseDTO {
    @Expose()
    public name: string
    @Expose()
    public email: string
}