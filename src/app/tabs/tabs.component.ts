import { Character } from './../model/character';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  characters = [
    { name: 'Luke Skywalker', side: '' },
    { name: 'Darth Vader', side: '' }
  ];

  chosenList = 'all';

  constructor() { }

  setChosenList(list: string) {
    this.chosenList = list;
  }

  getCharacters() {
    if (this.chosenList === 'all') {
      return this.characters;
    }
    return this.characters.filter((char) => char.side === this.chosenList);
  }

}
