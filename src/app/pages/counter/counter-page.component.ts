import { Component, signal } from '@angular/core';

@Component({
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css'

})
export class CounterPageComponent{

  counter = 15;
  counterSignal = signal(15);

  increaseBy(value:number){

    if(value < 0 && this.counter === 0){
      return;
    }

    this.counter += value;
    this.counterSignal.update(currentValue => currentValue + value);

  }


  resetCounter(){
    this.counter = 0;
    this.counterSignal.set(0);
  }

}
