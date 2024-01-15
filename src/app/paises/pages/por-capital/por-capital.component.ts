import { Component, OnInit } from '@angular/core';
import { RespPasis } from '../../interfaces/paises.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [],
})
export class PorCapitalComponent implements OnInit {
  termino: string = '';
  hayError: boolean = false;
  capital: RespPasis[] = [];

  constructor(private _PaisService: PaisService) {}

  ngOnInit(): void {}

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino
    // llamado de servicio
    this._PaisService.buscarCapital(termino).subscribe(
      (region) => {
        this.capital = region;
      },
      (error) => {
        this.hayError = true;
        this.capital = [];
      }
    );
  }

  sugerencia(termino: string) {
    this.hayError = false;
  }
}
