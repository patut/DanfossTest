import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {
    MatFormFieldModule, MatInputModule, MatSelectModule,
    MatNativeDateModule, MatDatepickerModule, MatExpansionModule, MatButtonModule, MatTableModule,
    MatCheckboxModule, MatSnackBarModule, MatProgressSpinnerModule, MatPaginatorModule,
    MatListModule, MatCardModule, MatTooltipModule, MatSortModule
} from '@angular/material';
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

@NgModule({
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
export class AppModule {
}
