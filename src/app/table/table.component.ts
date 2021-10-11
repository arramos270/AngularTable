import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  nombre: string;
  apellidos: string;
  edad: number;
  curso: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {nombre: 'Juan', apellidos: 'Gómez Fernández', edad: 18, curso: '1ºDAM'},
  {nombre: 'Juan', apellidos: 'Gómez Fernández', edad: 19, curso: '1ºDAM'},
  {nombre: 'Juan', apellidos: 'Gómez Fernández', edad: 25, curso: '2ºDAM'},
  {nombre: 'Juan', apellidos: 'Gómez Fernández', edad: 34, curso: '1ºELE'},
  {nombre: 'Juan', apellidos: 'Gómez Fernández', edad: 20, curso: '1ºTEL'},
  {nombre: 'Juan', apellidos: 'Gómez Fernández', edad: 21, curso: '2ºTEL'},
  {nombre: 'Juan', apellidos: 'Gómez Fernández', edad: 17, curso: '1ºCOC'},
  {nombre: 'Juan', apellidos: 'Gómez Fernández', edad: 19, curso: '2ºCOC'},
  {nombre: 'Juan', apellidos: 'Gómez Fernández', edad: 23, curso: '2ºTEL'},
  {nombre: 'Juan', apellidos: 'Gómez Fernández', edad: 22, curso: '1ºTEL'},
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'apellidos', 'edad', 'curso', 'acciones'];
  dataSource = ELEMENT_DATA;
  
  constructor() { }

  ngOnInit(): void {
  }

}
