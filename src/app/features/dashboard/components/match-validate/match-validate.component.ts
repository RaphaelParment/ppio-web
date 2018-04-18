import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-match-validate',
  templateUrl: './match-validate.component.html',
  styleUrls: ['./match-validate.component.css']
})
export class MatchValidateComponent {

  validate() {
    alert('open modal validate');
  }

  change() {
    alert('open modal change');
  }

}


