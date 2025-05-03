import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import UserTypeOrmEntity from "../entities/user.entity";
import { DeleteResult, Repository, UpdateResult } from "typeorm";

@Injectable()
export class UserRepository {
    constructor(
        @InjectRepository(UserTypeOrmEntity)
        private readonly repo: Repository<UserTypeOrmEntity>
    ){}

    async findOne(id: number): Promise<UserTypeOrmEntity | null> {
        const data: UserTypeOrmEntity | null = await this.repo.findOne({
            where: {
                id
            }
        })

        return data
    }
    
    async findAll(): Promise<UserTypeOrmEntity[]> {
        const data:UserTypeOrmEntity[] = await this.repo.find()

        return data
    }

    async create(entity: Partial<UserTypeOrmEntity>): Promise<Partial<UserTypeOrmEntity> & UserTypeOrmEntity> {
        const result:Partial<UserTypeOrmEntity> & UserTypeOrmEntity = await this.repo.save(entity)
        
        return result
    }

    async update(id:number, entity: Partial<UserTypeOrmEntity>): Promise<boolean> {
        const result:UpdateResult =  await this.repo.update(id, entity)

        return result.affected !== 0
    }

    async delete(id: number): Promise<boolean> {
        const result: DeleteResult = await this.repo.delete(id)
        
        return result.affected !== 0
    }
}