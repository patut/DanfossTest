import { Component, OnInit, OnDestroy, Input, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';

import { LoaderService } from './loader.service';

@Component({
    selector: 'app-loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit, OnDestroy {

    showSpinner: boolean;
    @Input() seperateMode: boolean;

    private subscription: Subscription;
    private loading = 0;
    private loaded = 0;

    constructor(private service: LoaderService,
        private myElement: ElementRef) { }

    ngOnInit() {
        var self = this;

        if (this.seperateMode) {
            this.myElement.nativeElement.style.position = "absolute";
        }

        this.subscription = this.service.load.subscribe((load) => {
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
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    showLoader(): boolean {
        if (this.seperateMode) {
            return true;
        }

        return this.showSpinner;
    }

}
