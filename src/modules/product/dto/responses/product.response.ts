import { Expose } from "class-transformer"

export class ProductResponseModel {
    @Expose()
    public readonly id: number
    @Expose()
    public name: string
    @Expose()
    public description: string | null
    @Expose()
    public price: number
    @Expose()
    public stock: number
    @Expose()
    public category: string | null
    @Expose()
    public isActive: boolean
    @Expose()
    public createdAt?: Date
    @Expose()
    public updatedAt?: Date
}