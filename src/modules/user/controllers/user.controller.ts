import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { UserService } from "../services/user.service";
import { CreateUserRequestModel, UpdateUserRequestModel } from "../dto/requests";

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService
    ){}

    @Get()
    async getUsers(){
        return this.userService.getUsers()
    }

    @Get(':id')
    async getUserById(
        @Param('id', ParseIntPipe) id: number
    ){
        if(id === 0) {
            throw new HttpException('id can not equal to 0.', HttpStatus.BAD_REQUEST)
        }

        return this.userService.getUserById(id)
    }

    @Post()
    async createUser(
        @Body() requestModel: CreateUserRequestModel
    ) {
        if(!requestModel) {
            throw new HttpException('Body is null', HttpStatus.BAD_REQUEST)
        }

        return this.userService.createUser(requestModel)
    }

    @Put(':id')
    async updateUser(
        @Param('id', ParseIntPipe) id: number,
        @Body() requestModel: UpdateUserRequestModel
    ) {
        if(id !== requestModel.id || !requestModel) {
            throw new HttpException('Parameter ID must equal to request model info.', HttpStatus.BAD_REQUEST)
        }

        return this.userService.updateUser(requestModel)
    }

    @Delete(':id')
    async deleteUser(
        @Param('id', ParseIntPipe) id: number
    ) {
        if(id === 0) {
            throw new HttpException('Parameter ID can\'t equal to 0', HttpStatus.BAD_REQUEST)
        }

        return this.userService.deleteUser(id)
    }
}