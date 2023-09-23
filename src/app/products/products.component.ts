import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
products=[
{ price : 12000,name: "Samsung", color: "Yellow",Available:"Available",image:"assets/one.jpg"}
,{price : 21000,name: "Oppo", color: "red",Available:"Available",image:"assets/two.jpg"}
,{price : 37000,name: "Huawi", color: "green",Available:"Premium",image:"assets/three.jpg"}
,{price : 4050,name: "Lg", color: "gray",Available:"Available",image:"assets/four.jpg"}
,{price : 10000,name: "Nokia", color: "gray",Available:"Available",image:"assets/five.jpg"}
,{price : 11000,name: "Realme", color: "gray",Available:"Available",image:"assets/six.jpg"}
,{price : 12000,name: "Lenove", color: "gray",Available:"Available",image:"assets/seven.jpg"}
,{price : 35000,name: "Iphone", color: "gray",Available:"Premium",image:"assets/eight.jpg"}
,{price : 14000,name: "Infinix", color: "gray",Available:"Available",image:"assets/nine.jpg"}
,{price : 15000,name: "Sony", color: "gray",Available:"Premium",image:"assets/ten.jpg"}

];

gettotalproducts(){
  return this.products.length;
}
getFreeProducts(){
  return this.products.filter(products => products.Available=='Available').length;
}

getPremuimProducts(){
  return this.products.filter(products => products.Available=='Not Available').length;
}

productcountRadioButton: string='All';
onfilterButtonSelectionchanged(data: string){
  this.productcountRadioButton=data;
  console.log(this.productcountRadioButton);

}
//#region using to Search Engine
searchtext:string='';
onsearchtextenterd(searchvalue:string){
this.searchtext=searchvalue;
}
//#endregion

}
