import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  
enterdsearchvalue:string='';

@Output()
searchtextchanged:EventEmitter<string>=new EventEmitter<string>();
onsearchtextchanged(){
  this.searchtextchanged.emit(this.enterdsearchvalue);
}
}
