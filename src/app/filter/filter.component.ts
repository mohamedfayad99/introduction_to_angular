import { Component,OnInit, Input , EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
@Input() All:number=0;
@Input() Free:number=0;
@Input() Premuim:number=0;

selectradiobuttonvalue:string='All';
@Output()
FilterRadioButtonSelectionchange: EventEmitter<string>=new EventEmitter<string>();

onRadioButtonSelectionchange(){
  this.FilterRadioButtonSelectionchange.emit(this.selectradiobuttonvalue);
}
}
