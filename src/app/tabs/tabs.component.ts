import { Component } from '@angular/core';
import { AvengersService } from './../avengers.service';
import { Character } from './../model/character';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {


  characters = [];
  chosenList = 'all';
  avengersService: AvengersService = new AvengersService;

  constructor(private avService: AvengersService) {
    this.avengersService = avService;
  }

  setChosenList(list: string) {
    this.chosenList = list;
  }

  getCharacters(): Character[] {
    return this.avengersService.getChosenListCharcters(this.chosenList);
  }

}
