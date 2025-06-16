
import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaes/dragonball.interfaces';



const loadFromLocalStorage = () : Character[] => {
  const characters = localStorage.getItem('characters');

  return characters ? JSON.parse(characters): [];
}

@Injectable({ providedIn: 'root' })
export class DragonballService {

  characters = signal<Character[]>( loadFromLocalStorage() );

  saveToLocalStorage = effect( ()=> {

    const characters = this.characters();
    localStorage.setItem('characters', JSON.stringify(characters));

  });

  addCharacter(newCharacter: Character) {
    this.characters.update((currentCharacters) => [...currentCharacters, newCharacter]);
  }

  getCharacters() {
    return this.characters().sort( (a, b) => b.power - a.power);
  }



}
