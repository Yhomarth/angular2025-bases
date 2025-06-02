import { Component } from '@angular/core';

@Component({
  templateUrl: './counter-page.component.html',
  styles: `
    button {
      padding: 5px;
      margin: 5px 10px;
      width: 75px;
    }
  `

})
export class CounterPageComponent{

  counter = 15;

  increaseBy(value:number){

    if(value < 0 && this.counter === 0){
      return;
    }

    this.counter += value;

  }


  resetCounter(){
    this.counter = 0;
  }

}
