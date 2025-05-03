export class CreateProductRequestModel {
    name: string
    description: string | null
    price: number
    stock: number
    category: string | null
    isActive: boolean
    createdAt?: Date
    updatedAt?: Date

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