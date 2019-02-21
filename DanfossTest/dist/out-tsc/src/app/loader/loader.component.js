var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ElementRef } from '@angular/core';
import { LoaderService } from './loader.service';
var LoaderComponent = /** @class */ (function () {
    function LoaderComponent(service, myElement) {
        this.service = service;
        this.myElement = myElement;
        this.loading = 0;
        this.loaded = 0;
    }
    LoaderComponent.prototype.ngOnInit = function () {
        var self = this;
        if (this.seperateMode) {
            this.myElement.nativeElement.style.position = "absolute";
        }
        this.subscription = this.service.load.subscribe(function (load) {
            if (load) {
                self.loading++;
            }
            else {
                self.loaded++;
            }
            var overflowProperty = self.loading > self.loaded ? 'auto' : 'hidden';
            document.body.style.overflowX = overflowProperty;
            self.showSpinner = self.loading > self.loaded;
        });
    };
    LoaderComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    LoaderComponent.prototype.showLoader = function () {
        if (this.seperateMode) {
            return true;
        }
        return this.showSpinner;
    };
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], LoaderComponent.prototype, "seperateMode", void 0);
    LoaderComponent = __decorate([
        Component({
            selector: 'app-loader',
            templateUrl: './loader.component.html',
            styleUrls: ['./loader.component.css']
        }),
        __metadata("design:paramtypes", [LoaderService,
            ElementRef])
    ], LoaderComponent);
    return LoaderComponent;
}());
export { LoaderComponent };
//# sourceMappingURL=loader.component.js.map