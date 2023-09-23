import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {
  //string iterpolation
  displaynotification:boolean=false;
sitename : string ='Notiffication is more important';
closenotification(){
  this.displaynotification=true;
}
}                                 
