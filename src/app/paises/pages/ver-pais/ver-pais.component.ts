import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { RespPasis } from '../../interfaces/paises.interfaces';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: RespPasis[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private _PaisService: PaisService
    ) { }
  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this._PaisService.busquedaPorAlphacode( id )  ),
        tap( console.log )
      )
      .subscribe( pais => this.pais = pais );

  }

}
