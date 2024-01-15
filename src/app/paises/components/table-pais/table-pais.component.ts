import { Component, Input, OnInit } from '@angular/core';
import { RespPasis } from '../../interfaces/paises.interfaces';

@Component({
  selector: 'app-table-pais',
  templateUrl: './table-pais.component.html',
  styles: [
  ]
})
export class TablePaisComponent implements OnInit {

  @Input() pais:RespPasis[] =[]

  constructor() { }

  ngOnInit(): void {
  }

}
