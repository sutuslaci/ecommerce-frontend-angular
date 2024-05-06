import { Component, OnInit, Signal } from '@angular/core';

import { PaginatorComponent } from '../../components/paginator/paginator.component';
import { ProductListComponent } from '../../components/product-list/product-list.component';
import { ProductService } from '../../shared/services/product.service';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [
    ProductListComponent,
    PaginatorComponent
  ],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss'
})
export class ProductPageComponent implements OnInit {
  pageSize: number = 12;
  pageIndex: number = 0;

  numberOfProducts: Signal<number>;

  constructor(private productService: ProductService) {
    this.numberOfProducts = this.productService.count;
  }

  ngOnInit(): void {
    this.loadProductList();
  }

  onPageChange(pageIndex: number): void {
    console.log(pageIndex);
    this.pageIndex = pageIndex;
    this.loadProductList();

  }

  onPageSizeChange(pageSize: number): void {
    console.log(pageSize);
    this.pageSize = pageSize;
    this.loadProductList();
  }

  private loadProductList(): void {
    this.productService.loadProducts({ pageNumber: this.pageIndex, pageSize: this.pageSize });
  }
}
