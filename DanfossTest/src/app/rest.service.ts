import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatSnackBar } from "@angular/material";
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import { environment } from '../environments/environment';
import { LoaderService } from "./loader/loader.service";
import { GetHousesRequest } from "./model/rest/request/GetHousesRequest";
import { GetHousesResponse } from "./model/rest/response/GetHousesResponse";
import { GetHouseWithMaxWCRequest } from "./model/rest/request/GetHouseWithMaxWCRequest";
import { GetHouseWithMaxWCResponse } from "./model/rest/response/GetHouseWithMaxWCResponse";
import { GetHouseWithMinWCResponse } from "./model/rest/response/GetHouseWithMinWCResponse";
import { GetHouseWithMinWCRequest } from "./model/rest/request/GetHouseWithMinWCRequest";



@Injectable()
export class RestService {

    constructor(public http: HttpClient,
        public loaderService: LoaderService,
        public snackBarService: MatSnackBar) {
        
    }

    getHouses(request: GetHousesRequest): Observable<GetHousesResponse> {
        return this.runPost<GetHousesRequest, GetHousesResponse>(request, "GetHouses");
    }

    getHouseWithMaxWC(request: GetHouseWithMaxWCRequest): Observable<GetHouseWithMaxWCResponse> {
        return this.runPost<GetHouseWithMaxWCRequest, GetHouseWithMaxWCResponse>(request, "GetHouseWithMaxWC");
    }

    getHouseWithMinWC(request: GetHouseWithMinWCRequest): Observable<GetHouseWithMinWCResponse> {
        return this.runPost<GetHouseWithMinWCRequest, GetHouseWithMinWCResponse>(request, "GetHouseWithMinWC");
    }

    runPost<Request, Response>(request: Request, method: string): Observable<Response> {
        const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

        this.loaderService.load.next(true);

        return this.http.post(environment.webApi + method, { request: request }, { responseType: "json", headers: headers, withCredentials: true })
            .map((response: Response) => {
                this.loaderService.load.next(false);
                if (!(response as any).isSuccess) {
                    this.snackBarService.open((response as any).message, "Ок");
                    throw (response as any).message;
                }

                return response;
            });
    }
}