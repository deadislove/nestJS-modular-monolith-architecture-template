import { Expose } from "class-transformer"

export class UpdatedProductDTO {
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
    public updatedAt?: Date

    public withDefaults(): UpdatedProductDTO {
        if (!this.updatedAt) {
            this.updatedAt = new Date();
        }
        return this;
    }
}