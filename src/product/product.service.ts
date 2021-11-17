import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './product.model';

@Injectable()
export class ProductsService {
  products: Product[] = [];

  insertProduct(title: string, description: string, price: number) {
    const newProduct = new Product(
      Math.random().toString(),
      title,
      description,
      price,
    );
    this.products.push(newProduct);
    return newProduct;
  }

  getListProduct() {
    return [...this.products];
  }

  getProductById(id: string) {
    const [product] = this.findProduct(id);
    return { ...product };
  }

  updateProduct(id: string, title: string, description: string, price: number) {
    const [product, index] = this.findProduct(id);

    if (title) {
      this.products[index].title = title;
    }
    if (description) {
      this.products[index].description = description;
    }
    if (price) {
      this.products[index].price = price;
    }
    return { ...this.products[index] };
  }

  deleteProduct(id: string) {
    const [_, index] = this.findProduct(id);
    this.products.splice(index, 1);
  }

  findProduct(id: string): [Product, number] {
    const index = this.products.findIndex((product) => product.id === id);
    const product = this.products[index];
    if (!product) {
      throw new NotFoundException('Could not find product');
    }
    return [product, index];
  }
}
