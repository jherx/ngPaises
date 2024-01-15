import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { RespPasis } from '../../interfaces/paises.interfaces';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [],
})
export class PorPaisComponent implements OnInit {
  termino: string = '';
  pais: RespPasis[] = [];
  hayError:boolean = false

  constructor(private PaisService: PaisService) {}

  ngOnInit(): void {}

  buscar(termino: string) {

    this.hayError = false
    this.termino = termino;

    console.log('En cuestion de: ', this.termino);

    this.PaisService.searchCountry(termino).subscribe((pais) => {
        this.pais = pais;
      },
      (err) => {
        this.hayError = true;
        this.pais = []
      }
    );
    
  }

  sugerencia(termino:string){
    this.hayError = false
  }
}
