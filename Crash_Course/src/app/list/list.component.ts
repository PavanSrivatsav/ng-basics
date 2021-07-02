import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AvengersService } from './../avengers.service';
import { Character } from './../model/character';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  characters: Character[] = new Array();
  avengersService: AvengersService;
  activeRoute: ActivatedRoute;
  chosenList: string = 'all';
  constructor(avengersService: AvengersService, activeRoute: ActivatedRoute) {
    this.avengersService = avengersService;
    this.activeRoute = activeRoute;
  }

  ngOnInit() {
    this.activeRoute.params.subscribe((params) => {
      this.characters = this.avengersService.getChosenListCharacters(params.side);
      this.chosenList = params.side;
    }
    );
    this.avengersService.charactersChanged.subscribe(() => {
      this.characters = this.avengersService.getChosenListCharacters(this.chosenList);
    }
    );
  }

}
