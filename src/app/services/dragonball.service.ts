
import { Injectable, signal } from '@angular/core';
import { Character } from '../interfaes/dragonball.interfaces';



@Injectable({ providedIn: 'root' })
export class DragonballService {

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 12000 },
    { id: 2, name: 'Vegeta', power: 9000 },
  ]);

  addCharacter(newCharacter: Character) {
    this.characters.update((currentCharacters) => [...currentCharacters, newCharacter]);
  }

  getCharacters() {
    return this.characters().sort( (a, b) => b.power - a.power);
  }



}
