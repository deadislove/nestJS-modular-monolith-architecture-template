import { Expose } from "class-transformer"

export class UpdateUserRequestModel {
    @Expose()
    public id: number
    @Expose()
    public name: string
    @Expose()
    public email: string
}