import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from '../model/character';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() character: Character = new Character();
  @Output() selectedItem = new EventEmitter<Character>();

  constructor() { }

  setSelectedItem(char: Character, side: string) {
    char.side = side;
    this.selectedItem.emit(this.character);

  }


}
