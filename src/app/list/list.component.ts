import { Component, Input } from '@angular/core';
import { Character } from './../model/character';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  @Input() characters: Character[] = new Array();

  constructor() { }

}
