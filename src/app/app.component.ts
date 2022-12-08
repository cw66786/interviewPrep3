import { Component } from '@angular/core';
import { Card } from 'src/interface/card';
import { CardserviceService } from './service/cardservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 data!: Card[];
 mainData!: Card;
  constructor(private cardService: CardserviceService){

  }


  ngOnInit(){
    this.data = this.cardService.datalist;
    this.mainData = this.data[0];

  }


  getItem(item: Card){
    this.mainData = item;
  }
  
}
