import { Component } from '@angular/core';
import { RespPasis } from '../../interfaces/paises.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [ 
   `
  button {
    margin-right: 5px;
  }
   `
  ]
})
export class PorRegionComponent  {

  
  regiones:string[] = ['america','asia','europa','africa','oceania'];
  regionActiva:string = ''

  constructor(
    private PaisService: PaisService
  ) { }


  activarRegion(region: string){
    this.regionActiva  = region
  }
    
}
