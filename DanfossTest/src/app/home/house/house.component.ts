import { Component, OnInit, Input } from '@angular/core';

import { House } from '../../model/rest/internal/House';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {

    @Input() house: House;
  constructor() { }

  ngOnInit() {
  }

}
