import { ProductsService } from './product.service';
import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { Product } from './product.model';

@Controller('products')
export class ProductSController {
  constructor(private readonly producService: ProductsService) {}

  @Post()
  addProduct(
    @Body('title') prodTitle: string,
    @Body('description') prodDescription: string,
    @Body('price') prodPrice: number,
  ): Product {
    return this.producService.insertProduct(
      prodTitle,
      prodDescription,
      prodPrice,
    );
  }
  @Get()
  getListProduct() {
    return this.producService.getListProduct();
  }

  @Get(':id')
  getProductById(@Param('id') prodId: string) {
    return this.producService.getProductById(prodId);
  }

  @Patch(':id')
  updateProduct(
    @Param('id') prodId: string,
    @Body('title') prodTitle: string,
    @Body('description') prodDescription: string,
    @Body('price') prodPrice: number,
  ) {
    this.producService.updateProduct(
      prodId,
      prodTitle,
      prodDescription,
      prodPrice,
    );
    return null;
  }
  @Delete(':id')
  deleteProduct(@Param('id') prodId: string) {
    this.producService.deleteProduct(prodId);
    return null;
  }
}
