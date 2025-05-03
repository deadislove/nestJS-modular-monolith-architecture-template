import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import ProductTypeOrmEntity from "./entities/product.entity";
import { ProductService } from "./services/product.service";
import { ProductRepository } from "./repositories/product.repository";
import { ProductController } from "./controllers/product.controller";
import { UserModule } from "@modules/user/user.module";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            ProductTypeOrmEntity,
        ]),
        UserModule
    ],
    providers: [
        ProductService,
        ProductRepository
    ],
    controllers: [
        ProductController,
    ],
    exports: [
        ProductService
    ]
})
export class ProductModule{}