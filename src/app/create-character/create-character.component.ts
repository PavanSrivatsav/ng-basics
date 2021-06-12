import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Side } from '../model/side';
import { AvengersService } from './../avengers.service';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.scss']
})
export class CreateCharacterComponent implements OnInit {

  sides: Side[] = [];
  avengersService: AvengersService;
  constructor(avengersService: AvengersService) {
    this.avengersService = avengersService;
  }

  ngOnInit(): void {
    this.sides = [
      { label: 'None', value: '' },
      { label: 'Better', value: 'better' },
      { label: 'Best', value: 'best' }
    ]
  }

  onSubmit(submittedForm: NgForm) {
    this.avengersService.addCharacter(submittedForm.value.characterName, submittedForm.value.side);
  }

}
