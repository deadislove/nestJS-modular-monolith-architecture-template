import { Expose } from "class-transformer"

export class CreateProductDTO {
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

    cconstructor(
        name: string = '',
        description: string | null = null,
        price: number = 0.00,
        stock: number = 0,
        category: string | null = null,
        isActive: boolean = false,
        createdAt?: Date,
        updatedAt?: Date
    ) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.stock = stock;
        this.category = category;
        this.isActive = isActive;
        this.createdAt = createdAt || new Date();
        this.updatedAt = updatedAt || new Date();
    }
}