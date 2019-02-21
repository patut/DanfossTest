var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule, MatInputModule, MatSelectModule, MatNativeDateModule, MatDatepickerModule, MatExpansionModule, MatButtonModule, MatTableModule, MatCheckboxModule, MatSnackBarModule, MatProgressSpinnerModule, MatPaginatorModule, MatListModule, MatCardModule, MatTooltipModule, MatSortModule } from '@angular/material';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule } from "@angular/forms";
import { CdkTableModule } from "@angular/cdk/table";
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoaderComponent } from './loader/loader.component';
import { LoaderService } from './loader/loader.service';
import { RestService } from './rest.service';
import { HomeComponent } from './home/home.component';
import { HouseComponent } from './home/house/house.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                LoaderComponent,
                HomeComponent,
                HouseComponent
            ],
            imports: [
                BrowserModule,
                MatFormFieldModule,
                MatInputModule,
                BrowserAnimationsModule,
                MatSelectModule,
                MatNativeDateModule,
                MatDatepickerModule,
                MatExpansionModule,
                MatButtonModule,
                MatTableModule,
                MatCheckboxModule,
                ReactiveFormsModule,
                CdkTableModule,
                MatSnackBarModule,
                HttpClientModule,
                MatProgressSpinnerModule,
                MatPaginatorModule,
                MatListModule,
                MatCardModule,
                MatSortModule,
                MatTooltipModule,
                RouterModule.forRoot([{
                        path: '', component: HomeComponent
                    }])
            ],
            providers: [
                LoaderService,
                RestService
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map