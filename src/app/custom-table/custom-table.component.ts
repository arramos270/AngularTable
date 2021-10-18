import { Component, OnInit } from '@angular/core';
import {ELEMENT_DATA} from '../models/fake-models';

export interface Alumno {
  name: string;
  lastName: string;
  age: number;
  grade: string;
}

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.css']
})
export class CustomTableComponent implements OnInit {
  displayedOriginalColumns: string[] = ['colName', 'colLastName', 'colAge', 'colActions'];
  displayedColumns: string[] = ['colName', 'colLastName', 'colAge', 'colActions'];
  dataSource = ELEMENT_DATA;
  name = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  checkboxChange(isChecked: boolean, columnName: string) {
    if(isChecked) {
      this.displayedColumns.splice(this.displayedOriginalColumns.indexOf(columnName), 0, columnName);
    } else {
      this.displayedColumns.splice(this.displayedColumns.indexOf(columnName), 1);
    }
    console.log(this.displayedColumns);
  }
}
