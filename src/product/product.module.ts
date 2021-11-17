import { Module } from '@nestjs/common';
import { ProductSController } from './product.controller';
import { ProductsService } from './product.service';

@Module({
  controllers: [ProductSController],
  providers: [ProductsService],
})
export class ProductsModule {}
