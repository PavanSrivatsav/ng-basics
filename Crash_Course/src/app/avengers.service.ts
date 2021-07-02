import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Character } from './model/character';
@Injectable({
  providedIn: 'root'
})
export class AvengersService {

  charactersChanged = new Subject<void>();
  httpClient: HttpClient;
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

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


  getCharacterFromAPI() {
    this.httpClient.get('https://swapi.dev/api/people/').subscribe((res: any) => {
      this.characters = res.results.map((data: any) => {
        return { name: data.name, side: '' };
      })
      this.charactersChanged.next();
    });
  }

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
