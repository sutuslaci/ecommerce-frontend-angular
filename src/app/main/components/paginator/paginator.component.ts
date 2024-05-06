import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'paginator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss'
})
export class PaginatorComponent {
  @Input() pageSize: number = 12;
  @Input() pageIndex: number = 0;
  @Input() totalItems: number = 0;

  @Output() pageIndexChange = new EventEmitter<number>();


  onInputValueChange(event: any): void {
    const pageNumber: number = event.target.value;
    this.onPageIndexChange(pageNumber - 1);
  }

  onPageIndexChange(pageIndex: number): void {
    if (pageIndex < 0 || pageIndex >= this.getTotalPages()) return;

    this.pageIndex = pageIndex;
    this.pageIndexChange.emit(pageIndex);
  }

  nextPage(): void {
    this.pageIndex++;
    this.pageIndexChange.emit(this.pageIndex);
  }

  previousPage(): void {
    if (this.pageIndex > 0) {
      this.pageIndex--;
      this.pageIndexChange.emit(this.pageIndex);
    }
  }

  getTotalPages(): number {
    return Math.ceil(this.totalItems / this.pageSize);
  }
}
