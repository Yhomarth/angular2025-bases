import { Component, signal } from '@angular/core';

interface Character {

  id: number;
  name: string;
  power: number

}

@Component({
  selector: 'app-dragonball-page',
  imports: [],
  templateUrl: './dragonball-page.component.html',
})
export class DragonballPageComponent {

  name = signal('');
  power = signal(0);



  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 12000 },
    { id: 2, name: 'Vegeta', power: 9000 },
    { id: 3, name: 'Gohan', power: 8000 },
    { id: 4, name: 'Piccolo', power: 7000 },
    { id: 5, name: 'Frieza', power: 10000 },
    { id: 6, name: 'Cell', power: 9500 },
    { id: 7, name: 'Majin Buu', power: 11000 },
    { id: 8, name: 'Trunks', power: 7500 },
    { id: 9, name: 'Bulma', power: 100 }, // Not a fighter but included for variety
    { id: 10, name: 'Krillin', power: 5000 }

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


      const existingCharacter = list.find( character => character.name === newCharacter.name );

      if (existingCharacter){

        console.log(existingCharacter);

        existingCharacter.power = newCharacter.power + existingCharacter.power;
        return list.sort( (a, b) => b.power - a.power );

      }


      const arr = [...list, newCharacter];



      return arr.sort( (a, b) => b.power - a.power );
    });

    this.resetFields();

  }


resetFields(){
    this.name.set('');
    this.power.set(0);
}




}
