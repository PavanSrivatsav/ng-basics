import { Component, Input } from '@angular/core';
import { Character } from '../model/character';
import { AvengersService } from './../avengers.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {

  avengersService: AvengersService

  @Input() character: Character = new Character();
  constructor(avengersService: AvengersService) {
    this.avengersService = avengersService;
  }

  setSelectedItem(side: string) {
    // this.character.side = side;
    this.avengersService.onSideChosen({ name: this.character.name, side: side });
  }


}
