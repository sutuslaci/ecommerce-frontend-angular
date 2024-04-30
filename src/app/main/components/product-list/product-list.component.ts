import { CommonModule } from '@angular/common';
import { Component, Signal } from '@angular/core';

import { ProductListItem } from '../../shared/models/product-list-item';
import { ProductService } from '../../shared/services/product.service';

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  products: Signal<ProductListItem[]>;

  constructor(private productService: ProductService) {
    this.products = this.productService.productList;
  }

  ngOnInit(): void {

  }
}
