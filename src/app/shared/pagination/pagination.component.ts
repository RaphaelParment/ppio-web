import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input()
  nbPages : number = 10
  @Input()
  currentPage : number = 1
  @Output()
  pageSelected: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  next() {
    if(this.currentPage < this.nbPages){
      this.currentPage += 1
      this.pageSelected.emit(this.currentPage)
    }
  }

  prev(){
    if(this.currentPage > 1){
      this.currentPage -= 1
      this.pageSelected.emit(this.currentPage)
    }
  }

}
