import { Character } from './../model/character';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() characters: Character[] = new Array();
  @Output() selectedItem = new EventEmitter<Character>();

  constructor() { }

  setSelectedItem(item: Character) {
    this.selectedItem.emit(item);
  }


}
