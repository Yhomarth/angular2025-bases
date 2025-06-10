import { Component, signal } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { AddCharacterComponent } from "../../components/dragonball/add-character/add-character.component";

interface Character {

  id: number;
  name: string;
  power: number

}

@Component({
  selector: 'dragonballsuper',
  imports: [CharacterListComponent, AddCharacterComponent],
  templateUrl: './dragonball-super-page.component.html',
})
export class DragonballSuperPageComponent {

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 12000 },
    { id: 2, name: 'Vegeta', power: 9000 },
  ]);





}
