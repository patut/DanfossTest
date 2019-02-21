import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { DataSource } from '@angular/cdk/table';

import { House } from '../model/rest/internal/House';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    displayedColumns = ['address', 'waterValues'];

    dataSource = new PropertyDataSource();
    minValue: House;
    maxValue: House;

    constructor(private rest: RestService) { }

    ngOnInit() {
        this.loadAllHouses();
        this.loadMinHouse();
        this.loadMaxHouse();
    }

    loadAllHouses() {
        this.rest.getHouses({}).subscribe(res => {
            this.dataSource.data.next(res.houseList);
        });
    }

    loadMinHouse() {
        this.rest.getHouseWithMinWC({}).subscribe(res => {
            this.maxValue = res.house;
        });
    }

    loadMaxHouse() {
        this.rest.getHouseWithMaxWC({}).subscribe(res => {
            this.minValue = res.house;
        });
    }
}

export class PropertyDataSource extends DataSource<House> {
    data = new Subject<House[]>();

    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Subject<House[]> {
        return this.data;
    }

    disconnect() {
    }
}
