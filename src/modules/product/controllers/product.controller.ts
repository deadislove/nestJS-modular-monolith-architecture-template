import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { ProductService } from "../services/product.service";
import { CreateProductRequestModel, UpdateProductRequestModel } from "../dto/requests";

@Controller('product')
export class ProductController {
    constructor(
        private readonly productService: ProductService
    ) { }

    @Get()
    async getProducts() {
        return this.productService.getProducts()
    }

    @Get(':id')
    async getProductById(
        @Param('id', ParseIntPipe) id: number
    ) {
        if (id === 0) {
            throw new HttpException('id can not equal to 0.', HttpStatus.BAD_REQUEST)
        }

        return this.productService.getProductById(id)
    }

    @Post()
    async createProduct(
        @Body() requestModel: CreateProductRequestModel
    ) {
        if(!requestModel) {
            throw new HttpException('Body is null', HttpStatus.BAD_REQUEST)
        }

        return this.productService.createProduct(requestModel)
    }

    @Put(':id')
    async updateProduct(
        @Param('id', ParseIntPipe) id:number,
        @Body() requestModel: UpdateProductRequestModel
    ) {
        if(id !== requestModel.id || !requestModel) {
            throw new HttpException('Parameter ID must equal to request model info.', HttpStatus.BAD_REQUEST)
        }

        return this.productService.updateProduct(requestModel)
    }

    @Delete(':id')
    async deleteProduct(
        @Param('id', ParseIntPipe) id:number
    ) {
        if(id === 0) {
            throw new HttpException('Parameter ID can\'t equal to 0', HttpStatus.BAD_REQUEST)
        }

        return this.productService.deleteProduct(id)
    }

    @Get('/userwithproduct/:id')
    async getUserWithProduct(
        @Param('id', ParseIntPipe) id:number
    ) {
        if(id === 0) {
            throw new HttpException('Parameter ID can\'t equal to 0', HttpStatus.BAD_REQUEST)
        }

        return this.productService.findUserWithProduct(1)
    }
}