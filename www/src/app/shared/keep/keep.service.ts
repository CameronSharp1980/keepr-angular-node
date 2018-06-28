import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
//import 'rxjs/add/observable/throw';
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/observable/do';

import { Ikeep } from "./keep";

@Injectable()
export class keepService {

    private _keepUrl = './api/keeps/keepMockData.json';

    constructor(private _http: HttpClient) { }

    getKeeps(): Observable<Ikeep[]> {
        return this._http.get<Ikeep[]>(this._keepUrl)
            //.do(data => console.log(JSON.stringify(data)))
            //.catch(this.errorHandler);
    }

    private errorHandler(err: HttpErrorResponse) {
        console.log(err.message)
        return Observable.throw(err.message);
    }
}