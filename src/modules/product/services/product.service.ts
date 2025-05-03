import { Inject, Injectable } from "@nestjs/common";
import { ProductRepository } from "../repositories/product.repository";
import ProductTypeOrmEntity from "../entities/product.entity";
import { plainToInstance } from "class-transformer";
import { ProductResponseModel, UserWithProductResponseModel } from "../dto/responses";
import { CreateProductRequestModel, UpdateProductRequestModel } from "../dto/requests";
import { CreateProductDTO, UpdatedProductDTO, UserWithProductDTO } from "../dto";
import { UserResponseModel } from "@modules/user/dto/responses";
import { UserFacade } from "@modules/user/facades/user.facade";

@Injectable()
export class ProductService {
    constructor(
        @Inject()
        private readonly productRepo: ProductRepository,
        private readonly userFacade: UserFacade
    ){}

    async getProducts(): Promise<ProductResponseModel[]> {
        const data: ProductTypeOrmEntity[] = await this.productRepo.findAll()
        return plainToInstance(ProductResponseModel, data)
    }

    async getProductById(id:number): Promise<ProductResponseModel | null> {
        const data: ProductTypeOrmEntity | null = await this.productRepo.findOne(id)

        if(!data) return null

        return plainToInstance(ProductResponseModel, data)
    }

    async createProduct(requestModel: CreateProductRequestModel): Promise<ProductResponseModel | null> {
        const productDto: CreateProductDTO = plainToInstance(CreateProductDTO, requestModel)
        const preparedData: ProductTypeOrmEntity = plainToInstance(ProductTypeOrmEntity, productDto)
        const result: Partial<ProductTypeOrmEntity> & ProductTypeOrmEntity = await this.productRepo.create(preparedData)

        if(!result) return null

        return plainToInstance(ProductResponseModel, result)
    }

    async updateProduct(requestModel: UpdateProductRequestModel): Promise<boolean> {
        const productDto: UpdatedProductDTO = plainToInstance(UpdatedProductDTO, requestModel)
        const preparedData: ProductTypeOrmEntity = plainToInstance(ProductTypeOrmEntity, productDto)
        const result: boolean = await this.productRepo.update(preparedData.id, preparedData)

        return result
    }

    async deleteProduct(id:number): Promise<boolean> {
        const result:boolean = await this.productRepo.delete(id)
        return result
    }

    async findUserWithProduct(id: number) {
        const user: UserResponseModel | null = await this.userFacade.findUserById(id)
        const products: ProductResponseModel[] = await this.getProducts()

        let userWithProductDto: UserWithProductDTO = new UserWithProductDTO()

        if(user) {
            userWithProductDto.user = user
        }

        userWithProductDto.products = products

        return plainToInstance(UserWithProductResponseModel, userWithProductDto)
    }
}