import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';

import { ProductListOptions } from '../../components/product-list/models/product-list-options';
import { API_PATH } from '../constants/api.constant';
import { Product } from '../models/product';
import { ProductList } from '../models/product-list';
import { ProductListItem } from '../models/product-list-item';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _productList = signal<ProductListItem[]>([]);
  private _count = signal<number>(0);
  private _selectedProduct = signal<Product | null>(null);

  readonly productList = this._productList.asReadonly();
  readonly count = this._count.asReadonly();

  constructor(private httpClient: HttpClient) { }

  loadProducts(options: ProductListOptions): void {
    const params = new HttpParams()
      .set('pageNumber', options.pageNumber)
      .set('pageSize', options.pageSize);

    this.httpClient.get<ProductList>(`${API_PATH}/api/product/list`, { params })
      .subscribe(productList => {
        this._productList.set(productList.items);
        this._count.set(productList.totalElements);
      });
  }

  selectProduct(url: string): void {
    const params = new HttpParams()
      .set('url', url);
    this.httpClient.get<Product>(`${API_PATH}/api/product/details`, { params })
      .subscribe(product => this._selectedProduct.set(product));
  }
}
