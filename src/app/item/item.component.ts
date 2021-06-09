import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from '../model/character';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {

  @Input() character: Character = new Character();

  constructor() { }

  setSelectedItem(char: Character, side: string) {
    char.side = side;
  }


}
