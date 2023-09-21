import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Task } from 'src/app/core/interfaces/task';

@Component({
  selector: 'app-pagination-controls',
  templateUrl: './pagination-controls.component.html',
  styleUrls: ['./pagination-controls.component.scss']
})
export class PaginationControlsComponent implements OnInit, OnChanges {

  constructor(){}
  ngOnInit(): void {}

  @Input() totalRecords = 0; // total number of items count which we want to display in pages.
  @Input() recordsPerPage = 0; // number of items we want to display in single page.
  @Output() onPageChange: EventEmitter<number> = new EventEmitter(); // emit the currently active page number to parent component whenever we will click on the page number.

  public pages: number [] = []; // push pages numbers to the pages array
  activePage: number = 1;

  ngOnChanges(changes: SimpleChanges): void {
    const pageCount = this.getPageCount();
    this.pages = this.getArrayOfPage(pageCount);
    this.activePage = 1;
    this.onPageChange.emit(1);
  }

  // Get the Total Pages numbers
  private getPageCount(): number {
    let totalPage = 0;
    if (this.totalRecords > 0 && this.recordsPerPage > 0) {
      const pageCount = this.totalRecords / this.recordsPerPage;
      const roundedPageCount = Math.floor(pageCount);

      totalPage = roundedPageCount < pageCount ? roundedPageCount + 1 : roundedPageCount;
    }
    return totalPage;
  }


  private getArrayOfPage(pageCount: number): number [] {
    const pageArray = [];

    if (pageCount > 0) {
        for(let i = 1 ; i <= pageCount ; i++) {
          pageArray.push(i);
        }
    }

    return pageArray;
  }

  // When clicked fires displayActivePage in parent component(TasksMasterComponent)
  onClickPage(pageNumber: number): void {
    if (pageNumber >= 1 && pageNumber <= this.pages.length) {
      this.activePage = pageNumber;
      this.onPageChange.emit(this.activePage);
    }
  }
}
