import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import ProductTypeOrmEntity from "../entities/product.entity";
import { DeleteResult, Repository, UpdateResult } from "typeorm";

@Injectable()
export class ProductRepository {
    constructor(
        @InjectRepository(ProductTypeOrmEntity)
        private readonly repo: Repository<ProductTypeOrmEntity>
    ) { }

    async findOne(id: number): Promise<ProductTypeOrmEntity | null> {
        const data: ProductTypeOrmEntity | null = await this.repo.findOne({
            where: {
                id
            }
        })

        return data
    }

    async findAll(): Promise<ProductTypeOrmEntity[]> {
        const data: ProductTypeOrmEntity[] = await this.repo.find()

        return data
    }

    async create(entity: Partial<ProductTypeOrmEntity>): Promise<Partial<ProductTypeOrmEntity> & ProductTypeOrmEntity> {
        const result: Partial<ProductTypeOrmEntity> & ProductTypeOrmEntity = await this.repo.save(entity)

        return result
    }

    async update(id: number, entity: Partial<ProductTypeOrmEntity>): Promise<boolean> {
        const result: UpdateResult = await this.repo.update(id, entity)

        return result.affected !== 0
    }

    async delete(id: number): Promise<boolean> {
        const result: DeleteResult = await this.repo.delete(id)

        return result.affected !== 0
    }
}