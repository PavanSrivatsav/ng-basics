import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AvengersService {

  constructor() { }

  private characters = [
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


  getChosenListCharcters(chosenList: string) {
    if (chosenList === 'all') {
      return this.characters.slice();
    }
    return this.characters.filter((char) => char.side === chosenList);
  }

  addCharacter(name: string, side: string) {
    if (this.characters.findIndex((val) => val.name.toLowerCase() === name.toLowerCase()) === -1)
      this.characters.unshift({ name: name, side: side });
  }

}
