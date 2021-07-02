import { Component, OnInit } from '@angular/core';
import { AvengersService } from './avengers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  avengersService: AvengersService;
  constructor(avengersService: AvengersService) {
    this.avengersService = avengersService;
  }
  ngOnInit() {
    this.avengersService.getCharacterFromAPI();
  }
}
