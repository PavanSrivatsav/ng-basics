import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Character } from './model/character';

@Injectable({
  providedIn: 'root'
})
export class AvengersService {

  charactersChanged = new Subject<void>();

  constructor() { }

  private characters: Character[] = [
    { name: 'Robert Downey Jr.', side: '' },
    { name: 'Chris Evans', side: '' },
    { name: 'Paul Rudd', side: '' },
    { name: 'Jeremy Renner', side: '' },
    { name: 'Benedict Cumberbatch', side: '' },
    { name: 'Chris Hemsworth', side: '' },
    { name: 'Tom Holland', side: '' },
    { name: 'Chadwick Aaron Boseman', side: '' },
    { name: 'Scarlett Johansson', side: '' },
  ];


  getChosenListCharacters(chosenList: string) {
    if (chosenList === 'all') {
      return this.characters.slice();
    }
    return this.characters.filter((char) => char.side === chosenList);
  }

  addCharacter(name: string, side: string) {
    if (this.characters.findIndex((val: Character) => val.name ? val.name.toLowerCase() === name.toLowerCase() : '') === -1)
      this.characters.unshift({ name: name, side: side });
  }

  onSideChosen(charInfo: Character) {
    const pos = this.characters.findIndex((char) => {
      return char.name === charInfo.name;
    })
    this.characters[pos].side = charInfo.side;
    this.charactersChanged.next();
  }

}
