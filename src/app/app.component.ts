import { Component } from '@angular/core';
import { Keg } from './models/keg';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // $scope.makeBold = {
  //   "color" : "red"
  // }
  filter: boolean = true;
  kegBrand: string = "";
  kegFlavor: string = "";
  kegPrice: number = null;
  kegAlcContent: number = null;
  kegs: Keg[] = [
    new Keg('Brew Dr', 'Blueberry Ginger', 4.00, 0.02),
    new Keg('Super Kombucha', 'rasberry lemonade', 5.00, 0.03),
    new Keg('Awesome Kombucha', 'Sour Raspberry', 2.00, 0.05),
    new Keg('Crazy Kombucha', 'Chocolate Mint', 3.00, 0.06),

  ];
  // this.newKeg = new Keg('', '', 0, 0);
  boolAddNew = false;
  newKeg: Keg = null;
  selectedKeg: Keg = null;

  turnAddNewOn() {
    this.boolAddNew = true;
  }

  addNewKeg(brand1, flavor1, price1, alcCont1) {
    let submitKeg = new Keg(brand1, flavor1, price1, alcCont1);
    this.kegs.push(submitKeg);
    this.boolAddNew = false;
  }

  editKeg(clickedKeg){
    this.selectedKeg = clickedKeg;
  }

  finishedEditing() {
    this.selectedKeg = null;
  }

  drankPint(clickedKeg){
    clickedKeg.pint--
  }

  inventoryLow(num){
    if (num<=50){
      return "makeBold";
    }
    return "";
  }

  filterByPrice(){
    

    if(this.filter == false ){
    this.kegs.sort((a, b) => a.pricePerPint-b.pricePerPint);
    this.filter = true;
  }else{
    this.kegs.sort((a, b) => b.pricePerPint-a.pricePerPint);
    this.filter = false;
  }
   
  }

 }

