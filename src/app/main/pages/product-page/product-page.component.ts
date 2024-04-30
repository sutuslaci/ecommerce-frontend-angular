import { Component, OnInit } from '@angular/core';

import { ProductListComponent } from '../../components/product-list/product-list.component';
import { ProductService } from '../../shared/services/product.service';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [ProductListComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss'
})
export class ProductPageComponent implements OnInit {
  offset: number = 0;
  pageSize: number = 10;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.loadProducts({ offset: this.offset, pageSize: this.pageSize });
  }
}
