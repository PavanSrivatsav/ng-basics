import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AvengersService {

  constructor() { }

  private characters = [
    { name: 'Robert Downey Jr.', side: '' },
    { name: 'Chris Evans', side: '' }
  ];


  getChosenListCharcters(chosenList: string) {
    if (chosenList === 'all') {
      return this.characters;
    }
    return this.characters.filter((char) => char.side === chosenList);
  }

}
