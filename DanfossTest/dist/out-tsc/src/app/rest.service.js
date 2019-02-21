var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatSnackBar } from "@angular/material";
import 'rxjs/add/operator/map';
import { environment } from '../environments/environment';
import { LoaderService } from "./loader/loader.service";
var RestService = /** @class */ (function () {
    function RestService(http, loaderService, snackBarService) {
        this.http = http;
        this.loaderService = loaderService;
        this.snackBarService = snackBarService;
    }
    RestService.prototype.getHouses = function (request) {
        return this.runPost(request, "GetHouses");
    };
    RestService.prototype.getHouseWithMaxWC = function (request) {
        return this.runPost(request, "GetHouseWithMaxWC");
    };
    RestService.prototype.getHouseWithMinWC = function (request) {
        return this.runPost(request, "GetHouseWithMinWC");
    };
    RestService.prototype.runPost = function (request, method) {
        var _this = this;
        var headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
        this.loaderService.load.next(true);
        return this.http.post(environment.webApi + method, { request: request }, { responseType: "json", headers: headers, withCredentials: true })
            .map(function (response) {
            _this.loaderService.load.next(false);
            if (!response.isSuccess) {
                _this.snackBarService.open(response.message, "Ок");
                throw response.message;
            }
            return response;
        });
    };
    RestService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient,
            LoaderService,
            MatSnackBar])
    ], RestService);
    return RestService;
}());
export { RestService };
//# sourceMappingURL=rest.service.js.map