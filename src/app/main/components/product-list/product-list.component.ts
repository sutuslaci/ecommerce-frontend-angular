import { Component, effect, OnInit } from '@angular/core';

import { ProductService } from '../../shared/services/product.service';

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {
  constructor(private productService: ProductService) {
    effect(() => {
      console.log(this.productService.productList());
    });
  }

  ngOnInit(): void {
    this.productService.loadProducts({ offset: 0, pageSize: 10 });
  }
}
