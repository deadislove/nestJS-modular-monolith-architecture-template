import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import UserTypeOrmEntity from "./entities/user.entity";
import { UserService } from "./services/user.service";
import { UserRepository } from "./repositories/user.repository";
import { UserController } from "./controllers/user.controller";
import { UserFacade } from "./facades/user.facade";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            UserTypeOrmEntity
        ])
    ],
    providers: [
        UserService,
        UserFacade,
        UserRepository
    ],
    controllers: [
        UserController,
    ],
    exports: [
        UserFacade
    ]
}) 
export class UserModule {}