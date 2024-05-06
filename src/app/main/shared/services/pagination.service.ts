import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {
  private _pageSize = signal<number>(12);
  private _pageIndex = signal<number>(0);
  private _length = signal<number>(0);

  readonly pageSize = this._pageSize.asReadonly();
  readonly pageIndex = this._pageIndex.asReadonly();

  readonly numberOfPages = computed(() => this._length() / this._pageSize())

  constructor() { }

  setPageSize(pageSize: number): void {
    if (pageSize < 0) {
      this._pageSize.set(0);
    } else {
      this._pageSize.set(pageSize);
    }
  }

  setPageIndex(pageIndex: number): void {
    if (pageIndex < 0) {
      this._pageIndex.set(0);
    } else {
      this._pageIndex.set(pageIndex);
    }
  }

  setLength(length: number): void {
    if (length < 0) {
      this._length.set(0);
    } else {
      this._length.set(length);
    }
  }

  nextPage(): void {
    this._pageIndex.update(pageIndex => {
      if (this.numberOfPages() - 1 > pageIndex) {
        return pageIndex + 1;
      }
      return pageIndex;
    });
  }

  previousPage(): void {
    this._pageIndex.update(pageIndex => {
      if (pageIndex > 0) {
        return pageIndex - 1;
      }
      return pageIndex;
    });
  }
}
