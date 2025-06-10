import {  Component, signal } from '@angular/core';
import { Character } from '../../../interfaes/dragonball.interfaces';

@Component({
  selector: 'dragonball-add-character',
  templateUrl: './add-character.component.html',

})
export class AddCharacterComponent {
  name = signal('');
  power = signal(0);


  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 12000 },
    { id: 2, name: 'Vegeta', power: 9000 },
  ]);


    addCharacter() {

    if(!this.name() || !this.power() || this.power() <= 0){
      return;
    }

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power()
    };

    this.characters.update( list => {

/*
      const existingCharacter = list.find( character => character.name === newCharacter.name );

      if (existingCharacter){

        console.log(existingCharacter);

        existingCharacter.power = newCharacter.power + existingCharacter.power;
        return list.sort( (a, b) => b.power - a.power );

      }

*/
       const arr = [...list, newCharacter];
       console.log(newCharacter);
       return list;
      // return arr.sort( (a, b) => b.power - a.power );

    });

    this.resetFields();

  }


resetFields(){
    this.name.set('');
    this.power.set(0);
}



 }
