var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { DataSource } from '@angular/cdk/table';
import { RestService } from '../rest.service';
var HomeComponent = /** @class */ (function () {
    function HomeComponent(rest) {
        this.rest = rest;
        this.displayedColumns = ['address', 'waterValues'];
        this.dataSource = new PropertyDataSource();
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.loadAllHouses();
        this.loadMinHouse();
        this.loadMaxHouse();
    };
    HomeComponent.prototype.loadAllHouses = function () {
        var _this = this;
        this.rest.getHouses({}).subscribe(function (res) {
            _this.dataSource.data.next(res.houseList);
        });
    };
    HomeComponent.prototype.loadMinHouse = function () {
        var _this = this;
        this.rest.getHouseWithMinWC({}).subscribe(function (res) {
            _this.maxValue = res.house;
        });
    };
    HomeComponent.prototype.loadMaxHouse = function () {
        var _this = this;
        this.rest.getHouseWithMaxWC({}).subscribe(function (res) {
            _this.minValue = res.house;
        });
    };
    HomeComponent = __decorate([
        Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
        }),
        __metadata("design:paramtypes", [RestService])
    ], HomeComponent);
    return HomeComponent;
}());
export { HomeComponent };
var PropertyDataSource = /** @class */ (function (_super) {
    __extends(PropertyDataSource, _super);
    function PropertyDataSource() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.data = new Subject();
        return _this;
    }
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    PropertyDataSource.prototype.connect = function () {
        return this.data;
    };
    PropertyDataSource.prototype.disconnect = function () {
    };
    return PropertyDataSource;
}(DataSource));
export { PropertyDataSource };
//# sourceMappingURL=home.component.js.map