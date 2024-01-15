import { Component, OnInit, Output ,EventEmitter, Input} from '@angular/core';
import { Subject, debounceTime } from 'rxjs';


@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styles: [
  ]
})
export class SearchInputComponent implements OnInit {

  @Output() onEnter : EventEmitter<string> = new EventEmitter()
  @Output() onDeboncer : EventEmitter<string> = new EventEmitter()

  @Input() placeholder: string = '';

  debouncer: Subject<string> = new  Subject();

  termino:string = ''

  constructor() { }

  ngOnInit() {
    this.onDeboncer.pipe(debounceTime(300)).subscribe(valor =>{
      this.onDeboncer.emit( valor )
    })
  }

  buscar(){
    this.onEnter.emit( this.termino )
  }
  keypress(){
    this.onDeboncer.next(this.termino)
  }
}
