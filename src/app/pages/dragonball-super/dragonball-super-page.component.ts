import { Component, inject, signal } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { AddCharacterComponent } from "../../components/dragonball/character-add/add-character.component";
import { Character } from '../../interfaes/dragonball.interfaces';
import { DragonballService } from '../../services/dragonball.service';



@Component({
  selector: 'dragonballsuper',
  imports: [CharacterListComponent, AddCharacterComponent],
  templateUrl: './dragonball-super-page.component.html',
})
export class DragonballSuperPageComponent {

  public dragonballService = inject(DragonballService);

 /*
  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 12000 },
    { id: 2, name: 'Vegeta', power: 9000 },
  ]);

  addCharacter(newCharacter: Character) {
    this.characters.update((currentCharacters) => [...currentCharacters, newCharacter]);
  }

*/



}
