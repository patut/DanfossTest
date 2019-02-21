import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class LoaderService{
    load: Subject<boolean> = new Subject();
}